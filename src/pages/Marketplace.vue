<template>
  <div class="container">
    <div class="content">
      <div v-for="(nft, index) in allNFTs" :key="index" class="details-card">
        <h2><span>NFT</span> {{ nft.tokenID }}</h2>
        <p>Token ID: {{ nft.tokenID }}</p>
        <p>Token URI: {{ nft.tokenURI }}</p>
        <p>Creator: {{ nft.owner }}</p>
        <p>Owner: {{ nft.ownerDetails }}</p>
        <p>Per Share Value: {{ weiToEther(nft.shareDetails) }} Ether</p>
        <center><a href="#buy-nft" class="buy-nft-link" @click="navigateTo('buy-nft')">Buy NFT</a></center>
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
  name: 'AllNFTs',
  data() {
    return {
      allNFTs: [],
      currentNFTIndex: 0,
    };
  },
  created() {
    const storedNFTs = localStorage.getItem('storedNFTs');
    if (storedNFTs) {
      this.allNFTs = JSON.parse(storedNFTs);
    } else {
      this.fetchAllNFTDetails();
    }
  },
  methods: {
    async fetchAllNFTDetails() {
      try {
        let nftDetails;
        let nftURI;
        let shareDetails;
        let ownerDetails;
        
        let continueFetching = true; // Variable to track loop continuation

        while (continueFetching) { // Use the variable in the loop condition
          nftDetails = await window.contract.methods.idToNFT(this.currentNFTIndex).call();

          // Check if the nftDetails or any other essential detail is empty or undefined
          if (!nftDetails) {
            continueFetching = false; // Set to false to exit the loop
            break;
          }

          nftURI = await window.contract.methods.tokenURI(this.currentNFTIndex).call();
          shareDetails = await window.contract.methods.idToShareValue(this.currentNFTIndex).call();
          ownerDetails = await window.contract.methods.ownerOf(this.currentNFTIndex).call();

          this.allNFTs.push({ tokenID: this.currentNFTIndex, tokenURI: nftURI, owner: nftDetails.owner, ownerDetails: ownerDetails, shareDetails: shareDetails });

          this.currentNFTIndex++;
          
        }
        localStorage.setItem('storedNFTs', JSON.stringify(this.allNFTs));
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
    }}
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
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to next row */
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.details-card {
  background: rgb(180, 188, 202);
  background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
  color: #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px; /* Adjust margin to create space between cards */
  margin-top: 45px;
  box-shadow: 14px 17px 17px -8px rgb(180, 188, 202);
  width: calc(45% - 20px); /* Adjust width to fit two cards in one row */
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

.footer .social-links a,
.footer-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.footer .social-links a:hover,
.footer-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.buy-nft-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Include box-shadow transition */
  background-color: rgba(255, 255, 255, 0.1);
}

.buy-nft-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.925); /* Adjust shadow size on hover */
}
</style>
