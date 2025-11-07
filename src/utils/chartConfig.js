/**
 * ECharts 图表通用配置
 */

// 主题色配置
export const themeColors = {
  primary: '#409EFF',
  success: '#67C23A',
  warning: '#E6A23C',
  danger: '#F56C6C',
  info: '#909399'
}

// 通用图表配置
export const commonChartOption = {
  // 工具提示
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  // 图例
  legend: {
    data: []
  },
  // 网格
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  // X轴
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  // Y轴
  yAxis: {
    type: 'value'
  },
  // 系列
  series: []
}

// 响应式配置
export const responsiveOption = {
  baseOption: {},
  media: [
    {
      query: { maxWidth: 768 },
      option: {
        grid: {
          left: '5%',
          right: '5%'
        }
      }
    }
  ]
}

