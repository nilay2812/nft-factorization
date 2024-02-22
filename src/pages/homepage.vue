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
              <img :src="card.image" alt="Card Image"></a>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            
          </div>
        </div>
      </header>
  
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
    name: 'HomePage',
    props: {
      msg: String
    },
    data() {
      return {
        cards: [
          {
            title: 'Fetch NFTs',
            description: 'Explore a wide variety of NFTs from artists around the world.',
            image: 'https://source.unsplash.com/random/100x100?nft',
            href: 'http://localhost:8080/#lock-nft'
          },
          {
            title: 'Create NFTs',
            description: 'Collect your favorite NFTs and showcase them in your personal gallery.',
            image: 'https://source.unsplash.com/random/100x100?nfts',
            href: 'http://localhost:8080/#create-nft'
          },
          {
            title: 'Fractionalize NFTs',
            description: 'Buy, sell, and trade NFTs with other collectors in our marketplace.',
            image: 'https://source.unsplash.com/random/100x100?blockchain',
            href: 'http://localhost:8080/#lock-nft'
          },
          {
            title: 'Buy NFTs',
            description: 'Explore a wide variety of NFTs from artists around the world.',
            image: 'https://source.unsplash.com/random/100x100?web3',
            href: 'http://localhost:8080/#buy-nft'
          },
          {
            title: 'Transfer NFTs',
            description: 'Explore a wide variety of NFTs from artists around the world.',
            image: 'https://source.unsplash.com/random/100x100?web3.0',
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
    bbackground: rgb(89,119,170);
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

  .footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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