<!-- KICDashboard.vue -->
<template>
  <div class="dashboard-container">
    <!-- Background image overlay -->
    <div class="background-overlay"></div>
    
    <!-- Main content -->
    <div class="content">
      <!-- Header section -->
      <header class="header">
        <div class="logo">
          <h1><strong>KIC</strong></h1>
          <span class="full-name">Kisaan Insurance Company</span>
        </div>
      </header>

      <!-- Tagline section -->
      <div class="tagline">
        <h2 class="emphasis-text">Secure Your Farm, Your Family, and Your Future.</h2>
      </div>

      <!-- Welcome message -->
      <div class="welcome-section">
        <h3>Welcome to KIC</h3>
        <p>Protecting farmers and their livelihoods across India</p>
        <button class="get-started-btn">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KICDashboard'
}
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Add your image path here */
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.4)
    ),
    url('https://www.solidbackgrounds.com/download/2560x1440-little-green-leaves-free-website-background-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  padding: 2rem 0;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}

/* Simplified KIC title without glow */
.logo h1 {
  font-size: 5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.full-name {
  font-size: 1.4rem;
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.tagline {
  margin: 4rem 0;
  text-align: center;
}

.emphasis-text {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  transform: skew(-10deg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
  letter-spacing: 1px;
}

.welcome-section {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.welcome-section h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.welcome-section p {
  font-size: 1.2rem;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.get-started-btn {
  background: rgba(255, 255, 255, 0.9);
  color: #2E7D32;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.get-started-btn:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .logo {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo h1 {
    font-size: 3.5rem;
  }

  .emphasis-text {
    font-size: 2rem;
  }

  .welcome-section h3 {
    font-size: 1.6rem;
  }

  .welcome-section p {
    font-size: 1rem;
  }
}
</style>

