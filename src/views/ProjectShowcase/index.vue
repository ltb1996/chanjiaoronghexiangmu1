<template>
  <div class="project-showcase">
    <!-- 筛选栏 -->
    <el-card class="filter-card">
      <el-row :gutter="20" align="middle">
        <el-col :xs="24" :sm="12" :md="8">
          <el-input
            v-model="searchText"
            placeholder="搜索项目名称"
            :prefix-icon="Search"
            clearable
          />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <el-select v-model="selectedCategory" placeholder="选择分类" clearable style="width: 100%">
            <el-option label="全部分类" value="" />
            <el-option label="风险管理" value="风险管理" />
            <el-option label="数据分析" value="数据分析" />
            <el-option label="产品开发" value="产品开发" />
          </el-select>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8">
          <el-select v-model="selectedDifficulty" placeholder="选择难度" clearable style="width: 100%">
            <el-option label="全部难度" value="" />
            <el-option label="初级" value="初级" />
            <el-option label="中级" value="中级" />
            <el-option label="高级" value="高级" />
          </el-select>
        </el-col>
      </el-row>
    </el-card>

    <!-- 项目列表 -->
    <el-row :gutter="20" class="project-list">
      <el-col
        v-for="project in filteredProjects"
        :key="project.id"
        :xs="24"
        :sm="12"
        :md="8"
      >
        <el-card class="project-card" shadow="hover">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <el-tag :type="getDifficultyType(project.difficulty)" size="small">
              {{ project.difficulty }}
            </el-tag>
          </div>
          <div class="project-category">
            <el-icon><FolderOpened /></el-icon>
            <span>{{ project.category }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-info">
            <div class="info-item">
              <el-icon><Clock /></el-icon>
              <span>{{ project.duration }}</span>
            </div>
            <div class="info-item">
              <el-icon><User /></el-icon>
              <span>{{ project.participants }}人参与</span>
            </div>
          </div>
          <div class="project-actions">
            <el-button type="primary" size="small" @click="viewProject(project)">
              查看详情
            </el-button>
            <el-button
              :type="isProjectCompleted(project.id) ? 'success' : 'default'"
              size="small"
              @click="toggleProjectStatus(project.id)"
            >
              {{ isProjectCompleted(project.id) ? '已完成' : '标记完成' }}
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 项目详情对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="currentProject?.title"
      width="600px"
    >
      <div v-if="currentProject" class="project-detail">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="项目分类">
            {{ currentProject.category }}
          </el-descriptions-item>
          <el-descriptions-item label="难度等级">
            <el-tag :type="getDifficultyType(currentProject.difficulty)">
              {{ currentProject.difficulty }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="项目周期">
            {{ currentProject.duration }}
          </el-descriptions-item>
          <el-descriptions-item label="参与人数">
            {{ currentProject.participants }}人
          </el-descriptions-item>
          <el-descriptions-item label="项目描述" :span="2">
            {{ currentProject.description }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button
          type="primary"
          @click="toggleProjectStatus(currentProject.id); dialogVisible = false"
        >
          {{ isProjectCompleted(currentProject.id) ? '取消完成' : '标记完成' }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { Search, FolderOpened, Clock, User } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import projectsData from '../../data/projects.json'
import { progressStorage } from '../../utils/storage'

export default {
  name: 'ProjectShowcase',
  components: {
    Search,
    FolderOpened,
    Clock,
    User
  },
  setup() {
    const projects = ref(projectsData)
    const searchText = ref('')
    const selectedCategory = ref('')
    const selectedDifficulty = ref('')
    const dialogVisible = ref(false)
    const currentProject = ref(null)

    // 筛选项目
    const filteredProjects = computed(() => {
      return projects.value.filter(project => {
        const matchSearch = project.title.includes(searchText.value) || 
                          project.description.includes(searchText.value)
        const matchCategory = !selectedCategory.value || project.category === selectedCategory.value
        const matchDifficulty = !selectedDifficulty.value || project.difficulty === selectedDifficulty.value
        return matchSearch && matchCategory && matchDifficulty
      })
    })

    // 获取难度标签类型
    function getDifficultyType(difficulty) {
      const typeMap = {
        '初级': 'success',
        '中级': 'warning',
        '高级': 'danger'
      }
      return typeMap[difficulty] || 'info'
    }

    // 查看项目详情
    function viewProject(project) {
      currentProject.value = project
      dialogVisible.value = true
    }

    // 检查项目是否已完成
    function isProjectCompleted(projectId) {
      const completedProjects = progressStorage.getCompletedProjects()
      return completedProjects.includes(projectId)
    }

    // 切换项目完成状态
    function toggleProjectStatus(projectId) {
      const completedProjects = progressStorage.getCompletedProjects()
      const index = completedProjects.indexOf(projectId)
      
      if (index > -1) {
        // 取消完成
        completedProjects.splice(index, 1)
        progressStorage.storage.set('completedProjects', completedProjects)
        ElMessage.success('已取消完成标记')
      } else {
        // 标记完成
        progressStorage.markProjectCompleted(projectId)
        ElMessage.success('项目已标记为完成')
      }
    }

    return {
      projects,
      searchText,
      selectedCategory,
      selectedDifficulty,
      filteredProjects,
      dialogVisible,
      currentProject,
      getDifficultyType,
      viewProject,
      isProjectCompleted,
      toggleProjectStatus,
      Search
    }
  }
}
</script>

<style scoped>
.project-showcase {
  width: 100%;
}

.filter-card {
  margin-bottom: 20px;
}

.project-list {
  margin-top: 20px;
}

.project-card {
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card :deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.project-header h3 {
  margin: 0;
  font-size: 18px;
  color: #303133;
}

.project-category {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #909399;
  font-size: 14px;
  margin-bottom: 10px;
}

.project-description {
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
}

.project-info {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  padding-top: 15px;
  border-top: 1px solid #ebeef5;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #909399;
  font-size: 13px;
}

.project-actions {
  display: flex;
  gap: 10px;
}

.project-actions .el-button {
  flex: 1;
}

.project-detail {
  padding: 20px 0;
}
</style>

