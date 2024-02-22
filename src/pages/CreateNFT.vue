    <template>
        <div class="container">
            <h3>Create NFT</h3>
            <form @submit.prevent="createNFT">
                <label for="tokenURI">Token URI:</label><br>
                <input type="text" id="tokenURI" v-model="tokenURI"><br>
                <label for="price">Price (in ETH):</label><br>
                <input type="text" id="price" v-model="price"><br>
                <button type="submit">Create NFT</button>
            </form>
        </div>
    </template>

    <script>
    export default {
        name: 'CreateNFT',
        data() {
            return {
                tokenURI: '',
                price: ''
            };
        },
        methods: {
            async createNFT() {
                try {
                    const result = await window.contract.methods.createNFT(this.tokenURI, window.web3.utils.toWei(this.price, 'ether')).send({ from: window.ethereum.selectedAddress, gasPrice: window.web3.utils.toWei('10', 'gwei'), gas: 300000 });
                    console.log('NFT created successfully:', result);
                    alert('NFT created successfully!');
                } catch (error) {
                    console.error('Error creating NFT:', error);
                    alert('Error creating NFT. Please try again later.');
                }
            }
        }
    }
    </script>

    <style scoped>
    .container {
        margin-top: 20px;
    }
    </style>
