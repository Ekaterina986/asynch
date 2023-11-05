const titele = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.onload = function() {
    let responseJson = JSON.parse(xhr.response);
    const question = responseJson.data.title;
    titele.innerHTML = question;
    const options = responseJson.data.answers;
    for(let option of options){
        const html = `
        <button class="poll__answer" onclick='buttonClick()'>${option}</button>`;
        answer.innerHTML += html;
    }    
}

function buttonClick() {
    alert( "Спасибо, ваш голос засчитан!" );
}

xhr.send();