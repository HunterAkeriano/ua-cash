const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const usdCode = 840; // Код доллара по ISO 4217

fetch(url)
  .then(response => response.json())
  .then(data => {
    const usd = data.find(currency => currency.r030 === usdCode);
    const purchaseRate = usd.rate.toFixed(2);
    const saleRate = (usd.rate + 0.5).toFixed(2); // добавляем дельту в 50 копеек для получения курса продажи
    const output = Покупка: ${purchaseRate} грн / Продажа: ${saleRate} грн;
    document.getElementById('usd-rate').textContent = output;
  })
  .catch(error => console.error(error));


  function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
    document.getElementById('date-date-date').textContent = timeString;
  }


  function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('date-date-date').textContent = timeString;
  }
  
  setInterval(displayTime, 1000);