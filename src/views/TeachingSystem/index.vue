<template>
  <div class="teaching-system">
    <!-- 教学体系框架图 -->
    <el-card class="framework-card">
      <template #header>
        <div class="card-header">
          <span>金融产教融合教学体系框架</span>
        </div>
      </template>
      <Chart :option="frameworkOption" height="500px" />
    </el-card>

    <!-- 学习路线图 -->
    <el-card class="learning-path-card">
      <template #header>
        <div class="card-header">
          <span>学习路线图</span>
        </div>
      </template>
      <div class="learning-path">
        <el-timeline>
          <el-timeline-item
            v-for="(stage, index) in teachingData.learningPath"
            :key="index"
            :timestamp="stage.duration"
            placement="top"
            :color="getStageColor(index)"
          >
            <el-card>
              <h4>{{ stage.stage }}: {{ stage.title }}</h4>
              <div class="modules">
                <el-tag
                  v-for="(module, idx) in stage.modules"
                  :key="idx"
                  type="info"
                  style="margin-right: 10px; margin-bottom: 10px;"
                >
                  {{ module }}
                </el-tag>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>

    <!-- 角色职责 -->
    <el-row :gutter="20">
      <el-col :xs="24" :md="8">
        <el-card class="role-card">
          <template #header>
            <div class="card-header">
              <el-icon><User /></el-icon>
              <span>教师角色</span>
            </div>
          </template>
          <div class="role-content">
            <h4>{{ teachingData.roles.teachers.name }}</h4>
            <ul>
              <li v-for="(item, index) in teachingData.roles.teachers.responsibilities" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="8">
        <el-card class="role-card">
          <template #header>
            <div class="card-header">
              <el-icon><UserFilled /></el-icon>
              <span>学生角色</span>
            </div>
          </template>
          <div class="role-content">
            <h4>{{ teachingData.roles.students.name }}</h4>
            <ul>
              <li v-for="(item, index) in teachingData.roles.students.responsibilities" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="8">
        <el-card class="role-card">
          <template #header>
            <div class="card-header">
              <el-icon><OfficeBuilding /></el-icon>
              <span>企业角色</span>
            </div>
          </template>
          <div class="role-content">
            <h4>{{ teachingData.roles.enterprises.name }}</h4>
            <ul>
              <li v-for="(item, index) in teachingData.roles.enterprises.responsibilities" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { User, UserFilled, OfficeBuilding } from '@element-plus/icons-vue'
import Chart from '../../components/Charts/Chart.vue'
import teachingSystemData from '../../data/teaching-system.json'

export default {
  name: 'TeachingSystem',
  components: {
    Chart,
    User,
    UserFilled,
    OfficeBuilding
  },
  setup() {
    const teachingData = ref(teachingSystemData)

    // 教学体系框架树图配置
    const frameworkOption = ref({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [convertToTreeData(teachingData.value.framework)],
          top: '10%',
          left: '10%',
          bottom: '10%',
          right: '20%',
          symbolSize: 12,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 14
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
          itemStyle: {
            color: '#409EFF',
            borderColor: '#409EFF'
          },
          lineStyle: {
            color: '#ccc',
            width: 1.5
          }
        }
      ]
    })

    // 转换数据为树形结构
    function convertToTreeData(framework) {
      const nodeMap = {}
      
      // 创建节点映射
      framework.nodes.forEach(node => {
        nodeMap[node.id] = {
          name: node.name,
          children: []
        }
      })

      // 构建树形结构
      const root = nodeMap['root']
      framework.links.forEach(link => {
        const parent = nodeMap[link.source]
        const child = nodeMap[link.target]
        if (parent && child) {
          parent.children.push(child)
        }
      })

      return root
    }

    // 获取阶段颜色
    function getStageColor(index) {
      const colors = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C']
      return colors[index % colors.length]
    }

    return {
      teachingData,
      frameworkOption,
      getStageColor
    }
  }
}
</script>

<style scoped>
.teaching-system {
  width: 100%;
}

.framework-card {
  margin-bottom: 20px;
}

.learning-path-card {
  margin-bottom: 20px;
}

.learning-path {
  padding: 20px;
}

.modules {
  margin-top: 10px;
}

.role-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
}

.role-content h4 {
  margin-bottom: 15px;
  color: #303133;
  font-size: 16px;
}

.role-content ul {
  list-style: none;
  padding: 0;
}

.role-content li {
  padding: 8px 0;
  color: #606266;
  position: relative;
  padding-left: 20px;
}

.role-content li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #409EFF;
  font-weight: bold;
}
</style>

