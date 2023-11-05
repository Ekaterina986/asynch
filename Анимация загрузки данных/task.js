const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.onload = function() {
    let responseJson = JSON.parse(xhr.response);
    const valutes = responseJson.response.Valute;
    for (key in valutes) {
        const valute = valutes[key];
        const html = `
        <div class="item">
            <div class="item__code">${valute['CharCode']}</div>
            <div class="item__value">${valute['Value']}</div>
            <div class="item__currency">руб.</div>
        </div>`;
        items.innerHTML += html;
    }
    loader.classList.remove('loader_active');
}
loader.classList.add('loader_active');
xhr.send();