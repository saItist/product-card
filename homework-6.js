const personData = {                 //задание 6.3
  firstName: "Абдурахман",
  lastName: "Чакаев",
  temper: "Скверный",
  position: "Frontend Developer",
  country: "Кавказ",
  city: "Махачкала",
  relationshipStatus: "Не женат"
};

//задание 6.4
// Автомобиль                        
const car = {
  brand: "Lexus",
  model: "LX570",
  year: 2017,
  color: "Белый Жемчуг",
  gasSystem: "Установлено газовое оборудование",
  torque: "530 Н·м",
  power: "367 л.с."
};

// Владелец
car.owner = personData;

//задание 6.5
function addMaxSpeed(carObject) {
  // Проверяем, есть ли свойство maxSpeed
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = "280 км/ч";
  }
}
addMaxSpeed(car);

// Задание 6.6
// Пример объекта
const book = {
  title: "1984",
  author: "Джордж Оруэлл",
  year: 1949
};

function showProperty(obj, prop) {
  console.log(obj[prop]);
}

// Вызовы функции
showProperty(book, "title");
showProperty(book, "author");
showProperty(book, "year"); 

//задание 6.7
const products = [
  "Молоко",
  "Хлеб",
  "Яблоки",
  "Сыр",
  "Яйца",
  "Масло"
];

// Задание 6.8
const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "синий",
    genre: "Дистопия"
  },
  {
    title: "Подлец",
    author: "Борис Акунин",
    year: 2001,
    coverColor: "красный",
    genre: "Детектив"
  },
  {
    title: "Азазель",
    author: "Борис Акунин",
    year: 1998,
    coverColor: "зелёный",
    genre: "Детектив"
  }
];

// Добавил методом массива в конец списка
books.push({
  title: "Скотный двор",
  author: "Джордж Оруэлл",
  year: 1945,
  coverColor: "серый",
  genre: "Сатира"
});

// Задание 6.9
// Мультивселенная — сборник Бориса Акунина
const akuninCollection = [
  {
    title: "Смерть Ахиллеса",
    author: "Борис Акунин",
    year: 2001,
    coverColor: "бордовый",
    genre: "Детектив"
  },
  {
    title: "Коронация, или Последний из романов",
    author: "Борис Акунин",
    year: 2000,
    coverColor: "синий",
    genre: "Детектив"
  },
  {
    title: "Турецкий гамбит",
    author: "Борис Акунин",
    year: 1998,
    coverColor: "красный",
    genre: "Детектив"
  }
];

// Объединил массивы
const allBooks = [...books, ...akuninCollection];

// Задание 6.10
// Функция, которая добавляет свойство "isRare" (редкая книга)
function markRareBooks(booksArray) {
  return booksArray.map(book => ({
    ...book,
    isRare: book.year > 2000
  }));
}


// Вызываем функцию и сохраняем новый массив
const updatedBooks = markRareBooks(allBooks);

// Проверяем результат
updatedBooks.forEach(
  book =>
    console.log(
      `${book.title} (${book.year}) — редкая: ${book.isRare}`
    )
);
