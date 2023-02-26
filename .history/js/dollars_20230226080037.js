const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const usdCode = 840; // Код доллара по ISO 4217
const uahCode = 980; // Код гривны по ISO 4217
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onload = function() {
  if (this.status === 200) {
    const response = JSON.parse(this.responseText);
    const usd = response.find(currency => currency.r030 === usdCode);
    const usdRate = usd.rate.toFixed(2);
    const uah = response.find(currency => currency.r030 === uahCode);
    const uahRate = uah.rate.toFixed(2);
    const output = `Курс доллара к гривне: ${usdRate} грн / Курс гривны к доллару: ${uahRate} USD`;
    document.getElementById('exchange-rates').textContent = output;
  }
};

xhr.send();