<template>
    <div class="container">
      <div class="big-card">
        <h2>Create NFT</h2>
        <form @submit.prevent="createNFT" class="form">
          <label for="tokenURI">Token URI:</label><br>
          <input type="text" id="tokenURI" v-model="tokenURI"><br>
          <label for="price">Price (in ETH):</label><br>
          <input type="text" id="price" v-model="price"><br>
          <button type="submit">Create NFT</button>
        </form>
      </div>
    </div>
    <footer class="footer">
      <p>&copy; 2024 NFT Marketplace</p>
      <div class="social-links">
        <router-link to="/#aboutus" @click="navigateTo('aboutus')">About Us</router-link>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'CreateNFT',
    data() {
      return {
        tokenURI: '',
        price: ''
      };
    },
    methods: {
      async createNFT() {
        try {
          const result = await window.contract.methods.createNFT(this.tokenURI, window.web3.utils.toWei(this.price, 'ether')).send({ from: window.ethereum.selectedAddress, gasPrice: window.web3.utils.toWei('10', 'gwei'), gas: 300000 });
          console.log('NFT created successfully:', result);
          alert('NFT created successfully!');
        } catch (error) {
          console.error('Error creating NFT:', error);
          alert('Error creating NFT. Please try again later.');
        }
      },
      navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  
  .big-card {
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
    width: 50%;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form label {
    margin-top: 10px;
    color: #fff;
  }
  
  .form input[type="text"] {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .form button {
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form button:hover {
    background-color: #ddd;
  }
  
  .footer {
    background: rgb(180, 188, 202);
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    text-align: center;
    padding: 10px 0;
    margin: -8px;
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
  </style>
  