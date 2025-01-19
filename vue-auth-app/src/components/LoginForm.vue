<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="aadhaar" class="block mb-1">Aadhaar Number</label>
        <input
          type="text"
          id="aadhaar"
          v-model="aadhaar"
          required
          class="w-full px-3 py-2 border rounded-md"
          maxlength="12"
          pattern="\d{12}"
          placeholder="Enter 12-digit Aadhaar number"
        />
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter()
    const { login } = useAuth()

    const aadhaar = ref('')
    const password = ref('')
    const error = ref('')

    const handleLogin = async () => {
      try {
        await login(aadhaar.value, password.value) // Use Aadhaar number instead of email
        router.push('/dashboard') // Redirect to the dashboard after login
      } catch (err) {
        error.value = 'Invalid Aadhaar number or password'
      }
    }

    return {
      aadhaar,
      password,
      error,
      handleLogin
    }
  }
}
</script>
