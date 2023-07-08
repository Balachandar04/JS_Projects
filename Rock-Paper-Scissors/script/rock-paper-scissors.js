let intervalId;

let autoMove = function(){ 
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}
let scores =JSON.parse(localStorage.getItem('scores')) || {
    win : 0,
    lose : 0,
    tie : 0
};
document.querySelector('.result-para').innerHTML = `Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie} `;

function fun1(userMove){
    let result = '';   
    let computerMove = autoMove();
    if(computerMove === userMove){
        result = 'Tie';
        scores.tie++;
    }
    else if(userMove === 'rock' && computerMove === 'paper'){result = 'You Lose';scores.lose++;}
    else if(userMove === 'rock' && computerMove === 'scissors'){result = 'You Win';scores.win++;}
    else if(userMove === 'paper' && computerMove === 'rock'){result = 'You Win';scores.win++}
    else if(userMove === 'paper' && computerMove === 'scissors'){result = 'You Lose';scores.lose++}
    else if(userMove === 'Scissor' && computerMove === 'rock'){result = 'You Lose';scores.lose++}
    else {result = 'You Win';scores.win++;}
    document.querySelector('.result-para').innerHTML = `${result}<br><br>`;
    document.querySelector('.move-para').innerHTML =`<img src="images/${userMove}-emoji.png" class="move-icon"> ${userMove} - ${computerMove} <img src="images/${computerMove}-emoji.png" class="move-icon">  <br><br>`;
    document.querySelector('.scores-para').innerHTML =`Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie}`;
    localStorage.setItem('scores',JSON.stringify(scores));

}

function resetScores(){
    scores.win = scores.lose = scores.tie =0;
    localStorage.setItem('scores',JSON.stringify(scores));
    document.querySelector('.scores-para').innerHTML = `Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie} `;
    document.querySelector('.move-para').innerHTML =``;
    document.querySelector('.result-para').innerHTML =``;
}





function stopAutoPlay(){
    clearInterval(intervalId);
    document.querySelector('.stop-button-div').innerHTML ="";
}

const resetButtonElement = document.querySelector('.reset-button');
const autoplayButtonElement = document.querySelector('.autoplay-button');

autoplayButtonElement.addEventListener('click',() => {
        document.querySelector('.stop-button-div').innerHTML= "<button class = 'stop-button' onclick='stopAutoPlay()'>Stop</button>";
        intervalId = setInterval(function(){fun1(autoMove())},1000);
        console.log('e');
});
resetButtonElement.addEventListener('click',()=>{resetScores()});
