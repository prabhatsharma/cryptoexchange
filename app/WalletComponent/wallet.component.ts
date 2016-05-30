import {Component} from 'angular2/core';

declare var Web3:any;   //This is how you include an existing javascript library in typescript

@Component({
    selector : 'ps-wallet',
    templateUrl : './app/WalletComponent/wallet.component.html'
})
export class WalletComponent {
    
    web3 = {};
    syncStatus = {}
    
    constructor() {
        var ethereumNodeURL = 'http://localhost:8545'
        var web3 = new Web3();
        console.log("ethereum web3.js loaded. we can now perform ethereum actions")
        web3.setProvider(new web3.providers.HttpProvider(ethereumNodeURL));
        console.log(web3);
        this.web3 = web3;
        this.syncStatus = JSON.stringify(web3.eth.syncing);
        console.log("Sync status : ", web3.eth.syncing)
    }
}