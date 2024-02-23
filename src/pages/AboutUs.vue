<template>
  <div class="container">
    <div class="big-card">
      <h2><span>About</span> Us</h2>
      <h3>Welcome to our platform!</h3>
<p>Our platform offers a transformative solution in the realm of Non-Fungible Tokens (NFTs), aimed at revolutionizing digital ownership. By harnessing the power of blockchain technology, our platform brings forth a myriad of advantages:</p>
<ul>
  <li><strong>Accessibility:</strong> Democratizing access to digital ownership, our platform empowers individuals from diverse backgrounds to participate in the burgeoning NFT ecosystem, fostering inclusivity and innovation.</li>
  <li><strong>Transparency:</strong> Leveraging blockchain's inherent transparency, our platform ensures immutable records of ownership, providing users with unparalleled visibility into the provenance and history of NFTs, thereby enhancing trust and credibility.</li>
  <li><strong>Financial Inclusion:</strong> By fractionalizing NFTs, our platform unlocks new avenues for investment and wealth creation, enabling individuals to participate in asset ownership and wealth accumulation, regardless of their financial status or geographic location.</li>
  <li><strong>Creative Empowerment:</strong> Empowering creators to tokenize their digital assets, our platform amplifies creative expression and economic opportunities, enabling artists, musicians, and content creators to monetize their work and reach a global audience.</li>
</ul>
<p>Our platform plays a pivotal role in the NFT market by introducing innovative features such as fractionalization, seamless creation, and transparent trading. By providing a user-friendly interface, we facilitate smooth transactions and enhance liquidity in the NFT market. Furthermore, our platform fosters community engagement and collaboration, driving the growth and evolution of the NFT ecosystem.</p>
<p>As we embark on this transformative journey, we envision a world where digital ownership is accessible, transparent, and secure for all. By embracing the potential of NFTs, our platform strives to redefine the paradigm of ownership, catalyzing positive change and innovation across industries.</p>
<p>This project was created by students of <i>Ramaiah Institute of Technology (CSE)</i>, including <strong>Barath N</strong>, <strong>Nilay Mani</strong>, <strong>Rishabh Sahay</strong>, and <strong>Rohit Badakillaya</strong>, under the guidance of <strong>Dr. Sangeetha J</strong>. We extend our sincere gratitude to Dr. Sangeetha J for her invaluable support and guidance throughout the process.</p>
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
  name: 'AboutUs',
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
  min-height: 150vh;
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
