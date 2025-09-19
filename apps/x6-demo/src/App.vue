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
          children: [
            {
              tagName: 'rect',
              attrs: {
                x: -600,
                y:               
              }
            }
          ],
          attrs: {

          }
        }
      ],
      attrs: {
        transform: `rotate(90)`
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
