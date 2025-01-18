<template>
  <div class="w-full max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow">
      <div class="p-6">
        <h2 class="text-xl font-bold mb-6">Agricultural Insurance Premium Calculator</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Soil Type</label>
            <select 
              v-model="formData.soilType"
              class="w-full p-2 border rounded"
            >
              <option value="">Select Soil Type</option>
              <option v-for="soil in soilTypes" :key="soil.value" :value="soil.value">
                {{ soil.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Rainfall Level</label>
            <select
              v-model="formData.rainfall"
              class="w-full p-2 border rounded"
            >
              <option value="">Select Rainfall Level</option>
              <option v-for="level in rainfallLevels" :key="level.value" :value="level.value">
                {{ level.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Crop</label>
            <select
              v-model="formData.crop"
              class="w-full p-2 border rounded"
              :disabled="!formData.soilType"
            >
              <option value="">Select Crop</option>
              <option v-for="crop in availableCrops" :key="crop" :value="crop">
                {{ crop }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Land Size (Acres)</label>
            <input
              type="number"
              v-model="formData.landSize"
              class="w-full p-2 border rounded"
              placeholder="Enter land size in acres"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Expected Crop Value (₹ per acre)</label>
            <input
              type="number"
              v-model="formData.cropValue"
              class="w-full p-2 border rounded"
              placeholder="Enter expected value per acre"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Previous Claims</label>
            <select
              v-model="formData.previousClaims"
              class="w-full p-2 border rounded"
            >
              <option value="0">No Previous Claims</option>
              <option value="1">1 Claim</option>
              <option value="2">2 Claims</option>
              <option value="3">3+ Claims</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.hasIrrigation"
              />
              <span>Has Irrigation System</span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.usesOrganicFarming"
              />
              <span>Uses Organic Farming (15% discount)</span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.usesWeatherAlerts"
              />
              <span>Enrolled in Weather Alert System (10% discount)</span>
            </label>
          </div>

          <button
            @click="calculatePremium"
            class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            :disabled="!isFormValid"
          >
            Calculate Premium
          </button>

          <div v-if="premium" class="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <h3 class="font-bold text-lg">Annual Premium: ₹{{ premium }}</h3>
            <p class="text-sm text-gray-600">Monthly Payment: ₹{{ monthlyPremium }}</p>
            <p class="text-sm text-gray-600">Risk Multiplier: {{ riskMultiplier }}x</p>
            <p class="text-sm text-gray-600">Total Insured Value: ₹{{ totalInsuredValue }}</p>
          </div>

          <div v-if="showRiskAlert" class="flex items-start space-x-2 text-sm text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>
              {{ riskAlertMessage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsuranceCalculator',
  data() {
    return {
      formData: {
        soilType: '',
        rainfall: '',
        crop: '',
        cropValue: '',
        landSize: '',
        previousClaims: '0',
        hasIrrigation: false,
        usesOrganicFarming: false,
        usesWeatherAlerts: false
      },
      premium: null,
      soilTypes: [
        { value: 'alluvial', label: 'Alluvial Soil', basePremium: 0.03 },
        { value: 'black', label: 'Black Soil', basePremium: 0.04 },
        { value: 'red', label: 'Red Soil', basePremium: 0.045 },
        { value: 'desert', label: 'Desert Soil', basePremium: 0.06 }
      ],
      rainfallLevels: [
        { value: 'high', label: 'High (>200cm)' },
        { value: 'medium', label: 'Medium (100-200cm)' },
        { value: 'low', label: 'Low (50-100cm)' },
        { value: 'very-low', label: 'Very Low (<50cm)' }
      ],
      crops: {
        alluvial: ['Rice', 'Wheat', 'Sugarcane', 'Jute', 'Maize'],
        black: ['Cotton', 'Jowar', 'Sunflower', 'Sugarcane', 'Pulses'],
        red: ['Groundnut', 'Millets', 'Pulses', 'Cotton', 'Cashew'],
        desert: ['Bajra', 'Cluster Beans', 'Moth Beans']
      },
      optimalCombinations: {
        alluvial: {
          high: ['Rice', 'Jute'],
          medium: ['Wheat', 'Maize'],
          low: ['Wheat']
        },
        black: {
          high: ['Sugarcane'],
          medium: ['Cotton', 'Jowar'],
          low: ['Cotton']
        },
        red: {
          high: ['Cashew'],
          medium: ['Groundnut'],
          low: ['Millets']
        },
        desert: {
          low: ['Bajra'],
          'very-low': ['Bajra']
        }
      }
    }
  },
  computed: {
    availableCrops() {
      return this.formData.soilType ? this.crops[this.formData.soilType] : []
    },
    isFormValid() {
      return this.formData.soilType && 
             this.formData.rainfall && 
             this.formData.crop && 
             this.formData.cropValue && 
             this.formData.landSize
    },
    riskMultiplier() {
      return this.calculateRiskMultiplier().toFixed(2)
    },
    monthlyPremium() {
      return this.premium ? (this.premium / 12).toFixed(2) : '0'
    },
    totalInsuredValue() {
      return (parseFloat(this.formData.cropValue) * parseFloat(this.formData.landSize)).toFixed(2)
    },
    showRiskAlert() {
      return this.formData.soilType && this.formData.rainfall && this.formData.crop
    },
    riskAlertMessage() {
      return this.calculateRiskMultiplier() === 1 
        ? "This is an optimal crop choice for your conditions!"
        : "Consider choosing crops better suited for these conditions to reduce premium."
    }
  },
  methods: {
    calculateRiskMultiplier() {
      const { soilType, rainfall, crop, hasIrrigation, previousClaims } = this.formData
      let multiplier = 1.0

      if (!this.optimalCombinations[soilType]?.[rainfall]?.includes(crop)) {
        multiplier *= hasIrrigation ? 1.5 : 2.0
      }

      multiplier *= (1 + (parseInt(previousClaims) * 0.1))
      return multiplier
    },
    calculatePremium() {
      const basePremium = this.soilTypes.find(s => s.value === this.formData.soilType).basePremium
      const riskMultiplier = this.calculateRiskMultiplier()
      let finalPremium = basePremium * riskMultiplier

      if (this.formData.usesOrganicFarming) finalPremium *= 0.85
      if (this.formData.usesWeatherAlerts) finalPremium *= 0.90

      const totalValue = parseFloat(this.formData.cropValue) * parseFloat(this.formData.landSize)
      this.premium = (finalPremium * totalValue).toFixed(2)
    }
  }
}
</script>

