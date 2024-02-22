<template>
    <div class="container">
      <div class="content">
        <div class="card">
          <h1>Lock NFT</h1>
          <div class="input-group">
            <label for="tokenId">NFT Token ID:</label>
            <input type="text" id="tokenId" v-model="tokenId">
          </div>
          <div class="input-group">
            <label for="tokenURI">Token URI:</label>
            <input type="text" id="tokenURI" v-model="tokenURI">
          </div>
          <div class="input-group">
            <label for="sharesAmount">Shares Amount:</label>
            <input type="number" id="sharesAmount" v-model="sharesAmount">
          </div>
          <button @click="lockNFT">Lock NFT</button>
          <div id="message" v-if="message">{{ message }}</div>
        </div>
      </div>
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
    name: 'LockNFT',
    data() {
      return {
        tokenId: '',
        tokenURI: '',
        sharesAmount: '',
        message: ''
      };
    },
    methods: {
      async lockNFT() {
        try {
          const result = await window.contract.methods.lockNFT(this.tokenId, this.tokenURI, this.sharesAmount).send({ from: window.ethereum.selectedAddress });
          console.log(result);
          this.showMessage('NFT locked successfully');
        } catch (error) {
          console.error('Error locking NFT:', error);
          this.showMessage('Error locking NFT: ' + error.message);
        }
      },
      showMessage(message) {
        this.message = message;
      },
      navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .card {
    background: rgb(180, 188, 202);
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .input-group label {
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="number"],
  button {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ddd;
  }
  
  .footer {
    background: rgb(180, 188, 202);
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    text-align: center;
    padding: 10px 0;
    flex-shrink: 0;
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
  