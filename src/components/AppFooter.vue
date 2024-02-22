<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 NFT Marketplace</p>
        <div class="social-links">
          <a href="#" @click.prevent="navigateTo('social-link-1')">Link 1</a>
          <a href="#" @click.prevent="navigateTo('social-link-2')">Link 2</a>
          <a href="#" @click.prevent="navigateTo('social-link-3')">Link 3</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .footer .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .footer .social-links a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-left: 10px;
  }
  
  .footer .social-links a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    .footer .social-links {
      flex-direction: column;
    }
  
    .footer .social-links a {
      margin: 5px 0;
    }
  }
  </style>
  