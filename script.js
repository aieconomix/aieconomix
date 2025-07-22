
document.addEventListener("DOMContentLoaded", () => {
    // قیمت رمزارز (مثال بیت‌کوین)
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
        .then(res => res.json())
        .then(data => {
            const prices = document.getElementById("prices");
            prices.innerHTML = `
                <p>بیت‌کوین: $${data.bitcoin.usd}</p>
                <p>اتریوم: $${data.ethereum.usd}</p>
            `;
        });

    // اخبار جعلی تستی
    const news = [
        "قیمت طلا امروز افزایش یافت.",
        "بازار بورس آمریکا با نوسانات همراه بود.",
        "ارز دیجیتال جدید وارد بازار شد."
    ];
    const newsList = document.getElementById("news-list");
    news.forEach(n => {
        const p = document.createElement("p");
        p.textContent = n;
        newsList.appendChild(p);
    });

    // پست‌های تأثیرگذار شبکه X (نمونه)
    const xPosts = [
        "📉 اقتصاد جهانی در مسیر نزولی؟",
        "💰 سرمایه‌گذاری هوشمند در دوران تورم",
        "🪙 آیا بیت‌کوین همچنان امن‌ترین دارایی است؟"
    ];
    const xList = document.getElementById("x-list");
    xPosts.forEach(post => {
        const p = document.createElement("p");
        p.textContent = post;
        xList.appendChild(p);
    });
});
