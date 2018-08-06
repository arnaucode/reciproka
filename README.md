# reciproka
Decentralized mutual credit system based on Ethereum smart contracts.

**For the moment this is an implementation of a Proof of Concept.**

## Components
- Smart contracts
  - Ethereum Solidity
- Frontend wallet app
  - Reactjs
- Reputation Authority
  - Go lang

## Documentation

Each user connects to `reciproka` throught the frontend wallet app. Once the app is opened, it creates a new ethereum private key (if the user already have one, loads it).


### Transaction action:
- Step 0: Initial scenario
  - Balances
    - u1: 0
    - u2: 0
- Step 1: u1 sends 10 credits to u2
  - Balances
    - u1: -10
    - u2: 10


### Account
Account data structure:
```solidity
struct Account {
  address ID;
  int64 Balance;
  bytes32[] History;
}
```



### Reputation Authority
Handles a public list of accounts that have been verified, in order to give some kind of trusted certification to an user's account.
Can be runned by a collective, so for example, a group of people that work together in a project, can run a Reputation Authority, that will 'validate' trusted user's accounts.
