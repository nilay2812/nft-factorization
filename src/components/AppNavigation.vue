<template>
    <nav class="navbar navbar-right" :class="{ 'navbar-hidden': isNavbarHidden }">
      <ul class="nav-links" :class="{ 'open': isMenuOpen }">
        <li><router-link to="/#homepage" @click="navigateTo('homepage')">Home</router-link></li>
        <li><router-link to="/#marketplace" @click="navigateTo('marketplace')">Marketplace</router-link></li>
        <li><router-link to="/#create-nft" @click="navigateTo('create-nft')">Create</router-link></li>
        <li><router-link to="/#fetch-nft" @click="navigateTo('fetch-nft')">Fetch</router-link></li>
        <li><router-link to="/#lock-nft" @click="navigateTo('lock-nft')">Lock</router-link></li>
        <li><router-link to="/#buy-nft" @click="navigateTo('buy-nft')">Buy</router-link></li>
        <li><router-link to="/#transfer-nft" @click="navigateTo('transfer-nft')">Transfer</router-link></li>
        <li><router-link to="/#approval-nft" @click="navigateTo('approve-nft')">Approve</router-link></li>
      </ul>
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isNavbarHidden: false,
        lastScrollTop: 0
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      navigateTo(route) {
        this.$emit('navigate', route);
        this.isMenuOpen = false; // Close the menu after clicking on a link
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      handleScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        this.isNavbarHidden = currentScroll > this.lastScrollTop && currentScroll > 60;
        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: rgb(89,119,170);
background: linear-gradient(360deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    padding: 20px 20px;
    position: fixed;
    top: 0;
    right: 0;
    width: 49%; /* Reduce the width to 50% */
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 20px 20px; /* Round the bottom edges */
    transition: transform 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-size:0.83rem;
    
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    margin: 0 10px;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: #e4d7d7;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .nav-links li a:hover {
    background-color: #99a8c4af;
    color: #1d1d1d;
  }
  
  .hamburger-menu {
    display: none;
  }
  
  .hamburger-menu span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 5px auto;
    transition: transform 0.3s ease;
  }

  .hamburger-menu.open span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .hamburger-menu.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-menu.open span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  .navbar-hidden {
    transform: translateY(-100%);
  }
</style>