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
          <h2>第五步：客户服务与营销</h2>
        </div>
        <div class="nav-right">
          <span class="progress-text">5 / 6</span>
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
              <h3>🤝 第五步：客户服务与营销</h3>
              <el-tag type="success">第5步 / 共6步</el-tag>
            </div>
            <div class="chapter-progress">
              <el-progress
                :percentage="83.33"
                :stroke-width="8"
                color="#67C23A"
              />
              <span class="progress-text">83.3% 完成</span>
            </div>
          </el-card>
        </div>

        <!-- 详细内容 -->
        <div class="detail-content">
          <!-- 5.1 客户关系管理 -->
          <el-card class="content-card" id="section-5-1">
            <template #header>
              <div class="card-header">
                <span class="section-title">5.1 客户关系管理</span>
                <el-tag size="small" type="success">已完成</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握客户分类和分层服务的方法</li>
                  <li>了解客户忠诚度维护的策略</li>
                  <li>学习CRM系统的应用和管理</li>
                </ul>
              </div>

              <div class="key-concepts">
                <h4>👥 客户分层体系</h4>
                <div class="customer-pyramid">
                  <div class="pyramid-level vip">
                    <div class="level-icon">💎</div>
                    <div class="level-info">
                      <h5>VIP客户</h5>
                      <p>高净值客户，提供专属服务和优先权益</p>
                      <div class="level-stats">
                        <span>占比: 5%</span>
                        <span>贡献: 40%</span>
                      </div>
                    </div>
                  </div>
                  <div class="pyramid-level premium">
                    <div class="level-icon">⭐</div>
                    <div class="level-info">
                      <h5>优质客户</h5>
                      <p>资产较高，交易活跃，提供增值服务</p>
                      <div class="level-stats">
                        <span>占比: 15%</span>
                        <span>贡献: 35%</span>
                      </div>
                    </div>
                  </div>
                  <div class="pyramid-level standard">
                    <div class="level-icon">👤</div>
                    <div class="level-info">
                      <h5>普通客户</h5>
                      <p>标准服务，关注潜力客户转化</p>
                      <div class="level-stats">
                        <span>占比: 80%</span>
                        <span>贡献: 25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h4>💡 场景模拟</h4>
                <el-card class="quiz-card">
                  <p>
                    <strong>场景：</strong
                    >客户王先生持有资产200万，月均交易5次，应归为哪一类客户？
                  </p>
                  <el-radio-group v-model="quiz1" class="quiz-options">
                    <el-radio label="A">VIP客户</el-radio>
                    <el-radio label="B">优质客户</el-radio>
                    <el-radio label="C">普通客户</el-radio>
                    <el-radio label="D">潜力客户</el-radio>
                  </el-radio-group>
                  <div class="quiz-result" v-if="quiz1">
                    <el-alert
                      :type="quiz1 === 'B' ? 'success' : 'error'"
                      :title="
                        quiz1 === 'B'
                          ? '回答正确！资产和活跃度符合优质客户标准'
                          : '回答错误，正确答案是B选项'
                      "
                      show-icon
                    />
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>

          <!-- 5.2 销售技巧 -->
          <el-card class="content-card" id="section-5-2">
            <template #header>
              <div class="card-header">
                <span class="section-title">5.2 销售技巧</span>
                <el-tag size="small" type="warning">进行中</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>掌握产品推荐的SPIN销售法</li>
                  <li>学习异议处理的技巧和方法</li>
                  <li>了解成交促成的关键要素</li>
                </ul>
              </div>

              <div class="sales-process">
                <h4>📋 销售流程五步法</h4>
                <div class="process-steps">
                  <div class="process-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h5>🔍 需求挖掘</h5>
                      <p>通过提问了解客户真实需求和痛点</p>
                      <div class="step-tips">
                        <span class="tip-tag">开放式提问</span>
                        <span class="tip-tag">倾听技巧</span>
                      </div>
                    </div>
                  </div>

                  <div class="process-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h5>💡 方案设计</h5>
                      <p>根据客户需求定制个性化解决方案</p>
                      <div class="step-tips">
                        <span class="tip-tag">产品组合</span>
                        <span class="tip-tag">价值呈现</span>
                      </div>
                    </div>
                  </div>

                  <div class="process-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h5>🎯 产品推荐</h5>
                      <p>清晰展示产品优势和客户收益</p>
                      <div class="step-tips">
                        <span class="tip-tag">FAB法则</span>
                        <span class="tip-tag">案例佐证</span>
                      </div>
                    </div>
                  </div>

                  <div class="process-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                      <h5>🛡️ 异议处理</h5>
                      <p>专业应对客户疑虑和反对意见</p>
                      <div class="step-tips">
                        <span class="tip-tag">同理心</span>
                        <span class="tip-tag">转化技巧</span>
                      </div>
                    </div>
                  </div>

                  <div class="process-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                      <h5>✅ 促成交易</h5>
                      <p>把握时机，推动客户做出购买决策</p>
                      <div class="step-tips">
                        <span class="tip-tag">试探成交</span>
                        <span class="tip-tag">限时优惠</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 5.3 客户体验设计 -->
          <el-card class="content-card experience-card" id="section-5-3">
            <template #header>
              <div class="card-header">
                <span class="section-title">5.3 客户体验设计</span>
                <el-tag size="small" type="info">未开始</el-tag>
              </div>
            </template>
            <div class="section-content">
              <div class="learning-objectives">
                <h4>🎯 学习目标</h4>
                <ul>
                  <li>理解客户体验的重要性和价值</li>
                  <li>掌握服务流程优化的方法</li>
                  <li>学习数字化服务创新的实践</li>
                </ul>
              </div>

              <div class="experience-journey">
                <h4>🗺️ 客户旅程地图</h4>
                <div class="journey-map">
                  <div class="journey-stage">
                    <div class="stage-icon">🔍</div>
                    <h5>认知阶段</h5>
                    <p>客户了解产品和服务</p>
                    <div class="touchpoints">
                      <span>广告投放</span>
                      <span>社交媒体</span>
                      <span>口碑传播</span>
                    </div>
                  </div>

                  <div class="journey-stage">
                    <div class="stage-icon">🤔</div>
                    <h5>考虑阶段</h5>
                    <p>比较评估不同选项</p>
                    <div class="touchpoints">
                      <span>官网浏览</span>
                      <span>在线咨询</span>
                      <span>产品对比</span>
                    </div>
                  </div>

                  <div class="journey-stage">
                    <div class="stage-icon">💳</div>
                    <h5>购买阶段</h5>
                    <p>完成交易和签约</p>
                    <div class="touchpoints">
                      <span>线上办理</span>
                      <span>网点服务</span>
                      <span>电子签约</span>
                    </div>
                  </div>

                  <div class="journey-stage">
                    <div class="stage-icon">😊</div>
                    <h5>体验阶段</h5>
                    <p>使用产品和服务</p>
                    <div class="touchpoints">
                      <span>APP使用</span>
                      <span>客服支持</span>
                      <span>增值服务</span>
                    </div>
                  </div>

                  <div class="journey-stage">
                    <div class="stage-icon">❤️</div>
                    <h5>忠诚阶段</h5>
                    <p>持续使用和推荐</p>
                    <div class="touchpoints">
                      <span>会员权益</span>
                      <span>推荐奖励</span>
                      <span>社群运营</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 营销策略工具箱 -->
          <el-card class="marketing-tools-card">
            <template #header>
              <div class="card-header">
                <span class="section-title">🧰 营销策略工具箱</span>
              </div>
            </template>
            <div class="tools-grid">
              <div class="tool-box">
                <div class="tool-header">
                  <span class="tool-icon">🎯</span>
                  <h5>精准营销</h5>
                </div>
                <p>基于客户画像的个性化营销</p>
                <ul class="tool-features">
                  <li>客户细分</li>
                  <li>标签管理</li>
                  <li>智能推荐</li>
                </ul>
              </div>

              <div class="tool-box">
                <div class="tool-header">
                  <span class="tool-icon">🔄</span>
                  <h5>交叉销售</h5>
                </div>
                <p>向现有客户推荐相关产品</p>
                <ul class="tool-features">
                  <li>产品关联</li>
                  <li>场景触发</li>
                  <li>优惠组合</li>
                </ul>
              </div>

              <div class="tool-box">
                <div class="tool-header">
                  <span class="tool-icon">📊</span>
                  <h5>数据分析</h5>
                </div>
                <p>营销效果追踪和优化</p>
                <ul class="tool-features">
                  <li>转化率分析</li>
                  <li>ROI计算</li>
                  <li>A/B测试</li>
                </ul>
              </div>

              <div class="tool-box">
                <div class="tool-header">
                  <span class="tool-icon">🎁</span>
                  <h5>会员运营</h5>
                </div>
                <p>客户忠诚度计划和权益管理</p>
                <ul class="tool-features">
                  <li>积分体系</li>
                  <li>等级权益</li>
                  <li>专属活动</li>
                </ul>
              </div>
            </div>
          </el-card>

          <!-- 投诉处理流程 -->
          <el-card class="complaint-card">
            <template #header>
              <div class="card-header">
                <span class="section-title">📞 投诉处理标准流程</span>
              </div>
            </template>
            <div class="complaint-flow">
              <div class="flow-item">
                <div class="flow-icon">👂</div>
                <h5>耐心倾听</h5>
                <p>让客户充分表达不满，记录关键信息</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-item">
                <div class="flow-icon">🤝</div>
                <h5>表示理解</h5>
                <p>同理客户感受，表达歉意和重视</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-item">
                <div class="flow-icon">🔍</div>
                <h5>核实问题</h5>
                <p>确认问题原因，明确责任归属</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-item">
                <div class="flow-icon">💡</div>
                <h5>提供方案</h5>
                <p>给出解决方案，征求客户意见</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-item">
                <div class="flow-icon">✅</div>
                <h5>跟踪反馈</h5>
                <p>确保问题解决，回访客户满意度</p>
              </div>
            </div>
          </el-card>

          <!-- 更多章节预览 -->
          <el-card class="preview-card">
            <div class="preview-content">
              <h4>📋 后续章节预览</h4>
              <div class="preview-items">
                <div class="preview-item">
                  <span class="preview-number">5.4</span>
                  <span class="preview-title">营销策略</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">5.5</span>
                  <span class="preview-title">投诉处理技能</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">5.6</span>
                  <span class="preview-title">金融产品营销</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">5.7</span>
                  <span class="preview-title">团队协作</span>
                  <el-tag size="mini" type="info">未开始</el-tag>
                </div>
                <div class="preview-item">
                  <span class="preview-number">5.8</span>
                  <span class="preview-title">模拟演练与方案设计</span>
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
              上一步：金融科技应用
            </el-button>
            <el-button type="primary" @click="nextChapter">
              下一步：综合实训与评估
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
  name: "TeachingProcessFive",
  components: {
    ArrowLeft,
    ArrowRight,
  },
  setup() {
    const router = useRouter();
    const quiz1 = ref("");

    const prevChapter = () => {
      router.push("/teaching-process/four");
    };

    const nextChapter = () => {
      ElMessage.success("即将进入最后一步学习！");
      setTimeout(() => {
        router.push("/teaching-process/six");
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
.sales-process h4,
.experience-journey h4 {
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

.customer-pyramid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.pyramid-level {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s;
}

.pyramid-level:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.pyramid-level.vip {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  border-left: 5px solid #ff6b6b;
}

.pyramid-level.premium {
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
  border-left: 5px solid #409eff;
}

.pyramid-level.standard {
  background: linear-gradient(135deg, #cd7f32 0%, #e8a87c 100%);
  border-left: 5px solid #67c23a;
}

.level-icon {
  font-size: 36px;
  flex-shrink: 0;
}

.level-info {
  flex: 1;
}

.level-info h5 {
  margin: 0 0 6px 0;
  color: #303133;
  font-size: 16px;
  font-weight: 600;
}

.level-info p {
  margin: 0 0 8px 0;
  color: #606266;
  font-size: 13px;
}

.level-stats {
  display: flex;
  gap: 15px;
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

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 2px solid #e4e7ed;
  border-radius: 8px;
  transition: all 0.3s;
}

.process-step:hover {
  border-color: #409eff;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.2);
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h5 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.step-content p {
  margin: 0 0 10px 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.5;
}

.step-tips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tip-tag {
  padding: 3px 10px;
  background: #ecf5ff;
  color: #409eff;
  border-radius: 12px;
  font-size: 11px;
}

.experience-card {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
}

.journey-map {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.journey-stage {
  padding: 20px;
  background: white;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.journey-stage:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.stage-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.journey-stage h5 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.journey-stage p {
  margin: 0 0 12px 0;
  color: #606266;
  font-size: 12px;
}

.touchpoints {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.touchpoints span {
  padding: 4px 8px;
  background: #f5f7fa;
  border-radius: 4px;
  font-size: 11px;
  color: #606266;
}

.marketing-tools-card {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe0b2 100%);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.tool-box {
  padding: 20px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s;
}

.tool-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.tool-icon {
  font-size: 24px;
}

.tool-header h5 {
  margin: 0;
  color: #303133;
  font-size: 15px;
  font-weight: 600;
}

.tool-box p {
  margin: 0 0 12px 0;
  color: #606266;
  font-size: 12px;
  line-height: 1.5;
}

.tool-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tool-features li {
  padding: 4px 0;
  color: #909399;
  font-size: 12px;
}

.tool-features li::before {
  content: "✓ ";
  color: #67c23a;
  font-weight: 600;
}

.complaint-card {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.complaint-flow {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
}

.flow-item {
  min-width: 150px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  text-align: center;
  flex-shrink: 0;
}

.flow-icon {
  font-size: 28px;
  margin-bottom: 8px;
}

.flow-item h5 {
  margin: 0 0 6px 0;
  color: #303133;
  font-size: 13px;
  font-weight: 600;
}

.flow-item p {
  margin: 0;
  color: #606266;
  font-size: 11px;
  line-height: 1.4;
}

.flow-arrow {
  font-size: 20px;
  color: #909399;
  flex-shrink: 0;
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

  .journey-map,
  .tools-grid {
    grid-template-columns: 1fr;
  }

  .nav-center h2 {
    font-size: 16px;
  }

  .nav-buttons {
    flex-direction: column;
  }

  .complaint-flow {
    flex-direction: column;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }
}
</style>

