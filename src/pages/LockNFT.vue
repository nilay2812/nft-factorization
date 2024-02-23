<template>
    <div class="container">
        <div class="big-card">
          <h2><span>Lock</span> NFT</h2>
          <form class="form">
            <label for="tokenId">NFT Token ID</label>
            <input type="number" id="tokenId" v-model="tokenId">
          
            <label for="tokenURI">Token URI</label>
            <input type="text" id="tokenURI" v-model="tokenURI">
          
            <label for="sharesAmount">Shares Amount</label>
            <input type="number" id="sharesAmount" v-model="sharesAmount">
          <button @click="lockNFT">Lock NFT</button>
          </form>
          <div id="message" v-if="message">{{ message }}</div>
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

span {
  color: #020024;
}
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
  }
  
  .big-card {
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
    width: 50%;
    box-shadow: 14px 17px 17px -8px rgb(180, 188, 202);
  }

  .big-card:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form label {
    margin-top: 10px;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .form input[type="number"],input[type="text"] {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
  
  .form button {
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
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
    flex-shrink: 0;
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
  