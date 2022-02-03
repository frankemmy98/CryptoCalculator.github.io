// get Data to their various pages 
const cryptoArray = [
    crypto1 = document.getElementById('btc'),
    crypto2 = document.getElementById('eth'),
    crypto3 = document.getElementById('btt'),
    crypto4 = document.getElementById('busd'),
    crypto5 = document.getElementById('luna'),
    crypto6 = document.getElementById('usdt'),
    crypto7 = document.getElementById('sol'),
    crypto8 = document.getElementById('bnb'),
    crypto9 = document.getElementById('xrp'),
    crypto10 = document.getElementById('dot')
]

// Build request Url

function buildRequestUrl() {
      return 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTT,BUSD,LUNA,USDT,SOL,BNB,XRP,DOT&tsyms=USD'
}

// Request Data

const requestCryptoCompare = async (url) => {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const crypto = jsonResponse

    postToPage(crypto)
}
    const postToPage = (cryptos) => {
    for(let i = 0; i < cryptoArray.length; i++) {
           cryptoArray[i].innerHTML = cryptos[i]
        }
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
