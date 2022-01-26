// get Data to their various pages 1
const crypto1 = document.getElementById('btc')
const crypto2 = document.getElementById('eth')
const crypto3 = document.getElementById('btt')
const crypto4 = document.getElementById('busd')
const crypto5 = document.getElementById('luna')
const crypto6 = document.getElementById('usdt')
const crypto7 = document.getElementById('sol')
const crypto8 = document.getElementById('bnb')
const crypto9 = document.getElementById('xrp')
const crypto10 = document.getElementById('dot')


// Build request Url

const buildRequestUrl = () => {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data

const requestCryptoCompare = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse
    postToPage(crypto)
}

const postToPage = (crypto) => {
      crypto1.innerHTML = crypto.BTC.USD
      crypto2.innerHTML = crypto.ETH.USD
      crypto3.innerHTML = crypto.BTT.USD
      crypto4.innerHTML = crypto.BUSD.USD
      crypto5.innerHTML = crypto.LUNA.USD
      crypto6.innerHTML = crypto.USDT.USD
      crypto7.innerHTML = crypto.SOL.USD
      crypto8.innerHTML = crypto.BNB.USD
      crypto9.innerHTML = crypto.XRP.USD
      crypto10.innerHTML = crypto.DOT.USD
}

const processRequest = async () => {
     const requestUrl = buildRequestUrl()
      await requestCryptoCompare(requestUrl)
}

processRequest()























































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
