<template>
  <div class="teaching-process">
    <!-- 进度总览 -->
    <el-card class="progress-overview">
      <template #header>
        <div class="card-header">
          <span>学习进度总览</span>
          <el-button size="small" type="danger" @click="resetProgress">重置进度</el-button>
        </div>
      </template>
      <div class="progress-stats">
        <el-progress
          :percentage="overallProgress"
          :color="progressColor"
          :stroke-width="20"
        >
          <span class="progress-text">{{ overallProgress }}%</span>
        </el-progress>
        <div class="stats-info">
          <div class="stat-item">
            <span class="label">已完成步骤：</span>
            <span class="value">{{ completedSteps }} / {{ totalSteps }}</span>
          </div>
          <div class="stat-item">
            <span class="label">学习时长：</span>
            <span class="value">{{ totalTime }}小时</span>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 教学步骤 -->
    <el-card class="steps-card">
      <template #header>
        <div class="card-header">
          <span>实训教学步骤</span>
        </div>
      </template>
      <el-steps
        :active="currentStep"
        direction="vertical"
        class="teaching-steps"
      >
        <el-step
          v-for="(step, index) in teachingSteps"
          :key="index"
          :title="step.title"
          :description="step.description"
        >
          <template #icon>
            <el-icon v-if="index < currentStep" color="#67C23A">
              <CircleCheck />
            </el-icon>
            <el-icon v-else-if="index === currentStep" color="#409EFF">
              <VideoPlay />
            </el-icon>
            <el-icon v-else color="#909399">
              <Clock />
            </el-icon>
          </template>
          <template #default>
            <el-card class="step-content" shadow="hover">
              <div class="step-info">
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
                <div class="step-details">
                  <el-tag size="small" type="info">{{ step.duration }}</el-tag>
                  <el-tag size="small" type="warning">{{ step.difficulty }}</el-tag>
                </div>
                <div class="step-tasks">
                  <h5>任务清单：</h5>
                  <ul>
                    <li v-for="(task, idx) in step.tasks" :key="idx">
                      <el-checkbox
                        v-model="step.taskStatus[idx]"
                        @change="updateStepProgress(index)"
                      >
                        {{ task }}
                      </el-checkbox>
                    </li>
                  </ul>
                </div>
                <div class="step-actions">
                  <el-button
                    v-if="index === currentStep"
                    type="primary"
                    size="small"
                    :disabled="!isStepCompleted(index)"
                    @click="completeStep(index)"
                  >
                    完成本步骤
                  </el-button>
                  <el-button
                    v-if="index < currentStep"
                    type="success"
                    size="small"
                    disabled
                  >
                    已完成
                  </el-button>
                  <el-button
                    v-if="index > currentStep"
                    size="small"
                    disabled
                  >
                    未开始
                  </el-button>
                </div>
              </div>
            </el-card>
          </template>
        </el-step>
      </el-steps>
    </el-card>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { CircleCheck, VideoPlay, Clock } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { progressStorage } from '../../utils/storage'

export default {
  name: 'TeachingProcess',
  components: {
    CircleCheck,
    VideoPlay,
    Clock
  },
  setup() {
    const currentStep = ref(0)
    const totalTime = ref(0)

    // 教学步骤数据
    const teachingSteps = ref([
      {
        title: '第一步：理论基础学习',
        description: '学习金融基础理论知识，掌握核心概念',
        duration: '2周',
        difficulty: '初级',
        tasks: [
          '完成金融基础课程学习',
          '阅读相关教材和资料',
          '完成课后习题',
          '参加在线测试'
        ],
        taskStatus: [false, false, false, false]
      },
      {
        title: '第二步：工具与技能培训',
        description: '掌握数据分析工具和编程技能',
        duration: '3周',
        difficulty: '中级',
        tasks: [
          '学习Python编程基础',
          '掌握数据分析库（Pandas、NumPy）',
          '学习数据可视化工具',
          '完成实践练习'
        ],
        taskStatus: [false, false, false, false]
      },
      {
        title: '第三步：案例分析实践',
        description: '通过真实案例进行分析和实践',
        duration: '4周',
        difficulty: '中级',
        tasks: [
          '分析银行风控案例',
          '完成数据清洗和处理',
          '构建分析模型',
          '撰写分析报告'
        ],
        taskStatus: [false, false, false, false]
      },
      {
        title: '第四步：项目实战',
        description: '参与真实项目，解决实际问题',
        duration: '6周',
        difficulty: '高级',
        tasks: [
          '组建项目团队',
          '确定项目方案',
          '实施项目开发',
          '项目测试与优化',
          '项目成果展示'
        ],
        taskStatus: [false, false, false, false, false]
      },
      {
        title: '第五步：成果总结与评估',
        description: '总结学习成果，进行综合评估',
        duration: '1周',
        difficulty: '中级',
        tasks: [
          '撰写项目总结报告',
          '准备成果展示材料',
          '参加答辩评审',
          '完成自我评估'
        ],
        taskStatus: [false, false, false, false]
      }
    ])

    // 总步骤数
    const totalSteps = computed(() => teachingSteps.value.length)

    // 已完成步骤数
    const completedSteps = computed(() => currentStep.value)

    // 总体进度
    const overallProgress = computed(() => {
      return Math.round((completedSteps.value / totalSteps.value) * 100)
    })

    // 进度条颜色
    const progressColor = computed(() => {
      const progress = overallProgress.value
      if (progress < 30) return '#F56C6C'
      if (progress < 70) return '#E6A23C'
      return '#67C23A'
    })

    // 检查步骤是否完成
    function isStepCompleted(index) {
      const step = teachingSteps.value[index]
      return step.taskStatus.every(status => status === true)
    }

    // 更新步骤进度
    function updateStepProgress(index) {
      saveProgress()
    }

    // 完成步骤
    function completeStep(index) {
      if (!isStepCompleted(index)) {
        ElMessage.warning('请完成所有任务后再提交')
        return
      }

      ElMessageBox.confirm(
        '确认完成本步骤吗？完成后将进入下一步骤。',
        '提示',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'success'
        }
      ).then(() => {
        currentStep.value = index + 1
        totalTime.value += parseInt(teachingSteps.value[index].duration)
        saveProgress()
        ElMessage.success('恭喜完成本步骤！')
      }).catch(() => {})
    }

    // 重置进度
    function resetProgress() {
      ElMessageBox.confirm(
        '确认重置所有学习进度吗？此操作不可恢复。',
        '警告',
        {
          confirmButtonText: '确认重置',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        currentStep.value = 0
        totalTime.value = 0
        teachingSteps.value.forEach(step => {
          step.taskStatus = step.taskStatus.map(() => false)
        })
        saveProgress()
        ElMessage.success('进度已重置')
      }).catch(() => {})
    }

    // 保存进度
    function saveProgress() {
      progressStorage.saveProgress('teachingProcess', currentStep.value, {
        steps: teachingSteps.value,
        totalTime: totalTime.value
      })
    }

    // 加载进度
    function loadProgress() {
      const saved = progressStorage.getProgress('teachingProcess')
      if (saved && saved.data) {
        currentStep.value = saved.currentStep || 0
        totalTime.value = saved.data.totalTime || 0
        if (saved.data.steps) {
          teachingSteps.value = saved.data.steps
        }
      }
    }

    onMounted(() => {
      loadProgress()
    })

    return {
      currentStep,
      totalSteps,
      completedSteps,
      overallProgress,
      progressColor,
      totalTime,
      teachingSteps,
      isStepCompleted,
      updateStepProgress,
      completeStep,
      resetProgress
    }
  }
}
</script>

<style scoped>
.teaching-process {
  width: 100%;
}

.progress-overview {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
}

.progress-stats {
  padding: 20px;
}

.progress-text {
  font-size: 14px;
  font-weight: bold;
}

.stats-info {
  display: flex;
  gap: 40px;
  margin-top: 20px;
}

.stat-item {
  display: flex;
  gap: 10px;
}

.stat-item .label {
  color: #909399;
  font-size: 14px;
}

.stat-item .value {
  color: #303133;
  font-size: 14px;
  font-weight: bold;
}

.steps-card {
  margin-bottom: 20px;
}

.teaching-steps {
  padding: 20px;
}

.step-content {
  margin-top: 10px;
  margin-bottom: 20px;
}

.step-info h4 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 16px;
}

.step-info p {
  color: #606266;
  font-size: 14px;
  margin-bottom: 15px;
}

.step-details {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.step-tasks {
  margin-bottom: 15px;
}

.step-tasks h5 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 14px;
}

.step-tasks ul {
  list-style: none;
  padding: 0;
}

.step-tasks li {
  padding: 5px 0;
}

.step-actions {
  display: flex;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #ebeef5;
}
</style>

