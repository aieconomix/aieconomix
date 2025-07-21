
async function fetchPrices() {
  try {
    const coingecko = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await coingecko.json();
    document.querySelector('#btc span').textContent = data.bitcoin.usd + ' USD';
    document.querySelector('#eth span').textContent = data.ethereum.usd + ' USD';

    const gold = await fetch('https://api.metals.live/v1/spot/gold');
    const goldPrice = await gold.json();
    document.querySelector('#gold span').textContent = goldPrice[0] + ' USD';

    const usdIrr = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=IRR');
    const usdData = await usdIrr.json();
    document.querySelector('#usd span').textContent = Math.round(usdData.rates.IRR) + ' IRR';

  } catch (e) {
    console.error("خطا در دریافت قیمت‌ها", e);
  }
}

fetchPrices();
setInterval(fetchPrices, 30000);
