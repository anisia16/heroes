let showHeroesBtn = document.getElementById('show-heroes-btn'); //apasa pe butonul showheroes 
let showHeroesContainer = document.getElementById('heroes-container');
let startFightBtn = document.getElementById('start-fight-btn');
let showWinnerDiv = document.getElementById('show-winner');
showHeroesBtn.addEventListener('click', showHeroesContainerFunc);
startFightBtn.addEventListener('click', showWinnerFunc);

function showHeroesContainerFunc() {
    showHeroesBtn.classList.add('d-none');
    showHeroesContainer.classList.add('d-flex');
    startFightBtn.classList.add('d-block');
}

function showWinnerFunc() {
    showWinnerDiv.innerHTML = epicFight.findWinner();
    startFightBtn.classList.remove('d-block');
    showHeroesContainer.classList.remove('d-flex');
    showWinnerDiv.classList.add('d-flex');
}