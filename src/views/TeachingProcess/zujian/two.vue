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
          <h2>第二步：金融产品与服务</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">2 / 6</span>
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
              <h3>💳 第二步：金融产品与服务</h3>
              <el-tag type="info">第2步 / 共6步</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress
                :percentage="33.33"
                :stroke-width="8"
                color="#67C23A"
              />
              <span class="progress-text">33.3% 完成</span>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">
          <!-- 2.1 存款与贷款业务 -->
          <el-card class="content-card" id="section-2-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">2.1 存款与贷款业务</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握各类存款产品的特点和适用场景</li>
                  <li>了解贷款业务的基本流程和审批要素</li>
                  <li>理解存贷款利率的计算方法</li>
                </ul>
              </div>

              <div class="key-concepts">
                <h4>📖 核心产品类型</h4>
                <div class="concept-grid">
                  <div class="concept-item">
                    <h5>💰 储蓄存款</h5>
                    <p>
                      个人储蓄存款包括活期存款、定期存款、零存整取等多种形式，满足不同客户的资金管理需求。
                    </p>
                  </div>
                  <div class="concept-item">
                    <h5>🏦 企业存款</h5>
                    <p>
                      企业存款包括对公活期账户、定期存款、通知存款等，用于企业日常经营和资金管理。
                    </p>
                  </div>
                  <div class="concept-item">
                    <h5>📊 贷款产品</h5>
                    <p>
                      包括个人消费贷款、住房贷款、企业经营贷款等，根据客户需求提供不同期限和额度的融资服务。
                    </p>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h4>💡 案例分析</h4>
                <el-card class="quiz-card">
                  <p>
                    <strong>场景：</strong
                    >张先生有10万元闲置资金，计划1年后使用。以下哪种存款方式最适合？
                  </p>
                  <el-radio-group v-model="quiz1" class="quiz-options">
                    <el-radio label="A">活期存款</el-radio>
                    <el-radio label="B">1年期定期存款</el-radio>
                    <el-radio label="C">3个月定期存款</el-radio>
                    <el-radio label="D">通知存款</el-radio>
                  </el-radio-group>
                  <div class="quiz-result" v-if="quiz1">
                    <el-alert
                      :type="quiz1 === 'B' ? 'success' : 'error'"
                      :title="
                        quiz1 === 'B'
                          ? '回答正确！1年期定期存款利率最高且符合使用时间'
                          : '回答错误，正确答案是B选项'
                      "
                      show-icon
                    />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>

          <!-- 2.2 支付结算服务 -->
          <el-card class="content-card" id="section-2-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">2.2 支付结算服务</span>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握各类支付结算工具的使用方法</li>
                  <li>了解跨行转账和同行转账的区别</li>
                  <li>理解支付清算系统的运作机制</li>
                </ul>
              </div>

              <div class="service-types">
                <h4>💳 主要支付方式</h4>
                <div class="service-grid">
                  <div class="service-card">
                    <div class="service-icon">💸</div>
                    <h5>转账汇款</h5>
                    <p>支持同行转账、跨行转账、实时到账、普通到账等多种方式</p>
                    <div class="service-features">
                      <span class="feature-tag">实时到账</span>
                      <span class="feature-tag">手续费低</span>
                    </div>
                  </div>
                  <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h5>移动支付</h5>
                    <p>通过手机银行、微信、支付宝等渠道完成便捷支付</p>
                    <div class="service-features">
                      <span class="feature-tag">便捷快速</span>
                      <span class="feature-tag">安全可靠</span>
                    </div>
                  </div>
                  <div class="service-card">
                    <div class="service-icon">🏢</div>
                    <h5>代收代付</h5>
                    <p>为企业提供批量代发工资、代收款项等服务</p>
                    <div class="service-features">
                      <span class="feature-tag">批量处理</span>
                      <span class="feature-tag">高效便捷</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 2.3 投资理财产品 -->
          <el-card class="content-card" id="section-2-3">
            <template #header>
              <div class="card-header">
                <span class="section-title">2.3 投资理财产品</span>
                <el-tag size="small" type="info">未开始</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>了解各类理财产品的风险收益特征</li>
                  <li>掌握基金、保险、信托产品的基本知识</li>
                  <li>学会根据客户需求推荐合适的理财产品</li>
                </ul>
              </div>

              <div class="product-comparison">
                <h4>📊 理财产品对比</h4>
                <div class="comparison-table">
                  <div class="comparison-row header">
                    <div class="col">产品类型</div>
                    <div class="col">风险等级</div>
                    <div class="col">预期收益</div>
                    <div class="col">流动性</div>
                  </div>
                  <div class="comparison-row">
                    <div class="col">货币基金</div>
                    <div class="col">
                      <el-tag size="small" type="success">低风险</el-tag>
                    </div>
                    <div class="col">2-3%</div>
                    <div class="col">T+1</div>
                  </div>
                  <div class="comparison-row">
                    <div class="col">债券基金</div>
                    <div class="col">
                      <el-tag size="small" type="warning">中低风险</el-tag>
                    </div>
                    <div class="col">4-6%</div>
                    <div class="col">T+2</div>
                  </div>
                  <div class="comparison-row">
                    <div class="col">股票基金</div>
                    <div class="col">
                      <el-tag size="small" type="danger">高风险</el-tag>
                    </div>
                    <div class="col">8-15%</div>
                    <div class="col">T+2</div>
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
                  <span class="preview-number">2.4</span>
                  <span class="preview-title">外汇与国际业务</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">2.5</span>
                  <span class="preview-title">信用卡业务</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">2.6</span>
                  <span class="preview-title">消费金融产品</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">2.7</span>
                  <span class="preview-title">企业金融服务</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">2.8</span>
                  <span class="preview-title">实操演练</span>
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
              上一章：金融基础知识
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
                下一章：风险管理与控制
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
  name: "TeachingProcessTwo",
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
      if (progress.stepTasks && progress.stepTasks["step1"]?.completed) {
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

          // 更新进度数据（在第一步的基础上叠加）
          progress.completedSteps = Math.max(progress.completedSteps || 0, 2); // 完成第二步
          progress.currentStep = Math.max(progress.currentStep || 0, 2); // 当前在第三步

          // 标记第二步的所有任务为已完成
          if (!progress.stepTasks) {
            progress.stepTasks = {};
          }
          progress.stepTasks["step1"] = {
            completed: true,
            completedCount: 8, // 第二步有8个任务
            totalCount: 8,
          };

          // 保存到 localStorage
          localStorage.setItem("teachingProgress", JSON.stringify(progress));

          isCompleted.value = true;

          ElMessage.success({
            message: "恭喜完成第二章学习！进度已保存",
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
      router.push("/teaching-process/one");
    };

    const nextChapter = () => {
      router.push("/teaching-process/three");
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
.service-types h4,
.product-comparison h4 {
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

.concept-grid,
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.concept-item,
.service-card {
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  background: #fafafa;
  transition: all 0.3s;
}

.concept-item:hover,
.service-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.concept-item h5,
.service-card h5 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
}

.concept-item p,
.service-card p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
}

.service-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.service-features {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.feature-tag {
  padding: 2px 8px;
  background: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  font-size: 12px;
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

.comparison-table {
  margin-top: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  overflow: hidden;
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 1fr;
  border-bottom: 1px solid #e4e7ed;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row.header {
  background: #f5f7fa;
  font-weight: 600;
}

.comparison-row .col {
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #e4e7ed;
}

.comparison-row .col:last-child {
  border-right: none;
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

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .content-container {
    padding: 0 15px;
  }

  .concept-grid,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .nav-center h2 {
    font-size: 16px;
  }

  .comparison-row {
    grid-template-columns: 1fr;
  }

  .comparison-row .col {
    border-right: none;
    border-bottom: 1px solid #e4e7ed;
  }

  .nav-buttons {
    flex-direction: column;
  }
}
</style>
