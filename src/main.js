import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ContractInteraction from './contract/ContractInteraction.js';

// Create the Vue app instance
const app = createApp(App);

// Set the contract interaction instance as a global property on the app
app.config.globalProperties.$ContractInteraction = ContractInteraction;

// Use the router in the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');
