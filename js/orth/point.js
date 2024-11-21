function getBearing(from, to) {
    if (from.x === to.x) {
        return from.y > to.y ? 'N' : 'S'
      }
  
      if (from.y === to.y) {
        return from.x > to.x ? 'W' : 'E'
      }
  
      return null
}

function freeJoin(p1, p2) {
    let p = {x: p1.x, y: p2.y}
    return p
}

// 计算点到路径点的位置&&方向
function pointToVertex(from, to) {
    const p = freeJoin(from, to)

    return { points: [p], direction: getBearing(p, to) }
  }


// 计算点到点的路径
function pointToPoint(
    from,
    to
  ) {
    let route = pointToVertex(to, from)
    return route
  }


const orth = { getBearing ,pointToPoint}
export default orth