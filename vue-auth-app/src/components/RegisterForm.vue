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
              <input type="text" v-model="formData.firstName"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter first name" />
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Last Name *</label>
              <input type="text" v-model="formData.lastName"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter last name" />
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Age *</label>
              <input type="number" v-model="formData.age"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter age" />
              <p v-if="errors.age" class="text-red-500 text-sm mt-1">{{ errors.age }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Mobile Number *</label>
              <input type="tel" v-model="formData.mobile"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 10-digit mobile number" />
              <p v-if="errors.mobile" class="text-red-500 text-sm mt-1">{{ errors.mobile }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <!-- Other fields remain unchanged -->
            <div>
              <label class="block text-sm font-medium mb-1">Adhaar Number *</label>
              <input type="text" v-model="formData.adharno"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 12-digit Adhaar number" />
              <p v-if="errors.adharno" class="text-red-500 text-sm mt-1">{{ errors.adharno }}</p>
            </div>
          </div>


          <!-- Address Section -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Address Details</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Village/Town *</label>
                <input type="text" v-model="formData.address.village"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter village/town name" />
                <p v-if="errors.village" class="text-red-500 text-sm mt-1">{{ errors.village }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">District *</label>
                <input type="text" v-model="formData.address.district"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter district name" />
                <p v-if="errors.district" class="text-red-500 text-sm mt-1">{{ errors.district }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">State *</label>
                <select v-model="formData.address.state"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
                  <option value="">Select State</option>
                  <option v-for="state in states" :key="state" :value="state">{{ state }}</option>
                </select>
                <p v-if="errors.state" class="text-red-500 text-sm mt-1">{{ errors.state }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Pincode *</label>
                <input type="text" v-model="formData.address.pincode"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 6-digit pincode" />
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
                <input type="text" v-model="formData.bankDetails.accountNumber"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter bank account number" />
                <p v-if="errors.accountNumber" class="text-red-500 text-sm mt-1">{{ errors.accountNumber }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Bank Name</label>
                <input type="text" v-model="formData.bankDetails.bankName"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter bank name" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Branch Name</label>
                <input type="text" v-model="formData.bankDetails.branchName"
                  class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter branch name" />
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
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
        adharno: '',
        address: {
          village: '',
          district: '',
          state: '',
          pincode: ''
        },
        bankDetails: {
          accountNumber: '',
          bankName: '',
          branchName: ''
        },
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
      if (!this.formData.adharno.match(/^\d{12}$/)) newErrors.adharno = "AdhaarNo is required";
      if (!this.formData.address.village.trim()) newErrors.village = "Village name is required";
      if (!this.formData.address.district.trim()) newErrors.district = "District name is required";
      if (!this.formData.address.state) newErrors.state = "State selection is required";
      if (!this.formData.address.pincode.match(/^\d{6}$/)) newErrors.pincode = "Enter valid 6-digit pincode";
      if (!this.formData.bankDetails.accountNumber.trim()) newErrors.accountNumber = "Account number is required";

      this.errors = newErrors;
      return Object.keys(newErrors).length === 0;
    },

    handleSubmit() {
      if (this.validateForm()) {
        // Prepare JSON object with all entered values
        const submissionData = {
          firstName: this.formData.firstName.trim(),
          lastName: this.formData.lastName.trim(),
          age: this.formData.age,
          mobile: this.formData.mobile,
          adharno: this.formData.adharno,
          address: {
            village: this.formData.address.village.trim(),
            district: this.formData.address.district.trim(),
            state: this.formData.address.state,
            pincode: this.formData.address.pincode
          },
          bankDetails: {
            accountNumber: this.formData.bankDetails.accountNumber.trim(),
            bankName: this.formData.bankDetails.bankName.trim(),
            branchName: this.formData.bankDetails.branchName.trim()
          }
        };

        // POST JSON data to the server
        fetch('http://localhost:5000/api/add-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log('Server Response:', data);
            alert('Form submitted successfully!');
          })
          .catch((error) => {
            console.error('Error posting data:', error);
            alert('Failed to submit form. Please try again.');
          });
      }
    }

  }


}

</script>