<template>
    <div class="home">
      <header>
        <h1>{{ msg }}</h1>
        <h1>
          <span class="cr">Create</span>
          <span class="co">Collect</span>
          <span class="tr">Trade </span>
          Fractional NFTs
        </h1>
      </header>
  
      <footer class="footer">
        <p>&copy; 2024 NFT Marketplace</p>
        <div class="social-links">
          <a href="#" @click.prevent="navigateTo('social-link-1')">About us</a>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    props: {
      msg: String
    },
    data() {
      return {
      }}
  };
  </script>