<template>
    <div class="container">
        <div class="big-card">
        <h2><span>Transfer</span> NFT's</h2>
        <form @submit.prevent="transferTokens" class="form">
            <label for="senderAddress">Sender Address</label>
            <input type="text" id="senderAddress" v-model="senderAddress">
            <label for="recipientAddress">Recipient Address</label>
            <input type="text" id="recipientAddress" v-model="recipientAddress">
            <label for="amount">Token ID</label>
            <input type="text" id="amount" v-model.number="amount">
            <button type="submit">Transfer</button>
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
    name: 'TransferNFT',
    data() {
        return {
            senderAddress: '',
            recipientAddress: '',
            amount: '',
            message: ''
        };
    },
    methods: {
        async transferTokens() {
            try {
                const result = await window.contract.methods.transferFrom(this.senderAddress, this.recipientAddress, this.amount).send({ from: window.ethereum.selectedAddress });
                this.message = `NFT transferred successfully: ${result.transactionHash}`;
            } catch (error) {
                this.message = `Error transferring NFT: ${error.message}`;
            }
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
