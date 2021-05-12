require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note maze purse hunt infant flock silk'; 
let testAccounts = [
"0x9da9f00e7b95db25445f173ad97a5a6e493a75c587f48f98dead0605c13faf02",
"0x8371662f29f8981acee512c1701957d14a35f904d26fece08fe83d0f8be15212",
"0x2b467d5aabbe7d2f92439b461c5a14c7e47c324f59b68c519b0ca79eefff26d7",
"0x1913de93f26f65706d4c047db8cdbdb5eb3a43203fb5abe3ea2f0b619e53f87f",
"0x1bdbffef6acf1c92dbe032e9cc687b83822ca6637f9138b73ee80579a66eb485",
"0xd3566bdfb8910e2f090479d03391d238a2517a09904d4178d147479ed3c9c563",
"0x623599c9e9825b22d3dfd53436d59c055cedda4b6614b4af48463b620a2f4625",
"0x21a93655f65b36be37cacb4668b581a69b7333a19bee630bff2933a7df8ce9ec",
"0xc74885831b227d721d9162d089d6ad6f5bfcbc6fcf031db4d2e68287a3d4da26",
"0x056a8c3a34ff6bed26d1497027e7c14abd43beebde2346a936c9b27718258b05"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
