fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
.then(response => response.json())
.then(data => {
    const currencyTableBody = document.getElementById('currency-table-body');
    data.slice(0, 5).forEach(currency => {
        const row = document.createElement('tr');
        row.classList.add('currency-row');
        if (currency.symbol === 'usdt') {
            row.classList.add('green-row');
        } else {
            row.classList.add('blue-row');
        }
        row.innerHTML = `
            <td>${currency.id}</td>
            <td>${currency.symbol}</td>
            <td>${currency.name}</td>
        `;
        currencyTableBody.appendChild(row);
    });
})
.catch(error => console.error(error));
