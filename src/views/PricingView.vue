<script setup lang="ts">
import { ref, computed } from 'vue'

const activePlatform = ref('douyin')

// 平台配置
const platformTabs = [
  {
    id: 'full',
    name: '全功能',
    color: '#059669',
    comingSoon: false,
    icon: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  },
  {
    id: 'douyin',
    name: '抖音本地生活',
    color: '#1f2937',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
  {
    id: 'shipinhao',
    name: '视频号',
    color: '#07c160',
    comingSoon: false,
    icon: `<path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM19.087 7.958c-3.96 0-7.175 2.724-7.175 6.076 0 3.353 3.215 6.077 7.175 6.077.772 0 1.514-.112 2.21-.315a.67.67 0 0 1 .559.076l1.484.87a.254.254 0 0 0 .13.042.228.228 0 0 0 .226-.23c0-.055-.022-.11-.037-.165l-.305-1.155a.46.46 0 0 1 .166-.519c1.43-1.05 2.342-2.606 2.342-4.34 0-3.693-3.215-6.417-6.775-6.417z"/>`,
  },
  {
    id: 'douyin-ec',
    name: '抖音电商',
    color: '#fe2c55',
    comingSoon: false,
    icon: `<path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.43 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.07 2.52 5.7 5.7 5.7 3.15 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>`,
  },
]

// 定价方案数据 - 按平台区分
const pricingData: Record<
  string,
  Array<{
    id: string
    name: string
    price: number
    period: string
    description: string
    features: string[]
    buttonText: string
    popular: boolean
    badge?: string
  }>
> = {
  douyin: [
    {
      id: 'monthly',
      name: '月卡',
      price: 25,
      period: '月',
      description: '适合短期体验用户',
      features: ['支持基础功能', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: false,
    },
    {
      id: 'yearly',
      name: '年卡',
      price: 249,
      period: '年',
      description: '最受欢迎的选择',
      features: ['支持所有功能', '可远程指导', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: true,
      badge: '最畅销卡',
    },
    {
      id: 'lifetime',
      name: '永久卡',
      price: 699,
      period: '永久',
      description: '终身使用，成为代理',
      features: ['限量500份', '可远程指导', '定制官网', '拿货7折优惠'],
      buttonText: '联系作者购买',
      popular: false,
      badge: '代理',
    },
  ],
  shipinhao: [
    {
      id: 'monthly',
      name: '月卡',
      price: 25,
      period: '月',
      description: '适合短期体验用户',
      features: ['支持基础功能', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: false,
    },
    {
      id: 'yearly',
      name: '年卡',
      price: 249,
      period: '年',
      description: '最受欢迎的选择',
      features: ['支持所有功能', '可远程指导', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: true,
      badge: '最畅销卡',
    },
    {
      id: 'lifetime',
      name: '永久卡',
      price: 699,
      period: '永久',
      description: '终身使用，成为代理',
      features: ['限量500份', '可远程指导', '定制官网', '拿货7折优惠'],
      buttonText: '联系作者购买',
      popular: false,
      badge: '代理',
    },
  ],
  full: [
    {
      id: 'full-monthly',
      name: '全功能月卡',
      price: 40,
      period: '月',
      description: '解锁全部平台所有功能',
      features: ['支持所有平台全部功能', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: false,
    },
    {
      id: 'full-yearly',
      name: '全功能年卡',
      price: 399,
      period: '年',
      description: '全功能最佳性价比',
      features: ['支持所有平台全部功能', '可远程指导', '同时可以一个直播间使用'],
      buttonText: '联系作者购买',
      popular: true,
      badge: '推荐',
    },
    {
      id: 'full-lifetime',
      name: '全功能永久卡',
      price: 999,
      period: '永久',
      description: '全功能终身使用，成为代理',
      features: [
        '支持所有平台全部功能',
        '新增平台不额外收费',
        '限量500份',
        '可远程指导',
        '定制官网',
        '拿货7折优惠',
      ],
      buttonText: '联系作者购买',
      popular: false,
      badge: '代理',
    },
  ],
}

const currentPlans = computed(() => pricingData[activePlatform.value] || pricingData.douyin)
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

    <!-- Platform Tabs -->
    <section class="platform-tabs-section">
      <div class="container">
        <div class="platform-tabs">
          <button
            v-for="tab in platformTabs"
            :key="tab.id"
            class="platform-tab"
            :class="{ active: activePlatform === tab.id, 'tab-coming-soon': tab.comingSoon }"
            :disabled="tab.comingSoon"
            @click="!tab.comingSoon && (activePlatform = tab.id)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              :fill="tab.id === 'full' ? 'none' : 'currentColor'"
              :stroke="tab.id === 'full' ? 'currentColor' : 'none'"
              :stroke-width="tab.id === 'full' ? '2' : '0'"
              :style="{
                color: tab.comingSoon ? '#94a3b8' : activePlatform === tab.id ? 'white' : tab.color,
              }"
              v-html="tab.icon"
            ></svg>
            {{ tab.name }}
            <span v-if="tab.comingSoon" class="tab-soon-badge">即将上线</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="pricing-section">
      <div class="container">
        <div class="pricing-grid">
          <div
            v-for="plan in currentPlans"
            :key="plan.id + activePlatform"
            class="pricing-card"
            :class="{
              popular: plan.popular,
              featured: plan.badge === '推荐',
            }"
          >
            <div
              v-if="plan.badge"
              class="plan-badge"
              :class="{
                agent: plan.badge === '代理' || plan.badge === '全功能代理',
                full: plan.badge?.startsWith('全功能'),
              }"
            >
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
            <h3>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                style="flex-shrink: 0"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              重要安全提醒
            </h3>
            <p>
              <strong>严禁破解行为：</strong>我们采用先进的反破解技术和实时监控系统。
              一旦发现任何破解、逆向工程或非法使用行为，相关店铺账号将被<span class="highlight"
                >永久封禁</span
              >， 且不予退款。请务必通过正当渠道购买和使用本产品。
            </p>
            <div class="warning-features">
              <div class="feature-item">
                <span class="feature-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dc2626"
                    stroke-width="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <span>实时监控系统</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dc2626"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <span>反破解技术</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dc2626"
                    stroke-width="2"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
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

.page-header .section-title::after {
  display: block;
}

.section-title {
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

.section-subtitle {
  color: #6b7280;
  font-size: 1.05rem;
  margin-top: 1rem;
}

/* Platform Tabs */
.platform-tabs-section {
  padding: 2rem 0 0;
  background: #ffffff;
}

.platform-tabs {
  display: inline-flex;
  gap: 4px;
  background: var(--c-bg-muted, #f1f5f9);
  padding: 4px;
  border-radius: var(--r-md, 10px);
  margin: 0 auto;
}

.platform-tabs-section .container {
  display: flex;
  justify-content: center;
}

.platform-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 24px;
  border: none;
  background: transparent;
  color: var(--c-text-3, #64748b);
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 7px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;
  white-space: nowrap;
  position: relative;
}

.platform-tab:hover {
  color: var(--c-text, #1f2937);
  background: rgba(255, 255, 255, 0.6);
}

.platform-tab.active {
  background: var(--c-primary, #3b82f6);
  color: #fff;
  box-shadow: 0 1px 4px rgba(59, 130, 246, 0.3);
}

.platform-tab.tab-coming-soon {
  opacity: 0.5;
  cursor: default;
}

.platform-tab.tab-coming-soon:hover {
  color: var(--c-text-3, #64748b);
  background: transparent;
}

.tab-soon-badge {
  font-size: 0.55rem;
  background: #fef3c7;
  color: #92400e;
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 600;
  line-height: 1.3;
}

/* Pricing Section */
.pricing-section {
  padding: 4rem 0 6rem;
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

.plan-badge.full {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.plan-badge.full:hover {
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
}

.plan-badge.full.agent {
  background: linear-gradient(135deg, #059669 0%, #f97316 100%);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  color: #1f2937;
  margin-bottom: 1rem;
}

.cta-content p {
  color: #6b7280;
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
    grid-template-columns: repeat(3, 1fr);
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
