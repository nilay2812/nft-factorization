<template>
    <div>
      <div class="card">
        <h1>Buy Fractional Shares</h1>
        <div class="input-group">
          <label for="tokenId">Token ID:</label>
          <input type="number" id="tokenId" v-model.number="tokenId" required>
        </div>
        <div class="input-group">
          <label for="totalShares">Total Shares:</label>
          <input type="number" id="totalShares" v-model.number="totalShares" required>
        </div>
        <div class="input-group">
          <label for="etherAmount">Ether Amount:</label>
          <input type="number" id="etherAmount" v-model.number="etherAmount" required>
        </div>
        <button @click="buyShares">Buy Shares</button>
        <div id="message">{{ message }}</div>
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
          const sharesInWei = window.web3.utils.toWei(this.totalShares.toString(), 'ether');
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
  .card {
    background: rgb(180, 188, 202);
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto; /* Center the card */
    width: 80%;
    max-width: 500px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    margin-bottom: 5px;
  }
  
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
  
  #message {
    margin-top: 10px;
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
  