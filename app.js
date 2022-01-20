// get Data to their various pages 1

const crypto1 = document.getElementById('btc')

// Build request Url

const buildRequestUrl = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data

const requestCryptoCompare = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.BTC.USD
    postToPage(crypto)
}

const postToPage = (crypto) => {
      crypto1.innerHTML = crypto
}

const processRequest = async () => {
     const requestUrl = buildRequestUrl()
      await requestCryptoCompare(requestUrl)
}

processRequest()


// get Data to their various pages 2
const crypto2 = document.getElementById('eth')

// Build request Url2

const buildRequestUrl2 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data2

const requestCryptoCompare2 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.ETH.USD
    postToPage2(crypto)
}

const postToPage2 = (crypto) => {
      crypto2.innerHTML = crypto
}

const processRequest2 = async () => {
     const requestUrl = buildRequestUrl2()
      await requestCryptoCompare2(requestUrl)
}

processRequest2()



// get Data to their various pages 3
const crypto3 = document.getElementById('btt')

// Build request Url3

const buildRequestUrl3 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data3

const requestCryptoCompare3 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.BTT.USD
    postToPage3(crypto)
}

const postToPage3 = (crypto) => {
      crypto3.innerHTML = crypto
}

const processRequest3 = async () => {
     const requestUrl = buildRequestUrl3()
      await requestCryptoCompare3(requestUrl)
}

processRequest3()



// get Data to their various pages 4
const crypto4 = document.getElementById('busd')

// Build request Url4

const buildRequestUrl4 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data4

const requestCryptoCompare4 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.BUSD.USD
    postToPage4(crypto)
}

const postToPage4 = (crypto) => {
      crypto4.innerHTML = crypto
}

const processRequest4 = async () => {
     const requestUrl = buildRequestUrl4()
      await requestCryptoCompare4(requestUrl)
}

processRequest4()



// get Data to their various pages 5
const crypto5 = document.getElementById('luna')

// Build request Url5

const buildRequestUrl5 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data5

const requestCryptoCompare5 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.LUNA.USD
    postToPage5(crypto)
}

const postToPage5 = (crypto) => {
      crypto5.innerHTML = crypto
}

const processRequest5 = async () => {
     const requestUrl = buildRequestUrl5()
      await requestCryptoCompare5(requestUrl)
}

processRequest5()



// get Data to their various pages 6
const crypto6 = document.getElementById('usdt')

// Build request Url6

const buildRequestUrl6 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data6

const requestCryptoCompare6 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.USDT.USD
    postToPage6(crypto)
}

const postToPage6 = (crypto) => {
      crypto6.innerHTML = crypto
}

const processRequest6 = async () => {
     const requestUrl = buildRequestUrl6()
      await requestCryptoCompare6(requestUrl)
}

processRequest6()




// get Data to their various pages 7
const crypto7 = document.getElementById('sol')

// Build request Url7

const buildRequestUrl7 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data7

const requestCryptoCompare7 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.SOL.USD
    postToPage7(crypto)
}

const postToPage7 = (crypto) => {
      crypto7.innerHTML = crypto
}

const processRequest7 = async () => {
     const requestUrl = buildRequestUrl7()
      await requestCryptoCompare7(requestUrl)
}

processRequest7()




// get Data to their various pages 8
const crypto8 = document.getElementById('bnb')

// Build request Url8

const buildRequestUrl8 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data2

const requestCryptoCompare8 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.BNB.USD
    postToPage8(crypto)
}

const postToPage8 = (crypto) => {
      crypto8.innerHTML = crypto
}

const processRequest8 = async () => {
     const requestUrl = buildRequestUrl8()
      await requestCryptoCompare8(requestUrl)
}

processRequest8()





// get Data to their various pages 9
const crypto9 = document.getElementById('xrp')

// Build request Url 9

const buildRequestUrl9 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data9

const requestCryptoCompare9 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.XRP.USD
    postToPage9(crypto)
}

const postToPage9 = (crypto) => {
      crypto9.innerHTML = crypto
}

const processRequest9 = async () => {
     const requestUrl = buildRequestUrl9()
      await requestCryptoCompare9(requestUrl)
}

processRequest9()




// get Data to their various pages 10
const crypto10 = document.getElementById('dot')

// Build request Url10

const buildRequestUrl10 = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data10

const requestCryptoCompare10 = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse.DOT.USD
    postToPage10(crypto)
}

const postToPage10 = (crypto) => {
      crypto10.innerHTML = crypto
}

const processRequest10 = async () => {
     const requestUrl = buildRequestUrl10()
      await requestCryptoCompare10(requestUrl)
}

processRequest10()













































// // cryptocompare url
// const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD";
// // proxy url
// // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
// // apiKey
// const apiKey = "9493279ec288e5e0769a7929b17ed676e69d1353aec3926bd7cd9ee57f77e07e";
// // node-fetch
// // const nodeFetch = require("node-fetch");

// fetch(url) 
//       .then(response => response.json())
//       .then(jsonObj => displayUi(jsonObj))
//       .catch(() => alert('API Could not be reached at this time'))

// function displayUi(price) {
//    const price = RAW.BTC.USD.PRICE;

//      document.getElementById('template').innerHTML(price);
// }









// let field1 = document.querySelector("#input1") 
// let field2 = document.querySelector("#input2")
// let field3 = document.querySelector('#result')
// let my_operators = Array.from(document.getElementsByClassName('operators'))

// my_operators.forEach((operator)=>{
//     operator.addEventListener('click', ()=>{
//         dostuff(operator.innerHTML)
//     })
// })

// function dostuff(operand){
//     if(field1.value && field2.value){
//         let answer;
//         if(operand == '+'){
//             answer = parseFloat(field1.value) + parseFloat(field2.value)
//         }else if(operand == '-'){
//             answer = parseFloat(field1.value) - parseFloat(field2.value)
//         }else if(operand === '/'){
//             answer = parseFloat(field1.value) / parseFloat(field2.value)
//         }else if(operand === '*'){
//             answer = parseFloat(field1.value) * parseFloat(field2.value)
//         }

//         field3.value = answer
//     }else{
//         alert('Fields cannot be empty')
//     }
    
// }
