
// دریافت قیمت لحظه‌ای بیت‌کوین و اتریوم از CoinGecko
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
  .then(res => res.json())
  .then(data => {
    document.getElementById("crypto-prices").innerHTML = `
      <p>بیت‌کوین: $${data.bitcoin.usd}</p>
      <p>اتریوم: $${data.ethereum.usd}</p>
    `;
  });

// نرخ تبدیل دلار به ریال از exchangerate.host
fetch("https://api.exchangerate.host/latest?base=USD&symbols=IRR")
  .then(res => res.json())
  .then(data => {
    document.getElementById("forex-prices").innerHTML = `
      <p>دلار به ریال: ${Math.round(data.rates.IRR)} ریال</p>
    `;
  });

// خبر اقتصادی RSS از Investing (فقط نمایش نمونه)
document.getElementById("economic-news").innerHTML = `
  <ul>
    <li>افزایش نرخ بهره توسط فدرال رزرو</li>
    <li>رشد تورم در منطقه یورو</li>
    <li>افت شاخص داوجونز پس از اعلام درآمد اپل</li>
  </ul>
`;

// توییت نمایشی
document.querySelector("#tweets blockquote").innerHTML = `
  <p>بازار کریپتو امروز با نوسانات شدید همراه بود. منتظر آپدیت‌های بیشتر باشید.</p>
  <p>— AiEconomix</p>
`;
