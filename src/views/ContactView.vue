<script setup lang="ts">
// 作者信息
const authorInfo = {
  name: '作者',
  title: '全栈开发工程师',
  description:
    '擅长网站、小程序、浏览器插件以及直播工具开发，如抖音数据爬取、自动化工具开发、直播工具优化等',
  experience: '5年从业经验，3年+抖音相关开发经验',
}

// 联系方式数据
const contactMethods = [
  {
    id: 1,
    title: '微信联系',
    description: '扫码添加作者微信，获取一对一技术支持',
    qrcode: 'https://tools.woftsun.cn/wechat.png',
    type: 'wechat',
    note: '工作时间：9:00-22:00',
  },
  {
    id: 2,
    title: '公众号关注',
    description: '关注公众号，获取最新功能更新和使用教程',
    qrcode: 'https://tools.woftsun.cn/mp-qr.png',
    type: 'official',
    note: '定期发布教程和更新',
  },
]

// 插件列表（为后续扩展预留）
const plugins = [
  {
    id: 1,
    name: '小鸟智播-本地生活',
    description: '专为本地生活商家打造的智能直播工具，支持自动弹窗、发福袋、发券等功能',
    status: '已发布',
    version: 'v3.2.5',
    users: '1500+',
    features: ['自动弹窗', '自动发福袋', '自动发券', '自动发评', '自动回复', '自动加库存'],
    link: '/pricing',
  },
  {
    id: 1,
    name: '小鸟智播-视频号',
    description: '专为微信视频号商家打造的智能直播工具，支持自动弹窗、自动发评、自动回复等功能',
    status: '已发布',
    version: 'v1.0.3',
    users: '500+',
    features: ['自动弹窗', '自动发评', '自动回复'],
    link: '/pricing',
  },
  {
    id: 2,
    name: '摸鱼倒计时',
    description: '摸鱼小时钟',
    status: '已发布',
    version: 'v2.0.0',
    users: '10000+',
    features: ['下班倒计时', '周末倒计时', '节假日倒计时', '发工资倒计时'],
    link: '/pricing',
  },
]

// 服务优势
const advantages = [
  {
    id: 1,
    title: '专业技术支持',
    description: '提供一对一技术指导，解决使用过程中的任何问题',
    icon: `<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
  },
  {
    id: 2,
    title: '持续功能更新',
    description: '根据用户需求不断优化功能，免费提供版本更新',
    icon: `<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>`,
  },
  {
    id: 4,
    title: '快速响应服务',
    description: '工作时间内快速响应，节假日也提供基础技术支持',
    icon: `<path d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
  },
]
</script>

<template>
  <main>
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="section-title">联系作者</h1>
        <p class="section-subtitle">专业的技术支持，贴心的服务体验</p>
      </div>
    </section>

    <!-- Author Info Section -->
    <section class="author-section">
      <div class="container">
        <div class="author-card">
          <div class="author-avatar">
            <div class="avatar-placeholder">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                stroke-width="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div class="author-info">
            <h2>{{ authorInfo.name }}</h2>
            <p class="author-title">{{ authorInfo.title }}</p>
            <p class="author-description">{{ authorInfo.description }}</p>
            <div class="author-stats">
              <div class="stat-item">
                <span class="stat-value">{{ authorInfo.experience }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">联系方式</h2>
          <p class="section-subtitle">选择您喜欢的方式与我联系</p>
        </div>

        <div class="contact-grid">
          <div v-for="method in contactMethods" :key="method.id" class="contact-card">
            <div class="contact-header">
              <h3>{{ method.title }}</h3>
              <p class="contact-description">{{ method.description }}</p>
            </div>
            <div class="qrcode-container">
              <img :src="method.qrcode" :alt="method.title" class="qrcode-image" />
              <p class="contact-note">{{ method.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="advantages-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">服务优势</h2>
          <p class="section-subtitle">为什么选择我们的产品和服务</p>
        </div>

        <div class="advantages-grid">
          <div v-for="advantage in advantages" :key="advantage.id" class="advantage-card">
            <div class="advantage-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                stroke-width="2"
              >
                <g v-html="advantage.icon"></g>
              </svg>
            </div>
            <div class="advantage-content">
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugins Section -->
    <section class="plugins-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">我的插件作品</h2>
          <p class="section-subtitle">专注于提升直播效率的工具集合</p>
        </div>

        <div class="plugins-grid">
          <div v-for="plugin in plugins" :key="plugin.id" class="plugin-card">
            <div class="plugin-header">
              <div class="plugin-title-row">
                <h3>{{ plugin.name }}</h3>
                <span
                  class="plugin-status"
                  :class="plugin.status === '已发布' ? 'published' : 'development'"
                >
                  {{ plugin.status }}
                </span>
              </div>
              <p class="plugin-description">{{ plugin.description }}</p>
            </div>

            <div class="plugin-stats">
              <div class="stat-item">
                <span class="stat-label">版本</span>
                <span class="stat-value">{{ plugin.version }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">用户</span>
                <span class="stat-value">{{ plugin.users }}</span>
              </div>
            </div>

            <div class="plugin-features">
              <h4>核心功能</h4>
              <ul class="features-list">
                <li v-for="feature in plugin.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="plugin-actions">
              <router-link :to="plugin.link" class="btn-primary">了解详情</router-link>
            </div>
          </div>
        </div>

        <!-- 后续插件预告 -->
        <div class="coming-soon">
          <div class="coming-soon-content">
            <h3>更多插件正在开发中...</h3>
            <p>我们正在开发更多实用的直播工具，敬请期待！</p>
            <p class="coming-soon-note">有好的想法或需求？欢迎通过微信联系我</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开始使用我的插件？</h2>
          <p>扫码添加微信，获取专业技术支持和最新产品资讯</p>
          <div class="cta-buttons">
            <router-link to="/pricing" class="btn-primary">查看价格</router-link>
            <a href="#contact-section" class="btn-secondary">立即联系</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: 70px;
  background: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page Header */
.page-header {
  background: #ffffff;
  color: #1f2937;
  padding: 4rem 0 2rem 0;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #3b82f6;
  border-radius: 2px;
}

.section-subtitle {
  color: #666;
  font-size: 1rem;
  margin-top: 1rem;
}

/* Author Section */
.author-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.author-card {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  max-width: 800px;
  margin: 0 auto;
}

.author-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
}

.avatar-placeholder svg {
  stroke: white;
}

.author-info h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.author-title {
  font-size: 1.1rem;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 1rem;
}

.author-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.author-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-card {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.contact-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.contact-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode-image {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.contact-note {
  font-size: 0.875rem;
  color: #6b7280;
  font-style: italic;
}

/* Advantages Section */
.advantages-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.advantage-card {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-align: center;
}

.advantage-card:hover {
  transform: translateY(-5px);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.advantage-icon {
  width: 64px;
  height: 64px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
}

.advantage-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.advantage-content p {
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Plugins Section */
.plugins-section {
  padding: 6rem 0;
  background: #ffffff;
}

.plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.plugin-card {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.plugin-card:hover {
  transform: translateY(-5px);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.plugin-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.plugin-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.plugin-status {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plugin-status.published {
  background: #dcfce7;
  color: #166534;
}

.plugin-status.development {
  background: #fef3c7;
  color: #92400e;
}

.plugin-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.plugin-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 8px;
}

.plugin-stats .stat-item {
  text-align: left;
}

.plugin-stats .stat-label {
  display: block;
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plugin-stats .stat-value {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
}

.plugin-features h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
}

.features-list li {
  padding: 0.5rem 0;
  color: #4b5563;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

.plugin-actions {
  text-align: center;
}

/* Coming Soon */
.coming-soon {
  text-align: center;
  padding: 3rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  border: 2px dashed #e2e8f0;
}

.coming-soon-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 1rem;
}

.coming-soon-content p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.coming-soon-note {
  font-style: italic;
  color: #3b82f6 !important;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: #f8fafc;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 1rem;
}

.cta-content p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
}

.btn-secondary {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-secondary:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .plugins-grid {
    grid-template-columns: 1fr;
  }

  .advantages-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .author-card {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem;
  }

  .author-stats {
    justify-content: center;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .plugin-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .author-card {
    padding: 1.5rem;
  }

  .avatar-placeholder {
    width: 80px;
    height: 80px;
  }

  .contact-card {
    padding: 2rem;
  }

  .qrcode-image {
    width: 160px;
    height: 160px;
  }

  .advantage-card {
    padding: 1.5rem;
  }

  .plugin-card {
    padding: 2rem;
  }

  .coming-soon {
    padding: 2rem;
  }
}
</style>
