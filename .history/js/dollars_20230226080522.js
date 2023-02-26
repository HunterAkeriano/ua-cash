const socket = new WebSocket('wss://stream.coinmarketcap.com/price/latest');

socket.onmessage = function(event) {
  const message = JSON.parse(event.data);
  const usdRate = message.data[1].quote.USD.price.toFixed(2);
  const uahRate = (1 / usdRate).toFixed(2);
  const output = `Курс доллара к гривне: ${uahRate} грн / Курс гривны к доллару: ${usdRate} USD`;
  document.getElementById('exchange-rates').textContent = output;
};