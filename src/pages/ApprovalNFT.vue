<template>
    <div class="container">
      <div class="content">
        <div class="input-card">
        <h2>Set NFT Approval</h2>
            <label for="operatorAddress">Operator Address:</label>
            <input type="text" id="operatorAddress" v-model="operatorAddress">
            <label for="approvalStatus">Approval Status (true/false):</label>
            <input type="text" id="approvalStatus" v-model="approvalStatus">
            <button @click="setApprovalForAll">Set Approval For All</button>
            <br>
            <div id="approvalResult">{{ approvalResult1 }}</div>
        </div>
        
        <div class="details-card">
            <h2>Check NFT Approval</h2>
            <label for="ownerAddress">Owner Address:</label>
            <input type="text" id="ownerAddress" v-model="ownerAddress">
            <label for="operatorAddress">Operator Address:</label>
            <input type="text" id="operatorAddressCheck" v-model="operatorAddressCheck">
            <button @click="checkApprovalForAll">Check Approval For All</button>
        <br>
        <div id="approvalResult">{{ approvalResult2 }}</div>
    </div>
    
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
    data() {
        return {
            operatorAddress: '',
            approvalStatus: '',
            ownerAddress: '',
            operatorAddressCheck: '',
            approvalResult1: '',
            approvalResult2: ''
        };
    },
    methods: {
        async setApprovalForAll() {
            const isApproved = (this.approvalStatus.toLowerCase() === 'true');
            try {
                const result = await window.contract.methods.setApprovalForAll(this.operatorAddress, isApproved).send({ from: window.ethereum.selectedAddress });
                this.approvalResult1 = `Approval for all set successfully: ${result.transactionHash}`;
            } catch (error) {
                this.approvalResult1 = `Error setting approval for all: ${error.message}`;
            }
        },
        async checkApprovalForAll() {
            try {
                const isApproved = await window.contract.methods.isApprovedForAll(this.ownerAddress, this.operatorAddressCheck).call();
                this.approvalResult2 = `Is Approved For All: ${isApproved}`;
            } catch (error) {
                this.approvalResult2 = `Error checking approval for all: ${error.message}`;
            }
        },
        navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    min-height: 82.1vh;
    
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
  }
  
  .input-card,
  .details-card {
    background: rgb(180, 188, 202);
    background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    min-width: 33%;
  }
  
  .input-card input[type="text"],
  .details-card input[type="text"]
   {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }


  .input-card button, .details-card button{
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
