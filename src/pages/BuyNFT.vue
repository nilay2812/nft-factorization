<template>
    <div>
        <h1>Buy Fractional Shares</h1>
        <label for="tokenId">Token ID:</label>
        <input type="number" id="tokenId" v-model.number="tokenId" required><br>
        <label for="totalShares">Total Shares:</label>
        <input type="number" id="totalShares" v-model.number="totalShares" required><br>
        <label for="etherAmount">Ether Amount:</label>
        <input type="number" id="etherAmount" v-model.number="etherAmount" required><br>
        <button @click="buyShares">Buy Shares</button>
        <div id="message">{{ message }}</div>
    </div>
</template>

<script>

export default {
    name: 'BuyNFT',
    data() {
        return {
            tokenId: '',
            totalShares: '',
            etherAmount: '',
            message: ''
        };
    },
    methods: {
        async buyShares() {
            try {
                const amountInWei = window.web3.utils.toWei(this.etherAmount.toString(), 'ether');
                const sharesInWei = window.web3.utils.toWei(this.totalShares.toString(), 'ether');
                const result = await window.contract.methods.buyFractionalShares(this.tokenId, sharesInWei).send({ from: window.ethereum.selectedAddress, value: amountInWei });
                this.message = `Shares bought successfully: ${result.transactionHash}`;
            } catch (error) {
                this.message = `Error buying shares: ${error.message}`;
            }
        }
    }
}
</script>
