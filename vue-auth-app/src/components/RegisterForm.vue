<template>
  <div class="w-full max-w-3xl mx-auto">
    <div class="bg-white shadow rounded-lg">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-6">Personal Information</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Basic Info Section -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">First Name *</label>
              <input
                type="text"
                v-model="formData.firstName"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter first name"
              />
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-1">Last Name *</label>
              <input
                type="text"
                v-model="formData.lastName"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter last name"
              />
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Age *</label>
              <input
                type="number"
                v-model="formData.age"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter age"
              />
              <p v-if="errors.age" class="text-red-500 text-sm mt-1">{{ errors.age }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Mobile Number *</label>
              <input
                type="tel"
                v-model="formData.mobile"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 10-digit mobile number"
              />
              <p v-if="errors.mobile" class="text-red-500 text-sm mt-1">{{ errors.mobile }}</p>
            </div>
          </div>

          <!-- ID Info Section -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">Aadhar Number *</label>
              <input
                type="text"
                v-model="formData.aadharNumber"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 12-digit Aadhar number"
              />
              <p v-if="errors.aadharNumber" class="text-red-500 text-sm mt-1">{{ errors.aadharNumber }}</p>
            </div>
            </div>
            
         

          <!-- Address Section -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Address Details</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Village/Town *</label>
                <input
                  type="text"
                  v-model="formData.address.village"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter village/town name"
                />
                <p v-if="errors.village" class="text-red-500 text-sm mt-1">{{ errors.village }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">District *</label>
                <input
                  type="text"
                  v-model="formData.address.district"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter district name"
                />
                <p v-if="errors.district" class="text-red-500 text-sm mt-1">{{ errors.district }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">State *</label>
                <select
                  v-model="formData.address.state"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select State</option>
                  <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
                <p v-if="errors.state" class="text-red-500 text-sm mt-1">{{ errors.state }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Pincode *</label>
                <input
                  type="text"
                  v-model="formData.address.pincode"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 6-digit pincode"
                />
                <p v-if="errors.pincode" class="text-red-500 text-sm mt-1">{{ errors.pincode }}</p>
              </div>
            </div>
          </div>

          <!-- Bank Details Section -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Bank Details</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Account Number *</label>
                <input
                  type="text"
                  v-model="formData.bankDetails.accountNumber"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter bank account number"
                />
                <p v-if="errors.accountNumber" class="text-red-500 text-sm mt-1">{{ errors.accountNumber }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Bank Name</label>
                <input
                  type="text"
                  v-model="formData.bankDetails.bankName"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter bank name"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Branch Name</label>
                <input
                  type="text"
                  v-model="formData.bankDetails.branchName"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter branch name"
                />
              </div>
            </div>
          </div>

          <!-- Photo Upload Section -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Documents</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Photo *</label>
                <div class="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileUpload($event, 'photo')"
                    class="w-full"
                  />
                </div>
                <p v-if="errors.photo" class="text-red-500 text-sm mt-1">{{ errors.photo }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">ID Proof</label>
                <div class="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    @change="handleFileUpload($event, 'idProof')"
                    class="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Save & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfoForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        age: '',
        mobile: '',
        
        aadharNumber: '',

        address: {
          village: '',
          district: '',
          state: '',
          pincode: ''
        },
        bankDetails: {
          accountNumber: '',
          ifscCode: '',
          bankName: '',
          branchName: ''
        },
        photo: null,
        idProof: null
      },
      errors: {},
      states: [
        "Andhra Pradesh", "Assam", "Bihar", "Gujarat", "Haryana", 
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", 
        "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"
      ]
    }
  },
  methods: {
    validateForm() {
      const newErrors = {};

      if (!this.formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!this.formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!this.formData.age || this.formData.age < 18) newErrors.age = "Age must be 18 or above";
      if (!this.formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter valid 10-digit mobile number";
      if (!this.formData.aadharNumber.match(/^\d{12}$/)) newErrors.aadharNumber = "Enter valid 12-digit Aadhar number";
      if (!this.formData.address.village.trim()) newErrors.village = "Village name is required";
      if (!this.formData.address.district.trim()) newErrors.district = "District name is required";
      if (!this.formData.address.state) newErrors.state = "State selection is required";
      if (!this.formData.address.pincode.match(/^\d{6}$/)) newErrors.pincode = "Enter valid 6-digit pincode";
      if (!this.formData.bankDetails.accountNumber.trim()) newErrors.accountNumber = "Account number is required";
      if (!this.formData.bankDetails.ifscCode.match(/^[A-Z]{4}0[A-Z0-9]{6}$/)) newErrors.ifscCode = "Enter valid IFSC code";
      if (!this.formData.photo) newErrors.photo = "Photo is required";

      this.errors = newErrors;
      return Object.keys(newErrors).length === 0;
    },

    handleFileUpload(event, type) {
      const file = event.target.files[0];
      if (file) {
        this.formData[type] = file;
      }
    },

    handleSubmit() {
      if (this.validateForm()) {
        console.log('Form submitted:', this.formData);
        // Add API call here
      }
    }
  }
}
</script>