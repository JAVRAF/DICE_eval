const dot1 = document.getElementById('canvasDot1');
const dot2 = document.getElementById('canvasDot2');
const round1 = document.getElementById('round1');
const round2 = document.getElementById('round2');
const global1 = document.getElementById('global1');
const global2 = document.getElementById('global2');
const diceBloc = document.getElementById('diceBloc');

const d1 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
<circle cx="8" cy="8" r="1.5"/>
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
</svg>`
const d2 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`
const d3 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`
const d4 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`
const d5 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`
const d6 = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">
<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>`

let ctx1 = dot1.getContext('2d');
let ctx2 = dot2.getContext('2d');
let player;
let roll;
let score = 0;
let total1 = 0;
let total2 = 0;


const newGame = () => {
  player = player === undefined ? 1:player;
  dot1.style.display = 'block';
  dot2.style.display = 'none';
  round1.innerText = 0;
  round2.innerText = 0;
  global1.innerText = 0;
  global2.innerText = 0;
  score = 0;
  total1 = 0;
  total2 = 0;
  diceBloc.innerHTML = '';
}

const swapPlayers = () => {
  if(player === 1) {
    dot1.style.display = 'none';
    dot2.style.display = 'block';
    score = 0;
    player = 2;
  } else if(player === 2) {
    dot2.style.display = 'none';
    dot1.style.display = 'block';
    score = 0;
    player = 1;
  }
}

const diceMechanism = (round) => {
  roll = Math.floor(Math.random() * 6) + 1
switch(roll) {
    case 1 :
      round.innerText = 0;
      swapPlayers();
      diceBloc.innerHTML = d1
      alert('vous avez tiré 1, votre tour est terminé. Le joueur ' + player + ' lance le dé !');
      break;
    case 2 :
      score += roll
      round.innerText = score;
      diceBloc.innerHTML = d2
      break;
    case 3 :
      score += roll
      round.innerText = score;
      diceBloc.innerHTML = d3
      break;
    case 4 :
      score += roll
      round.innerText = score;
      diceBloc.innerHTML = d4
      break;
    case 5 :
      score += roll
      round.innerText = score;
      diceBloc.innerHTML = d5
      break;
    case 6 :
      score += roll
      round.innerText = score;
      diceBloc.innerHTML = d6
      break;
  }
}

const rollDice = () => {
  player = player === undefined ? 1:player;
  if(player === 1) {
    diceMechanism(round1)
  } else if (player === 2) {
    diceMechanism(round2)
  }
}

const hold = () => {
  if(player === 1) {    
    total1 += score;
    global1.innerText = total1;
    score = 0;
    round1.innerText = score;
    swapPlayers();
  } else if (player === 2) {
    total2 += score;
    global2.innerText = total2;
    score = 0;
    round2.innerText = score;
    swapPlayers();
  }
  if (total1 > 99) {
    alert ('Le joueur 1 gagne la partie avec '+ total1 + ' points !');
    newGame()
  } else if (total2 > 99) {
    alert ('Le joueur 2 gagne la partie avec '+ total2 + ' points !');
    newGame()
  }
}

if(dot1.getContext && dot2.getContext) {
  ctx1.beginPath();
  ctx1.fillStyle = 'red';
  ctx1.arc(140, 70, 50, 0, Math.PI * 2);
  ctx1.fill();        
  ctx2.beginPath();
  ctx2.fillStyle = 'red';
  ctx2.arc(140, 70, 50, 0, Math.PI * 2);
  ctx2.fill(); 
} else {
  alert('ce navigateur ne supporte pas les canevas')
}