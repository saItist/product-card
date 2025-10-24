// Покраска всех карточек

const productCard = document.querySelectorAll('.card-container')
const changeAllCardColorButton = document.querySelector('#change-all-cards-color-button')
const goldenColorHash = '#FFD700'

changeAllCardColorButton.addEventListener('click', () => {
    productCard.forEach((card) => card.style.backgroundColor = goldenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container')
const changeFirstCardColorButton = document.querySelector('#change-first-card-color-button')
const blackColorHash = '#000000'

changeFirstCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blackColorHash;
})

// Открытие Google.com
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?') ;
    if(answer=== true){
        window.open('https://www.google.com')
    } else {
        return;
    }
}

// Вывод сообщения в консоль лог и алерт
const outputLogButton = document.querySelector('#output-console-log-button')

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// Вывод текста заголовка в консоль при наведении мыши

const mainTitle = document.querySelector('h1');

mainTitle.addEventListener ('mouseover', () => {
  console.log(mainTitle.textContent);
});

// Кнопка меняет цывет при каждом клике
const toggleButton = document.querySelector('#toggle-button-color');

toggleButton.classList.add('bg-silver-button');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('bg-gold-button');
});