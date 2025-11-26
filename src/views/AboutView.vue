<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 获取当前路径参数，如果没有则默认为 '1'
const currentId = computed(() => {
  return route.params.id || '1'
})

// 团队成员数据
const teamMembers = ref([
  {
    id: 1,
    name: '张明',
    position: '创始人 & CEO',
    description: '10年直播行业经验，曾任职于知名互联网公司，专注于直播技术创新',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: '李雪',
    position: '技术总监',
    description: 'AI算法专家，负责智能回复和数据分析系统的研发',
    avatar: '👩‍💻'
  },
  {
    id: 3,
    name: '王强',
    position: '产品经理',
    description: '用户体验设计师，致力于打造最佳的用户交互体验',
    avatar: '👨‍🎨'
  },
  {
    id: 4,
    name: '陈佳',
    position: '运营总监',
    description: '市场营销专家，负责产品推广和用户增长策略',
    avatar: '👩‍💼'
  }
])

// 公司数据
const companyStats = ref([
  {
    id: 1,
    number: '10000+',
    label: '活跃用户',
    description: '每日活跃的直播主播'
  },
  {
    id: 2,
    number: '50+',
    label: '合作平台',
    description: '支持的直播平台数量'
  },
  {
    id: 3,
    number: '99.9%',
    label: '系统稳定性',
    description: '服务可用性保障'
  },
  {
    id: 4,
    number: '24/7',
    label: '技术支持',
    description: '全天候客户服务'
  }
])

// 价值观数据
const values = ref([
  {
    id: 1,
    title: '创新驱动',
    description: '持续技术创新，为用户提供最前沿的直播解决方案',
    icon: '🚀'
  },
  {
    id: 2,
    title: '用户至上',
    description: '以用户需求为中心，不断优化产品体验',
    icon: '❤️'
  },
  {
    id: 3,
    title: '专业可靠',
    description: '提供稳定可靠的服务，确保用户业务连续性',
    icon: '🛡️'
  },
  {
    id: 4,
    title: '开放合作',
    description: '与生态伙伴共同发展，构建开放的直播生态',
    icon: '🤝'
  }
])
</script>

<template>
  <main>
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>关于我们</h1>
        <p>专注于直播行业的智能化解决方案，让每一次直播都更精彩</p>
      </div>
    </section>

    <!-- Company Introduction -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2>我们的使命</h2>
            <p>
              直播助手致力于为直播行业提供最智能、最高效的自动化解决方案。
              我们相信技术的力量能够让每一位直播主播都能专注于内容创作，
              而将繁琐的运营工作交给AI来处理。
            </p>
            <p>
              自成立以来，我们已经帮助数万名直播主播提升了直播效率，
              增加了收入，让他们能够更好地与观众互动，创造更有价值的内容。
            </p>
          </div>
          <div class="intro-stats">
            <div 
              v-for="stat in companyStats" 
              :key="stat.id"
              class="stat-item"
            >
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-description">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2>核心团队</h2>
        <p class="section-subtitle">由经验丰富的行业专家组成的团队</p>
        <div class="team-grid">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="team-card"
          >
            <div class="member-avatar">{{ member.avatar }}</div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <div class="member-position">{{ member.position }}</div>
              <p>{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2>我们的价值观</h2>
        <p class="section-subtitle">指导我们前进的核心理念</p>
        <div class="values-grid">
          <div 
            v-for="value in values" 
            :key="value.id"
            class="value-card"
          >
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <h2>加入我们的旅程</h2>
        <p>如果您对我们的产品感兴趣，或者希望与我们合作，欢迎联系我们</p>
        <div class="cta-buttons">
          <router-link :to="`/contact/${currentId}`" class="btn-primary">联系我们</router-link>
          <router-link :to="`/pricing/${currentId}`" class="btn-secondary">查看定价</router-link>
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
  padding: 2rem 0;
  text-align: center;
  background: #f8fafc;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #6b7280;
}

/* Introduction Section */
.intro-section {
  padding: 4rem 0;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-text h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.intro-text p {
  color: #6b7280;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.intro-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: #6b7280;
}

/* Team Section */
.team-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.team-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.member-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.member-position {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-info p {
  color: #6b7280;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  padding: 4rem 0;
}

.values-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.value-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.value-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Contact CTA */
.contact-cta {
  padding: 4rem 0;
  background: #f8fafc;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.contact-cta p {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: 2px solid #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-secondary:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .intro-stats {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .intro-section,
  .team-section,
  .values-section,
  .contact-cta {
    padding: 3rem 0;
  }
  
  .team-card,
  .value-card {
    padding: 1.5rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>
