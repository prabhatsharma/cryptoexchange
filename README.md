# cryptoexchange

This is an attempt to bild an open source crypto currency exchange. Initial focus will be on bitcoin and ethereum.

## Installation steps

jspm is used for package management

Steps

1. git clone <this repo URL>
2. jspm install
3. npm install
4. npm -g install live-server
5. npm start (or) live-server --entry-file=index.html

Open the application at http://localhost:8080

# ethereum setup
Download ethereum wallet from: https://www.ethereum.org/

Go to resources\node\geth subfolder of ethereum wallet and run geth manually from command line by:

> geth --fast --rpc --rpccorsdomain "http://localhost:8080" console

This will start the ethereum node and will allow you to run commands from console to do something or see sync progress. Since we will be using json-rpc over http and will be using it via XHR we will need to to provide cors parameter else ur requests from browser to ethereum node via json-rpc will fail. --fast helps in fast syncing.

To see the sync progress run following commands:

> admin.peers

> eth.syncing

To see the entire json api type following

> admin

> eth

> web3