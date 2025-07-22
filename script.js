
document.addEventListener("DOMContentLoaded", () => {
  const liveData = document.getElementById("live-data");
  liveData.innerHTML = "<p>Loading real-time market data...</p>";
  setInterval(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
      .then(res => res.json())
      .then(data => {
        liveData.innerHTML = `<p>BTC: $${data.bitcoin.usd}, ETH: $${data.ethereum.usd}</p>`;
      });
  }, 10000); // Update every 10 seconds
});
