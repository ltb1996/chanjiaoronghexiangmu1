<template>
  <div class="resource-library">
    <!-- 分类标签 -->
    <el-card class="category-card">
      <el-tabs v-model="activeCategory" @tab-change="handleCategoryChange">
        <el-tab-pane
          v-for="category in resourceData.categories"
          :key="category.id"
          :label="category.name"
          :name="category.id"
        >
          <!-- 资源列表 -->
          <div class="resource-list">
            <el-row :gutter="20">
              <el-col
                v-for="item in category.items"
                :key="item.id"
                :xs="24"
                :sm="12"
                :md="8"
              >
                <el-card class="resource-item" shadow="hover">
                  <div class="item-header">
                    <el-icon class="item-icon" :size="32" color="#409EFF">
                      <component :is="getIconComponent(category.icon)" />
                    </el-icon>
                    <h3>{{ item.title }}</h3>
                  </div>
                  <div v-if="item.type" class="item-type">
                    <el-tag size="small" type="info">{{ item.type }}</el-tag>
                  </div>
                  <p v-if="item.description" class="item-description">
                    {{ item.description }}
                  </p>
                  <div v-if="item.duration" class="item-meta">
                    <el-icon><Clock /></el-icon>
                    <span>{{ item.duration }}</span>
                  </div>
                  <div v-if="item.requirements" class="item-requirements">
                    <h5>岗位要求：</h5>
                    <ul>
                      <li v-for="(req, idx) in item.requirements" :key="idx">
                        {{ req }}
                      </li>
                    </ul>
                    <div v-if="item.salary" class="salary">
                      <el-tag type="success">{{ item.salary }}</el-tag>
                    </div>
                  </div>
                  <div class="item-actions">
                    <el-button type="primary" size="small" @click="viewResource(item)">
                      查看详情
                    </el-button>
                    <el-button size="small" @click="downloadResource(item)">
                      <el-icon><Download /></el-icon>
                      下载
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 资源统计 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="课程模块" :value="getResourceCount('course')" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="岗位要求" :value="getResourceCount('position')" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="政策文件" :value="getResourceCount('policy')" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <el-statistic title="案例库" :value="getResourceCount('case')" />
        </el-card>
      </el-col>
    </el-row>

    <!-- 资源详情对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="currentResource?.title"
      width="600px"
    >
      <div v-if="currentResource" class="resource-detail">
        <el-descriptions :column="1" border>
          <el-descriptions-item v-if="currentResource.type" label="资源类型">
            {{ currentResource.type }}
          </el-descriptions-item>
          <el-descriptions-item v-if="currentResource.description" label="资源描述">
            {{ currentResource.description }}
          </el-descriptions-item>
          <el-descriptions-item v-if="currentResource.duration" label="课时">
            {{ currentResource.duration }}
          </el-descriptions-item>
          <el-descriptions-item v-if="currentResource.requirements" label="岗位要求">
            <ul class="requirements-list">
              <li v-for="(req, idx) in currentResource.requirements" :key="idx">
                {{ req }}
              </li>
            </ul>
          </el-descriptions-item>
          <el-descriptions-item v-if="currentResource.salary" label="薪资范围">
            <el-tag type="success">{{ currentResource.salary }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="downloadResource(currentResource)">
          <el-icon><Download /></el-icon>
          下载资源
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { Document, User, FolderOpened, Clock, Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import resourcesData from '../../data/resources.json'

export default {
  name: 'ResourceLibrary',
  components: {
    Document,
    User,
    FolderOpened,
    Clock,
    Download
  },
  setup() {
    const resourceData = ref(resourcesData)
    const activeCategory = ref('course')
    const dialogVisible = ref(false)
    const currentResource = ref(null)

    // 获取图标组件
    function getIconComponent(iconName) {
      const iconMap = {
        'Document': Document,
        'User': User,
        'FolderOpened': FolderOpened
      }
      return iconMap[iconName] || Document
    }

    // 切换分类
    function handleCategoryChange(categoryId) {
      activeCategory.value = categoryId
    }

    // 获取资源数量
    function getResourceCount(categoryId) {
      const category = resourceData.value.categories.find(c => c.id === categoryId)
      return category ? category.items.length : 0
    }

    // 查看资源详情
    function viewResource(resource) {
      currentResource.value = resource
      dialogVisible.value = true
    }

    // 下载资源
    function downloadResource(resource) {
      ElMessage.success(`正在下载：${resource.title}`)
      // 这里可以添加实际的下载逻辑
      console.log('下载资源:', resource)
    }

    return {
      resourceData,
      activeCategory,
      dialogVisible,
      currentResource,
      getIconComponent,
      handleCategoryChange,
      getResourceCount,
      viewResource,
      downloadResource
    }
  }
}
</script>

<style scoped>
.resource-library {
  width: 100%;
}

.category-card {
  margin-bottom: 20px;
}

.resource-list {
  padding: 20px 0;
}

.resource-item {
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.resource-item :deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.item-icon {
  flex-shrink: 0;
}

.item-header h3 {
  margin: 0;
  font-size: 16px;
  color: #303133;
}

.item-type {
  margin-bottom: 10px;
}

.item-description {
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
}

.item-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #909399;
  font-size: 13px;
  margin-bottom: 15px;
}

.item-requirements {
  margin-bottom: 15px;
}

.item-requirements h5 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 14px;
}

.item-requirements ul {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
}

.item-requirements li {
  padding: 5px 0;
  color: #606266;
  font-size: 13px;
  position: relative;
  padding-left: 15px;
}

.item-requirements li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #409EFF;
}

.salary {
  margin-top: 10px;
}

.item-actions {
  display: flex;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #ebeef5;
}

.item-actions .el-button {
  flex: 1;
}

.stats-row {
  margin-top: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.stat-card :deep(.el-statistic__head) {
  font-size: 14px;
  color: #909399;
}

.stat-card :deep(.el-statistic__content) {
  font-size: 28px;
  color: #409EFF;
}

.resource-detail {
  padding: 20px 0;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirements-list li {
  padding: 5px 0;
  color: #606266;
}
</style>

