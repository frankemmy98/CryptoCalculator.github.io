// get Data to their various pages 
const cryptoArray = [
    crypto1 = document.getElementsByClassName('btc'),
    crypto2 = document.getElementsByClassName('eth'),
    crypto3 = document.getElementsByClassName('btt'),
    crypto4 = document.getElementsByClassName('busd'),
    crypto5 = document.getElementsByClassName('luna'),
    crypto6 = document.getElementsByClassName('usdt'),
    crypto7 = document.getElementsByClassName('sol'),
    crypto8 = document.getElementsByClassName('bnb'),
    crypto9 = document.getElementsByClassName('xrp'),
    crypto10 = document.getElementsByClassName('dot')
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
    const convertResponse = JSON.parse(crypto)

    postToPage(convertResponse)
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
