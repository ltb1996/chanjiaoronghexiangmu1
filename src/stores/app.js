import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 侧边栏是否折叠
    sidebarCollapsed: false,
    // 当前选中的菜单
    activeMenu: '/dashboard'
  }),

  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    setActiveMenu(menu) {
      this.activeMenu = menu
    }
  }
})

