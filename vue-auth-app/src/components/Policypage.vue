<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-green-700 text-white shadow-lg">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold">AgriMicroInsurance</div>
          <div class="flex items-center space-x-6">
            <div class="flex space-x-6">
              <a v-for="item in menuItems" 
                 :key="item.en"
                 href="#" 
                 class="hover:text-green-200 transition-colors">
                {{ currentLang === 'en' ? item.en : item.hi }}
              </a>
            </div>
            <button @click="toggleLanguage" 
                    class="ml-4 px-3 py-1 border rounded-md hover:bg-green-600 transition-colors">
              {{ currentLang === 'en' ? 'हिंदी' : 'English' }}
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <div class="bg-green-600 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">
          {{ currentLang === 'en' ? 'Agricultural Micro Insurance Policies' : 'कृषि माइक्रो बीमा पॉलिसियां' }}
        </h1>
        <p class="text-xl mb-8">
          {{ currentLang === 'en' ? 
            'Protecting farmers across various agricultural zones' : 
            'विभिन्न कृषि क्षेत्रों में किसानों की सुरक्षा के लिए' }}
        </p>
        <button class="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors">
          {{ currentLang === 'en' ? 'Get Started' : 'शुरू करें' }}
        </button>
      </div>
    </div>

    <!-- Plans Section -->
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ currentLang === 'en' ? 'Available Policies' : 'उपलब्ध पॉलिसियां' }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="plan in plans" 
             :key="plan.name.en" 
             class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold mb-4">{{ currentLang === 'en' ? plan.name.en : plan.name.hi }}</h3>
          <div class="mb-4 text-green-700 font-semibold">
            {{ currentLang === 'en' ? 'Risk Level: ' : 'जोखिम स्तर: ' }}
            {{ currentLang === 'en' ? plan.riskLevel.en : plan.riskLevel.hi }}
          </div>
          <div class="mb-4">
            {{ currentLang === 'en' ? 'Base Premium: ' : 'मूल प्रीमियम: ' }}
            {{ currentLang === 'en' ? plan.premium.en : plan.premium.hi }}
          </div>
          <div class="mb-6">
            {{ currentLang === 'en' ? 'Maximum Coverage: ' : 'अधिकतम कवरेज: ' }}
            {{ currentLang === 'en' ? plan.coverage.en : plan.coverage.hi }}
          </div>
          <button class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            {{ currentLang === 'en' ? 'Learn More' : 'और जानें' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Special Discounts -->
    <div class="bg-gray-100 py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">
          {{ currentLang === 'en' ? 'Special Discounts' : 'विशेष छूट' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-bold mb-4">
              {{ currentLang === 'en' ? 'Early Warning System Discount' : 'पूर्व चेतावनी प्रणाली छूट' }}
            </h3>
            <p class="mb-4">
              {{ currentLang === 'en' ? 
                '10% premium reduction when you enroll in our weather alert system' : 
                'मौसम चेतावनी प्रणाली में नामांकन पर प्रीमियम में 10% की कटौती' }}
            </p>
            <button class="text-green-600 font-semibold hover:text-green-700">
              {{ currentLang === 'en' ? 'Learn More →' : 'और जानें →' }}
            </button>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-bold mb-4">
              {{ currentLang === 'en' ? 'Sustainable Practices Discount' : 'सतत प्रथाओं पर छूट' }}
            </h3>
            <p class="mb-4">
              {{ currentLang === 'en' ? 
                '15% premium reduction for certified organic/sustainable farming' : 
                'प्रमाणित जैविक/सतत खेती के लिए प्रीमियम में 15% की कटौती' }}
            </p>
            <button class="text-green-600 font-semibold hover:text-green-700">
              {{ currentLang === 'en' ? 'Learn More →' : 'और जानें →' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ currentLang === 'en' ? 'Contact Us' : 'संपर्क करें' }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ currentLang === 'en' ? 'For Claims' : 'दावों के लिए' }}
          </h3>
          <p class="mb-2">{{ currentLang === 'en' ? 'Toll Free: ' : 'टोल फ्री: ' }}1800-XXX-XXXX</p>
          <p>{{ currentLang === 'en' ? 'Email: ' : 'ईमेल: ' }}claims@microagriinsurance.com</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">
            {{ currentLang === 'en' ? 'General Inquiries' : 'सामान्य पूछताछ' }}
          </h3>
          <p class="mb-2">{{ currentLang === 'en' ? 'Phone: ' : 'फोन: ' }}+91-XX-XXXX-XXXX</p>
          <p>{{ currentLang === 'en' ? 'Email: ' : 'ईमेल: ' }}info@microagriinsurance.com</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-green-800 text-white py-8">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <p class="mb-4">
            {{ currentLang === 'en' ? 
              'Terms and conditions apply. Please read the policy document carefully before purchasing.' : 
              'नियम और शर्तें लागू। कृपया खरीदने से पहले पॉलिसी दस्तावेज़ को ध्यान से पढ़ें।' }}
          </p>
          <p>&copy; 2025 AgriMicroInsurance</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BilingualInsurancePage',
  data() {
    return {
      currentLang: 'en',
      menuItems: [
        { en: 'Home', hi: 'होम' },
        { en: 'Plans', hi: 'योजनाएं' },
        { en: 'About', hi: 'हमारे बारे में' },
        { en: 'Contact', hi: 'संपर्क' }
      ],
      plans: [
        {
          name: {
            en: 'Standard Alluvial Protection Plan',
            hi: 'मानक जलोढ़ सुरक्षा योजना'
          },
          riskLevel: {
            en: 'Low to Medium',
            hi: 'कम से मध्यम'
          },
          premium: {
            en: '3% of crop value',
            hi: 'फसल मूल्य का 3%'
          },
          coverage: {
            en: '90% of expected crop value',
            hi: 'अपेक्षित फसल मूल्य का 90%'
          }
        },
        {
          name: {
            en: 'Black Soil Security Plan',
            hi: 'काली मिट्टी सुरक्षा योजना'
          },
          riskLevel: {
            en: 'Medium',
            hi: 'मध्यम'
          },
          premium: {
            en: '4% of crop value',
            hi: 'फसल मूल्य का 4%'
          },
          coverage: {
            en: '85% of expected crop value',
            hi: 'अपेक्षित फसल मूल्य का 85%'
          }
        },
        {
          name: {
            en: 'Red Soil Protection Plan',
            hi: 'लाल मिट्टी सुरक्षा योजना'
          },
          riskLevel: {
            en: 'Medium to High',
            hi: 'मध्यम से उच्च'
          },
          premium: {
            en: '4.5% of crop value',
            hi: 'फसल मूल्य का 4.5%'
          },
          coverage: {
            en: '80% of expected crop value',
            hi: 'अपेक्षित फसल मूल्य का 80%'
          }
        }
      ]
    }
  },
  methods: {
    toggleLanguage() {
      this.currentLang = this.currentLang === 'en' ? 'hi' : 'en'
    }
  }
}
</script>

