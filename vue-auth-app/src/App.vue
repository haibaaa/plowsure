<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold text-gray-800">KIC</router-link>
        <div v-if="isLoggedIn">
          <span class="mr-4">Welcome, {{ user.email }}</span>
          <button @click="handleLogout" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
        <div v-else>
          <router-link to="/policy" class="text-gray-600 hover:text-gray-800 mr-4">Policy</router-link>
          <router-link to="/dashboard" class="text-gray-600 hover:text-gray-800 mr-4">Dashboard</router-link>
          <router-link to="/login" class="text-gray-600 hover:text-gray-800 mr-4">Login</router-link>
          <router-link to="/calculator" class="text-gray-600 hover:text-gray-800 mr-4">Calculator</router-link>
          <router-link to="/register" class="text-gray-600 hover:text-gray-800">Register</router-link>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from './composables/useAuth'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const { user, isLoggedIn, logout } = useAuth()

    const handleLogout = async () => {
      await logout()
      router.push('/login')
    }

    return {
      user,
      isLoggedIn,
      handleLogout
    }
  }
}
</script>