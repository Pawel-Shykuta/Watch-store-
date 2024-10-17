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



var h = document.getElementById('ha');

var ByBtn = document.getElementById('by').addEventListener('click', ()=>{
    var input = document.getElementById('input').value;
    h.textContent = 'Price: ' + input * 15 +'$';
   
});



var summary = document.getElementsByTagName('summary');

for(let i = 0; i<=summary.length;i++){
    summary[i].addEventListener('click',()=>{
        if(summary[i].classList.contains('OpenS')){
            summary[i].classList.remove('OpenS');
        }else{
            summary[i].classList.add('OpenS');
        }
    })
       
}



