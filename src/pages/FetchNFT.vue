<template>
    <div>
        <label for="nftIdInput">Enter NFT ID:</label>
        <input type="text" id="nftIdInput" v-model="nftId">
        <button @click="fetchAndDisplayNFTDetails">Fetch NFT Details</button>
        <div id="nftDetailsContainer">
            <h2>NFT Details</h2>
            <p>Token ID: {{ nftDetails.tokenID }}</p>
            <p>Token URI: {{ nftURI }}</p>
            <p>Creator: {{ nftDetails.owner }}</p>
            <p>Owner: {{ ownerDetails }}</p>
            <p>Price: {{ weiToEther(nftDetails.price) }} Ether</p>
            <p>Per Share Value: {{ weiToEther(shareDetails) }} Ether</p>
            <p>ERC20 Address: {{ ercDetails }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'FetchNFT',
    data() {
        return {
            nftId: '',
            nftURI:'',
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
        }
    }
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
