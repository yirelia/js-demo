export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  static create (x, y) {
    if(x instanceof Point) {
        return new Point(x.x, x.y)
    }
    return new Point(x, y)
  }
}

export class Rectangle extends Point {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  get center() {
    return new Point(this.x + this.width / 2, this.y + this.height / 2);
  }

  static clone(rect) {
    return new Rectangle(rect.x, rect.y, rect.width, rect.height);
  }

   containsPoint(
    rect,
    point,
  ) {
    return (
      point != null &&
      rect != null &&
      point.x >= rect.x &&
      point.x <= rect.x + rect.width &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height
    )
  }
  
  clone(rect) {
    return new Rectangle(rect.x, rect.y, rect.width, rect.height);
  }

  get origin() {
    return new Point(this.x, this.y);
  }

  get corner() {
    return new Point(this.x + this.width, this.y + this.height);
  }

  static create(x, y, width, height) {
    if (x == null || typeof x === "number") {
      return new Rectangle(x, y, width, height);
    }
    return Rectangle.clone(x);
  }

  inflate(dx, dy) {
    const w = dx;
    const h = dy != null ? dy : dx;
    this.x -= w;
    this.y -= h;
    this.width += 2 * w;
    this.height += 2 * h;

    return this;
  }

  isIntersectWithRect(x, y, width, height) {
    const ref = Rectangle.create(x, y, width, height);
    const myOrigin = this.origin;
    const myCorner = this.corner;
    const rOrigin = ref.origin;
    const rCorner = ref.corner;

    if (
      rCorner.x <= myOrigin.x ||
      rCorner.y <= myOrigin.y ||
      rOrigin.x >= myCorner.x ||
      rOrigin.y >= myCorner.y
    ) {
      return false;
    }
    return true;
  }

  moveAndExpand(rect) {
    const ref = Rectangle.clone(rect);
    this.x += ref.x || 0;
    this.y += ref.y || 0;
    this.width += ref.width || 0;
    this.height += ref.height || 0;
    return this;
  }
}

function getBearing(from, to) {
  if (from.x === to.x) {
    return from.y > to.y ? "N" : "S";
  }

  if (from.y === to.y) {
    return from.x > to.x ? "W" : "E";
  }

  return null;
}

function freeJoin(p1, p2, bbox) {
  let p = new Point(p1.x, p2.y);
  if (bbox.containsPoint(p)) {
    p = new Point(p2.x, p1.y);
  }
  return p;
}

// 计算点到路径点的位置&&方向
export function nodeToVertex(from, to, fromBBox) {
    const p = freeJoin(from, to, fromBBox)

    return { points: [p], direction: getBearing(p, to) }
  }


// 处理 node 到 node 的路径
function nodeToNode(from, to, fromBBox, toBBox) {
  let route = nodeToVertex(to, from);
  const p1 = route.points[0];
  if(fromBBox.containsPoint(p1)) {
    route = nodeToVertex(from, to, toBBox);
    const p2 = route.points[0];
    if(toBBox.containsPoint(p2)) {
        const fromBorder = Point.create(from).move(p2)
    }
  }
  return route;
}

function getBBox(box, options = {}) {
  const paddingBox = getPaddingBox(options);
  return box.clone().moveAndExpand(paddingBox);
}

function getPointBBox(p) {
  return new Rectangle(p.x, p.y, 0, 0);
}
/**
 * @description:
 * @param {*} options
 * @param {*} options.padding 上下左右扩充的距离
 * @return {*}
 */

function getPaddingBox(options = {}) {
  const sides = normalizeSides(options.padding || 10);
  return {
    x: -sides.left,
    y: -sides.top,
    width: sides.left + sides.right,
    height: sides.top + sides.bottom,
  };
}

function normalizeSides(box) {
  let val = 0;
  if (box != null && Number.isFinite(box)) {
    val = box;
  }

  return { top: val, right: val, bottom: val, left: val };
}

const orth = (sourceBox, targetBox, options = {}, vertices = []) => {
  const sourceBBox = getBBox(sourceBox, options);
  const targetBBox = getBBox(targetBox, options);
  const sourceCenter = sourceBBox.center;
  const targetCenter = targetBBox.center;
  // 获取拐点列表
  const points = vertices.map((v) => new Point(v.x, v.y));
  points.unshift(sourceCenter);
  points.push(targetCenter);
  let bearing = null;
  const result = [];

  // 此处处理点位时 最后一个点位不需要遍历掉
  for (let i = 0, len = points.length - 1; i < len; i++) {
    let route = null;
    const from = points[i];
    const to = points[i + 1];
    const isOrthogonal = getBearing(from, to) != null;

    if (i === 0) {
      // 处理第一个点位
      if (i + 1 === len) {
        if (sourceBBox.intersectsWithRect(targetBBox.clone().inflate(1))) {
          route = insideNode(from, to, sourceBBox, targetBBox);
        } else if (!isOrthogonal) {
          route = nodeToNode(from, to, sourceBBox, targetBBox);
        }
      }
    } else if (i + 1 === len) {
    } else if (!isOrthogonal) {
    }

    //
    if (route) {
      result.push(...route.points);
      bearing = route.direction;
    } else {
      bearing = getBearing(from, to);
    }
  }

  return result;
};
export default orth;
