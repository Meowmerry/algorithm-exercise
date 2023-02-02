/*
* NODE JS questions. 25mins
node.js

Scenario

When applying for loans, people with higher FICO scores generally get better (lower) interest rates. In the fictional example there are several 
functions that simulate API retrieval calls (`ssns.json` and `fico_scores.json`) and one that simulates the 'saving' to a database. 
The JSON files are related by the `id` field.


Directions

The following code (`main.js`) does not work and will need enhancements. 
Modify the code to use async/await and use the saveToDb function to simulate saving the interest rate to a DB.

What is the outcome of the ssn input of `999-99-4119`?

*/

const fs = require('fs');

// get rate by fico score
function getRate(ficoScore) {
  rate = 0;
  if (ficoScore == null) {
    console.log('INVALID RATE')
    return -1
  }
  if (ficoScore > 0 && ficoScore < 100) {
    rate = .921;
  }
  if (ficoScore >= 100 && ficoScore < 200) {
    rate = .857;
  }
  if (ficoScore >= 200 && ficoScore < 300) {
    rate = .732;
  }
  if (ficoScore >= 300 && ficoScore < 400) {
    rate = .633;
  }
  if (ficoScore >= 400 && ficoScore < 500) {
    rate = .555;
  }
  if (ficoScore >= 500 && ficoScore < 600) {
    rate = .489;
  }
  if (ficoScore >= 600 && ficoScore < 700) {
    rate = .311;
  }
  if (ficoScore >= 700) {
    rate = .123;
  }
  return rate;
}

// simulate saving to the DB
function saveToDb(ssn, rate) {
  setTimeout(() => {
    insert = {
      ssn: ssn,
      rate: rate
    };
    console.log(insert.rate);
  }, 200);
}

// simulate API calls
function fetchAllFicoScores() {
   setTimeout(() => {
     let fakeFicoScores = fs.readFileSync('./fico_scores.json')
     return JSON.parse(fakeFicoScores);
   }, 500);
}

const fetchAllSsns = () => {
    setTimeout(() => {
      let fakeSsns = fs.readFileSync('./ssns.json')
      resolve(JSON.parse(fakeSsns));
      
    }, 1000);
}



const getFicoScoreBySsn = (ssn) => {
  // write code to look up fico score by ssn

  // data retrieval steps
  let ficoSsns = fetchAllSsns();

  if (!userId) return 'User not found';
  
  let creditScores = fetchAllFicoScores();

  // ...

  // data processing steps
  rate = getRate(null);

  // save to db
  saveToDb(ssn, rate);
}

// run calculation
let ssn = '999-99-4119';
getFicoScoreBySsn(ssn);