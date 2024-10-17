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