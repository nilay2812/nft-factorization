<template>
  <div class="container">
    <div class="big-card">
      <h2><span>How</span> does it work?</h2>
  <p>Welcome to our platform! Our platform operates at the intersection of cutting-edge technology and innovative concepts, offering users a seamless and intuitive experience in navigating the world of Non-Fungible Tokens (NFTs). Here's a breakdown of how our platform functions:</p>
  <h4>1. Creation of NFTs</h4>
  <p>Users can easily create their own NFTs and more. Our platform provides a user-friendly interface and streamlined process for tokenization, enabling creators to mint their NFTs with just a few clicks.</p>
  <h4>2. Fetching NFT Data</h4>
  <p>Explore and retrieve detailed information about NFTs owned by the user, providing transparency and accessibility to digital asset holdings. Our platform aggregates data from various sources, offering users comprehensive insights into their NFT portfolios.</p>
  <h4>3. Fractionalization of NFTs</h4>
  <p>Engage in the fractionalization process of NFTs, enabling users to purchase shares and participate in asset ownership with reduced barriers to entry. Our platform facilitates the division of NFTs into smaller, tradable fractions, democratizing access to premium digital assets.</p>
  <h4>4. Buying and Selling NFTs</h4>
  <p>Seamlessly purchase shares of fractionalized NFTs or acquire whole NFTs from other users. Our platform provides a secure and efficient marketplace for trading NFTs, ensuring smooth transactions and optimal user experience.</p>
  <h4>5. Transfer of NFTs</h4>
  <p>Facilitate secure and authorized transfers of NFTs between users, ensuring smooth asset transactions and maintaining ownership integrity. Our platform employs blockchain technology to facilitate peer-to-peer transfers, guaranteeing the authenticity and immutability of NFT ownership records.</p>

  <p>Behind the scenes, our platform utilizes a robust backend infrastructure to handle the intricate processes involved in NFT creation and management. When a user creates an NFT, the platform initiates a series of operations, including metadata generation, tokenization, and smart contract deployment. Each NFT is uniquely identified and stored on the blockchain, leveraging the ERC-721 standard for non-fungible tokens. Additionally, for fractionalized NFTs, the platform seamlessly converts whole NFTs into ERC-20 tokens, allowing for efficient trading and ownership transfer. Our backend processes ensure the security, scalability, and interoperability of the platform, enabling users to interact with NFTs seamlessly and confidently.</p>

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
  name: 'App-Work',
  methods: {
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
  min-height: 190vh;
}

.big-card {
  background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
  color: #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  box-shadow: 0px 0px 17px 1px rgb(180, 188, 202);
}

.big-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
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
