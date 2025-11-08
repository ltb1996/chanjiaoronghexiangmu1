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
          <h2>第三步：风险管理与控制</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">3 / 6</span>
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
              <h3>🛡️ 第三步：风险管理与控制</h3>
              <el-tag type="warning">第3步 / 共6步</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress :percentage="50" :stroke-width="8" color="#E6A23C" />
              <span class="progress-text">50% 完成</span>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">
          <!-- 3.1 信用风险管理 -->
          <el-card class="content-card" id="section-3-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">3.1 信用风险管理</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握信用风险的识别和评估方法</li>
                  <li>了解授信审批流程和标准</li>
                  <li>学习各类担保方式的特点和应用</li>
                </ul>
              </div>

              <div class="key-concepts">
                <h4>📖 核心概念</h4>
                <div class="concept-grid">
                  <div class="concept-item risk-high">
                    <div class="risk-icon">⚠️</div>
                    <h5>信用评估</h5>
                    <p>
                      通过分析借款人的财务状况、还款能力、信用历史等因素，评估其违约风险。
                    </p>
                    <div class="risk-level">
                      <span>风险等级：</span>
                      <el-tag size="small" type="danger">高</el-tag>
                    </div>
                  </div>
                  <div class="concept-item risk-medium">
                    <div class="risk-icon">📋</div>
                    <h5>授信审批</h5>
                    <p>
                      建立科学的授信审批流程，包括尽职调查、风险评级、额度核定等环节。
                    </p>
                    <div class="risk-level">
                      <span>风险等级：</span>
                      <el-tag size="small" type="warning">中</el-tag>
                    </div>
                  </div>
                  <div class="concept-item risk-low">
                    <div class="risk-icon">🔒</div>
                    <h5>担保方式</h5>
                    <p>
                      包括抵押、质押、保证等多种担保方式，降低信用风险损失。
                    </p>
                    <div class="risk-level">
                      <span>风险等级：</span>
                      <el-tag size="small" type="success">低</el-tag>
                    </div>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h4>💡 案例分析</h4>
                <el-card class="quiz-card">
                  <p>
                    <strong>案例：</strong
                    >某企业申请贷款500万元，以下哪种担保方式风险最低？
                  </p>
                  <el-radio-group v-model="quiz1" class="quiz-options">
                    <el-radio label="A">信用担保</el-radio>
                    <el-radio label="B">房产抵押</el-radio>
                    <el-radio label="C">股权质押</el-radio>
                    <el-radio label="D">第三方保证</el-radio>
                  </el-radio-group>
                  <div class="quiz-result" v-if="quiz1">
                    <el-alert
                      :type="quiz1 === 'B' ? 'success' : 'error'"
                      :title="
                        quiz1 === 'B'
                          ? '回答正确！房产抵押具有实物担保，变现能力强'
                          : '回答错误，正确答案是B选项'
                      "
                      show-icon
                    />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>

          <!-- 3.2 市场风险控制 -->
          <el-card class="content-card" id="section-3-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">3.2 市场风险控制</span>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>理解利率风险、汇率风险、股价风险的形成机制</li>
                  <li>掌握市场风险的度量方法</li>
                  <li>学习市场风险的对冲和管理策略</li>
                </ul>
              </div>

              <div class="risk-types">
                <h4>📊 主要市场风险类型</h4>
                <div class="risk-cards">
                  <div class="risk-card">
                    <div class="risk-header">
                      <span class="risk-title">📈 利率风险</span>
                      <el-progress
                        type="circle"
                        :percentage="75"
                        :width="60"
                        color="#F56C6C"
                      />
                    </div>
                    <p class="risk-desc">
                      市场利率变动导致金融资产价值波动的风险
                    </p>
                    <div class="risk-measures">
                      <h6>管理措施：</h6>
                      <ul>
                        <li>利率互换</li>
                        <li>久期管理</li>
                        <li>利率期货对冲</li>
                      </ul>
                    </div>
                  </div>

                  <div class="risk-card">
                    <div class="risk-header">
                      <span class="risk-title">💱 汇率风险</span>
                      <el-progress
                        type="circle"
                        :percentage="60"
                        :width="60"
                        color="#E6A23C"
                      />
                    </div>
                    <p class="risk-desc">
                      汇率波动导致外币资产负债价值变化的风险
                    </p>
                    <div class="risk-measures">
                      <h6>管理措施：</h6>
                      <ul>
                        <li>远期外汇合约</li>
                        <li>货币互换</li>
                        <li>外汇期权</li>
                      </ul>
                    </div>
                  </div>

                  <div class="risk-card">
                    <div class="risk-header">
                      <span class="risk-title">📉 股价风险</span>
                      <el-progress
                        type="circle"
                        :percentage="85"
                        :width="60"
                        color="#F56C6C"
                      />
                    </div>
                    <p class="risk-desc">
                      股票市场价格波动导致投资组合价值变化的风险
                    </p>
                    <div class="risk-measures">
                      <h6>管理措施：</h6>
                      <ul>
                        <li>投资组合分散</li>
                        <li>股指期货对冲</li>
                        <li>期权保护策略</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 3.3 操作风险防范 -->
          <el-card class="content-card" id="section-3-3">
            <template #header>
              <div class="card-header">
                <span class="section-title">3.3 操作风险防范</span>
                <el-tag size="small" type="info">未开始</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>识别操作风险的主要来源</li>
                  <li>建立有效的内部控制体系</li>
                  <li>掌握业务流程优化和差错处理方法</li>
                </ul>
              </div>

              <div class="control-framework">
                <h4>🔐 内部控制框架</h4>
                <div class="framework-diagram">
                  <div class="control-layer">
                    <div class="layer-title">第一道防线</div>
                    <div class="layer-content">
                      <span class="layer-icon">👥</span>
                      <div class="layer-text">
                        <strong>业务部门</strong>
                        <p>日常操作控制、岗位分离、授权审批</p>
                      </div>
                    </div>
                  </div>

                  <div class="control-layer">
                    <div class="layer-title">第二道防线</div>
                    <div class="layer-content">
                      <span class="layer-icon">🛡️</span>
                      <div class="layer-text">
                        <strong>风险管理部门</strong>
                        <p>风险识别、评估、监控、报告</p>
                      </div>
                    </div>
                  </div>

                  <div class="control-layer">
                    <div class="layer-title">第三道防线</div>
                    <div class="layer-content">
                      <span class="layer-icon">🔍</span>
                      <div class="layer-text">
                        <strong>内部审计</strong>
                        <p>独立审计、合规检查、改进建议</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 风险管理工具箱 -->
          <el-card class="tools-card">
            <template #header>
              <div class="card-header">
                <span class="section-title">🧰 风险管理工具箱</span>
              </div>
            </template>
            <div class="tools-content">
              <div class="tool-item">
                <div class="tool-icon">📐</div>
                <div class="tool-info">
                  <h5>VaR模型</h5>
                  <p>在险价值模型，量化市场风险</p>
                </div>
              </div>
              <div class="tool-item">
                <div class="tool-icon">🧪</div>
                <div class="tool-info">
                  <h5>压力测试</h5>
                  <p>极端情景下的风险评估</p>
                </div>
              </div>
              <div class="tool-item">
                <div class="tool-icon">🎭</div>
                <div class="tool-info">
                  <h5>情景分析</h5>
                  <p>多种情景下的风险模拟</p>
                </div>
              </div>
              <div class="tool-item">
                <div class="tool-icon">📊</div>
                <div class="tool-info">
                  <h5>敏感性分析</h5>
                  <p>关键变量变化的影响分析</p>
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
                  <span class="preview-number">3.4</span>
                  <span class="preview-title">流动性风险管理</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">3.5</span>
                  <span class="preview-title">反洗钱与合规</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">3.6</span>
                  <span class="preview-title">金融欺诈防范</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">3.7</span>
                  <span class="preview-title">风险量化方法</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">3.8</span>
                  <span class="preview-title">案例分析与方案设计</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 底部导航 -->
        <div class="bottom-nav">
          <div class="nav-buttons">
            <el-button @click="prevChapter">
              <el-icon><ArrowLeft /></el-icon>
              上一步：金融产品与服务
            </el-button>
            <el-button type="primary" @click="nextChapter">
              下一步：金融科技应用
              <el-icon><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

export default {
  name: "TeachingProcessThree",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  setup() {
    const router = useRouter();
    const quiz1 = ref("");

    const prevChapter = () => {
      router.push("/teaching-process/two");
    };

    const nextChapter = () => {
      ElMessage.success("即将进入下一步学习！");
      setTimeout(() => {
        router.push("/teaching-process/four");
      }, 1000);
    };

    return {
      quiz1,
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
.risk-types h4,
.control-framework h4 {
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.concept-item {
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.concept-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
}

.concept-item.risk-high {
  background: #fef0f0;
  border: 1px solid #fbc4c4;
}

.concept-item.risk-high::before {
  background: #f56c6c;
}

.concept-item.risk-medium {
  background: #fdf6ec;
  border: 1px solid #f5dab1;
}

.concept-item.risk-medium::before {
  background: #e6a23c;
}

.concept-item.risk-low {
  background: #f0f9ff;
  border: 1px solid #b3d8ff;
}

.concept-item.risk-low::before {
  background: #67c23a;
}

.concept-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.risk-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.concept-item h5 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.concept-item p {
  margin: 0 0 10px 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
}

.risk-level {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #909399;
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

.risk-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.risk-card {
  padding: 20px;
  background: white;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  transition: all 0.3s;
}

.risk-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.risk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.risk-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.risk-desc {
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.risk-measures h6 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 13px;
  font-weight: 600;
}

.risk-measures ul {
  padding-left: 20px;
  margin: 0;
}

.risk-measures li {
  color: #606266;
  font-size: 12px;
  margin-bottom: 4px;
}

.framework-diagram {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.control-layer {
  background: white;
  border: 2px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
}

.layer-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
}

.layer-content {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.layer-icon {
  font-size: 36px;
}

.layer-text strong {
  display: block;
  color: #303133;
  font-size: 15px;
  margin-bottom: 5px;
}

.layer-text p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
}

.tools-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: none;
}

.tools-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s;
}

.tool-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tool-icon {
  font-size: 28px;
}

.tool-info h5 {
  margin: 0 0 4px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.tool-info p {
  margin: 0;
  color: #909399;
  font-size: 12px;
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
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .content-container {
    padding: 0 15px;
  }

  .concept-grid,
  .risk-cards,
  .tools-content {
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

