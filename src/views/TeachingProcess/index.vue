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
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">{{ completedSteps }}/{{ totalSteps }}</div>
            <div class="stat-label">已完成步骤</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ totalCompletedTasks }}/{{ totalTasks }}</div>
            <div class="stat-label">已完成任务</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ totalTime }}</div>
            <div class="stat-label">学习时长(小时)</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ estimatedRemainingTime }}</div>
            <div class="stat-label">预计剩余时间(周)</div>
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
        >
          <template #title>
            <div class="step-title-wrapper">
              <span>{{ step.title }}</span>
              <button class="detail-btn" @click="goToDetailPage(index)">
                进入详细学习 →
              </button>
            </div>
          </template>
          <template #description>
            <span>{{ step.description }}</span>
          </template>
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
            <el-card
              :class="['step-content', {
                'current-step': index === currentStep,
                'completed-step': index < currentStep
              }]"
              shadow="hover"
            >
              <div class="step-info">
                <div class="step-header">
                  <h4>{{ step.title }}</h4>
                  <button class="detail-btn" @click="goToDetailPage(index)">
                    进入详细学习 →
                  </button>
                </div>
                <p>{{ step.description }}</p>
                <div class="step-tags">
                  <el-tag size="small" type="info">{{ step.duration }}</el-tag>
                  <el-tag
                    size="small"
                    :type="getDifficultyType(step.difficulty)"
                  >
                    {{ step.difficulty }}
                  </el-tag>
                  <el-tag
                    size="small"
                    :type="index < currentStep ? 'success' : index === currentStep ? 'primary' : 'info'"
                  >
                    {{ index < currentStep ? '已完成' : index === currentStep ? '进行中' : '未开始' }}
                  </el-tag>
                </div>

                <div class="step-progress-info">
                  <span class="task-count">
                    任务进度: {{ step.taskStatus.filter(s => s).length }}/{{ step.tasks.length }}
                  </span>
                  <el-progress
                    :percentage="stepProgress[index]"
                    :stroke-width="6"
                    :show-text="false"
                    :color="getStepProgressColor(stepProgress[index])"
                    class="step-mini-progress"
                  />
                </div>

                <div class="step-tasks">
                  <h5>详细任务清单：</h5>
                  <ul>
                    <li
                      v-for="(task, idx) in step.tasks"
                      :key="idx"
                      :class="['task-item', {
                        'task-completed': step.taskStatus[idx],
                        'task-current': index === currentStep && !step.taskStatus[idx]
                      }]"
                    >
                      <el-checkbox
                        v-model="step.taskStatus[idx]"
                        @change="updateStepProgress(index)"
                        :disabled="index > currentStep"
                      >
                        <span class="task-text">{{ task }}</span>
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
                    <el-icon><CircleCheck /></el-icon>
                    已完成
                  </el-button>
                  <el-button
                    v-if="index > currentStep"
                    size="small"
                    disabled
                  >
                    <el-icon><Clock /></el-icon>
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
import { useRouter } from 'vue-router'
import { progressStorage } from '../../utils/storage'

export default {
  name: 'TeachingProcess',
  components: {
    CircleCheck,
    VideoPlay,
    Clock
  },
  setup() {
    const router = useRouter()
    const currentStep = ref(0)
    const totalTime = ref(0)

    // 教学步骤数据
    const teachingSteps = ref([
      {
        title: '第一步：金融基础知识学习',
        description: '系统掌握金融基础理论知识，建立专业知识框架',
        duration: '2周',
        difficulty: '初级',
        tasks: [
          '1.1 学习金融学基础：货币、利率、通货膨胀、汇率等基本概念',
          '1.2 掌握金融机构体系：商业银行、投资银行、中央银行等职能和运作',
          '1.3 了解金融市场：股票市场、债券市场、衍生品市场等组成和功能',
          '1.4 学习财务报表分析：资产负债表、利润表、现金流量表解读',
          '1.5 掌握基本财务指标：流动性比率、杠杆比率、盈利能力指标计算',
          '1.6 完成金融基础知识在线测试（85分以上）'
        ],
        taskStatus: [false, false, false, false, false, false]
      },
      {
        title: '第二步：金融产品与服务',
        description: '深入了解各类金融产品和服务，掌握业务操作流程',
        duration: '3周',
        difficulty: '初级',
        tasks: [
          '2.1 学习存款与贷款业务：储蓄存款、活期存款、定期存款产品介绍',
          '2.2 掌握支付结算服务：汇款、转账、代收代付等支付业务流程',
          '2.3 了解投资理财产品：基金、保险、信托等金融产品的特点和风险',
          '2.4 学习外汇与国际业务：外汇交易、国际结算、贸易融资业务',
          '2.5 掌握信用卡业务：信用卡发行、使用、还款、风险管理',
          '2.6 了解消费金融产品：消费贷款、分期付款、现金贷等业务模式',
          '2.7 学习企业金融服务：公司贷款、贸易融资、供应链金融',
          '2.8 完成金融产品知识实操演练'
        ],
        taskStatus: [false, false, false, false, false, false, false, false]
      },
      {
        title: '第三步：风险管理与控制',
        description: '掌握金融风险识别、评估和控制的方法与策略',
        duration: '3周',
        difficulty: '中级',
        tasks: [
          '3.1 学习信用风险管理：信用评估、授信审批、担保方式',
          '3.2 掌握市场风险控制：利率风险、汇率风险、股价风险管理',
          '3.3 了解操作风险防范：内部控制、业务流程优化、差错处理',
          '3.4 学习流动性风险管理：资金调度、现金流预测、应急预案',
          '3.5 掌握反洗钱与合规要求：客户身份识别、可疑交易报告',
          '3.6 了解金融欺诈防范：常见欺诈手段识别与应对策略',
          '3.7 学习风险量化方法：VaR模型、压力测试、情景分析',
          '3.8 完成风险管理案例分析与方案设计'
        ],
        taskStatus: [false, false, false, false, false, false, false, false]
      },
      {
        title: '第四步：金融科技应用',
        description: '了解金融科技发展趋势，掌握数字化转型技能',
        duration: '4周',
        difficulty: '中级',
        tasks: [
          '4.1 学习大数据金融：客户画像分析、风险预测模型',
          '4.2 掌握人工智能应用：智能客服、智能风控、投资顾问',
          '4.3 了解区块链金融：数字货币、供应链金融、智能合约',
          '4.4 学习移动金融服务：移动支付、手机银行、数字化营销',
          '4.5 掌握API金融服务：开放银行、第三方接入、生态合作',
          '4.6 了解监管科技（RegTech）：合规自动化、风险监测',
          '4.7 学习数字货币与支付：央行数字货币、电子支付创新',
          '4.8 完成金融科技应用项目设计与演示'
        ],
        taskStatus: [false, false, false, false, false, false, false, false]
      },
      {
        title: '第五步：客户服务与营销',
        description: '掌握金融客户服务技能和营销策略，提升业务拓展能力',
        duration: '3周',
        difficulty: '中级',
        tasks: [
          '5.1 学习客户关系管理：客户分类、分层服务、忠诚度维护',
          '5.2 掌握销售技巧：产品推荐、异议处理、成交技巧',
          '5.3 了解客户体验设计：服务流程优化、数字化服务创新',
          '5.4 学习营销策略：精准营销、交叉销售、客户生命周期管理',
          '5.5 掌握投诉处理技能：投诉接待、问题解决、客户挽留',
          '5.6 了解金融产品营销：理财产品推广、信用卡营销策略',
          '5.7 学习团队协作：业务配合、资源共享、绩效考核',
          '5.8 完成客户服务模拟演练与营销方案设计'
        ],
        taskStatus: [false, false, false, false, false, false, false, false]
      },
      {
        title: '第六步：综合实训与评估',
        description: '通过综合案例分析和项目实践，检验学习成果',
        duration: '4周',
        difficulty: '高级',
        tasks: [
          '6.1 完成综合业务模拟：从客户接待到业务办理全流程操作',
          '6.2 进行案例分析练习：典型金融案例分析与解决方案设计',
          '6.3 参与团队项目实训：小组项目策划、实施、成果展示',
          '6.4 掌握应急处理能力：突发事件应对、危机公关处理',
          '6.5 学习业务创新思维：金融产品创新、服务模式创新',
          '6.6 完成职业技能考核：理论测试、实操考核、综合评估',
          '6.7 撰写学习总结报告：学习心得、技能提升、职业规划',
          '6.8 参加结业成果汇报：项目展示、答辩评审、证书颁发'
        ],
        taskStatus: [false, false, false, false, false, false, false, false]
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

    // 总任务数
    const totalTasks = computed(() => {
      return teachingSteps.value.reduce((total, step) => total + step.tasks.length, 0)
    })

    // 已完成任务数
    const totalCompletedTasks = computed(() => {
      return teachingSteps.value.reduce((total, step) => {
        return total + step.taskStatus.filter(status => status === true).length
      }, 0)
    })

    // 各步骤进度
    const stepProgress = computed(() => {
      return teachingSteps.value.map(step => {
        const completedCount = step.taskStatus.filter(status => status === true).length
        return Math.round((completedCount / step.tasks.length) * 100)
      })
    })

    // 预计剩余时间（周）
    const estimatedRemainingTime = computed(() => {
      const remainingSteps = teachingSteps.value.slice(currentStep.value)
      const totalWeeks = remainingSteps.reduce((total, step) => {
        return total + parseInt(step.duration)
      }, 0)
      return totalWeeks
    })

    // 步骤进度颜色
    function getStepProgressColor(progress) {
      if (progress === 0) return '#DCDFE6'
      if (progress < 30) return '#F56C6C'
      if (progress < 70) return '#E6A23C'
      if (progress < 100) return '#409EFF'
      return '#67C23A'
    }

    // 难度标签类型
    function getDifficultyType(difficulty) {
      switch (difficulty) {
        case '初级': return 'success'
        case '中级': return 'warning'
        case '高级': return 'danger'
        default: return 'info'
      }
    }

    // 跳转到详细页面
    function goToDetailPage(stepIndex) {
      const stepPaths = ['one', 'two', 'three', 'four', 'five', 'six']
      const path = stepPaths[stepIndex]
      if (path) {
        router.push(`/teaching-process/${path}`)
      }
    }

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
      totalTasks,
      totalCompletedTasks,
      stepProgress,
      estimatedRemainingTime,
      getStepProgressColor,
      getDifficultyType,
      goToDetailPage,
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #909399;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}


.steps-card {
  margin-bottom: 20px;
}

.teaching-steps {
  padding: 20px;
}

/* Element Plus 步骤组件样式覆盖 */
:deep(.el-step.is-vertical .el-step__main) {
  margin-bottom: 20px;
}

.step-title-wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 12px !important;
  width: 100% !important;
}

.step-title-wrapper span {
  flex: 1 !important;
}

.step-content {
  margin-top: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.step-content.current-step {
  border: 2px solid #409eff;
  box-shadow: 0 0 10px rgba(64, 158, 255, 0.2);
}

.step-content.completed-step {
  border: 1px solid #67c23a;
  background: #f0f9ff;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.step-header h4 {
  margin: 0;
  color: #303133;
  font-size: 16px;
  flex: 1;
}

.detail-btn {
  padding: 8px 16px !important;
  background: #409eff !important;
  color: white !important;
  border: none !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  transition: all 0.3s !important;
  white-space: nowrap !important;
  display: inline-block !important;
  line-height: 1.5 !important;
  text-align: center !important;
  vertical-align: middle !important;
  outline: none !important;
}

.detail-btn:hover {
  background: #66b1ff !important;
  transform: translateX(2px) !important;
}

.detail-btn:active {
  background: #3a8ee6 !important;
}

.step-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.step-info p {
  color: #606266;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.step-progress-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}

.task-count {
  font-size: 13px;
  color: #606266;
  font-weight: 500;
}

.step-mini-progress {
  flex: 1;
  max-width: 120px;
}

.step-tasks {
  margin-bottom: 15px;
}

.step-tasks h5 {
  margin: 0 0 12px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.step-tasks ul {
  list-style: none;
  padding: 0;
}

.step-tasks li {
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.task-item {
  transition: all 0.2s ease;
}

.task-item:hover {
  background: #fafafa;
  padding-left: 8px;
  margin-left: -8px;
  border-radius: 4px;
}

.task-completed .task-text {
  text-decoration: line-through;
  color: #67c23a;
}

.task-current .task-text {
  color: #409eff;
  font-weight: 500;
}

.step-actions {
  display: flex;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #ebeef5;
  justify-content: flex-end;
}
</style>

