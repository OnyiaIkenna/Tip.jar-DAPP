# Tip.jar-DAPP

# Description:
A decentralized application (DApp) built with HTML, JavaScript, and Solidity that allows users to send ETH tips to a person, view the leaderboard of top tippers, and track the total tips they’ve given. This project demonstrates integration between a web front-end and an Ethereum smart contract using Ethers.js.

# Features
Send ETH tips to a person by entering an amount.

Retrieve and display the total number of tips sent.

Interact with the Ethereum blockchain using Ethers.js.

Smart contract written in Solidity with functions to tip, view tips, and withdraw funds.

# Tech Stack

Frontend: HTML, CSS, JavaScript

Blockchain Interaction: Ethers.js

Smart Contract: Solidity

Network: Ethereum test network (e.g., Goerli, Sepolia)

# How to Run

Clone this repository:

git clone <repo-url>

cd <repo-folder>

Deploy the Solidity contract to an Ethereum testnet using Remix, Hardhat, or Truffle.

Update the contract address in app.js to match your deployed contract.

Open index.html in your browser.

Connect your wallet (MetaMask) and start tipping.

# Contract Functions

tip(string _name) → Send ETH tips to the contract.

getLeaderboard() → View top tippers.

getMyTotalTips() → View total tips you’ve sent.

withdraw() → Withdraw accumulated funds (owner only).

# Disclaimer

This is a demo project for learning blockchain development. Not audited — do not use in production.

