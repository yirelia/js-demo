<script setup>
import { onMounted } from 'vue'
import { Graph } from '@antv/x6'

const shapeData = {
  "classname": "Modelica.Blocks.Math.InverseBlockConstraints",
  "comment": "Construct inverse model by requiring that two inputs and two outputs are identical",
  "connectors": [
    {
      "classname": "Modelica.Blocks.Interfaces.RealInput",
      "comment": "Input signal 1 (u1 = u2)",
      "condition": "",
      "coordinateSystem": {
        "extent": "{{-100.0,-100.0},{100.0,100.0}}",
        "initialScale": "0.2",
        "preserveAspectRatio": "true"
      },
      "direction": "input",
      "extendNameBase": "",
      "extent": "{{-240,-20},{-200,20}}",
      "iconTransformation": "true",
      "modelName": "Modelica.Blocks.Math.InverseBlockConstraints",
      "name": "u1",
      "outputType": "",
      "parentName": "inverseBlockConstraints",
      "protected": false,
      "restriction": "connector",
      "subShapes": [
        {
          "fillColor": "{0,0,127}",
          "fillPattern": "FillPattern.Solid",
          "id": "4a484aa1-8e9c-433d-bc2c-7cb796e42372",
          "lineColor": "{0,0,127}",
          "name": "Polygon",
          "points": "{{-100.0,100.0},{100.0,0.0},{-100.0,-100.0}}"
        }
      ],
      "type": {
        "classname": "Modelica.Blocks.Interfaces.RealInput",
        "name": "u1",
        "restriction": "connector",
        "direction": "input",
        "elements": [],
        "extends": [],
        "type": "Real"
      },
      "typeDimension": ""
    },
    {
      "classname": "Modelica.Blocks.Interfaces.RealInput",
      "comment": "Input signal 2 (u1 = u2)",
      "condition": "",
      "coordinateSystem": {
        "extent": "{{-100.0,-100.0},{100.0,100.0}}",
        "initialScale": "0.2",
        "preserveAspectRatio": "true"
      },
      "direction": "input",
      "extendNameBase": "",
      "extent": "{{-140,-20},{-180,20}}",
      "iconTransformation": "true",
      "modelName": "Modelica.Blocks.Math.InverseBlockConstraints",
      "name": "u2",
      "outputType": "",
      "parentName": "inverseBlockConstraints",
      "protected": false,
      "restriction": "connector",
      "subShapes": [
        {
          "fillColor": "{0,0,127}",
          "fillPattern": "FillPattern.Solid",
          "id": "f00be1f7-9447-44a1-a7fd-f5d5437921fd",
          "lineColor": "{0,0,127}",
          "name": "Polygon",
          "points": "{{-100.0,100.0},{100.0,0.0},{-100.0,-100.0}}"
        }
      ],
      "type": {
        "classname": "Modelica.Blocks.Interfaces.RealInput",
        "name": "u2",
        "restriction": "connector",
        "direction": "input",
        "elements": [],
        "extends": [],
        "type": "Real"
      },
      "typeDimension": ""
    },
    {
      "classname": "Modelica.Blocks.Interfaces.RealOutput",
      "comment": "Output signal 1 (y1 = y2)",
      "condition": "",
      "coordinateSystem": {
        "extent": "{{-100.0,-100.0},{100.0,100.0}}",
        "preserveAspectRatio": "true"
      },
      "direction": "output",
      "extendNameBase": "",
      "extent": "{{200,-10},{220,10}}",
      "iconTransformation": "true",
      "modelName": "Modelica.Blocks.Math.InverseBlockConstraints",
      "name": "y1",
      "outputType": "",
      "parentName": "inverseBlockConstraints",
      "protected": false,
      "restriction": "connector",
      "subShapes": [
        {
          "fillColor": "{255,255,255}",
          "fillPattern": "FillPattern.Solid",
          "id": "b0d9bbc4-0f69-462c-bd88-7e56d4dfc145",
          "lineColor": "{0,0,127}",
          "name": "Polygon",
          "points": "{{-100.0,100.0},{100.0,0.0},{-100.0,-100.0}}"
        }
      ],
      "type": {
        "classname": "Modelica.Blocks.Interfaces.RealOutput",
        "name": "y1",
        "restriction": "connector",
        "direction": "output",
        "elements": [],
        "extends": [],
        "type": "Real"
      },
      "typeDimension": ""
    },
    {
      "classname": "Modelica.Blocks.Interfaces.RealOutput",
      "comment": "Output signal 2 (y1 = y2)",
      "condition": "",
      "coordinateSystem": {
        "extent": "{{-100.0,-100.0},{100.0,100.0}}",
        "preserveAspectRatio": "true"
      },
      "direction": "output",
      "extendNameBase": "",
      "extent": "{{180,-10},{160,10}}",
      "iconTransformation": "true",
      "modelName": "Modelica.Blocks.Math.InverseBlockConstraints",
      "name": "y2",
      "outputType": "",
      "parentName": "inverseBlockConstraints",
      "protected": false,
      "restriction": "connector",
      "subShapes": [
        {
          "fillColor": "{255,255,255}",
          "fillPattern": "FillPattern.Solid",
          "id": "6bed5b9b-59f6-48ea-b344-9ce687048549",
          "lineColor": "{0,0,127}",
          "name": "Polygon",
          "points": "{{-100.0,100.0},{100.0,0.0},{-100.0,-100.0}}"
        }
      ],
      "type": {
        "classname": "Modelica.Blocks.Interfaces.RealOutput",
        "name": "y2",
        "restriction": "connector",
        "direction": "output",
        "elements": [],
        "extends": [],
        "type": "Real"
      },
      "typeDimension": ""
    }
  ],
  "coordinateSystem": {
    "extent": "{{-200,-120},{200,\n120}}",
    "preserveAspectRatio": "false"
  },
  "direction": "",
  "extent": "{{-10,20},{30,40}}",
  "modelName": "",
  "name": "inverseBlockConstraints",
  "origin": "{-15.7,-0.7}",
  "outputType": "",
  "parentName": "",
  "restriction": "block",
  "subShapes": [
    {
      "color": "{0,0,127}",
      "id": "129112ac-c4b7-45d6-b857-84f75a51f0b8",
      "name": "Line",
      "points": "{{180,0},{200,0}}"
    },
    {
      "color": "{0,0,127}",
      "id": "de75a816-f525-49f2-9279-5d5edf4d3707",
      "name": "Line",
      "points": "{{-200,0},{-180,0}}"
    },
    {
      "extent": "{{-190,120},{190,-120}}",
      "id": "0ea10abc-1f99-464e-a1fc-3931ed9e1327",
      "lineColor": "{135,135,135}",
      "name": "Rectangle"
    }
  ],
  "transformation": "true",
  "type": "",
  "typeDimension": "",
  "visibleList": null
}


class Element {
  sx = 1;
  sy = 1;
  angle = 0;
  tx = 0;
  ty = 0;

  // 元素的原点
  origin = { x: 0, y: 0 }

  // 图形的实际大小 [ [], []]
  extent = []

  // 坐标系的大小 [[], []]
  corExtent = []


  constructor(data) {
    this.data = data
    this.extent = this.parseCoordsToObject(data.extent)
    this.origin = this.parseCoordsToObject(data.origin)[0]
    this.corExtent = this.parseCoordsToObject(data.coordinateSystem.extent)

  }



  parseCoordsToObject(str) {
    const num = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/; // 匹配数字
    const pair = new RegExp(`\\{\\s*(${num.source})\\s*,\\s*(${num.source})\\s*\\}`, 'g');

    const points = [];
    let m;
    while ((m = pair.exec(str)) !== null) {
      points.push({ x: Number(m[1]), y: Number(m[2]) });
    }

    return points;
  }

  parseSubshapes(shapes) {
    return shapes.map(shape => {
      switch (shape.name) {
        case 'Line':
          return this.parseLine(shape)
        case 'Polygon':
          return this.parsePolygon(shape)
        case 'Rectangle':
          return this.parseRectangle(shape)
        case 'Path':
          return this.parsePath(shape)
        default:
          break;
      }
    })
  }

  parseLine(line) { }

  parsePolygon(polygon) { }

  parseRectangle(rectangle) {
    const { extent } = rectangle
    const { points } = this.parseCoordsToObject(extent)
    if (points.length === 2) {
      this.lt = points[0]
      this.rb = points[1]
    }
  }

  parsePath() { }



  toNode() { }
}



onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container'),
    grid: true,
    panning: true,
    mousewheel: true,
  })


  graph.addNode({
    x: 0,
    y: 0,
    markup: {
      tagName: 'g',
      children: [
        {
          // 主体形状
          tagName: `g`,
          children: [
            {
              "tagName": "path",
              "selector": "129112ac-c4b7-45d6-b857-84f75a51f0b8",
              "visible": true,
              "attrs": {
                "d": "M90,0 L100,0",
                "fill": "none",
                "stroke": "#00007f",
                "strokeWidth": 0.94,
                "strokeDasharray": "0",
                "transform": "rotate(0, 0, 0) translate(0,0) scale(1,1) translate(0,0) rotate(0, 0, 0)",
                "markerEnd": "url(#none)",
                "markerStart": "url(#none)",
                "magnet": false
              }
            },
            {
              "tagName": "path",
              "selector": "de75a816-f525-49f2-9279-5d5edf4d3707",
              "visible": true,
              "attrs": {
                "d": "M-100,0 L-90,0",
                "fill": "none",
                "stroke": "#00007f",
                "strokeWidth": 0.94,
                "strokeDasharray": "0",
                "transform": "rotate(0, 0, 0) translate(0,0) scale(1,1) translate(0,0) rotate(0, 0, 0)",
                "markerEnd": "url(#none)",
                "markerStart": "url(#none)",
                "magnet": false
              },
            },
            {
              "tagName": "path",
              "selector": "0ea10abc-1f99-464e-a1fc-3931ed9e1327",
              "visible": true,
              "attrs": {
                "d": "M-95,-50.00000000000001 L95,-50.00000000000001 L95,50.00000000000001 L-95,50.00000000000001Z",
                "fill": "transparent",
                "stroke": "#878787",
                "strokeWidth": 0.94,
                "strokeDasharray": "0",
                "transform": "rotate(0, 0, 0) translate(0,0) scale(1,1) translate(0,0) rotate(0, 0, 0)",
                "opacity": 1,
                "magnet": false
              }
            }
          ],
        },
        {
          tagName: 'g', // input-output
          attrs: {
            transform: `translate(-138, 146)`,
          },
          children: [
            {
              "tagName": "polygon",
              "selector": "4a484aa1-8e9c-433d-bc2c-7cb796e42372",
              "visible": true,
              "attrs": {
                "points": "-10,-8.333333333333334 10,0 -10,8.333333333333334 ",
                "fill": "#00007f",
                "stroke": "#00007f",
                "strokeWidth": 0.94,
                "transform": "rotate(0, 0, 0) scale(1,1)",
                "magnet": true
              }
            }
          ],

        },
        {
          tagName: 'g', // inverseBlockConstraints.u2
          attrs: {
            transform: `translate(-138, 146)`,
          },
          children: [
            {
              "tagName": "polygon",
              "selector": "f00be1f7-9447-44a1-a7fd-f5d5437921fd",
              "visible": true,
              "attrs": {
                "points": "-10,-8.333333333333334 10,0 -10,8.333333333333334",
                "fill": "#00007f",
                "stroke": "#00007f",
                "strokeWidth": 0.94,
                // "transform": "rotate(0, 0, 0) scale(-1,1)",
                "magnet": true
              }
            }
          ],

        }
      ],
      attrs: {
        // transform: `scale(1 -1) rotate(90)`,
      }
    }
  })

  graph.addNode({
    markup: [
      {
        tagName: 'path',
        attrs: {
          d: 'M -20 0 L 20 0',
          stroke: 'red',
          fill: 'none',
          'stroke-width': 2,
        },
      },
      {
        tagName: 'path',
        attrs: {
          d: 'M 0 -20 L 0 20',
          stroke: 'red',
          fill: 'none',
          'stroke-width': 2,
        },
      },
    ]
  })
  graph.centerContent()
})

</script>

<template>
  <div id="container"></div>
</template>

<style scoped></style>
