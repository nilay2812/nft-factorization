<template>
    <div class="container">
      <div class="big-card">
        <h2><span>Buy</span> Fractional Shares</h2>
        <form @submit.prevent="buyNFT" class="form">
          <label for="tokenId">Token ID</label>
          <input type="number" id="tokenId" v-model.number="tokenId" required>
          <label for="totalShares">Total Shares</label>
          <input type="number" id="totalShares" v-model.number="totalShares" required>
          <label for="etherAmount">Ether Amount</label>
          <input type="number" id="etherAmount" v-model.number="etherAmount" required>
        <button @click="buyShares">Buy Shares</button>
        </form>
        <div id="message">{{ message }}</div>
      </div>
    </div>
    <footer class="footer">
        <p>&copy; 2024 NFTverse</p>
        <div class="social-links">
          <a href="#about-us" @click="navigateTo('about-us')">About Us</a>
          <a href="#app-work" @click="navigateTo('app-work')">How does it work?</a>
        </div>
      </footer>
  </template>
  
  <script>
  export default {
    name: 'BuyNFT',
    data() {
      return {
        tokenId: '',
        totalShares: '',
        etherAmount: '',
        message: ''
      };
    },
    methods: {
      async buyShares() {
        try {
          const amountInWei = window.web3.utils.toWei(this.etherAmount.toString(), 'ether');
          const sharesInWei = this.totalShares.toString();
          const result = await window.contract.methods.buyFractionalShares(this.tokenId, sharesInWei).send({ from: window.ethereum.selectedAddress, value: amountInWei });
          this.message = `Shares bought successfully: ${result.transactionHash}`;
        } catch (error) {
          this.message = `Error buying shares: ${error.message}`;
        }
      },
      navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
  };
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
  
  .form input[type="number"] {
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
    color: #fff;
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
  