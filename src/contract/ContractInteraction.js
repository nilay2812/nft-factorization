import Web3 from 'web3'; // Import the Web3 library here

// Import contract ABI and address from contract.js
import { contractABI, contractAddress } from './contract.js';

// Define function to load Web3
async function loadWeb3() {
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable(); // Use 'await' to enable Ethereum provider
        } else {
            console.log("No wallet detected");
        }
    } catch (error) {
        console.error("Error loading Web3:", error);
    }
}

// Define function to load the contract
async function loadContract() {
    await loadWeb3(); // Call loadWeb3 function to ensure Web3 is loaded
    return new window.web3.eth.Contract(contractABI, contractAddress); 
}

// Define function to load Web3 and contract
async function load() {
    await loadWeb3(); // Call connect function to connect to wallet
    window.contract = await loadContract();
}

load(); // Call the load function to initialize

export default {
    loadWeb3,
    loadContract,
    load
};