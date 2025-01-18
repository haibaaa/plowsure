<template>
  <div class="w-full max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow">
      <div class="p-6">
        <h2 class="text-xl font-bold mb-6">Agricultural Insurance Premium Calculator</h2>
        
        <div class="space-y-4">
          <!-- Form Fields -->
          <div>
            <label class="block text-sm font-medium mb-1">Soil Type</label>
            <select 
              v-model="formData.soilType"
              class="w-full p-2 border rounded"
              @change="updateRecommendedPolicy"
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
              @change="updateRecommendedPolicy"
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
              @change="updateRecommendedPolicy"
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
              placeholder="Enter land size"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Expected Crop Value (₹ per acre)</label>
            <input
              type="number"
              v-model="formData.cropValue"
              class="w-full p-2 border rounded"
              placeholder="Enter expected value"
            />
          </div>

          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.hasIrrigation"
                @change="updateRecommendedPolicy"
              />
              <span>Has Irrigation System</span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.usesOrganicFarming"
                @change="updateRecommendedPolicy"
              />
              <span>Uses Organic Farming (15% discount)</span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="formData.usesWeatherAlerts"
                @change="updateRecommendedPolicy"
              />
              <span>Weather Alert System (10% discount)</span>
            </label>
          </div>

          <button
            @click="calculatePremium"
            class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            :disabled="!isFormValid"
          >
            Calculate Premium
          </button>

          <!-- Results Section -->
          <div v-if="premium && recommendedPolicy" class="mt-4 space-y-4">
            <!-- Premium Details -->
            <div class="p-4 bg-green-50 border border-green-200 rounded">
              <h3 class="font-bold text-lg">Premium Details</h3>
              <div class="space-y-2 mt-2">
                <p>Annual Premium: ₹{{ premium }}</p>
                <p>Monthly Payment: ₹{{ monthlyPremium }}</p>
                <p>Total Insured Value: ₹{{ totalInsuredValue }}</p>
              </div>
            </div>

            <!-- Recommended Policy -->
            <div class="p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 class="font-bold text-lg">Recommended Policy</h3>
              <div class="space-y-2 mt-2">
                <p class="font-medium">{{ recommendedPolicy.name }}</p>
                <p>Risk Level: {{ recommendedPolicy.riskLevel }}</p>
                <p>Coverage: {{ recommendedPolicy.coverage }}%</p>
                <p>Base Premium: {{ recommendedPolicy.basePremium }}%</p>
                
                <div v-if="appliedDiscounts.length > 0" class="mt-3">
                  <p class="font-medium">Applied Discounts:</p>
                  <ul class="list-disc list-inside">
                    <li v-for="discount in appliedDiscounts" :key="discount">{{ discount }}</li>
                  </ul>
                </div>
              </div>
            </div>
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
        hasIrrigation: false,
        usesOrganicFarming: false,
        usesWeatherAlerts: false
      },
      premium: null,
      recommendedPolicy: null,
      policies: {
        alluvial: {
          name: 'Standard Alluvial Protection Plan',
          riskLevel: 'Low to Medium',
          basePremium: 3,
          coverage: 90
        },
        black: {
          name: 'Black Soil Security Plan',
          riskLevel: 'Medium',
          basePremium: 4,
          coverage: 85
        },
        red: {
          name: 'Red Soil Protection Plan',
          riskLevel: 'Medium to High',
          basePremium: 4.5,
          coverage: 80
        },
        desert: {
          name: 'Desert Region Special Plan',
          riskLevel: 'Very High',
          basePremium: 6,
          coverage: 75
        }
      },
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
             this.formData.cropValue > 0 &&
             this.formData.landSize > 0
    },
    monthlyPremium() {
      return this.premium ? (this.premium / 12).toFixed(2) : '0'
    },
    totalInsuredValue() {
      return (parseFloat(this.formData.cropValue) * parseFloat(this.formData.landSize)).toFixed(2)
    },
    appliedDiscounts() {
      const discounts = []
      if (this.formData.usesOrganicFarming) {
        discounts.push('Organic Farming Discount (15%)')
      }
      if (this.formData.usesWeatherAlerts) {
        discounts.push('Weather Alert System Discount (10%)')
      }
      return discounts
    }
  },
  methods: {
    updateRecommendedPolicy() {
      if (this.formData.soilType) {
        this.recommendedPolicy = this.policies[this.formData.soilType]
      }
    },
    calculatePremium() {
      const basePremium = this.soilTypes.find(s => s.value === this.formData.soilType).basePremium
      let finalPremium = basePremium

      // Apply risk adjustments
      if (!this.formData.hasIrrigation) {
        finalPremium *= 1.2 // 20% increase for no irrigation
      }

      // Apply discounts
      if (this.formData.usesOrganicFarming) {
        finalPremium *= 0.85 // 15% discount
      }
      if (this.formData.usesWeatherAlerts) {
        finalPremium *= 0.90 // 10% discount
      }

      const totalValue = parseFloat(this.formData.cropValue) * parseFloat(this.formData.landSize)
      this.premium = (finalPremium * totalValue).toFixed(2)
      this.updateRecommendedPolicy()
    }
  }
}
</script>