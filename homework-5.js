function showCityWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию.`);
}

showCityWeather("Махачкала", 16);

showCityWeather("Киев", 6);


const SPEED_OF_SOUND = 343;

function checkSpeed(speed) {
  if (speed > SPEED_OF_SOUND) {
    console.log("Сверхзвуковая скорость");
  } else if (speed < SPEED_OF_SOUND) {
    console.log("Дозвуковая скорость");
  } else {
    console.log("Скорость звука");
  }
}
checkSpeed(200);
checkSpeed(343); 
checkSpeed(800);


const product = "Ноутбук";
const price = 1200;

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}


let bookTitle = "1984";
let author = "Джордж Оруэлл";
let pages = 328;


function showBookInfo() {
    console.log(`Книга "${bookTitle}" написана автором ${author} и содержит ${pages} страниц.`);
}

showBookInfo();