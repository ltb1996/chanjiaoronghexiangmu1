<template>
  <div ref="chartRef" :style="{ width: width, height: height }"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  setup(props) {
    const chartRef = ref(null)
    let chartInstance = null

    const initChart = () => {
      if (chartRef.value) {
        chartInstance = echarts.init(chartRef.value)
        chartInstance.setOption(props.option)
      }
    }

    const resizeChart = () => {
      if (chartInstance) {
        chartInstance.resize()
      }
    }

    onMounted(() => {
      initChart()
      window.addEventListener('resize', resizeChart)
    })

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
      }
      window.removeEventListener('resize', resizeChart)
    })

    watch(
      () => props.option,
      () => {
        if (chartInstance) {
          chartInstance.setOption(props.option)
        }
      },
      { deep: true }
    )

    return {
      chartRef
    }
  }
}
</script>

