require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note pumpkin code hunt brave bubble tiger'; 
let testAccounts = [
"0x75cada534587401f13af7846cf013ef73af80000c52c31fe24fd9bcb89307280",
"0x08013b0c9221f01624875c104f4cbfbfff3de43b96bb9047285409210fc56fdb",
"0x0fdffe0f21f015d0ce56106ca5251b9d502e4118f3e9ff402fad1266d9ae9f98",
"0x42fe3085b56da5758b24c93f6498e350755ddc7af8d53e8c200b0f68624d5d1c",
"0x01a501e0ebc6c779e2a1e6d6831c594af676e27c14a53b111a20d01cc93f7971",
"0x05cefdbe6c1233985242df8abb79380a5947e1b41e4497699f8ddc3bb4430722",
"0xec7f5835c5529ccd7e7a95198b41a2556ec4a7d35526a918c24e8296e2f57ca7",
"0x7be68b44d04644c0b4b629a617c2e9ed06c37839e0fc8b29979cf2c68213994b",
"0x5bc8de53e756054ee7b8ad34aefb0405c36879385c526bf177d06f467f9fba70",
"0x87521fe56872c2a3214f8c0cec9b5160a2ba573fca543c1e869aafdf35f39fca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

