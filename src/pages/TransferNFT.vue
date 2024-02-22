<template>
    <div>
        <h1>Transfer NFT's</h1>
        <form @submit.prevent="transferTokens">
            <label for="senderAddress">Sender Address:</label>
            <input type="text" id="senderAddress" v-model="senderAddress"><br><br>
            <label for="recipientAddress">Recipient Address:</label>
            <input type="text" id="recipientAddress" v-model="recipientAddress"><br><br>
            <label for="amount">Token ID:</label>
            <input type="number" id="amount" v-model.number="amount"><br><br>
            <button type="submit">Transfer</button>
        </form>
        <div id="message">{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'TransferNFT',
    data() {
        return {
            senderAddress: '',
            recipientAddress: '',
            amount: '',
            message: ''
        };
    },
    methods: {
        async transferTokens() {
            try {
                const result = await window.contract.methods.transferFrom(this.senderAddress, this.recipientAddress, this.amount).send({ from: window.ethereum.selectedAddress });
                this.message = `NFT transferred successfully: ${result.transactionHash}`;
            } catch (error) {
                this.message = `Error transferring NFT: ${error.message}`;
            }
        }
    }
}
</script>
