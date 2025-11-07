<template>
  <div class="dashboard">
    <!-- 统计卡片 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <el-icon class="stat-icon" color="#409EFF"><DataAnalysis /></el-icon>
            <div class="stat-info">
              <div class="stat-value">{{ dashboardData.projectParticipation.totalProjects }}</div>
              <div class="stat-label">总项目数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <el-icon class="stat-icon" color="#67C23A"><Checked /></el-icon>
            <div class="stat-info">
              <div class="stat-value">{{ dashboardData.projectParticipation.activeProjects }}</div>
              <div class="stat-label">进行中项目</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <el-icon class="stat-icon" color="#E6A23C"><User /></el-icon>
            <div class="stat-info">
              <div class="stat-value">{{ dashboardData.projectParticipation.totalParticipants }}</div>
              <div class="stat-label">参与学生数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <el-icon class="stat-icon" color="#F56C6C"><UserFilled /></el-icon>
            <div class="stat-info">
              <div class="stat-value">{{ dashboardData.enterpriseMentors.total }}</div>
              <div class="stat-label">企业导师数</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20" class="charts-row">
      <!-- 项目参与度 -->
      <el-col :xs="24" :md="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>项目参与度统计</span>
            </div>
          </template>
          <Chart :option="projectParticipationOption" height="300px" />
        </el-card>
      </el-col>

      <!-- 教学活动趋势 -->
      <el-col :xs="24" :md="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>教学活动趋势</span>
            </div>
          </template>
          <Chart :option="teachingActivitiesOption" height="300px" />
        </el-card>
      </el-col>
    </el-row>

    <!-- 学生完成情况 -->
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>学生完成情况分析</span>
            </div>
          </template>
          <Chart :option="studentCompletionOption" height="300px" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { DataAnalysis, Checked, User, UserFilled } from '@element-plus/icons-vue'
import Chart from '../../components/Charts/Chart.vue'
import dashboardDataJson from '../../data/dashboard.json'

export default {
  name: 'Dashboard',
  components: {
    Chart,
    DataAnalysis,
    Checked,
    User,
    UserFilled
  },
  setup() {
    const dashboardData = ref(dashboardDataJson)

    // 项目参与度饼图配置
    const projectParticipationOption = ref({
      title: {
        text: '项目状态分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '项目状态',
          type: 'pie',
          radius: '60%',
          data: [
            { value: dashboardData.value.projectParticipation.activeProjects, name: '进行中' },
            { value: dashboardData.value.projectParticipation.completedProjects, name: '已完成' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })

    // 教学活动趋势折线图配置
    const teachingActivitiesOption = ref({
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value',
        name: '活动次数'
      },
      series: [
        {
          name: '教学活动',
          type: 'line',
          data: [15, 18, 20, 22, 20, 25],
          smooth: true,
          itemStyle: {
            color: '#409EFF'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(64, 158, 255, 0.3)' },
                { offset: 1, color: 'rgba(64, 158, 255, 0.05)' }
              ]
            }
          }
        }
      ]
    })

    // 学生完成情况柱状图配置
    const studentCompletionOption = ref({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['已完成', '进行中', '未开始']
      },
      xAxis: {
        type: 'category',
        data: ['风控建模', '数据分析', '产品开发', '金融科技', '投资分析']
      },
      yAxis: {
        type: 'value',
        name: '学生人数'
      },
      series: [
        {
          name: '已完成',
          type: 'bar',
          data: [60, 55, 50, 45, 70],
          itemStyle: { color: '#67C23A' }
        },
        {
          name: '进行中',
          type: 'bar',
          data: [10, 12, 15, 8, 5],
          itemStyle: { color: '#E6A23C' }
        },
        {
          name: '未开始',
          type: 'bar',
          data: [5, 8, 10, 12, 0],
          itemStyle: { color: '#909399' }
        }
      ]
    })

    onMounted(() => {
      console.log('Dashboard mounted')
    })

    return {
      dashboardData,
      projectParticipationOption,
      teachingActivitiesOption,
      studentCompletionOption
    }
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
}

.stats-row {
  margin-bottom: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-icon {
  font-size: 48px;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #303133;
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  color: #909399;
  margin-top: 5px;
}

.charts-row {
  margin-bottom: 20px;
}

.card-header {
  font-weight: 500;
  font-size: 16px;
}
</style>

