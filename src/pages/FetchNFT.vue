<template>
    <div class="container">
      <div class="content">
        <div class="input-card">
          <h2><span>Fetch</span> NFT</h2>
          <label for="nftIdInput">Enter NFT ID</label>
          <input type="text" id="nftIdInput" v-model="nftId" placeholder="Enter NFT ID"><br>
          <button @click="fetchAndDisplayNFTDetails">Fetch NFT Details</button>
        </div>
        <div class="details-card">
          <h2><span>NFT</span> Details</h2>
          <p>Token ID: {{ nftDetails.tokenID }}</p>
          <p>Token URI: {{ nftURI }}</p>
          <p>Creator: {{ nftDetails.owner }}</p>
          <p>Owner: {{ ownerDetails }}</p>
          <p>Price: {{ weiToEther(nftDetails.price) }} Ether</p>
          <p>Per Share Value: {{ weiToEther(shareDetails) }} Ether</p>
          <p>ERC20 Address: {{ ercDetails }}</p>
        </div>
      </div>
      <footer class="footer">
        <p>&copy; 2024 NFTverse</p>
        <div class="social-links">
          <a href="#about-us" @click="navigateTo('about-us')">About Us</a>
          <a href="#app-work" @click="navigateTo('app-work')">How does it work?</a>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FetchNFT',
    data() {
      return {
        nftId: '',
        nftURI: '',
        nftDetails: {},
        shareDetails: '',
        ercDetails: '',
        ownerDetails: ''
      };
    },
    methods: {
      async fetchAndDisplayNFTDetails() {
        try {
          this.nftDetails = await window.contract.methods.idToNFT(this.nftId).call();
          this.nftURI = await window.contract.methods.tokenURI(this.nftId).call();
          this.shareDetails = await window.contract.methods.idToShareValue(this.nftId).call();
          this.ownerDetails = await window.contract.methods.ownerOf(this.nftId).call();
          this.ercDetails = await window.contract.methods.idToShare(this.nftId).call();
        } catch (error) {
          console.error("Error fetching NFT details:", error);
        }
      },
      weiToEther(weiAmount) {
        if (weiAmount === undefined || weiAmount === null) {
          return 'N/A'; // Or any default value you prefer
        }
        return window.web3.utils.fromWei(weiAmount, 'ether');
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
    flex-direction: column;
    min-height: 113vh;
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
    box-shadow: 14px 17px 17px -8px rgb(180, 188, 202);
  }
  
  .input-card input[type="text"],
  .input-card button {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
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
  