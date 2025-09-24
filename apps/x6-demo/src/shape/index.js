function cartesianToWeb(point) {
  if (Array.isArray(point)) {
    return point.map((p) => ({
      x: p.x,
      y: -p.y,
    }));
  }
  return {
    x: point.x,
    y: -point.y,
  };
}
class Shape {
  toJson() {}

  cartesianToWeb(point) {
    if (Array.isArray(point)) {
      return point.map((p) => ({
        x: p.x,
        y: -p.y,
      }));
    }
    return {
      x: point.x,
      y: -point.y,
    };
  }

  // {{x1,y1},{x2,y2}} => [ {x1,y1}, {x2,y2} ]
  parseCoordsToObject(str) {
    const num = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/; // 匹配数字
    const pair = new RegExp(
      `\\{\\s*(${num.source})\\s*,\\s*(${num.source})\\s*\\}`,
      "g"
    );

    const points = [];
    let m;
    while ((m = pair.exec(str)) !== null) {
      points.push({ x: Number(m[1]), y: Number(m[2]) });
    }

    return points;
  }
}

class Rect extends Shape {
  constructor(data) {
    super();
    this.data = data;
  }

  toJson() {
    const { extent } = this.data;
    const points = this.parseCoordsToObject(extent);
    const x = Math.min(points[0].x, points[1].x);
    const y = Math.min(points[0].y, points[1].y);
    return {
      tagName: "rect",
      attrs: {
        x: x,
        y: y,
        width: Math.abs(points[1].x - points[0].x),
        height: Math.abs(points[1].y - points[0].y),
        fill: `transparent`,
        strokeWidth: 0.25,
      },
      style: {
        fill: `transparent`,
      },
    };
  }
}

class Line extends Shape {
  constructor(data) {
    super();
    this.data = data;
  }

  toJson() {
    const points = this.parseCoordsToObject(this.data.points);
    const d = this.formatNormalLine(this.cartesianToWeb(points));
    return {
      tagName: "path",
      attrs: {
        d,
        stroke: "black",
        strokeWidth: 0.25,
        fill: "none",
      },
    };
  }

  formatNormalLine(linePoints) {
    const linePointLen = linePoints.length;
    const pointPath = [];
    for (let index = 0; index < linePointLen; index++) {
      const { x, y } = linePoints[index];
      if (index === 0) {
        pointPath.push(`M${x},${y}`);
      } else {
        pointPath.push(`L${x},${y}`);
      }
    }
    return pointPath.join(" ");
  }
}

class Polygon extends Shape {
  constructor(data) {
    super();
    this.data = data;
  }

  toJson() {
    const points = this.parseCoordsToObject(this.data.points);
    const d = this.formatPolylineNomalPath(this.cartesianToWeb(points));
    return {
      tagName: "polygon",
      attrs: {
        points: d,
        strokeWidth: 0.25,
      },
    };
  }

  formatPolylineNomalPath(polyPoints) {
    const pointLen = polyPoints.length;
    let dPath = "";
    for (let index = 0; index < pointLen; index++) {
      const { x, y } = polyPoints[index];
      dPath += `${x},${y} `;
    }
    return dPath;
  }
}

class Text extends Shape {
  constructor(data) {
    super();
    this.data = data;
  }

  toJson() {
    const { extent, text } = this.data;
    const pos = this.cartesianToWeb(this.parseCoordsToObject(extent))[0];
    return {
      tagName: "text",
      attrs: {
        x: pos.x,
        y: pos.y,
        fill: "black",
        "font-size": 14,
        "text-anchor": "middle",
        "dominant-baseline": "middle",
      },
      textContent: text,
    };
  }
}

class Ellipse extends Shape {
  width = 0;
  height = 0;
  center = {
    x: 0,
    y: 0,
  };
  constructor(data) {
    super();
    this.data = data;
    const points = this.parseCoordsToObject(this.data.extent);
    const webPoints = this.cartesianToWeb(points);
    this.center = {
      x: (webPoints[0].x + webPoints[1].x) / 2,
      y: (webPoints[0].y + webPoints[1].y) / 2,
    };
    this.width = Math.abs(webPoints[1].x - webPoints[0].x);
    this.height = Math.abs(webPoints[1].y - webPoints[0].y);
  }

  toJson() {
    return {
      tagName: "ellipse",
      attrs: {
        cx: this.center.x,
        cy: this.center.y,
        rx: this.width / 2,
        ry: this.height / 2,
        strokeWidth: 0.25,
      },
    };
  }
}

export { Rect, Line, Polygon, Text, Ellipse };

export class Element {
  angle = 0;
  tx = 0;
  ty = 0;

  // 元素的原点
  origin = { x: 0, y: 0 };

  // 图形的实际大小 [ [], []]
  extent = [];

  // 坐标系的大小 [[], []]
  corExtent = [];
  parentElement = null;
  rotation = 0;

  constructor(data, parent) {
    this.parentElement = parent;
    this.data = data;
    this.extent = cartesianToWeb(this.parseCoordsToObject(data.extent));
    this.origin = cartesianToWeb(
      this.parseCoordsToObject(data.origin || `{0, 0}`)
    )[0];
    this.corExtent = cartesianToWeb(
      this.parseCoordsToObject(data.coordinateSystem.extent)
    );
    this.rotation = -Number(data.rotation) || 0;
  }

  get center() {
    const [lt, rb] = this.extent;
    return {
      x: (lt.x + rb.x) / 2,
      y: (lt.y + rb.y) / 2,
    };
  }

  get width() {
    const [lt, rb] = this.extent;
    return Math.abs(rb.x - lt.x);
  }

  get height() {
    const [lt, rb] = this.extent;
    return Math.abs(rb.y - lt.y);
  }

  get scaleX() {
    const [lt, rb] = this.extent;
    const [clt, crb] = this.corExtent;

    return Math.abs(rb.x - lt.x) / Math.abs(crb.x - clt.x);
  }

  get scaleY() {
    const [lt, rb] = this.extent;
    const [clt, crb] = this.corExtent;
    return Math.abs(rb.y - lt.y) / Math.abs(crb.y - clt.y);
  }

  get sx() {
    if (this.extent[1].x < this.extent[0].x) {
      return -this.scaleX;
    }
    return this.scaleX;
  }

  get sy() {
    if (this.extent[1].y > this.extent[0].y) {
      return -this.scaleY;
    }
    return this.scaleY;
  }

  get rotation() {
    return Number(this.data.rotation) || 0;
  }

  get position() {
    return {
      x: this.origin.x + this.center.x,
      y: this.origin.y + this.center.y,
    };
  }

  parseCoordsToObject(str) {
    const num = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/; // 匹配数字
    const pair = new RegExp(
      `\\{\\s*(${num.source})\\s*,\\s*(${num.source})\\s*\\}`,
      "g"
    );

    const points = [];
    let m;
    while ((m = pair.exec(str)) !== null) {
      points.push({ x: Number(m[1]), y: Number(m[2]) });
    }

    return points;
  }

  parseSubshapes(shapes) {
    return shapes.map((shape) => {
      switch (shape.name) {
        case "Line":
          return new Line(shape).toJson();
        case "Polygon":
          return new Polygon(shape).toJson();
        case "Rectangle":
          return new Rect(shape).toJson();
        case "Text":
          return new Text(shape).toJson();
        case "Ellipse":
          return new Ellipse(shape).toJson();
        default:
          throw new Error(`不支持的图形类型 ${shape.name}`);
      }
    });
  }

  toNode() {
    // 图形本身的节点
    const bodyBode = this.getBodyNode();
    const originNode = this.genOriginNode();
    const connectorNode = this.genConnector();
    return {
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      markup: {
        tagName: "g",
        attrs: {
          transform: `scale(${this.sx} ${this.sy}) rotate(${this.rotation})`,
        },
        children: [bodyBode, ...connectorNode, originNode],
      },
    };
  }

  // 原点标记
  genOriginNode() {
    return {
      tagName: `g`,
      attrs: {
        transform: `scale(${this.scaleX} ${this.scaleY})`,
      },
      children: [
        {
          tagName: "path",
          attrs: {
            d: "M -20 0 L 20 0",
            stroke: "red",
            fill: "none",
            "stroke-width": 2,
          },
        },
        {
          tagName: "path",
          attrs: {
            d: "M 0 -20 L 0 20",
            stroke: "red",
            fill: "none",
            "stroke-width": 2,
          },
        },
      ],
    };
  }

  getBodyNode() {
    const children = this.parseSubshapes(this.data.subShapes || []);
    return {
      tagName: "g",
      attrs: {
        // transform: ``,
      },
      children,
    };
  }

  genConnectorNode() {
    const children = this.parseSubshapes(this.data.subShapes || []);
    console.log(`connector postion`, this.position);

    let sx = this.scaleX;
    let sy = this.scaleY;
    if (this.extent[1].x < this.extent[0].x) {
      sx = -sx;
    }
    if (this.extent[1].y < this.extent[0].y) {
      sy = -sy;
    }

    const det2 = (a, b, c, d) => {
      return a * d - b * c;
    };

    const a = det2(sx, 0, 0, sy);
    const rotation = a > 0 ? this.rotation : -this.rotation;
    return {
      tagName: "g",
      attrs: {
        transform: `translate(${this.position.x} ${this.position.y}) scale(${sx} ${sy}) rotate(${rotation}) `,
      },
      children,
    };
  }

  genConnector() {
    // const
    const connectors = (this.data.connectors || []).map((item) => {
      return new Element(item, this).genConnectorNode();
    });
    return connectors;
  }
}
