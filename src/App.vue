<!--
  https://iconscout.com/3d-illustrations - for links
-->


<template>
  <div id="app">
    <Header />
    <Navigation @navigate="navigateTo" />
    <div class="main-content">
      <!-- Conditional rendering based on currentRoute -->
      <component :is="currentRouteComponent" />
    </div>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import Navigation from './components/AppNavigation.vue';
import CreateNFT from './pages/CreateNFT.vue';
import FetchNFT from './pages/FetchNFT.vue';
import LockNFT from './pages/LockNFT.vue';
import BuyNFT from './pages/BuyNFT.vue';
import TransferNFT from './pages/TransferNFT.vue';
import Footer from './components/AppFooter.vue';
import ApprovalNFT from './pages/ApprovalNFT.vue';
import homepage from './pages/homepage.vue';
import AboutUs from './pages/AboutUs.vue';
import AppWork from './pages/AppWork.vue';
import Marketplace from './pages/Marketplace.vue'; 


export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer,
    CreateNFT,
    FetchNFT,
    LockNFT,
    BuyNFT,
    TransferNFT,
    ApprovalNFT,
    AboutUs,
    AppWork,
    homepage,
    Marketplace,
  },
  data() {
    return {
      currentRoute: ''
    };
  },
  computed: {
    currentRouteComponent() {
      // Map route names to corresponding components
      switch (this.currentRoute) {
        case 'create-nft':
          return CreateNFT;
        case 'fetch-nft':
          return FetchNFT;
        case 'lock-nft':
          return LockNFT;
        case 'buy-nft':
          return BuyNFT;
        case 'transfer-nft':
          return TransferNFT;
        case 'approve-nft':
          return ApprovalNFT;
        case 'about-us':
          return AboutUs;
          case 'app-work':
          return AppWork;
        case 'homepage':
          return homepage;
        case 'marketplace':
          return Marketplace;
        default:
          return homepage; 
      }
    }
  },
  methods: {
    
    navigateTo(route) {
      console.log('Navigating to:', route); // Debugging
      if (route === 'about-us') {
        console.log('About Us route triggered.'); // Debugging
      }
      this.currentRoute = route;
      window.location.hash = `#${route}`; // Update URL hash
    }
  },
  mounted() {
    // Initialize currentRoute based on the hash or set it to the homepage
    this.currentRoute = window.location.hash.replace('#', '') || 'homepage';

    // Listen for hash changes and update currentRoute
    window.addEventListener('hashchange', () => {
      this.currentRoute = window.location.hash.replace('#', ''); // Remove '#' from hash
    });
  }
};
</script>

<style>
/* Global Styles */
/* Add your global styles here */
body{
  background: rgb(89,119,170);
background: linear-gradient(90deg, rgba(89,119,170,1) 0%, rgba(20,103,120,1) 0%, rgba(2,0,36,1) 0%);
font-family: 'Roboto', sans-serif;
}
</style>
