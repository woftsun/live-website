<script setup lang="ts">
import { ref } from 'vue'

// 支持平台数据
const supportedPlatforms = ref([
  {
    id: 'douyin',
    name: '抖音本地生活',
    desc: '自动弹窗 · 发福袋 · 发券 · 发评 · 回复 · 加库存',
    featureCount: 6,
    color: '#1f2937',
    bgColor: '#f1f5f9',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
  {
    id: 'shipinhao',
    name: '微信视频号',
    desc: '自动弹窗 · 自动发评 · 自动回复',
    featureCount: 3,
    color: '#07c160',
    bgColor: '#ecfdf5',
    comingSoon: false,
    icon: `<path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM19.087 7.958c-3.96 0-7.175 2.724-7.175 6.076 0 3.353 3.215 6.077 7.175 6.077.772 0 1.514-.112 2.21-.315a.67.67 0 0 1 .559.076l1.484.87a.254.254 0 0 0 .13.042.228.228 0 0 0 .226-.23c0-.055-.022-.11-.037-.165l-.305-1.155a.46.46 0 0 1 .166-.519c1.43-1.05 2.342-2.606 2.342-4.34 0-3.693-3.215-6.417-6.775-6.417z"/>`,
  },
  {
    id: 'douyin-ec',
    name: '抖音电商',
    desc: '自动弹窗 · 自动发评 · 自动回复',
    featureCount: 3,
    color: '#fe2c55',
    bgColor: '#fef2f2',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
])

// 核心功能数据
const features = ref([
  {
    id: 1,
    title: '自动弹窗',
    description: '告别繁琐的人工操作，支持单品自动弹窗，以及多商品自定义弹窗',
    icon: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
           <path d="M9 9h6v6H9z"/>
           <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M1 15h6M17 9h6M17 15h6"/>`,
  },
  {
    id: 2,
    title: '自动发福袋',
    description: '无需人工干预，提高工作效率，提升直播间活跃度和用户粘性',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
           <circle cx="12" cy="12" r="3"/>`,
  },
  {
    id: 3,
    title: '自动发券',
    description: '自动发放优惠券，提高转化率和复购率，让GMV不要停下来',
    icon: `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
           <polyline points="14,2 14,8 20,8"/>
           <path d="M12 18v-6M9 15l3 3 3-3"/>`,
  },
  {
    id: 4,
    title: '自动发评',
    description: '预设评论，随时随地想发就发，提高互动效率',
    icon: `<path d="M14 9V5a3 3 0 0 0-6 0v4"/>
           <rect x="2" y="9" width="20" height="11" rx="2" ry="2"/>
           <circle cx="12" cy="15" r="1"/>`,
  },
  {
    id: 5,
    title: '自动回复',
    description: '模糊动态匹配关键词，24小时自动回复，提升用户体验和满意度',
    icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
           <path d="M13 8H7"/>
           <path d="M17 12H7"/>`,
  },
  {
    id: 6,
    title: '自动加库存',
    description: '实时监控商品库存，自动补货提醒，确保热销商品不断货',
    icon: `<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
           <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
           <path d="M12 11h4"/>
           <path d="M12 16h4"/>
           <path d="M8 11h.01"/>
           <path d="M8 16h.01"/>`,
  },
])

// 用户评价数据
const testimonials = ref([
  {
    id: 1,
    content: '小鸟智播大大提高了我的直播效率，自动发评和自动回复功能非常实用。',
    author: {
      name: '麦当****旗舰店',
      role: '美食主播',
      avatar:
        'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_e6ac5212021f5aea2b871028cab72e2c~c5_300x300.jpeg?from=2956013662',
    },
    column: 1,
  },
  {
    id: 2,
    content: '插件非常好用，而且使用方便，对小白来说太友好了，价格也很便宜。',
    author: {
      name: '太**西',
      role: '达人主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chen&backgroundColor=c084fc',
    },
    column: 1,
  },
  {
    id: 3,
    content: '多个店铺可以同时使用，功能也很齐全，价格便宜，比上市面上绑定店铺的太友好了。',
    author: {
      name: '蔚***生活',
      role: '汽车主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhao&backgroundColor=fbbf24',
    },
    column: 1,
  },
  {
    id: 4,
    content: '效率提升了很多，以前需要手动处理的事情现在都自动化了。日常工作也明显提高了！',
    author: {
      name: '咔擦**擦📷',
      role: '达人主播',
      avatar:
        'https://p11.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_dabc8883601fe7003bdb5fb4fdecaf8e~c5_168x168.webp?from=4010531038',
    },
    column: 2,
  },
  {
    id: 5,
    content: '以前要盯着屏幕发福袋呢，稍不注意就错过了，现在全天都不用管，插件就给干了。',
    author: {
      name: 'DE****身房',
      role: '健身主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=liu&backgroundColor=34d399',
    },
    column: 2,
  },
  {
    id: 6,
    content: '功能齐全，作者还一直更新，有问题处理及时好评。',
    author: {
      name: '顾**居',
      role: '家具主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhou&backgroundColor=a78bfa',
    },
    column: 2,
  },
  {
    id: 7,
    content:
      '界面简洁易用，功能强大。还能同时多开，整体价格也不贵，老板自己售后反馈问题解决很及时。',
    author: {
      name: '潮玩**员',
      role: '游戏主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang&backgroundColor=60a5fa',
    },
    column: 3,
  },
  {
    id: 8,
    content: '功能太齐全了，价格是真不贵，售后也好，不限制直播间，好好好。',
    author: {
      name: '海底****大店',
      role: '美食主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sun&backgroundColor=fb7185',
    },
    column: 3,
  },
  {
    id: 9,
    content: '价格很合理，性价比很高。相比其他同类产品，功能更全面，服务也更贴心。',
    author: {
      name: '兰香**厅',
      role: '美食主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wu&backgroundColor=fde047',
    },
    column: 3,
  },
  {
    id: 10,
    content:
      '自动发券和发福袋功能太方便了，憋单的时候搭配自动加库存，轻松又方便，以前人多汗都干出来了。',
    author: {
      name: '仙螺****鲜店',
      role: '美食主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ma&backgroundColor=4ade80',
    },
    column: 4,
  },
  {
    id: 11,
    content: '产品更新很及时，新功能都很实用。作者在用心做产品，值得信赖。',
    author: {
      name: '私派***花店',
      role: '花店主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lin&backgroundColor=22d3ee',
    },
    column: 4,
  },
  {
    id: 12,
    content: '使用后减少了运营的工作压力，效率也提升了很多，让运营更多的精力放在运营工作上！',
    author: {
      name: '华**旅',
      role: '旅游主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=huang&backgroundColor=fb923c',
    },
    column: 4,
  },
  {
    id: 13,
    content: '软件好看简洁，操作也简单，看到界面基本就会了，上手很轻松，软件也非常好用。',
    author: {
      name: '悟**车',
      role: '汽车主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zheng&backgroundColor=a855f7',
    },
    column: 5,
  },
  {
    id: 14,
    content: '软件功能全且好用，又不懂的问作者都是秒回的，性价比太高了。',
    author: {
      name: '新疆***年',
      role: '美食主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xu&backgroundColor=ec4899',
    },
    column: 5,
  },
  {
    id: 15,
    content: '用了后轻松了好多呀，之前有的甲方需要一直操作，用了这个工具都再不用操心了。',
    author: {
      name: '天**车',
      role: '汽车主播',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=he&backgroundColor=06b6d4',
    },
    column: 5,
  },
])

// 按列分组评价数据
const getTestimonialsByColumn = () => {
  const columns = []
  const maxColumn = Math.max(...testimonials.value.map((item) => item.column))

  for (let i = 1; i <= maxColumn; i++) {
    const columnTestimonials = testimonials.value.filter((item) => item.column === i)
    // 为了滚动效果，重复数据
    const duplicatedTestimonials = [...columnTestimonials, ...columnTestimonials]
    columns.push(duplicatedTestimonials)
  }

  return columns
}
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <span class="orb orb1"></span>
      <span class="orb orb2"></span>
      <span class="orb orb3"></span>
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              ></polygon>
            </svg>
            多平台支持
          </div>
          <h1 class="hero-title">自动化场控工具</h1>
          <p class="hero-subtitle">工具解放双手、产品穿透客户，让您的直播更专业、更高效</p>
          <div class="hero-platforms">
            <span
              v-for="platform in supportedPlatforms"
              :key="platform.id"
              class="hero-platform-tag"
              :style="{ '--tag-color': platform.color }"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                :style="{ color: platform.color }"
                v-html="platform.icon"
              ></svg>
              {{ platform.name }}
            </span>
          </div>
        </div>
        <div class="hero-image">
          <div class="product-display">
            <div class="product-image card-left">
              <img src="https://tools.woftsun.cn/band1.png" alt="Live Assistant Demo 1" />
            </div>
            <div class="product-image card-center">
              <img src="https://tools.woftsun.cn/band.png" alt="Live Assistant Demo 2" />
            </div>
            <div class="product-image card-right">
              <img src="https://tools.woftsun.cn/band2.png" alt="Live Assistant Demo 3" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Supported Platforms Section -->
    <section class="platforms-section">
      <div class="container">
        <h2 class="section-title">支持平台</h2>
        <p class="section-subtitle">针对不同平台深度优化，提供专业的直播自动化方案</p>
        <div class="platforms-grid">
          <div
            v-for="platform in supportedPlatforms"
            :key="platform.id"
            class="platform-card"
            :class="{ 'platform-card--coming-soon': platform.comingSoon }"
            :style="{ '--card-accent': platform.color }"
          >
            <span v-if="platform.comingSoon" class="platform-coming-badge">即将上线</span>
            <div class="platform-card-header">
              <div
                class="platform-icon-wrapper"
                :style="{ background: platform.comingSoon ? '#f1f5f9' : platform.bgColor }"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  :style="{ color: platform.comingSoon ? '#94a3b8' : platform.color }"
                  v-html="platform.icon"
                ></svg>
              </div>
              <div class="platform-meta">
                <h3>{{ platform.name }}</h3>
                <span class="platform-feature-count">{{ platform.featureCount }} 项核心功能</span>
              </div>
            </div>
            <p class="platform-features-desc">{{ platform.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider">
      <span class="divider-dot"></span>
      <span class="divider-line"></span>
      <span class="divider-dot"></span>
    </div>

    <!-- Core Features Section -->
    <section class="features-preview">
      <div class="container">
        <h2 class="section-title">核心功能</h2>
        <p class="section-subtitle">
          全自动化直播助手，解放双手，提升效率 • 不限制直播间 • 不限制设备
        </p>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="feature-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e40af"
                stroke-width="2"
                v-html="feature.icon"
              ></svg>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider section-divider--light">
      <span class="divider-dot"></span>
      <span class="divider-line"></span>
      <span class="divider-dot"></span>
    </div>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">用户评价</h2>
        <p class="section-subtitle">绝大多数直播从业者都主动选择使用小鸟智播</p>
      </div>
      <div class="testimonials-container">
        <!-- 动态渲染评价列 -->
        <div
          v-for="(column, columnIndex) in getTestimonialsByColumn()"
          :key="columnIndex"
          class="testimonials-column"
          :class="columnIndex % 2 === 0 ? 'scroll-up' : 'scroll-down'"
        >
          <div v-for="testimonial in column" :key="testimonial.id" class="testimonial-card">
            <div class="testimonial-content">
              <p>{{ testimonial.content }}</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
              </div>
              <div class="author-info">
                <h4>{{ testimonial.author.name }}</h4>
                <p>{{ testimonial.author.role }}</p>
              </div>
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

/* Hero Section */
.hero {
  background: #ffffff;
  color: #1f2937;
  padding: 6rem 0 2rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 66%;
  height: 100%;
  background: #f8fafc;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(180deg, transparent, rgba(248, 250, 252, 0.5));
  pointer-events: none;
  z-index: 1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 700px;
  position: relative;
}

.hero-content::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  border-radius: 1px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  color: #1f2937;
  position: relative;
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #3b82f6;
  border-radius: 2px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.15);
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.6;
  color: #6b7280;
  position: relative;
}

.hero-platforms {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-platform-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
}

.hero-platform-tag:hover {
  border-color: var(--tag-color, #3b82f6);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: white;
  color: #374151;
  border: 2px solid #d1d5db;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  perspective: 1000px;
}

.product-display {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px; /* Space for the fanned cards at bottom */
}

.product-image {
  width: 55%;
  height: auto;
  border-radius: 20px;
  box-shadow:
    0 25px 50px rgba(59, 130, 246, 0.15),
    0 0 30px rgba(59, 130, 246, 0.08);
  overflow: hidden;
  opacity: 0.95;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  border: 4px solid #fff;
}

.card-center {
  position: relative;
  z-index: 10;
  transform: translateY(0);
}

.card-center:hover {
  transform: translateY(-10px) scale(1.05);
  z-index: 20;
}

.card-left {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 5;
  transform: translateX(-50%) rotate(-10deg) translateY(20px) scale(0.9);
}

.card-left:hover {
  transform: translateX(-60%) rotate(-15deg) translateY(10px) scale(0.95);
  z-index: 15;
}

.card-right {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 5;
  transform: translateX(50%) rotate(10deg) translateY(20px) scale(0.9);
}

.card-right:hover {
  transform: translateX(60%) rotate(15deg) translateY(10px) scale(0.95);
  z-index: 15;
}

.product-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.05), transparent);
  pointer-events: none;
  border-radius: 16px;
}

.product-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Section Title Styles */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
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

/* Testimonials Section */
.testimonials {
  padding: 5rem 0 6rem 0;
  background: #fafbfd;
  position: relative;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, white, #fafbfd);
  pointer-events: none;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 1.05rem;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.testimonials-container {
  display: flex;
  gap: 1.25rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 600px;
  overflow: hidden;
  position: relative;
}

/* 椭圆状淡化遮罩 */
.testimonials-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(250, 251, 253, 0.95) 0%,
      rgba(250, 251, 253, 0.6) 15%,
      rgba(250, 251, 253, 0.2) 25%,
      transparent 35%,
      transparent 65%,
      rgba(250, 251, 253, 0.2) 75%,
      rgba(250, 251, 253, 0.6) 85%,
      rgba(250, 251, 253, 0.95) 100%
    ),
    linear-gradient(
      to right,
      rgba(250, 251, 253, 0.8) 0%,
      rgba(250, 251, 253, 0.3) 10%,
      transparent 20%,
      transparent 80%,
      rgba(250, 251, 253, 0.3) 90%,
      rgba(250, 251, 253, 0.8) 100%
    );
  pointer-events: none;
  z-index: 10;
}

.testimonials-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  position: relative;
  z-index: 1;
}

.scroll-up {
  animation-name: scrollUp;
}

.scroll-down {
  animation-name: scrollDown;
}

@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes scrollDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.testimonial-card {
  background: rgba(248, 250, 252, 0.8);
  padding: 1.875rem;
  border-radius: 12px;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 180px;
  flex-shrink: 0;
}

.testimonial-card:hover {
  transform: scale(1.02);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.testimonial-content {
  margin-bottom: 1.25rem;
}

.testimonial-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  font-style: italic;
  margin-bottom: 1.25rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  margin-top: 1.25rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  border: 2px solid #e2e8f0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.author-info h4 {
  margin: 0;
  color: #1f2937;
  font-weight: 600;
  font-size: 1rem;
}

.author-info p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}

/* Platforms Section */
.platforms-section {
  padding: 5rem 0;
  background: #f8fafc;
  position: relative;
}

.platforms-section::before {
  content: '';
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, transparent, #f8fafc);
  pointer-events: none;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.platform-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.platform-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-accent, #3b82f6);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.platform-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.platform-card:hover::before {
  opacity: 1;
}

.platform-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.platform-icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.platform-meta h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.platform-feature-count {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

.platform-features-desc {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.platform-card--coming-soon {
  opacity: 0.7;
  position: relative;
}

.platform-card--coming-soon:hover {
  transform: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.platform-coming-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  border: 1px solid #fde68a;
}

/* Features Preview */
.features-preview {
  padding: 5rem 0 4rem;
  background: white;
  position: relative;
  overflow: hidden;
}

.features-preview::before {
  content: '';
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, #f8fafc, white);
  pointer-events: none;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.7s forwards;
}

.feature-card {
  background: rgba(248, 250, 252, 0.3);
  border: none;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: none;
}

.feature-card:hover {
  transform: translateY(-6px);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.1);
}

.feature-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  color: #3b82f6;
}

.feature-card h3 {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Section Divider */
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 1rem 0;
  background: white;
}

.section-divider--light {
  background: white;
}

.divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #cbd5e1;
}

.divider-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.3;
  z-index: 1;
  mix-blend-mode: multiply;
  animation-timing-function: ease-in-out;
}

.orb1 {
  width: 220px;
  height: 220px;
  left: 10%;
  top: 20%;
  background: radial-gradient(circle, #bfdbfe 0%, #3b82f6 80%, transparent 100%);
  animation: orbMove1 12s infinite alternate;
  filter: blur(1px); /* 基础清晰度 */
  /* 添加多层阴影来模拟被压住部分的模糊效果 */
  box-shadow:
    60px 0 40px 20px rgba(59, 130, 246, 0.3),
    80px 0 60px 30px rgba(59, 130, 246, 0.2),
    100px 0 80px 40px rgba(59, 130, 246, 0.1);
}

/* 移除after伪元素，使用更简单的方法 */

.orb2 {
  width: 160px;
  height: 160px;
  left: 70%;
  top: 10%;
  background: radial-gradient(circle, #dbeafe 0%, #1d4ed8 80%, transparent 100%);
  animation: orbMove2 14s infinite alternate;
  filter: blur(8px); /* 右侧光晕恢复模糊 */
}

.orb3 {
  width: 180px;
  height: 180px;
  left: 50%;
  top: 65%;
  background: radial-gradient(circle, #e0f2fe 0%, #0ea5e9 80%, transparent 100%);
  animation: orbMove3 16s infinite alternate;
  filter: blur(6px); /* 中间光晕适中模糊 */
}

@keyframes orbMove1 {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(40px) scale(1.08);
  }
}
@keyframes orbMove2 {
  0% {
    transform: translateX(0) scale(1);
  }
  100% {
    transform: translateX(-30px) scale(1.12);
  }
}
@keyframes orbMove3 {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-20px, -30px) scale(1.05);
  }
}

@media (max-width: 1024px) {
  .hero::before {
    width: 80%;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .product-image {
    width: 60%;
  }

  .platforms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    margin-top: 1rem;
  }

  .hero::before {
    width: 90%;
  }

  .hero-container {
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-platforms {
    flex-direction: column;
    align-items: center;
  }

  .product-display {
    transform: scale(0.9);
  }

  .product-image {
    width: 75%;
  }

  .card-left {
    transform: translateX(-30%) rotate(-8deg) translateY(10px) scale(0.9);
  }

  .card-right {
    transform: translateX(30%) rotate(8deg) translateY(10px) scale(0.9);
  }

  .platforms-section {
    padding: 3rem 0;
  }

  .platforms-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .testimonials-container {
    flex-direction: column;
    height: auto;
    gap: 1.875rem;
  }

  .testimonials-column {
    animation: none;
  }

  .testimonials-container::before {
    display: none;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
