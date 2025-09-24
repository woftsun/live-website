<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDownloadDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const downloadStableApp = () => {
  window.open('https://tools.woftsun.cn/livetools3.3.3.zip', '_blank')
  isDownloadDropdownOpen.value = false
}

const downloadBetaApp = () => {
  window.open('https://tools.woftsun.cn/livetools3.4.0.zip', '_blank')
  isDownloadDropdownOpen.value = false
}

const downloadStableAndCloseMenu = () => {
  downloadStableApp()
  closeMobileMenu()
}

const downloadBetaAndCloseMenu = () => {
  downloadBetaApp()
  closeMobileMenu()
}

const toggleDownloadDropdown = () => {
  isDownloadDropdownOpen.value = !isDownloadDropdownOpen.value
}

const closeDownloadDropdown = () => {
  isDownloadDropdownOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <RouterLink to="/" style="text-decoration: none">
          <!-- 桌面端显示文字标题 -->
          <h2
            class="logo-text"
            style="color: #1e40af; margin: 0; font-weight: 700; font-size: 1.5rem"
          >
            本地生活直播助手
          </h2>
          <!-- 移动端显示图标 -->
          <img class="logo-icon" src="/src/assets/icon.png" alt="本地生活直播助手" />
        </RouterLink>
      </div>

      <!-- 桌面端导航 -->
      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">首页</RouterLink>
        <RouterLink to="/features" class="nav-link">功能</RouterLink>
        <RouterLink to="/pricing" class="nav-link">定价</RouterLink>
        <RouterLink to="/tutorial" class="nav-link">教程</RouterLink>
        <RouterLink to="/contact" class="nav-link">联系作者</RouterLink>
      </nav>

      <div class="nav-actions">
        <div
          class="download-dropdown desktop-only"
          @mouseenter="toggleDownloadDropdown"
          @mouseleave="closeDownloadDropdown"
        >
          <button class="btn-download">
            下载
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          <div class="dropdown-menu" :class="{ show: isDownloadDropdownOpen }">
            <button class="dropdown-item" @click="downloadStableApp">
              <span class="version-badge stable">正式版</span>
              <span class="version-desc">稳定版本，推荐使用</span>
            </button>
            <button class="dropdown-item" @click="downloadBetaApp">
              <span class="version-badge beta">Beta版</span>
              <span class="version-desc">测试版本，体验新功能</span>
            </button>
          </div>
        </div>
        <!-- 移动端汉堡菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端导航菜单 -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }" @click="closeMobileMenu">
      <div class="mobile-nav-content" @click.stop>
        <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          首页
        </RouterLink>
        <RouterLink to="/features" class="mobile-nav-link" @click="closeMobileMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
          </svg>
          功能
        </RouterLink>
        <RouterLink to="/pricing" class="mobile-nav-link" @click="closeMobileMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          定价
        </RouterLink>
        <RouterLink to="/tutorial" class="mobile-nav-link" @click="closeMobileMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          教程
        </RouterLink>
        <RouterLink to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          联系作者
        </RouterLink>
        <button class="mobile-download-btn" @click="downloadStableAndCloseMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          下载正式版
        </button>
        <button class="mobile-download-btn mobile-beta-btn" @click="downloadBetaAndCloseMenu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          下载Beta版
        </button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  background: transparent;
  backdrop-filter: none;
  border: 1px solid transparent;
  border-radius: 15px;
  z-index: 1000;
  transition: all 0.3s ease;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.nav-container {
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo h2 {
  color: #1e40af;
  margin: 0;
  font-weight: 700;
  font-size: 1.5rem;
}

.main-nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #1e40af;
}

.nav-link.router-link-active {
  color: #1e40af;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1e40af;
  border-radius: 1px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-icon {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  background: #f3f4f6;
  color: #1e40af;
}

.btn-download {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-download:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

/* 下载下拉菜单 */
.download-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f8fafc;
}

.version-badge {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.version-badge.stable {
  color: #1e40af;
}

.version-badge.beta {
  color: #f59e0b;
}

.version-desc {
  font-size: 0.8rem;
  color: #6b7280;
  text-align: left;
}

/* Logo 响应式显示 */
.logo-text {
  display: block;
}

.logo-icon {
  display: none;
  width: 40px;
  height: 40px;
  object-fit: contain;
}

/* 移动端汉堡菜单按钮 */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: #f3f4f6;
  color: #1e40af;
}

/* 移动端导航菜单 */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav.open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: white;
  padding: 2rem 1.5rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.mobile-nav.open .mobile-nav-content {
  transform: translateX(0);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  border-bottom: 1px solid #f3f4f6;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #1e40af;
}

.mobile-nav-link.router-link-active {
  color: #1e40af;
  background: #f0f7ff;
  margin: 0 -1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.mobile-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background: #1e40af;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.mobile-download-btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.mobile-beta-btn {
  background: #f59e0b;
  margin-top: 1rem;
}

.mobile-beta-btn:hover {
  background: #d97706;
}

.desktop-only {
  display: block;
}

@media (max-width: 768px) {
  header {
    width: 95%;
    top: 0.5rem;
  }

  .nav-container {
    padding: 0 1rem;
  }

  /* 隐藏桌面端元素 */
  .logo-text {
    display: none;
  }

  .logo-icon {
    display: block;
  }

  .main-nav {
    display: none;
  }

  .desktop-only {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>
