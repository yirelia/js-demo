<script setup>
import { onMounted } from 'vue'
import { Graph } from '@antv/x6'




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
          tagName: 'rect',
          attrs: {
            x: -500,
            y: -250,
            width: 1000,
            height: 500,
            stroke: '#000',
            fill: '#fff',
          },
        },
        {
          tagName: 'g',
          attrs: {
            transform: 'translate(-550 0) scale(-1 1) translate(550 0)'
          },
          children: [
            {
              tagName: 'rect',
              attrs: {
                x: -600,
                y: -50,
                width: 100,
                height: 100,
              }
            },
            {
              tagName: 'path',
              attrs: {
                d: 'M -500 -50 L -600 0 L -500 50',
                stroke: 'red',
                fill: 'none'
              }
            },
          ],

        }
      ],
      attrs: {
        transform: `scale(1 -1) rotate(90)`,
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
