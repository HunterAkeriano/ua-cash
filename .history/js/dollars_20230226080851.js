const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
const usdCode = 'USD';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const usd = data.find(currency => currency.ccy === usdCode);
    const purchaseRate = usd.buy;
    const saleRate = usd.sale;
    const output = `Покупка: ${purchaseRate} грн / Продажа: ${saleRate} грн`;
    document.getElementById('usd-rate').textContent = output;
  })
  .catch(error => console.error(error));