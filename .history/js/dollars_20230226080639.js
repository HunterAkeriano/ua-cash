const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const usdCode = 840; // Код доллара по ISO 4217
const uahCode = 980; // Код гривны по ISO 4217

fetch(url)
  .then(response => response.json())
  .then(data => {
    const usd = data.find(currency => currency.r030 === usdCode);
    const usdRate = usd.rate.toFixed(2);
    const uah = data.find(currency => currency.r030 === uahCode);

    const output = `Курс доллара к гривне: ${usdRate} грн / Курс гривны к доллару:  USD`;
    document.getElementById('exchange-rates').textContent = output;
  })
  .catch(error => console.error(error));