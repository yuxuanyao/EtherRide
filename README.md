# EtherRide (Best Aragon App by ChainSafe at UofTHacksVI)
#### - Think AirBnB for cars, using the Ethereum Blockchain

###### DevPost: https://devpost.com/software/etherride
###### This project is split to two git repos as we used boilerplate code from two different API sponsors. Please also visit this page: https://github.com/yuxuanyao/SmartCar2

###### This project also only worked within the duration of the hackathon as we were provided log in credentials for a Tesla Model S only during UofTHacks VI


### What it Does
This application allows the user to rent from a list of vehicles that are registered with SmartCar. Through the use of smart contracts from the Aragon Platform, location data and travel patterns are preserved from third-party access. After selecting a car on the landing page, the user can create a transaction using the Ethereum blockchain. When the transaction goes through, the Car would be unlocked through a request to SmartCar API to unlock the door.

### This repo 
This repo contains the Aragon webapp for processing transactions

In this project, we have used the CounterApp tutorial on the Aragon official website: https://hack.aragon.org/docs/tutorial.html

We changed the back end solidity functions to be Lock and Unlocking the car. AragonUI provided us with the front end and we only had to modify it a little to make it fit our project. 

The Lock and Unlock functions initializes a smart contract transaction, which is also all taken care for us by the Aragon API. 

In the other github repo, we have a node script using Ethers.js to monitor the transactions using the address, abi, and provider (localhost). After the transaction has been confirmed, the Car then physically unlocks through a request to the SmartCar API
