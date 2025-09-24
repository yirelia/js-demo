<script setup>
import { onMounted } from 'vue'
import { Graph, } from '@antv/x6'
import { Element } from './shape'
import Pid from './shape/pid.json'
import Test from './shape/test.json'
import SwitchWQ from './shape/switch.json'
const shapeData = Pid

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container'),
    grid: true,
    panning: true,
    mousewheel: true,
  })


  function renderNodes() {
    const nodes = SwitchWQ.map((node) => {
      const el = new Element(node)
      const n = el.toNode()
      return n
    })
    graph.addNodes(nodes)
  }


  function renderNode() {
    const el = new Element(Test)
    const node = el.toNode()
    graph.addNode(node)
  }

  // renderNode()
  // const el = new Element(shapeData)
  // const node = el.toNode()
  renderNodes()
  // graph.addNode(node)
  // 中心标识点
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
