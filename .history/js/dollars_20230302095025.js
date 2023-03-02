const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const usdCode = 840; // Код доллара по ISO 4217
const eurCode = 978; // Код евро по ISO 4217

// на доллар
const dollarBuy = document.getElementById('usd-buy');
const dollarSale = document.getElementById('usd-sale');



fetch(url)
  .then(response => response.json())
  .then(data => {
    const usd = data.find(currency => currency.r030 === usdCode);
    const purchaseRateUsd = usd.rate.toFixed(2);
    const saleRateUsd = (usd.rate + 0.5).toFixed(2); // добавляем дельту в 50 копеек для получения курса продажи

    const eur = data.find(currency => currency.r030 === eurCode);
    const purchaseRateEur = eur.rate.toFixed(2);
    const saleRateEur = (eur.rate + 0.5).toFixed(2); // добавляем дельту в 50 копеек для получения курса продажи

    const outputUsd = `Покупка: ${purchaseRateUsd} грн / Продажа: ${saleRateUsd} грн`;
    const outputEur = `Покупка: ${purchaseRateEur} грн / Продажа: ${saleRateEur} грн`;
    dollarBuy.textContent = purchaseRateUsd;
    dollarSale.textContent = saleRateUsd;
  })
  .catch(error => console.error(error));

  function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('date-date-date').textContent = timeString;
  }
  
  setInterval(displayTime, 1000);
