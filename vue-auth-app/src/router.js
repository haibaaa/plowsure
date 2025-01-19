import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from './composables/useAuth'

import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import Dashboard from './components/Dashboard.vue'
import Policypage from './components/Policypage.vue'
import Calculator from './components/Calculator.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/dashboard', component: Dashboard },
  { path: '/policy', component: Policypage},
  { path: '/calculator', component: Calculator}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router