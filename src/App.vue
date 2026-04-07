<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDownloadDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 平台下载链接配置
const platforms = [
  {
    id: 'douyin',
    name: '抖音本地生活版',
    desc: '适用于抖音本地生活商家',
    url: 'https://tools.woftsun.cn/livetools3.5.12.zip',
    version: 'v3.5.12',
    color: '#1f2937',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
  {
    id: 'shipinhao',
    name: '视频号版',
    desc: '适用于微信视频号商家',
    url: 'https://tools.woftsun.cn/sph/sphtools1.2.1.zip',
    version: 'v1.2.0',
    color: '#07c160',
    comingSoon: false,
    icon: `<path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM19.087 7.958c-3.96 0-7.175 2.724-7.175 6.076 0 3.353 3.215 6.077 7.175 6.077.772 0 1.514-.112 2.21-.315a.67.67 0 0 1 .559.076l1.484.87a.254.254 0 0 0 .13.042.228.228 0 0 0 .226-.23c0-.055-.022-.11-.037-.165l-.305-1.155a.46.46 0 0 1 .166-.519c1.43-1.05 2.342-2.606 2.342-4.34 0-3.693-3.215-6.417-6.775-6.417z"/>`,
  },
  {
    id: 'douyin-ec',
    name: '抖音电商版',
    desc: '适用于抖音电商商家',
    url: 'https://tools.woftsun.cn/buyin/livetools-ds1.2.1.zip',
    version: 'v1.2.1',
    color: '#fe2c55',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
]

const downloadPlatform = (url: string) => {
  window.open(url, '_blank')
  isDownloadDropdownOpen.value = false
}

const downloadPlatformAndCloseMenu = (url: string) => {
  window.open(url, '_blank')
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
      <RouterLink to="/" class="logo">
        <img src="/src/assets/icon.svg" alt="小鸟智播" class="logo-img" />
        <span class="logo-text">小鸟智播</span>
      </RouterLink>

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
            <div class="dropdown-header">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>选择平台版本</span>
            </div>
            <button
              v-for="platform in platforms"
              :key="platform.id"
              class="dropdown-item"
              :class="{ 'coming-soon': platform.comingSoon }"
              :disabled="platform.comingSoon"
              @click="!platform.comingSoon && downloadPlatform(platform.url)"
            >
              <div class="platform-item-info">
                <div
                  class="platform-item-icon"
                  :style="{ color: platform.comingSoon ? '#94a3b8' : platform.color }"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    v-html="platform.icon"
                  ></svg>
                </div>
                <div class="platform-item-text">
                  <span class="platform-item-name">{{ platform.name }}</span>
                  <span class="platform-item-desc">{{ platform.desc }}</span>
                </div>
              </div>
              <span
                class="platform-item-version"
                :class="{ 'coming-soon-badge': platform.comingSoon }"
                >{{ platform.version }}</span
              >
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
        <div class="mobile-download-section">
          <div class="mobile-download-label">下载客户端</div>
          <button
            v-for="platform in platforms"
            :key="platform.id"
            class="mobile-download-btn"
            :class="{ 'mobile-coming-soon': platform.comingSoon }"
            :disabled="platform.comingSoon"
            @click="!platform.comingSoon && downloadPlatformAndCloseMenu(platform.url)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              :style="{ color: platform.comingSoon ? '#94a3b8' : platform.color }"
              v-html="platform.icon"
            ></svg>
            <span class="mobile-btn-text">
              <span class="mobile-btn-name">{{ platform.name }}</span>
              <span
                class="mobile-btn-version"
                :class="{ 'coming-soon-text': platform.comingSoon }"
                >{{ platform.version }}</span
              >
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <h3>小鸟智播</h3>
          <p>专业的直播自动化场控工具</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h4>产品</h4>
            <RouterLink to="/features">功能介绍</RouterLink>
            <RouterLink to="/pricing">定价方案</RouterLink>
            <RouterLink to="/tutorial">使用教程</RouterLink>
          </div>
          <div class="footer-col">
            <h4>支持平台</h4>
            <span>抖音本地生活</span>
            <span>微信视频号</span>
            <span>抖音电商</span>
          </div>
          <div class="footer-col">
            <h4>关于</h4>
            <RouterLink to="/contact">联系作者</RouterLink>
            <RouterLink to="/about">关于我们</RouterLink>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 小鸟智播. All rights reserved.</p>
      </div>
    </div>
  </footer>
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

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: contain;
}

.logo-text {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e40af;
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
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  min-width: 320px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  overflow: hidden;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.8rem;
  font-weight: 500;
  color: #6b7280;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f0f7ff;
}

.platform-item-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.platform-item-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.platform-item-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.platform-item-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1f2937;
}

.platform-item-desc {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;
}

.platform-item-version {
  font-size: 0.7rem;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  flex-shrink: 0;
}

.platform-item-version.coming-soon-badge {
  background: #fef3c7;
  color: #92400e;
  font-weight: 600;
}

.dropdown-item.coming-soon {
  opacity: 0.65;
  cursor: default;
}

.dropdown-item.coming-soon:hover {
  background: none;
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

.mobile-download-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.mobile-download-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
}

.mobile-download-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  background: #f8fafc;
  color: #1f2937;
  border: 1px solid #e2e8f0;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
}

.mobile-download-btn:hover {
  background: #f0f7ff;
  border-color: #3b82f6;
  transform: translateY(-1px);
}

.mobile-btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.mobile-btn-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1f2937;
}

.mobile-btn-version {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;
}

.mobile-btn-version.coming-soon-text {
  color: #92400e;
  font-weight: 600;
}

.mobile-coming-soon {
  opacity: 0.55;
  cursor: default;
}

.mobile-coming-soon:hover {
  background: #f8fafc;
  border-color: #e2e8f0;
  transform: none;
}

.desktop-only {
  display: block;
}

/* Footer */
.site-footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 4rem 0 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #1e293b;
}

.footer-brand h3 {
  color: #f8fafc;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 240px;
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-col h4 {
  color: #f8fafc;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.footer-col a,
.footer-col span {
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: #e2e8f0;
}

.footer-coming {
  color: #fbbf24 !important;
  font-style: italic;
  font-size: 0.85rem !important;
}

.footer-bottom {
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: #475569;
}

@media (max-width: 768px) {
  header {
    width: 95%;
    top: 0.5rem;
  }

  .nav-container {
    padding: 0 1rem;
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

  .footer-main {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .footer-brand p {
    max-width: none;
  }

  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-col {
    align-items: center;
  }
}
</style>
