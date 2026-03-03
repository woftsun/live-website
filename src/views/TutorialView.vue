<script setup lang="ts">
import { ref } from 'vue'

// 常见问题数据
const faqs = ref([
  {
    id: 1,
    question: '小鸟智播支持哪些平台和设备？',
    answer:
      '目前支持抖音本地生活和微信视频号两个平台，抖音电商版即将上线。均为电脑端浏览器插件，电脑端绝大多数浏览器都是支持的（除 Mac 自带的 Safari 浏览器外），推荐使用 Chrome 浏览器。',
  },
  {
    id: 2,
    question: '使用直播助手直播间会被风控吗？',
    answer:
      '完全不会，目前该助手已稳定两年多，几百家店铺使用，目前一个被风控的都没有，我们代码底层也做了模拟人工操作的逻辑，可以放心的使用啦。',
  },
  {
    id: 3,
    question: '会限制店铺或者是限制设备吗？',
    answer:
      '目前是绑定微信的，不限制店铺和设备使用的，但同时只能一个店铺（账号）登录，如果需要多个店铺（账号）开播，可以联系作者购买会员。',
  },
  {
    id: 4,
    question: '各平台版本的区别是什么？',
    answer:
      '各版本分别针对不同平台深度优化。抖音本地生活版支持6大核心功能（自动弹窗、发福袋、发券、发评、回复、加库存），视频号版目前支持3大核心功能（自动弹窗、发评、回复），抖音电商版即将上线，功能与视频号版相同（自动弹窗、发评、回复）。各版本需要分别下载安装。',
  },
  {
    id: 5,
    question: '购买了年卡或者永久卡后续新功能更新会涨价吗？',
    answer: '购买会员后，无论什么卡只要有效期内，都不会涨价。会员功能都第一时间免费更新的。',
  },
  {
    id: 6,
    question: '我可以向作者提需求吗？',
    answer:
      '当然可以，我们会一直收集用户的需求，如果需要的小伙伴多会第一时间加入开发列表的，购买永久卡小功能可以加急哦。',
  },
])

// 展开的FAQ项
const expandedFaq = ref<number | null>(null)

// 切换FAQ展开状态
const toggleFaq = (id: number) => {
  expandedFaq.value = expandedFaq.value === id ? null : id
}

// 打开视频链接
const openVideo = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <main>
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>使用教程</h1>
        <p>快速上手直播助手，开启智能直播新体验</p>

        <!-- Browser Compatibility Notice -->
        <div class="browser-notice">
          <div class="notice-content">
            <div class="notice-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div class="notice-text">
              <h3>浏览器兼容性提示</h3>
              <p>
                为了获得最佳使用体验，推荐使用 Chrome 浏览器（除 Mac 自带的 Safari
                浏览器外，其他浏览器均支持）
              </p>
            </div>
            <a
              href="https://google.cn/chrome/"
              target="_blank"
              rel="noopener noreferrer"
              class="chrome-install-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" stroke-width="2" />
              </svg>
              安装 Chrome
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Tutorial -->
    <section class="video-section">
      <div class="container">
        <h2>视频教程</h2>
        <div class="video-grid">
          <div
            class="video-card"
            @click="
              openVideo(
                'https://www.bilibili.com/video/BV1Rj8gzjEX1/?vd_source=8ce62a0a3997267ff0af117d3260485d',
              )
            "
          >
            <div
              class="video-thumbnail"
              style="background-image: url('https://image.woftsun.cn/image/install.png')"
            >
              <div class="play-button">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="white" />
                </svg>
              </div>
            </div>
            <div class="video-info">
              <h3>插件安装教程</h3>
              <p>教你快速搞定插件安装，简单易懂</p>
              <span class="video-duration">02:05</span>
            </div>
          </div>

          <div
            class="video-card"
            @click="openVideo('https://www.bilibili.com/video/BV1mY8gzvELE/')"
          >
            <div
              class="video-thumbnail"
              style="background-image: url('https://image.woftsun.cn/image/duokai.png')"
            >
              <div class="play-button">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="white" />
                </svg>
              </div>
            </div>
            <div class="video-info">
              <h3>浏览器多开教程</h3>
              <p>教你如何一台电脑一个浏览器控制多个直播间</p>
              <span class="video-duration">04:34</span>
            </div>
          </div>

          <div
            class="video-card"
            @click="
              openVideo(
                'https://www.bilibili.com/video/BV1mY8gziEuZ/?vd_source=8ce62a0a3997267ff0af117d3260485d',
              )
            "
          >
            <div
              class="video-thumbnail"
              style="background-image: url('https://image.woftsun.cn/image/use.png')"
            >
              <div class="play-button">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="white" />
                </svg>
              </div>
            </div>
            <div class="video-info">
              <h3>插件使用教程</h3>
              <p>深入了解小鸟智播所有功能和技巧</p>
              <span class="video-duration">12:48</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>常见问题</h2>
        <div class="faq-list">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="faq-item"
            :class="{ expanded: expandedFaq === faq.id }"
          >
            <button class="faq-question" @click="toggleFaq(faq.id)">
              <span>{{ faq.question }}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="faq-icon"
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
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
  padding: 4rem 0 2rem 0;
  text-align: center;
  background: #ffffff;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  position: relative;
}

.page-header h1::after {
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

.page-header p {
  font-size: 1.05rem;
  color: #6b7280;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
}

/* Browser Compatibility Notice */
.browser-notice {
  max-width: 800px;
  margin: 0 auto;
}

.notice-content {
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  border: 1px solid #e1bee7;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(156, 39, 176, 0.1);
  transition: all 0.3s ease;
}

.notice-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(156, 39, 176, 0.15);
}

.notice-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.notice-text {
  flex: 1;
}

.notice-text h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a148c;
  margin: 0 0 0.5rem 0;
}

.notice-text p {
  font-size: 0.95rem;
  color: #6a1b9a;
  margin: 0;
  line-height: 1.5;
}

.chrome-install-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #4285f4 0%, #34a853 50%, #fbbc05 75%, #ea4335 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

.chrome-install-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 133, 244, 0.4);
  text-decoration: none;
  color: white;
}

.chrome-install-btn svg {
  transition: transform 0.3s ease;
}

.chrome-install-btn:hover svg {
  transform: rotate(90deg);
}

/* Video Section */
.video-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.video-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.video-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.video-card:active {
  transform: translateY(-2px);
}

.video-thumbnail {
  position: relative;
  height: 225px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.video-info {
  padding: 1.5rem;
}

.video-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.video-info p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.video-duration {
  display: inline-block;
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* FAQ Section */
.faq-section {
  padding: 4rem 0;
}

.faq-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #3b82f6;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: #ffffff;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #1f2937;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8fafc;
}

.faq-icon {
  transition: transform 0.3s ease;
  color: #6b7280;
}

.faq-item.expanded .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #f8fafc;
}

.faq-item.expanded .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding: 1.5rem;
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .notice-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .notice-text h3 {
    font-size: 1rem;
  }

  .notice-text p {
    font-size: 0.9rem;
  }

  .chrome-install-btn {
    align-self: center;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .video-section,
  .faq-section {
    padding: 3rem 0;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.8rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .notice-content {
    padding: 1rem;
  }

  .notice-icon {
    width: 40px;
    height: 40px;
  }

  .notice-text h3 {
    font-size: 0.95rem;
  }

  .notice-text p {
    font-size: 0.85rem;
  }

  .chrome-install-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .video-section h2,
  .faq-section h2 {
    font-size: 1.6rem;
  }

  .video-thumbnail {
    height: 160px;
  }

  .play-button {
    width: 60px;
    height: 60px;
  }
}
</style>
