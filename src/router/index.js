// router/index.js

// Import Vue and VueRouter
import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import CreateNFT from '../pages/CreateNFT.vue';
import FetchNFT from '../pages/FetchNFT.vue';
import LockNFT from '../pages/LockNFT.vue';
import BuyNFT from '../pages/BuyNFT.vue';
import TransferNFT from '../pages/TransferNFT.vue';
import Header from '../components/AppHeader.vue';
import Footer from '../components/AppFooter.vue'
import Navigation from '../components/AppNavigation.vue';

// Create a new router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', components: { header: Header, default: Navigation, footer: Footer } },
    { path: '/create-nft', components: { header: Header, default: CreateNFT, footer: Footer } },
    { path: '/fetch-nft', component: FetchNFT }, // Corrected route definition
    { path: '/lock-nft', components: { header: Header, default: LockNFT, footer: Footer } },
    { path: '/buy-nft', components: { header: Header, default: BuyNFT, footer: Footer } },
    { path: '/transfer-nft', components: { header: Header, default: TransferNFT, footer: Footer } },
  ]
});

export default router;
