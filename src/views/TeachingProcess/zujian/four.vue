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
          <h2>第四步：金融科技应用</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">4 / 6</span>
        </div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content-wrapper">
      <div class="content-container">
        <!-- 章节导航 -->
        <div class="chapter-nav">
          <el-card class="chapter-card">
            <div class="chapter-header">
              <h3>🚀 第四步：金融科技应用</h3>
              <el-tag type="success">第4步 / 共6步</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress
                :percentage="66.67"
                :stroke-width="8"
                color="#67C23A"
              />
              <span class="progress-text">66.7% 完成</span>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">
          <!-- 4.1 大数据金融 -->
          <el-card class="content-card" id="section-4-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">4.1 大数据金融</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握大数据在金融领域的应用场景</li>
                  <li>了解客户画像分析的方法和工具</li>
                  <li>学习风险预测模型的构建和应用</li>
                </ul>
              </div>

              <div class="key-concepts">
                <h4>📊 大数据应用场景</h4>
                <div class="tech-grid">
                  <div class="tech-card bigdata">
                    <div class="tech-icon">👤</div>
                    <h5>客户画像分析</h5>
                    <p>
                      通过收集和分析客户的交易数据、行为数据、社交数据等，构建360度客户画像。
                    </p>
                    <div class="tech-tags">
                      <span class="tech-tag">数据挖掘</span>
                      <span class="tech-tag">机器学习</span>
                    </div>
                  </div>
                  <div class="tech-card bigdata">
                    <div class="tech-icon">📈</div>
                    <h5>风险预测模型</h5>
                    <p>
                      利用历史数据建立信用评分模型、欺诈检测模型，实现风险的智能预警。
                    </p>
                    <div class="tech-tags">
                      <span class="tech-tag">预测分析</span>
                      <span class="tech-tag">深度学习</span>
                    </div>
                  </div>
                  <div class="tech-card bigdata">
                    <div class="tech-icon">💹</div>
                    <h5>精准营销</h5>
                    <p>
                      基于客户数据分析，实现产品推荐、营销活动精准投放，提升转化率。
                    </p>
                    <div class="tech-tags">
                      <span class="tech-tag">推荐系统</span>
                      <span class="tech-tag">A/B测试</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h4>💡 案例分析</h4>
                <el-card class="quiz-card">
                  <p>
                    <strong>问题：</strong
                    >以下哪项不属于大数据在金融领域的典型应用？
                  </p>
                  <el-radio-group v-model="quiz1" class="quiz-options">
                    <el-radio label="A">客户信用评分</el-radio>
                    <el-radio label="B">反欺诈检测</el-radio>
                    <el-radio label="C">人工柜台服务</el-radio>
                    <el-radio label="D">智能投顾</el-radio>
                  </el-radio-group>
                  <div class="quiz-result" v-if="quiz1">
                    <el-alert
                      :type="quiz1 === 'C' ? 'success' : 'error'"
                      :title="
                        quiz1 === 'C'
                          ? '回答正确！人工柜台服务不依赖大数据技术'
                          : '回答错误，正确答案是C选项'
                      "
                      show-icon
                    />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>

          <!-- 4.2 人工智能应用 -->
          <el-card class="content-card" id="section-4-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">4.2 人工智能应用</span>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>了解AI在金融服务中的应用场景</li>
                  <li>掌握智能客服、智能风控的实现原理</li>
                  <li>学习智能投顾的业务模式和技术架构</li>
                </ul>
              </div>

              <div class="ai-applications">
                <h4>🤖 AI应用矩阵</h4>
                <div class="ai-matrix">
                  <div class="ai-item">
                    <div class="ai-header">
                      <span class="ai-icon">💬</span>
                      <h5>智能客服</h5>
                    </div>
                    <div class="ai-content">
                      <p class="ai-desc">
                        基于NLP技术，实现7×24小时自动问答、业务咨询
                      </p>
                      <div class="ai-metrics">
                        <div class="metric-item">
                          <span class="metric-label">响应速度</span>
                          <el-progress
                            :percentage="95"
                            :stroke-width="6"
                            color="#67C23A"
                          />
                        </div>
                        <div class="metric-item">
                          <span class="metric-label">准确率</span>
                          <el-progress
                            :percentage="88"
                            :stroke-width="6"
                            color="#409EFF"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ai-item">
                    <div class="ai-header">
                      <span class="ai-icon">🛡️</span>
                      <h5>智能风控</h5>
                    </div>
                    <div class="ai-content">
                      <p class="ai-desc">
                        实时监测交易风险，自动识别异常行为和欺诈模式
                      </p>
                      <div class="ai-metrics">
                        <div class="metric-item">
                          <span class="metric-label">检测率</span>
                          <el-progress
                            :percentage="92"
                            :stroke-width="6"
                            color="#E6A23C"
                          />
                        </div>
                        <div class="metric-item">
                          <span class="metric-label">误报率</span>
                          <el-progress
                            :percentage="8"
                            :stroke-width="6"
                            color="#F56C6C"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="ai-item">
                    <div class="ai-header">
                      <span class="ai-icon">📊</span>
                      <h5>智能投顾</h5>
                    </div>
                    <div class="ai-content">
                      <p class="ai-desc">
                        根据用户风险偏好，自动配置投资组合和资产配置
                      </p>
                      <div class="ai-metrics">
                        <div class="metric-item">
                          <span class="metric-label">收益率</span>
                          <el-progress
                            :percentage="75"
                            :stroke-width="6"
                            color="#67C23A"
                          />
                        </div>
                        <div class="metric-item">
                          <span class="metric-label">满意度</span>
                          <el-progress
                            :percentage="85"
                            :stroke-width="6"
                            color="#409EFF"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 4.3 区块链金融 -->
          <el-card class="content-card blockchain-card" id="section-4-3">
            <template #header>
              <div class="card-header">
                <span class="section-title">4.3 区块链金融</span>
                <el-tag size="small" type="info">未开始</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>理解区块链技术的基本原理和特点</li>
                  <li>掌握数字货币、智能合约的应用场景</li>
                  <li>了解区块链在供应链金融中的应用</li>
                </ul>
              </div>

              <div class="blockchain-features">
                <h4>⛓️ 区块链核心特性</h4>
                <div class="features-grid">
                  <div class="feature-box">
                    <div class="feature-icon">🔐</div>
                    <h5>去中心化</h5>
                    <p>分布式账本，无需中心化机构</p>
                  </div>
                  <div class="feature-box">
                    <div class="feature-icon">🔒</div>
                    <h5>不可篡改</h5>
                    <p>数据一旦上链，无法修改删除</p>
                  </div>
                  <div class="feature-box">
                    <div class="feature-icon">👁️</div>
                    <h5>透明可追溯</h5>
                    <p>所有交易记录公开透明可查</p>
                  </div>
                  <div class="feature-box">
                    <div class="feature-icon">📝</div>
                    <h5>智能合约</h5>
                    <p>自动执行的合约代码</p>
                  </div>
                </div>

                <div class="blockchain-use-cases">
                  <h5>💼 应用场景</h5>
                  <div class="use-case-list">
                    <div class="use-case-item">
                      <span class="case-number">01</span>
                      <div class="case-content">
                        <strong>数字货币</strong>
                        <p>比特币、以太坊等加密货币，央行数字货币（CBDC）</p>
                      </div>
                    </div>
                    <div class="use-case-item">
                      <span class="case-number">02</span>
                      <div class="case-content">
                        <strong>供应链金融</strong>
                        <p>应收账款融资、仓单质押、贸易融资</p>
                      </div>
                    </div>
                    <div class="use-case-item">
                      <span class="case-number">03</span>
                      <div class="case-content">
                        <strong>跨境支付</strong>
                        <p>降低跨境支付成本，提高结算效率</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 金融科技趋势 -->
          <el-card class="trend-card">
            <template #header>
              <div class="card-header">
                <span class="section-title">📈 金融科技发展趋势</span>
              </div>
            </template>
            <div class="trend-content">
              <div class="trend-timeline">
                <div class="timeline-item">
                  <div class="timeline-dot">2024</div>
                  <div class="timeline-content">
                    <h5>AI大模型应用</h5>
                    <p>ChatGPT等大语言模型在金融服务中的深度应用</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot">2025</div>
                  <div class="timeline-content">
                    <h5>数字人民币普及</h5>
                    <p>央行数字货币在更多场景的应用推广</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot">2026</div>
                  <div class="timeline-content">
                    <h5>开放银行生态</h5>
                    <p>API经济成熟，金融服务无处不在</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot">2027+</div>
                  <div class="timeline-content">
                    <h5>量子计算金融</h5>
                    <p>量子计算在风险管理、投资优化中的应用</p>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 更多章节预览 -->
          <el-card class="preview-card">
            <div class="preview-content">
              <h4>📋 后续章节预览</h4>
              <div class="preview-items">
                <div class="preview-item">
                  <span class="preview-number">4.4</span>
                  <span class="preview-title">移动金融服务</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">4.5</span>
                  <span class="preview-title">API金融服务</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">4.6</span>
                  <span class="preview-title">监管科技</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">4.7</span>
                  <span class="preview-title">数字货币与支付</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">4.8</span>
                  <span class="preview-title">项目设计与演示</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
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
              上一章：风险管理与控制
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
              <el-button size="large" type="primary" @click="nextChapter">
                下一章：客户服务与营销
                <el-icon><ArrowRight /></el-icon>
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
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

export default {
  name: "TeachingProcessFour",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  setup() {
    const router = useRouter();
    const quiz1 = ref("");
    const isCompleted = ref(false);

    // 检查是否已经完成过
    onMounted(() => {
      const progress = JSON.parse(
        localStorage.getItem("teachingProgress") || "{}"
      );
      if (progress.stepTasks && progress.stepTasks["step3"]?.completed) {
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
          progress.completedSteps = Math.max(progress.completedSteps || 0, 4); // 完成第四步
          progress.currentStep = Math.max(progress.currentStep || 0, 4); // 当前在第五步

          // 标记第四步的所有任务为已完成
          if (!progress.stepTasks) {
            progress.stepTasks = {};
          }
          progress.stepTasks["step3"] = {
            completed: true,
            completedCount: 8, // 第四步有8个任务
            totalCount: 8,
          };

          // 保存到 localStorage
          localStorage.setItem("teachingProgress", JSON.stringify(progress));

          isCompleted.value = true;

          ElMessage.success({
            message: "恭喜完成第四章学习！进度已保存",
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
      router.push("/teaching-process/three");
    };

    const nextChapter = () => {
      router.push("/teaching-process/five");
    };

    return {
      quiz1,
      isCompleted,
      completeStudy,
      prevChapter,
      nextChapter,
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

.key-concepts {
  margin-bottom: 15px;
}

.learning-objectives h4,
.key-concepts h4,
.practice-section h4,
.ai-applications h4,
.blockchain-features h4 {
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.tech-card {
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transition: all 0.3s;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.tech-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.tech-card h5 {
  margin: 0 0 10px 0;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.tech-card p {
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-tag {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 11px;
  backdrop-filter: blur(10px);
}

.quiz-card {
  margin-top: 15px;
}

.quiz-options {
  margin-top: 15px;
}

.quiz-options .el-radio {
  display: block;
  margin-bottom: 10px;
}

.ai-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.ai-item {
  background: white;
  border: 2px solid #e4e7ed;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
}

.ai-item:hover {
  border-color: #409eff;
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.2);
}

.ai-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.ai-icon {
  font-size: 28px;
}

.ai-header h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.ai-content {
  padding: 20px;
}

.ai-desc {
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.ai-metrics {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric-label {
  font-size: 12px;
  color: #909399;
  font-weight: 500;
}

.blockchain-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.feature-box {
  padding: 20px;
  background: white;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.feature-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.feature-box h5 {
  margin: 0 0 6px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.feature-box p {
  margin: 0;
  color: #909399;
  font-size: 12px;
}

.blockchain-use-cases {
  margin-top: 20px;
}

.blockchain-use-cases h5 {
  color: #303133;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
}

.use-case-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.use-case-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #409eff;
}

.case-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.case-content strong {
  display: block;
  color: #303133;
  font-size: 14px;
  margin-bottom: 4px;
}

.case-content p {
  margin: 0;
  color: #606266;
  font-size: 12px;
  line-height: 1.5;
}

.trend-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border: none;
}

.trend-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 32px;
  top: 50px;
  width: 2px;
  height: calc(100% + 20px);
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-dot {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
  padding: 10px 20px;
  background: white;
  border-radius: 8px;
}

.timeline-content h5 {
  margin: 0 0 6px 0;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.timeline-content p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
}

.preview-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.preview-content h4 {
  margin: 0 0 15px 0;
  color: white;
}

.preview-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.preview-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  backdrop-filter: blur(10px);
}

.preview-number {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  min-width: 35px;
  text-align: center;
}

.preview-title {
  flex: 1;
  font-size: 14px;
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

  .tech-grid,
  .ai-matrix,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .nav-center h2 {
    font-size: 16px;
  }

  .nav-buttons {
    flex-direction: column;
  }
}
</style>

