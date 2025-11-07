/**
 * LocalStorage 工具类
 * 用于存储用户学习进度、操作记录等
 */

const STORAGE_PREFIX = 'practice_teaching_'

export const storage = {
  // 设置数据
  set(key, value) {
    try {
      const data = JSON.stringify(value)
      localStorage.setItem(STORAGE_PREFIX + key, data)
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      return false
    }
  },

  // 获取数据
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(STORAGE_PREFIX + key)
      return data ? JSON.parse(data) : defaultValue
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue
    }
  },

  // 删除数据
  remove(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  },

  // 清空所有相关数据
  clear() {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key)
        }
      })
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  }
}

// 学习进度相关
export const progressStorage = {
  // 保存学习进度
  saveProgress(module, step, data = {}) {
    const progress = storage.get('progress', {})
    if (!progress[module]) {
      progress[module] = {}
    }
    progress[module].currentStep = step
    progress[module].lastUpdate = new Date().toISOString()
    progress[module].data = { ...progress[module].data, ...data }
    return storage.set('progress', progress)
  },

  // 获取学习进度
  getProgress(module) {
    const progress = storage.get('progress', {})
    return progress[module] || { currentStep: 0, data: {} }
  },

  // 标记项目完成
  markProjectCompleted(projectId) {
    const completed = storage.get('completedProjects', [])
    if (!completed.includes(projectId)) {
      completed.push(projectId)
      return storage.set('completedProjects', completed)
    }
    return true
  },

  // 获取已完成项目
  getCompletedProjects() {
    return storage.get('completedProjects', [])
  }
}

