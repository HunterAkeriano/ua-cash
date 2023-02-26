const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const currencyCode = 840; // Код доллара по ISO 4217
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onload = function() {
  if (this.status === 200) {
    const response = JSON.parse(this.responseText);
    const usd = response.find(currency => currency.r030 === currencyCode);
    const rate = usd.rate.toFixed(2);
    const output = `Курс доллара к гривне: ${rate} грн`;
    document.getElementById('exchange-rate').textContent = output;
  }
};

xhr.send();