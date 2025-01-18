<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <p>Welcome to your dashboard, {{ user.email }}!</p>
    <p>This is a protected route that only authenticated users can access.</p>
  </div>
</template>

<script>
import { useAuth } from '../composables/useAuth'

export default {
  name: 'Dashboard',
  setup() {
    const { user } = useAuth()

    return {
      user
    }
  }
}
</script>