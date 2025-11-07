<template>
  <div class="ecosystem-map">
    <!-- 图例说明 -->
    <el-card class="legend-card">
      <div class="legend-content">
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #5470c6;"></span>
          <span>学校</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #91cc75;"></span>
          <span>企业</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #fac858;"></span>
          <span>教师</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #ee6666;"></span>
          <span>学生</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #73c0de;"></span>
          <span>项目</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot" style="background-color: #3ba272;"></span>
          <span>资源</span>
        </div>
      </div>
    </el-card>

    <!-- 力导图 -->
    <el-card class="graph-card">
      <template #header>
        <div class="card-header">
          <span>产教融合生态关系图谱</span>
          <el-button size="small" @click="resetGraph">重置视图</el-button>
        </div>
      </template>
      <Chart :option="graphOption" height="600px" />
    </el-card>

    <!-- 统计信息 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="合作企业" :value="statistics.enterprises" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="参与教师" :value="statistics.teachers" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="学生团队" :value="statistics.studentGroups" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="实践项目" :value="statistics.projects" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Chart from '../../components/Charts/Chart.vue'
import ecosystemData from '../../data/ecosystem.json'

export default {
  name: 'EcosystemMap',
  components: {
    Chart
  },
  setup() {
    const data = ref(ecosystemData)

    // 统计信息
    const statistics = computed(() => {
      const nodes = data.value.nodes
      return {
        enterprises: nodes.filter(n => n.category === 'enterprise').length,
        teachers: nodes.filter(n => n.category === 'teacher').length,
        studentGroups: nodes.filter(n => n.category === 'student').length,
        projects: nodes.filter(n => n.category === 'project').length
      }
    })

    // 力导图配置
    const graphOption = ref({
      title: {
        text: '产教融合生态网络',
        left: 'center',
        top: 20
      },
      tooltip: {
        formatter: function(params) {
          if (params.dataType === 'edge') {
            return `${params.data.source} → ${params.data.target}<br/>关系: ${params.data.relation}`
          }
          return `${params.data.name}<br/>类型: ${getCategoryName(params.data.category)}`
        }
      },
      legend: [{
        data: ['学校', '企业', '教师', '学生', '项目', '资源'],
        orient: 'vertical',
        left: 10,
        top: 60
      }],
      series: [{
        type: 'graph',
        layout: 'force',
        data: data.value.nodes.map(node => ({
          ...node,
          symbolSize: node.value / 2,
          category: getCategoryIndex(node.category),
          label: {
            show: true
          }
        })),
        links: data.value.links.map(link => ({
          source: link.source,
          target: link.target,
          relation: link.relation
        })),
        categories: [
          { name: '学校' },
          { name: '企业' },
          { name: '教师' },
          { name: '学生' },
          { name: '项目' },
          { name: '资源' }
        ],
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 3
          }
        },
        force: {
          repulsion: 500,
          edgeLength: [100, 200],
          gravity: 0.1
        }
      }]
    })

    // 获取分类索引
    function getCategoryIndex(category) {
      const map = {
        'institution': 0,
        'enterprise': 1,
        'teacher': 2,
        'student': 3,
        'project': 4,
        'resource': 5
      }
      return map[category] || 0
    }

    // 获取分类名称
    function getCategoryName(category) {
      const map = {
        'institution': '学校',
        'enterprise': '企业',
        'teacher': '教师',
        'student': '学生',
        'project': '项目',
        'resource': '资源'
      }
      return map[category] || category
    }

    // 重置图表视图
    function resetGraph() {
      // 通过重新设置option来重置
      graphOption.value = { ...graphOption.value }
    }

    return {
      data,
      statistics,
      graphOption,
      resetGraph
    }
  }
}
</script>

<style scoped>
.ecosystem-map {
  width: 100%;
}

.legend-card {
  margin-bottom: 20px;
}

.legend-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.graph-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
}

.stat-card {
  margin-bottom: 20px;
}

.stat-card :deep(.el-statistic__head) {
  font-size: 14px;
  color: #909399;
}

.stat-card :deep(.el-statistic__content) {
  font-size: 28px;
  color: #409EFF;
}
</style>

