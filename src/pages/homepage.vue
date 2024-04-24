<template>
    <div class="home">
      <header>
        <h1>{{ msg }}</h1>
        <h1>
          <span class="cr">Create</span>
          <span class="co">Collect</span>
          <span class="tr">Trade </span>
          Fractional NFTs
        </h1>
        <div class="cards-container">
          <div class="card" v-for="(card, index) in cards" :key="index">
            <a :href="card.href">
              <img :src="card.image" alt="Card Image" width="500" height="250"></a>
              <h3><span class="first-word">{{ card.title.split(' ')[0] }}</span> {{ card.title.substring(card.title.indexOf(' ') + 1) }}</h3>
              
              <p>{{ card.description }}</p>
            
          </div>
        </div>
      </header>
  
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
    name: 'HomePage',
    props: {
      msg: String
    },
    data() {
      return {
        cards: [
        {
            title: 'Market place',
            description: 'Allows the user to seamlessly explore and buy trending NFTs.',
            image: require('../assets/marketplace.png'),
            href: 'http://localhost:8080/#marketplace'
          },
        {
            title: 'Create NFTs',
            description: 'Empowers the user to seamlessly create new NFTs, offering flexibility and control over digital asset issuance.',
            image: require('../assets/createnft.png'),
            href: 'http://localhost:8080/#create-nft'
          },
          {
            title: 'Fetch NFTs',
            description: 'Explore and retrieve detailed information about NFTs owned by the user, providing transparency and accessibility to digital asset holdings.',
            image: require('../assets/fetchnft.jpg'),
            href: 'http://localhost:8080/#fetch-nft'
          },
          {
            title: 'Fractionalize NFTs',
            description: 'Engage in the fractionalization process of NFTs, enabling users to purchase shares and participate in asset ownership with reduced barriers to entry.',
            image: require('../assets/fractionnft2.png'),
            href: 'http://localhost:8080/#lock-nft'
          },
          {
            title: 'Buy NFTs',
            description: 'Seamlessly purchase shares of fractionalized NFTs, facilitating investment opportunities and asset diversification within the digital asset ecosystem.',
            image: require('../assets/buynft1.png'),
            href: 'http://localhost:8080/#buy-nft'
          },
          {
            title: 'Transfer NFTs',
            description: 'Facilitate secure and authorized transfers of NFTs between users, ensuring smooth asset transactions and maintaining ownership integrity.',
            image: require('../assets/transfernft2.png'),
            href: 'http://localhost:8080/#transfer-nft'
          }
        ]
      };
    },
    methods: {
      navigateTo(route) {
        this.$emit('navigate', route);
      }
    }
  };
  </script>
  
  
 
 

  
  <style scoped>

  span.first-word{
    color: #020024;
  }
.home {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
}
  
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  
  header {
    flex: 1;
    text-align: center;
    padding: 20px;
    background: rgb(89,119,170);
background: linear-gradient(90deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 0%);
    color: #fff;
    margin: 0;
  }
  

header h1 {
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1.5rem;
  margin-right:520px;
  overflow: hidden;
  position: relative;
}

header h1 span {
  display: block;
  position: absolute;
  margin-left: 110px;
  opacity: 0;
  transition: opacity 2s ease-in-out;

}

header h1 span.cr {
  animation: fadeInOutCr 5s ease-in-out forwards infinite;
  margin-left:115px;
  color:#79a0e9;
}

header h1 span.co {
  animation: fadeInOutCo 5s ease-in-out forwards infinite;
  color:#79a0e9;
  margin-left:105px;
}

header h1 span.tr {
  animation: fadeInOutTr 5s ease-in-out forwards infinite;
  margin-left:133px;
  color:#79a0e9;
}

@keyframes fadeInOutCr {
  0%, 100% { opacity: 0; }
  8.33%, 25% { opacity: 1; }
  33.33%, 100% { opacity: 0; }
}

@keyframes fadeInOutCo {
  0%, 25% { opacity: 0; }
  41.67%, 58.33% { opacity: 1; }
  66.67%, 100% { opacity: 0; }
}

@keyframes fadeInOutTr {
  0%, 58.33% { opacity: 0; }
  75%, 91.67% { opacity: 1; }
}

.connect-wallet-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: #79a0e9;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

  
  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  
  .card {
    width: calc(25% - 20px);
    background: rgb(89,119,170);
background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 50%, rgba(20,103,120,1) 100%, rgba(89,119,170,1) 100%); 
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 15px;
    text-align: left;
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 0;
  }
  
  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .card p {
    font-size: 0.9rem;
    color: #e4d7d7;
  }

  .footer {
    background: rgb(180, 188, 202);
background: linear-gradient(180deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 98%);
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin: 0;
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