import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'
import TeachingSystem from '../views/TeachingSystem/index.vue'
import ProjectShowcase from '../views/ProjectShowcase/index.vue'
import EcosystemMap from '../views/EcosystemMap/index.vue'
import TeachingProcess from '../views/TeachingProcess/index.vue'
import ResourceLibrary from '../views/ResourceLibrary/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: '数据可视化看板'
    }
  },
  {
    path: '/teaching-system',
    name: 'TeachingSystem',
    component: TeachingSystem,
    meta: {
      title: '教学体系可视化'
    }
  },
  {
    path: '/project-showcase',
    name: 'ProjectShowcase',
    component: ProjectShowcase,
    meta: {
      title: '实践项目展示'
    }
  },
  {
    path: '/ecosystem-map',
    name: 'EcosystemMap',
    component: EcosystemMap,
    meta: {
      title: '教学生态图谱'
    }
  },
  {
    path: '/teaching-process',
    name: 'TeachingProcess',
    component: TeachingProcess,
    meta: {
      title: '实训教学过程模拟'
    }
  },
  {
    path: '/resource-library',
    name: 'ResourceLibrary',
    component: ResourceLibrary,
    meta: {
      title: '可视化资源库'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 设置页面标题和激活菜单
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - 金融产教融合实践教学可视化平台`
  }
  // 更新激活菜单（需要在组件中通过store更新）
  next()
})

export default router

