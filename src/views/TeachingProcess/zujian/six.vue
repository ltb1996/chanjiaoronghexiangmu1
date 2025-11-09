<template>
  <div class="detail-page">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div class="nav-container">
        <div class="nav-left">
          <el-button type="text" @click="$router.push('/teaching-process')">
            <el-icon><ArrowLeft /></el-icon>
            返回教学过程
          </el-button>
        </div>
        <div class="nav-center">
          <h2>第六步：综合实训与评估</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">6 / 6</span>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content-wrapper">
      <div class="content-container">
        <!-- 章节导航 -->
        <div class="chapter-nav">
          <el-card class="chapter-card completion-card">
            <div class="chapter-header">
              <h3>🎓 第六步：综合实训与评估</h3>
              <el-tag type="success">第6步 / 共6步</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress
                :percentage="100"
                :stroke-width="8"
                color="#67C23A"
              />
              <span class="progress-text">100% 完成 - 恭喜你完成所有学习！</span>
            </div>
            <div class="completion-badge">
              <div class="badge-icon">🏆</div>
              <div class="badge-text">
                <h4>学习完成</h4>
                <p>你已完成金融行业实训教学的全部课程</p>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">
          <!-- 6.1 综合业务模拟 -->
          <el-card class="content-card" id="section-6-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">6.1 综合业务模拟</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 实训目标</h4>
                <ul>
                  <li>掌握从客户接待到业务办理的全流程操作</li>
                  <li>熟练运用各项金融业务知识和技能</li>
                  <li>提升综合业务处理能力和应变能力</li>
                </ul>
              </div>

              <div class="simulation-scenarios">
                <h4>🎭 模拟场景</h4>
                <div class="scenarios-grid">
                  <div class="scenario-card">
                    <div class="scenario-header">
                      <span class="scenario-icon">💼</span>
                      <h5>个人业务办理</h5>
                    </div>
                    <div class="scenario-content">
                      <p class="scenario-desc">
                        客户张女士来办理定期存款和购买理财产品
                      </p>
                      <div class="scenario-steps">
                        <div class="step-badge">✓ 身份核验</div>
                        <div class="step-badge">✓ 需求了解</div>
                        <div class="step-badge">✓ 产品推荐</div>
                        <div class="step-badge">✓ 业务办理</div>
                        <div class="step-badge">✓ 服务确认</div>
                      </div>
                      <div class="scenario-score">
                        <span>评分：</span>
                        <el-rate v-model="score1" disabled />
                        <span class="score-text">95分</span>
                      </div>
                    </div>
                  </div>

                  <div class="scenario-card">
                    <div class="scenario-header">
                      <span class="scenario-icon">🏢</span>
                      <h5>企业业务办理</h5>
                    </div>
                    <div class="scenario-content">
                      <p class="scenario-desc">
                        某企业申请500万元经营贷款业务
                      </p>
                      <div class="scenario-steps">
                        <div class="step-badge">✓ 资料审核</div>
                        <div class="step-badge">✓ 风险评估</div>
                        <div class="step-badge">✓ 授信审批</div>
                        <div class="step-badge">✓ 合同签订</div>
                        <div class="step-badge">✓ 放款操作</div>
                      </div>
                      <div class="scenario-score">
                        <span>评分：</span>
                        <el-rate v-model="score2" disabled />
                        <span class="score-text">92分</span>
                      </div>
                    </div>
                  </div>

                  <div class="scenario-card">
                    <div class="scenario-header">
                      <span class="scenario-icon">⚠️</span>
                      <h5>投诉处理</h5>
                    </div>
                    <div class="scenario-content">
                      <p class="scenario-desc">
                        客户对理财产品收益不满意，要求退款
                      </p>
                      <div class="scenario-steps">
                        <div class="step-badge">✓ 耐心倾听</div>
                        <div class="step-badge">✓ 情绪安抚</div>
                        <div class="step-badge">✓ 问题核实</div>
                        <div class="step-badge">✓ 方案协商</div>
                        <div class="step-badge">✓ 满意解决</div>
                      </div>
                      <div class="scenario-score">
                        <span>评分：</span>
                        <el-rate v-model="score3" disabled />
                        <span class="score-text">98分</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 6.2 案例分析练习 -->
          <el-card class="content-card case-card" id="section-6-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">6.2 案例分析练习</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="case-study">
                <h4>📚 典型案例分析</h4>
                <div class="case-example">
                  <div class="case-title">
                    <span class="case-number">案例1</span>
                    <h5>某银行信用卡欺诈风险防控案例</h5>
                  </div>
                  <div class="case-background">
                    <h6>案例背景：</h6>
                    <p>
                      某银行发现多起信用卡盗刷事件，涉及金额累计超过100万元，需要建立完善的风险防控体系。
                    </p>
                  </div>
                  <div class="case-analysis">
                    <h6>分析要点：</h6>
                    <ul>
                      <li>识别欺诈行为的特征和模式</li>
                      <li>评估现有风控系统的漏洞</li>
                      <li>设计多层次的防控措施</li>
                      <li>建立实时监控和预警机制</li>
                    </ul>
                  </div>
                  <div class="case-solution">
                    <h6>解决方案：</h6>
                    <div class="solution-points">
                      <div class="solution-item">
                        <span class="solution-icon">🔐</span>
                        <div>
                          <strong>技术防控</strong>
                          <p>引入AI智能风控系统，实时监测异常交易</p>
                        </div>
                      </div>
                      <div class="solution-item">
                        <span class="solution-icon">📱</span>
                        <div>
                          <strong>客户验证</strong>
                          <p>强化双因素认证，短信+指纹/人脸识别</p>
                        </div>
                      </div>
                      <div class="solution-item">
                        <span class="solution-icon">👥</span>
                        <div>
                          <strong>人员培训</strong>
                          <p>提升员工反欺诈意识和处理能力</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 6.3 团队项目实训 -->
          <el-card class="content-card project-card" id="section-6-3">
            <template #header>
              <div class="card-header">
                <span class="section-title">6.3 团队项目实训</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="project-info">
                <h4>🚀 项目成果展示</h4>
                <div class="project-showcase">
                  <div class="project-header">
                    <h5>智能理财顾问系统</h5>
                    <el-tag type="success">优秀项目</el-tag>
                  </div>
                  <div class="project-details">
                    <div class="detail-row">
                      <span class="detail-label">团队成员：</span>
                      <span class="detail-value">5人</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">项目周期：</span>
                      <span class="detail-value">3周</span>
                    </div>
                    <div class="detail-row">
                      <span class="detail-label">技术栈：</span>
                      <span class="detail-value"
                        >Vue3 + Python + 机器学习</span
                      >
                    </div>
                  </div>
                  <div class="project-features">
                    <h6>核心功能：</h6>
                    <div class="features-list">
                      <div class="feature-item">
                        ✓ 客户风险评估问卷
                      </div>
                      <div class="feature-item">
                        ✓ AI智能资产配置建议
                      </div>
                      <div class="feature-item">
                        ✓ 投资组合实时监控
                      </div>
                      <div class="feature-item">
                        ✓ 市场行情分析预警
                      </div>
                    </div>
                  </div>
                  <div class="project-score">
                    <div class="score-item">
                      <span>创新性</span>
                      <el-progress
                        :percentage="95"
                        :stroke-width="8"
                        color="#409EFF"
                      />
                    </div>
                    <div class="score-item">
                      <span>实用性</span>
                      <el-progress
                        :percentage="90"
                        :stroke-width="8"
                        color="#67C23A"
                      />
                    </div>
                    <div class="score-item">
                      <span>完成度</span>
                      <el-progress
                        :percentage="92"
                        :stroke-width="8"
                        color="#E6A23C"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 学习成果统计 -->
          <el-card class="achievement-card">
            <template #header>
              <div class="card-header">
                <span class="section-title">📊 学习成果统计</span>
              </div>
            </template>
            <div class="achievement-content">
              <div class="stats-grid">
                <div class="stat-box">
                  <div class="stat-icon">📚</div>
                  <div class="stat-info">
                    <div class="stat-number">46</div>
                    <div class="stat-label">完成任务数</div>
                  </div>
                </div>
                <div class="stat-box">
                  <div class="stat-icon">⏱️</div>
                  <div class="stat-info">
                    <div class="stat-number">19</div>
                    <div class="stat-label">学习周数</div>
                  </div>
                </div>
                <div class="stat-box">
                  <div class="stat-icon">🎯</div>
                  <div class="stat-info">
                    <div class="stat-number">95</div>
                    <div class="stat-label">综合评分</div>
                  </div>
                </div>
                <div class="stat-box">
                  <div class="stat-icon">🏆</div>
                  <div class="stat-info">
                    <div class="stat-number">6</div>
                    <div class="stat-label">获得证书</div>
                  </div>
                </div>
              </div>

              <div class="skills-radar">
                <h5>技能掌握雷达图</h5>
                <div class="radar-chart">
                  <div class="skill-item">
                    <span>金融基础</span>
                    <el-progress :percentage="95" />
                  </div>
                  <div class="skill-item">
                    <span>产品知识</span>
                    <el-progress :percentage="90" />
                  </div>
                  <div class="skill-item">
                    <span>风险管理</span>
                    <el-progress :percentage="88" />
                  </div>
                  <div class="skill-item">
                    <span>金融科技</span>
                    <el-progress :percentage="92" />
                  </div>
                  <div class="skill-item">
                    <span>客户服务</span>
                    <el-progress :percentage="96" />
                  </div>
                  <div class="skill-item">
                    <span>综合实践</span>
                    <el-progress :percentage="94" />
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 结业证书 -->
          <el-card class="certificate-card">
            <div class="certificate-content">
              <div class="certificate-border">
                <div class="certificate-header">
                  <h3>🎓 结业证书</h3>
                  <p>Certificate of Completion</p>
                </div>
                <div class="certificate-body">
                  <p class="cert-text">兹证明</p>
                  <h4 class="cert-name">学员姓名</h4>
                  <p class="cert-desc">
                    已完成<strong>金融行业实训教学</strong>全部课程学习
                  </p>
                  <p class="cert-desc">
                    通过综合考核，成绩优秀，特发此证
                  </p>
                  <div class="cert-details">
                    <div class="cert-item">
                      <span>课程编号：</span>
                      <span>FIN-2024-001</span>
                    </div>
                    <div class="cert-item">
                      <span>颁发日期：</span>
                      <span>2024年11月08日</span>
                    </div>
                    <div class="cert-item">
                      <span>综合评分：</span>
                      <span class="score-highlight">95分</span>
                    </div>
                  </div>
                </div>
                <div class="certificate-footer">
                  <div class="cert-seal">🏛️</div>
                  <p>金融产教融合实践教学平台</p>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 底部导航 -->
        <div class="bottom-nav">
          <div class="nav-buttons">
            <el-button size="large" @click="prevChapter">
              <el-icon><ArrowLeft /></el-icon>
              上一章：客户服务与营销
            </el-button>
            <div class="twobtnjiehe">
              <el-button
                type="success"
                size="large"
                class="wanchengbtn"
                @click="completeStudy"
              >
                ✓ 完成本章学习
              </el-button>
              <el-button size="large" type="primary" @click="complete">
                <el-icon><Check /></el-icon>
                完成全部学习
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { ArrowLeft, Check } from "@element-plus/icons-vue";

export default {
  name: "TeachingProcessSix",
  components: {
    ArrowLeft,
    Check,
  },
  setup() {
    const router = useRouter();
    const score1 = ref(4.5);
    const score2 = ref(4.5);
    const score3 = ref(5);
    const isCompleted = ref(false);

    // 检查是否已经完成过
    onMounted(() => {
      const progress = JSON.parse(
        localStorage.getItem("teachingProgress") || "{}"
      );
      if (progress.stepTasks && progress.stepTasks["step5"]?.completed) {
        isCompleted.value = true;
      }
    });

    // 完成本章学习
    const completeStudy = () => {
      ElMessageBox.confirm("确认已完成本章所有内容的学习吗？", "完成学习", {
        confirmButtonText: "确认完成",
        cancelButtonText: "继续学习",
        type: "success",
      })
        .then(() => {
          // 从 localStorage 获取当前进度
          let progress = JSON.parse(
            localStorage.getItem("teachingProgress") || "{}"
          );

          // 更新进度数据（在前面步骤的基础上叠加）
          progress.completedSteps = Math.max(progress.completedSteps || 0, 6); // 完成第六步
          progress.currentStep = Math.max(progress.currentStep || 0, 6); // 全部完成

          // 标记第六步的所有任务为已完成
          if (!progress.stepTasks) {
            progress.stepTasks = {};
          }
          progress.stepTasks["step5"] = {
            completed: true,
            completedCount: 8, // 第六步有8个任务
            totalCount: 8,
          };

          // 保存到 localStorage
          localStorage.setItem("teachingProgress", JSON.stringify(progress));

          isCompleted.value = true;

          ElMessage.success({
            message: "恭喜完成第六章学习！进度已保存",
            duration: 2000,
          });

          // 2秒后返回教学过程页面
          setTimeout(() => {
            router.push("/teaching-process");
          }, 2000);
        })
        .catch(() => {
          ElMessage.info("继续学习中...");
        });
    };

    const prevChapter = () => {
      router.push("/teaching-process/five");
    };

    // 完成全部学习
    const complete = () => {
      ElMessage.success("恭喜你完成全部学习！");
      setTimeout(() => {
        router.push("/teaching-process");
      }, 1500);
    };

    return {
      score1,
      score2,
      score3,
      isCompleted,
      completeStudy,
      prevChapter,
      complete,
    };
  },
};
</script>

<style scoped>
.detail-page {
  width: 100%;
  min-height: 100vh;
  background: #f0f2f5;
}

.nav-bar {
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  z-index: 1000;
  width: 100%;
}

.nav-container {
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-center h2 {
  margin: 0;
  color: #303133;
  font-size: 18px;
  font-weight: 600;
}

.progress-text {
  color: #909399;
  font-size: 14px;
}

.content-wrapper {
  width: 100%;
  padding: 20px;
}

.content-container {
  width: 100%;
  padding: 0;
}

.chapter-nav {
  margin-bottom: 20px;
}

.chapter-card {
  border-radius: 8px;
}

.completion-card {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  color: white;
  border: none;
}

.completion-card .chapter-header h3,
.completion-card .progress-text {
  color: grey;
}


.chapter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chapter-header h3 {
  margin: 0;
  color: #303133;
}

.chapter-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}

.chapter-progress .progress-text {
  font-size: 12px;
  color: #909399;
}

.completion-badge {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 48px;
}

.badge-text h4 {
  margin: 0 0 5px 0;
  color: grey;
  font-size: 18px;
}

.badge-text p {
  margin: 0;
  color: grey;
  font-size: 14px;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-card {
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-weight: 600;
  color: #303133;
}

.section-content {
  padding: 10px 0;
}

.learning-objectives {
  margin-bottom: 15px;
}

.learning-objectives h4,
.simulation-scenarios h4,
.case-study h4,
.project-info h4 {
  color: #303133;
  margin-bottom: 15px;
  font-size: 16px;
}

.learning-objectives ul {
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
  color: #606266;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.scenario-card {
  background: white;
  border: 2px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

.scenario-card:hover {
  border-color: #67c23a;
  box-shadow: 0 4px 16px rgba(103, 194, 58, 0.2);
}

.scenario-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.scenario-icon {
  font-size: 24px;
}

.scenario-header h5 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.scenario-content {
  padding: 20px;
}

.scenario-desc {
  color: #606266;
  font-size: 13px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.scenario-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.step-badge {
  padding: 4px 10px;
  background: #f0f9ff;
  color: #409eff;
  border-radius: 12px;
  font-size: 11px;
}

.scenario-score {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #e4e7ed;
}

.scenario-score span {
  font-size: 13px;
  color: #606266;
}

.score-text {
  font-weight: 600;
  color: #67c23a;
}

.case-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.case-example {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
}

.case-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.case-number {
  padding: 6px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.case-title h5 {
  margin: 0;
  color: #303133;
  font-size: 16px;
  font-weight: 600;
}

.case-background,
.case-analysis,
.case-solution {
  margin-bottom: 15px;
}

.case-background h6,
.case-analysis h6,
.case-solution h6 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.case-background p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
}

.case-analysis ul {
  padding-left: 20px;
  margin: 0;
}

.case-analysis li {
  color: #606266;
  font-size: 13px;
  margin-bottom: 6px;
}

.solution-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.solution-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 6px;
}

.solution-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.solution-item strong {
  display: block;
  color: #303133;
  font-size: 13px;
  margin-bottom: 4px;
}

.solution-item p {
  margin: 0;
  color: #606266;
  font-size: 12px;
}

.project-card {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
}

.project-showcase {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e4e7ed;
}

.project-header h5 {
  margin: 0;
  color: #303133;
  font-size: 18px;
  font-weight: 600;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.detail-row {
  display: flex;
  align-items: center;
  font-size: 13px;
}

.detail-label {
  color: #909399;
  min-width: 80px;
}

.detail-value {
  color: #303133;
  font-weight: 500;
}

.project-features {
  margin-bottom: 20px;
}

.project-features h6 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}

.feature-item {
  padding: 8px 12px;
  background: #f0f9ff;
  color: #409eff;
  border-radius: 6px;
  font-size: 12px;
}

.project-score {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.score-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.score-item span {
  min-width: 60px;
  font-size: 13px;
  color: #606266;
  font-weight: 500;
}

.achievement-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.achievement-content {
  padding: 10px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s;
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 32px;
}

.stat-number {
  font-size: 28px;
  font-weight: 600;
  color: #409eff;
}

.stat-label {
  font-size: 12px;
  color: #909399;
}

.skills-radar {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.skills-radar h5 {
  margin: 0 0 15px 0;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.radar-chart {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.skill-item span {
  min-width: 80px;
  font-size: 13px;
  color: #606266;
}

.certificate-card {
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  border: none;
}

.certificate-content {
  padding: 20px;
}

.certificate-border {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 8px double #d4af37;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.certificate-header {
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px solid #d4af37;
  padding-bottom: 20px;
}

.certificate-header h3 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 32px;
  font-weight: 700;
}

.certificate-header p {
  margin: 0;
  color: #909399;
  font-size: 16px;
  font-style: italic;
}

.certificate-body {
  text-align: center;
  padding: 30px 0;
}

.cert-text {
  margin: 0 0 15px 0;
  color: #606266;
  font-size: 16px;
}

.cert-name {
  margin: 0 0 20px 0;
  color: #303133;
  font-size: 28px;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #d4af37;
}

.cert-desc {
  margin: 0 0 10px 0;
  color: #606266;
  font-size: 15px;
  line-height: 1.8;
}

.cert-desc strong {
  color: #303133;
  font-size: 16px;
}

.cert-details {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e4e7ed;
}

.cert-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 13px;
}

.cert-item span:first-child {
  color: #909399;
}

.cert-item span:last-child {
  color: #303133;
  font-weight: 600;
}

.score-highlight {
  color: #67c23a !important;
  font-size: 16px !important;
}

.certificate-footer {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 3px solid #d4af37;
}

.cert-seal {
  font-size: 48px;
  margin-bottom: 10px;
}

.certificate-footer p {
  margin: 0;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
}

.bottom-nav {
  margin-top: 30px;
  padding: 20px 0;
  border-top: 1px solid #e4e7ed;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.twobtnjiehe {
  display: flex;
  gap: 15px;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .content-container {
    padding: 0 15px;
  }

  .scenarios-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .nav-center h2 {
    font-size: 16px;
  }

  .nav-buttons {
    flex-direction: column;
  }

  .cert-details {
    flex-direction: column;
    gap: 15px;
  }

  .certificate-border {
    padding: 20px;
  }
}
</style>

