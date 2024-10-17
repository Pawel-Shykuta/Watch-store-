
var OsnownayaPerem = true;
var isMoving = false;

function Moove(){
    if(isMoving)return;
    isMoving = true;

    var firstPos = OsnownayaPerem? -100:0;
    var SecondPos = OsnownayaPerem? 0:-100;
    var mooveing = OsnownayaPerem? 1:-1;
    var container = document.getElementsByClassName('LinksContainer')[0];
    var timer = setInterval(BigMoove, 5);
    var btn = document.getElementById('burger');

    function BigMoove(){
        if((OsnownayaPerem && firstPos >=SecondPos)||(!OsnownayaPerem && firstPos <=SecondPos)){
            OsnownayaPerem = !OsnownayaPerem;
            clearInterval(timer);
            isMoving= false;
            if(OsnownayaPerem){
                btn.classList.remove('open');
            }else{
                btn.classList.add('open');
            }
        }else{
            firstPos+=mooveing;
            container.style.right = firstPos+'%';
        }
    }

}

document.getElementById('burger').addEventListener('сlick', function(){
    var btn = this;
    btn.disabled = true;
    Moove();
    setTimeout(function(){
        btn.disabled = false;
    },Math.abs(1000 * (100 / 1)) )
})


const images = document.querySelectorAll('.SliderBlocl');  // Массив с тегом каждого слайдера
let imagesToShow = 3; // Количество изображений, которые должны отображаться одновременно
let startIndex = 0;


setInterval(function(){
    var windowWidth = window.innerWidth;
    if(windowWidth <= 450){
        imagesToShow = 1;
    }else{
        imagesToShow = 3;
    }
    showImages(startIndex);
}, 100);


function showImages(index) {

    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i >= index && i < index + imagesToShow) {
            img.classList.add('active');
        }
    });
    startIndex = index;
}

function Prev() {
    let newIndex = startIndex - 1;
    if (newIndex < 0) {
        newIndex = Math.max(0, images.length - imagesToShow);
    }
    showImages(newIndex);
}

function Next() {
    let newIndex = startIndex + 1;
    if (newIndex > images.length - imagesToShow) {
        newIndex = 0;
    }
    showImages(newIndex);
}

showImages(0);





var btn = document.getElementById('FormBtn').addEventListener('click', clear);
var form = document.getElementById('labForm');

var blocks = document.getElementsByClassName('SliderBlocl');
var prevButton = document.getElementsByClassName('prev')[0];
var nextButton = document.getElementsByClassName('next')[0];
var moove = 1;
var newMoove = 0; // Начальное значение смещения
var StartStep = 0;



function wisible(){
    var index =0;
    var showElem = 3;
    


}


// Обработчик для кнопки "prev"
function prev() {
    var steps = 0;
    var maxSteps = 40; // Максимальное количество шагов
    var interval = setInterval(function(){
        newMoove -= moove; // Уменьшаем смещение на значение moove для движения влево
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.left = newMoove + 'px'; // Применяем смещение ко всем блокам
        }
        steps++;
        if (steps >= maxSteps) { 
            clearInterval(interval); // Останавливаем таймер после 30 шагов
        }
    }, 10);
    StartStep -= maxSteps; // Обновляем StartStep, чтобы отслеживать положение

    if (newMoove <= -80) {
        newMoove = 0;
        StartStep = 0;
    }

}

// Обработчик для кнопки "next"
function next() {
    var steps = 0;
    var maxSteps = 40; // Максимальное количество шагов
    var interval = setInterval(function(){
        newMoove += moove; // Увеличиваем смещение на значение moove для движения вправо
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.left = newMoove + 'px'; // Применяем смещение ко всем блокам
        }
        steps++;
        if (steps >= maxSteps) { 
            clearInterval(interval); // Останавливаем таймер после 30 шагов
        }
    }, 10);
    StartStep += maxSteps; // Обновляем StartStep, чтобы отслеживать положение

    if (newMoove >= 180) {
        newMoove = 0;
        StartStep = 0;
    }
}

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);




