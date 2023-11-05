const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    progress.value = 0;

    let formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.onloadend = function() {
        if (xhr.status == 200) {
          console.log("Успех");
        } else {
          console.log("Ошибка " + this.status);
        }
    };
    xhr.upload.onprogress = function(event) {
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
        progress.value = event.loaded/event.total;
    };
    xhr.send(formData);
})