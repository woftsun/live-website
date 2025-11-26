<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// 获取当前路径参数，如果没有则默认为 '1'
const currentId = computed(() => {
  return route.params.id || '1'
})

// 核心功能数据 - 与首页保持一致
const features = [
  {
    id: 1,
    title: '自动弹窗',
    description: '告别繁琐的人工操作，支持单品自动弹窗，以及多商品自定义弹窗',
    image: 'https://image.woftsun.cn/image/1.png',
    icon: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
           <path d="M9 9h6v6H9z"/>
           <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M1 15h6M17 9h6M17 15h6"/>`,
    details: ['智能识别商品信息', '单商品一直弹窗', '多商品组合弹窗'],
  },
  {
    id: 2,
    title: '自动发福袋',
    description: '无需人工干预，提高工作效率，提升直播间活跃度和用户粘性',
    image: 'https://image.woftsun.cn/image/5.png',
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
           <circle cx="12" cy="12" r="3"/>`,
    details: ['自动发放', '自动复制福袋并发放', '开启后福袋永远放不完'],
  },
  {
    id: 3,
    title: '自动发券',
    description: '自动发放优惠券，提高转化率和复购率，让GMV不要停下来',
    image: 'https://image.woftsun.cn/image/6.png',
    icon: `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
           <polyline points="14,2 14,8 20,8"/>
           <path d="M12 18v-6M9 15l3 3 3-3"/>`,
    details: ['识别账号中所有待发优惠券', '不停息不断放放', '后续会支持循环发放'],
  },
  {
    id: 4,
    title: '自动发评',
    description: '预设评论，随时随地想发就发，提高互动效率',
    image: 'https://image.woftsun.cn/image/2.png',
    icon: `<path d="M14 9V5a3 3 0 0 0-6 0v4"/>
           <rect x="2" y="9" width="20" height="11" rx="2" ry="2"/>
           <circle cx="12" cy="15" r="1"/>`,
    details: ['评论内容预设', '发送顺序控制', '发送频率控制'],
  },
  {
    id: 5,
    title: '自动回复',
    description: '模糊动态匹配关键词，24小时自动回复，提升用户体验和满意度',
    image: 'https://image.woftsun.cn/image/3.png',
    icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
           <path d="M13 8H7"/>
           <path d="M17 12H7"/>`,
    details: ['关键词模糊匹配', '自动回复词组不限制', '好命中'],
  },
  {
    id: 6,
    title: '自动加库存',
    description: '实时监控商品库存，自动补货提醒，确保热销商品不断货',
    image: 'https://image.woftsun.cn/image/7.png',
    icon: `<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
           <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
           <path d="M12 11h4"/>
           <path d="M12 16h4"/>
           <path d="M8 11h.01"/>
           <path d="M8 16h.01"/>`,
    details: ['库存实时监控', '自动补货提醒', '还支持快捷加库存'],
  },
]
</script>

<template>
  <main>
    <!-- Hero Section -->

    <!-- Features Gallery -->
    <section class="features-gallery">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心功能详解</h2>
          <p class="section-subtitle">六大核心功能，全方位提升您的直播效果</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            class="feature-card"
            :class="{ featured: index === 0 }"
          >
            <div class="feature-image">
              <img :src="feature.image" :alt="feature.title" />
              <div class="image-overlay">
                <div class="feature-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="2"
                    v-html="feature.icon"
                  ></svg>
                </div>
              </div>
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
              <ul class="feature-details">
                <li v-for="detail in feature.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备开始您的智能直播之旅？</h2>
          <p>加入数千家成功企业，体验自动化中控直播解决方案</p>
          <div class="cta-buttons">
            <router-link :to="`/pricing/${currentId}`" class="btn-primary">查看价格</router-link>
            <router-link :to="`/contact/${currentId}`" class="btn-secondary">联系我们</router-link>
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
  padding: 4rem 0 2rem 0;
  text-align: center;
  position: relative;
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

.hero-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 1rem;
  position: relative;
}

.hero-title::after {
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

.hero-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Features Gallery */
.features-gallery {
  padding: 6rem 0;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(248, 250, 252, 0.8);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(59, 130, 246, 0.05);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
}

.feature-card.featured {
  grid-column: span 2;
}

.feature-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.featured .feature-image {
  height: 320px;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .image-overlay {
  opacity: 1;
}

.feature-icon {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.feature-content {
  padding: 2rem;
}

.featured .feature-content {
  padding: 2.5rem;
}

.feature-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.featured .feature-content h3 {
  font-size: 1.75rem;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.feature-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-details li {
  padding: 0.5rem 0;
  color: #4b5563;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.feature-details li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: #ffffff;
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
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card.featured {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

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

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-image {
    height: 240px;
  }

  .featured .feature-image {
    height: 280px;
  }

  .faq-question {
    padding: 1.25rem 1.5rem;
  }

  .faq-answer {
    padding: 0 1.5rem 1.25rem 1.5rem;
  }

  .faq-question h4 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .feature-content {
    padding: 1.5rem;
  }

  .faq-question {
    padding: 1rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem 1rem;
  }

  .faq-question h4 {
    font-size: 0.95rem;
  }

  .faq-answer p {
    font-size: 0.9rem;
  }
}
</style>
