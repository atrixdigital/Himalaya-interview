
# Himalaya Exchange interview exercise


Name: **Moeid Saleem**
Project Title: **Ether Scan API Test**

## About the project

This is a typescript based Nodejs implementation, which was forked from my Nodejs Boilerplate source code. This is based on 3-layer architecture but I have tried to keep things simple as much as i can. All you need to check is the `/src/routes/address.ts` file for API call & which will take you to the service `src/services/address.ts` that makes an external call to EtherScan API.

I have used the `balancemulti` which can take upto 20 addresses per call, Since we can send upto maximum 100 address, I have written code that will break the array of address into chunks of 20 items, then make multiple call and catenate them with `Promise.all()`  and send the final result alongside the total balance. Since it was not mentioned that it will 

For testing, I haven't have put much effort but you can run `npm test` to test few basic tests.

The only thing i might be miss converting  `wei` to `ether` but that can also be done.


## Getting Started

To start using Node.js Doctrine 2023 boilerplate is very easy with these simple installation steps
- `npm install`
- Setup `.env` file as per `.env.example` and edit is per your requirement.
- `npm install` 
- `npm run dev` for development
- `npm run start` for production
- to run unit tests with jest -  `npm test`
- For code coverage - `npm run coverage` 

## Pre-requiste

- Node.js v18.x
- Typescript

### Libraries

- TypeScript
- TypeDI (dependency injector)
- winston ( logging )
- Jest 




## Contributors

<img src="https://www.moeidsaleem.com/assets/images/moeidsaleem.jpeg" width="120" height="120" style="border-radius:300px" />



## ABOUT AUTHOR

I am Moeid Saleem Khan, World leading Software Architect with over  10+ years experience in the industry. I have experienced every aspect of IT development from Frontend with React, Backend with Node.js, Software Architecture mainly scaling microservices with containerization (kubernetes) and also serverless approach. 
I was recently involved in developing a complete Crypto platform - AllStars Digital from scratch which involved ICO for a cryptocurrency, developing complete Crypto trading Exchange and NFT marketplace but due Binance FTX crash - the startup ran out of funding and unfortunetly, I have to look for another position. 

Learn more about me by googling - "Moeid Saleem"
Connect with me on Linkedin - <https://linkedin.com/in/moeidsaleem>
Find more about me at  <https://moeidsaleem.com>

