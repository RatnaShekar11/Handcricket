let value=null;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
const headsBtn = document.getElementById('head-button');
const tailsBtn = document.getElementById('tail-button');
let selectedValue = null;

headsBtn.addEventListener('click', () => {
  selectedValue = 'head';
  headsBtn.classList.add('selected');
  tailsBtn.classList.remove('selected');
});

tailsBtn.addEventListener('click', () => {
  selectedValue = 'tail';
  tailsBtn.classList.add('selected');
  headsBtn.classList.remove('selected');
});

function getRandomValue() {
    const values = ['bat', 'bowl'];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
const opponentValue = getRandomValue();
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
            value='head';
            setTimeout(function(){
               if (selectedValue === 'head') {
                window.location.href = 'tosswon.html';
                } else {
                let confirmResult = confirm('Sorry! You opponent has chosen to ' + opponentValue + ' first...');
                if(confirmResult){
                    if(opponentValue == 'bat'){
                        window.location.href = 'bowling.html';
                    }
                    else{
                        window.location.href = 'batting.html';
                    }
                }
                else{
                    window.location.href = 'index.html'
                }
                }
            },3100);
        }, 100);
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
            value='tail';
            setTimeout(function(){
                if (selectedValue === 'tail') {
                    window.location.href = 'tosswon.html';
                } else {
                    let confirmResult = confirm('Sorry! You opponent has chosen to ' + opponentValue + ' first...');
                if(confirmResult){
                    if(opponentValue == 'bat'){
                        window.location.href = 'bowling.html';
                    }
                    else{
                        window.location.href = 'batting.html';
                    }
                }
                else{
                    window.location.href = 'index.html'
                }
                }
            },3100);
        }, 100);
    }
});
