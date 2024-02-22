<template>
    <div>
        <h1>NFT Approval</h1>
        <div>
            <label for="operatorAddress">Operator Address:</label>
            <input type="text" id="operatorAddress" v-model="operatorAddress">
            <label for="approvalStatus">Approval Status (true/false):</label>
            <input type="text" id="approvalStatus" v-model="approvalStatus">
            <button @click="setApprovalForAll">Set Approval For All</button>
        </div>
        <div>
            <label for="ownerAddress">Owner Address:</label>
            <input type="text" id="ownerAddress" v-model="ownerAddress">
            <label for="operatorAddress">Operator Address:</label>
            <input type="text" id="operatorAddressCheck" v-model="operatorAddressCheck">
            <button @click="checkApprovalForAll">Check Approval For All</button>
        </div>
        <div id="approvalResult">{{ approvalResult }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            operatorAddress: '',
            approvalStatus: '',
            ownerAddress: '',
            operatorAddressCheck: '',
            approvalResult: ''
        };
    },
    methods: {
        async setApprovalForAll() {
            const isApproved = (this.approvalStatus.toLowerCase() === 'true');
            try {
                const result = await window.contract.methods.setApprovalForAll(this.operatorAddress, isApproved).send({ from: window.ethereum.selectedAddress });
                this.approvalResult = `Approval for all set successfully: ${result.transactionHash}`;
            } catch (error) {
                this.approvalResult = `Error setting approval for all: ${error.message}`;
            }
        },
        async checkApprovalForAll() {
            try {
                const isApproved = await window.contract.methods.isApprovedForAll(this.ownerAddress, this.operatorAddressCheck).call();
                this.approvalResult = `Is Approved For All: ${isApproved}`;
            } catch (error) {
                this.approvalResult = `Error checking approval for all: ${error.message}`;
            }
        }
    }
}
</script>
