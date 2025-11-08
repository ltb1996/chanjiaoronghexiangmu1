<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside :width="sidebarCollapsed ? '64px' : '200px'" class="sidebar">
      <div class="logo">
        <h2 v-if="!sidebarCollapsed">金融产教融合</h2>
        <h2 v-else>金融</h2>
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="sidebarCollapsed"
        router
        class="sidebar-menu"
      >
        <el-menu-item index="/dashboard">
          <el-icon><DataAnalysis /></el-icon>
          <template #title>数据看板</template>
        </el-menu-item>
        <el-menu-item index="/teaching-system">
          <el-icon><Document /></el-icon>
          <template #title>教学体系</template>
        </el-menu-item>
        <el-menu-item index="/project-showcase">
          <el-icon><FolderOpened /></el-icon>
          <template #title>项目展示</template>
        </el-menu-item>
        <el-menu-item index="/ecosystem-map">
          <el-icon><Connection /></el-icon>
          <template #title>生态图谱</template>
        </el-menu-item>
        <el-menu-item index="/teaching-process">
          <el-icon><VideoPlay /></el-icon>
          <template #title>教学过程</template>
        </el-menu-item>
        <el-menu-item index="/resource-library">
          <el-icon><Collection /></el-icon>
          <template #title>资源库</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 主内容区 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class="header">
        <div class="header-left">
          <el-button
            :icon="sidebarCollapsed ? Expand : Fold"
            circle
            @click="toggleSidebar"
          />
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ currentTitle }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <span class="platform-title">实践教学可视化平台</span>
        </div>
      </el-header>

      <!-- 内容区域 -->
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../../stores/app'
import {
  DataAnalysis,
  Document,
  FolderOpened,
  Connection,
  VideoPlay,
  Collection,
  Expand,
  Fold
} from '@element-plus/icons-vue'

export default {
  name: 'Layout',
  components: {
    DataAnalysis,
    Document,
    FolderOpened,
    Connection,
    VideoPlay,
    Collection,
    Expand,
    Fold
  },
  setup() {
    const route = useRoute()
    const appStore = useAppStore()

    const sidebarCollapsed = computed(() => appStore.sidebarCollapsed)
    const activeMenu = computed(() => route.path)
    const currentTitle = computed(() => route.meta.title || '首页')

    // 路由变化时更新激活菜单
    watch(() => route.path, (newPath) => {
      appStore.setActiveMenu(newPath)
    }, { immediate: true })

    const toggleSidebar = () => {
      appStore.toggleSidebar()
    }

    return {
      sidebarCollapsed,
      activeMenu,
      currentTitle,
      toggleSidebar,
      Expand,
      Fold
    }
  }
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.sidebar {
  background-color: #304156;
  transition: width 0.3s;
  overflow: hidden;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #2b3a4a;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.sidebar-menu {
  border: none;
  background-color: #304156;
}

.sidebar-menu :deep(.el-menu-item) {
  color: #bfcbd9;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: #263445;
  color: #409eff;
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: #409eff;
  color: #fff;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-right {
  display: flex;
  align-items: center;
}

.platform-title {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.main-content {
  background-color: #f0f2f5;
  padding: 20px;
  overflow-y: auto;
}
</style>

