<template>
  <div class="detail-page">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div class="nav-container">
        <div class="nav-left">
          <el-button
            type="text"
            @click="$router.push('/teaching-process')"
          >
            <el-icon><ArrowLeft /></el-icon>
            返回教学过程
          </el-button>
        </div>
        <div class="nav-center">
          <h2>第一步：金融基础知识学习</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">1 / 6</span>
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
              <h3>📚 第一步：金融基础知识学习</h3>
              <el-tag type="info">第1章 / 共6章</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress
                :percentage="16.67"
                :stroke-width="8"
                color="#409EFF"
              />
              <span class="progress-text">16.7% 完成</span>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">

          <!-- 1.1 金融学基础 -->
          <el-card class="content-card" id="section-1-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">1.1 金融学基础</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>理解货币的本质和职能</li>
                  <li>掌握利率、通货膨胀、汇率等基本概念</li>
                  <li>了解金融市场的运行机制</li>
                </ul>
              </div>

              <div class="key-concepts">
                <h4>📖 核心概念</h4>
                <div class="concept-grid">
                  <div class="concept-item">
                    <h5>货币的职能</h5>
                    <p>货币具有价值尺度、流通手段、支付手段、贮藏手段和世界货币五种职能。</p>
                  </div>
                  <div class="concept-item">
                    <h5>利率</h5>
                    <p>利率是货币资金的价格，表示在一定时期内利息与本金的比率。</p>
                  </div>
                  <div class="concept-item">
                    <h5>通货膨胀</h5>
                    <p>通货膨胀是指物价普遍持续上涨，货币购买力下降的经济现象。</p>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h4>💡 练习题</h4>
                <el-card class="quiz-card">
                  <p><strong>问题：</strong>以下哪一项不属于货币的基本职能？</p>
                  <el-radio-group v-model="quiz1" class="quiz-options">
                    <el-radio label="A">价值尺度</el-radio>
                    <el-radio label="B">流通手段</el-radio>
                    <el-radio label="C">投资工具</el-radio>
                    <el-radio label="D">贮藏手段</el-radio>
                  </el-radio-group>
                  <div class="quiz-result" v-if="quiz1">
                    <el-alert
                      :type="quiz1 === 'C' ? 'success' : 'error'"
                      :title="quiz1 === 'C' ? '回答正确！' : '回答错误，正确答案是C选项'"
                      show-icon
                    />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>

          <!-- 1.2 金融机构体系 -->
          <el-card class="content-card" id="section-1-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">1.2 金融机构体系</span>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>了解各类金融机构的职能和作用</li>
                  <li>掌握金融机构的组织形式</li>
                  <li>理解金融机构之间的关系</li>
                </ul>
              </div>

              <div class="institution-types">
                <h4>🏦 主要金融机构类型</h4>
                <div class="institution-grid">
                  <div class="institution-card">
                    <div class="institution-icon">🏦</div>
                    <h5>商业银行</h5>
                    <p>以盈利为目的，经营存款、贷款、结算等业务的金融机构</p>
                  </div>
                  <div class="institution-card">
                    <div class="institution-icon">🏛️</div>
                    <h5>中央银行</h5>
                    <p>国家的银行，负责制定和执行货币政策，维护金融稳定</p>
                  </div>
                  <div class="institution-card">
                    <div class="institution-icon">📈</div>
                    <h5>投资银行</h5>
                    <p>专门从事证券发行、交易、投资咨询等业务的金融机构</p>
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
                  <span class="preview-number">1.3</span>
                  <span class="preview-title">金融市场</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">1.4</span>
                  <span class="preview-title">财务报表分析</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">1.5</span>
                  <span class="preview-title">基本财务指标</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">1.6</span>
                  <span class="preview-title">知识测试</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
              </div>
            </div>
          </el-card>

        </div>

        <!-- 底部导航 -->
        <div class="bottom-nav">
          <div class="nav-buttons">
            <el-button
              type="primary"
              size="large"
              @click="nextChapter"
            >
              下一章：金融机构体系
              <el-icon><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

export default {
  name: 'TeachingProcessOne',
  components: {
    ArrowLeft,
    ArrowRight
  },
  setup() {
    const router = useRouter()
    const quiz1 = ref('')

    const nextChapter = () => {
      ElMessage.success('即将进入下一章学习！')
      // 这里可以添加保存学习进度的逻辑
      setTimeout(() => {
        router.push('/teaching-process/two')
      }, 1000)
    }

    return {
      quiz1,
      nextChapter
    }
  }
}
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.nav-bar {
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
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
  padding: 20px 0;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
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

.learning-objectives h4,
.key-concepts h4,
.practice-section h4,
.institution-types h4 {
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
.institution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.concept-item,
.institution-card {
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  background: #fafafa;
}

.concept-item h5,
.institution-card h5 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
}

.concept-item p,
.institution-card p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
}

.institution-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.quiz-card {
  margin-top: 15px;
}

.quiz-options {
  margin: 15px 0;
}

.quiz-options .el-radio {
  display: block;
  margin-bottom: 10px;
}

.quiz-result {
  margin-top: 15px;
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
  justify-content: center;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .content-container {
    padding: 0 15px;
  }

  .concept-grid,
  .institution-grid {
    grid-template-columns: 1fr;
  }

  .nav-center h2 {
    font-size: 16px;
  }
}
</style>
