<script setup lang="ts">
import { ref } from 'vue'

// 定价方案数据
const pricingPlans = ref([
  {
    id: 'monthly',
    name: '月卡',
    price: 89,
    period: '月',
    description: '适合短期体验用户',
    features: ['支持所有功能', '免费更新', '同时可以一个直播间使用'],
    buttonText: '联系作者购买',
    popular: false,
  },
  {
    id: 'yearly',
    name: '年卡',
    price: 799,
    period: '年',
    description: '最受欢迎的选择',
    features: ['支持所有功能', '免费更新', '同时可以一个直播间使用'],
    buttonText: '联系作者购买',
    popular: true,
    badge: '最畅销卡',
  },
  {
    id: 'lifetime',
    name: '永久卡',
    price: 1299,
    period: '永久',
    description: '终身使用',
    features: ['限量500份', '免费更新', '永久使用'],
    buttonText: '联系作者购买',
    popular: false,
    badge: '',
  },
])
</script>

<template>
  <main>
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="section-title">定价方案</h1>
        <p class="section-subtitle">选择最适合您的套餐，开启高效直播之旅</p>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="pricing-section">
      <div class="container">
        <div class="pricing-grid">
          <div
            v-for="plan in pricingPlans"
            :key="plan.id"
            class="pricing-card"
            :class="{
              popular: plan.popular,
              featured: plan.badge === '推荐',
            }"
          >
            <div v-if="plan.badge" class="plan-badge" :class="{ agent: plan.badge === '代理' }">
              {{ plan.badge }}
            </div>
            <div class="plan-header">
              <h3>{{ plan.name }}</h3>
              <div class="price-container">
                <div class="price">
                  <span class="currency">¥</span>
                  <span class="amount">{{ plan.price }}</span>
                  <span class="period">{{ plan.period }}</span>
                </div>
              </div>
              <p class="description">{{ plan.description }}</p>
            </div>
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <button class="plan-button">
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Warning Section -->
    <section class="security-warning-section">
      <div class="container">
        <div class="warning-card">
          <div class="warning-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <path d="M8.5 2.5L12 6l3.5-3.5" />
              <path d="M12 6v14" />
              <path d="M3 12c0 7.5 9 7.5 9 0s-9-7.5-9 0" />
              <path d="M21 12c0 7.5-9 7.5-9 0s9-7.5 9 0" />
            </svg>
          </div>
          <div class="warning-content">
            <h3>⚠️ 重要安全提醒</h3>
            <p>
              <strong>严禁破解行为：</strong>我们采用先进的反破解技术和实时监控系统。
              一旦发现任何破解、逆向工程或非法使用行为，相关店铺账号将被<span class="highlight"
                >永久封禁</span
              >， 且不予退款。请务必通过正当渠道购买和使用本产品。
            </p>
            <div class="warning-features">
              <div class="feature-item">
                <span class="feature-icon">🔒</span>
                <span>实时监控系统</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🛡️</span>
                <span>反破解技术</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>即时封禁机制</span>
              </div>
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
          <p>选择适合的套餐，让直播变得更简单高效</p>
          <div class="cta-buttons">
            <button class="btn-primary">联系客服</button>
            <router-link to="/contact" class="btn-secondary">了解更多</router-link>
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

.page-header .container {
  position: relative;
  z-index: 2;
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

/* Pricing Section */
.pricing-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(226, 232, 240, 0.8);
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-12px);
  background: linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
  border-color: rgba(102, 126, 234, 0.3);
}

.pricing-card:hover::before {
  opacity: 1;
}

.pricing-card.popular {
  transform: scale(1.03);
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-color: #667eea;
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.15);
}

.pricing-card.popular:hover {
  transform: translateY(-12px) scale(1.03);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  letter-spacing: 0.3px;
  text-transform: uppercase;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.plan-badge:hover {
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.plan-badge.agent {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%);
  box-shadow: 0 4px 15px rgba(255, 154, 86, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.plan-badge.agent:hover {
  box-shadow: 0 6px 20px rgba(255, 154, 86, 0.5);
}

.plan-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.plan-header h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.price-container {
  margin-bottom: 1.5rem;
  position: relative;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.currency {
  font-size: 1.5rem;
  color: #6b7280;
  font-weight: 600;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.period {
  font-size: 1.125rem;
  color: #6b7280;
  font-weight: 500;
}

.description {
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 500;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  background: rgba(248, 250, 252, 0.5);
  border-radius: 16px;
  padding: 1.5rem;
}

.features-list li {
  padding: 1rem 0;
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
  position: relative;
  padding-left: 2rem;
  transition: all 0.2s ease;
}

.features-list li:hover {
  color: #1f2937;
  padding-left: 2.25rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 1rem;
  color: #10b981;
  font-weight: bold;
  font-size: 1.125rem;
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

.features-list li:last-child {
  border-bottom: none;
}

.plan-button {
  width: 100%;
  padding: 0.875rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: #ffffff;
  color: #6b7280;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  letter-spacing: 0;
  text-transform: none;
  position: relative;
  overflow: hidden;
}

.plan-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #f8fafc;
  border-color: #3b82f6;
  color: #3b82f6;
}

.plan-button:active {
  transform: translateY(0);
}

/* Security Warning Section */
.security-warning-section {
  background: linear-gradient(135deg, #fef2f2 0%, #fef7f7 100%);
  padding: 4rem 0;
  border-top: 1px solid #fecaca;
  border-bottom: 1px solid #fecaca;
}

.warning-card {
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
  border: 2px solid #fca5a5;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(239, 68, 68, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  transition: all 0.3s ease;
}

.warning-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.15);
  border-color: #f87171;
}

.warning-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
}

.warning-content {
  flex: 1;
}

.warning-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-content p {
  color: #374151;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.warning-content strong {
  color: #dc2626;
  font-weight: 700;
}

.highlight {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  color: #dc2626;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;
  border: 1px solid #fca5a5;
}

.warning-features {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.feature-icon {
  font-size: 1.2rem;
}

/* CTA Section */
.cta-section {
  background: #ffffff;
  color: #1f2937;
  padding: 6rem 0;
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
  flex-wrap: wrap;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
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
@media (max-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 0 2rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .pricing-section {
    padding: 4rem 0;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pricing-card.popular {
    transform: none;
  }

  .security-warning-section {
    padding: 3rem 0;
  }

  .warning-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .warning-icon {
    align-self: center;
    width: 60px;
    height: 60px;
  }

  .warning-features {
    justify-content: center;
    gap: 1rem;
  }

  .cta-section {
    padding: 4rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .pricing-card {
    padding: 1.5rem;
  }

  .warning-card {
    padding: 1.5rem;
  }

  .warning-content h3 {
    font-size: 1.25rem;
  }

  .warning-content p {
    font-size: 0.95rem;
  }

  .warning-features {
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-item {
    justify-content: center;
  }
}
</style>
