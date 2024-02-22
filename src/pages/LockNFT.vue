<template>
    <div>
        <h1>Lock NFT</h1>
        <div>
            <label for="tokenId">NFT Token ID:</label>
            <input type="text" id="tokenId" v-model="tokenId">
        </div>
        <div>
            <label for="tokenURI">Token URI:</label>
            <input type="text" id="tokenURI" v-model="tokenURI">
        </div>
        <div>
            <label for="sharesAmount">Shares Amount:</label>
            <input type="number" id="sharesAmount" v-model="sharesAmount">
        </div>
        <button @click="lockNFT">Lock NFT</button>
        <div id="message">{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'LockNFT',
    data() {
        return {
            tokenId: '',
            tokenURI: '',
            sharesAmount: '',
            message: ''
        };
    },
    methods: {
        async lockNFT() {
            try {
                const result = await window.contract.methods.lockNFT(this.tokenId, this.tokenURI, this.sharesAmount).send({ from: window.ethereum.selectedAddress });
                console.log(result);
                this.showMessage('NFT locked successfully');
            } catch (error) {
                console.error('Error locking NFT:', error);
                this.showMessage('Error locking NFT: ' + error.message);
            }
        },
        showMessage(message) {
            this.message = message;
        }
    }
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>
