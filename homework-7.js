
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers); // [5, 6, 7, 8, 9, 10]

const movies = [
  "Интерстеллар",
  "Начало",
  "Матрица",
  "Темный рыцарь",
  "Дюна",
  "Паразиты"
];

const hasMatrix = movies.includes("Матрица");
console.log(hasMatrix); // true

function reverseArray(arr) {
  return arr.slice().reverse();
}

const reversedNumbers = reverseArray(filteredNumbers);
console.log("Перевёрнутые числа:", reversedNumbers);

const reversedItems = reverseArray(movies);
console.log("Перевёрнутые строки:", reversedItems);


import { commentsList } from './comments.js';


const comEmails = commentsList.filter(comment => comment.email.includes('.com'));
console.log('Комментарии с .com в email:', comEmails);


const updatedComments = commentsList.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log('Комментарии с изменённым postId:', updatedComments);


const simplifiedComments = commentsList.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log('Упрощённые комментарии:', simplifiedComments);


const commentsWithValidity = commentsList.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log('Комментарии с isInvalid:', commentsWithValidity);


const emailsWithReduce = commentsList.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log('Emails через reduce:', emailsWithReduce);


const emailsWithMap = commentsList.map(comment => comment.email);
console.log('Emails через map:', emailsWithMap);

const emailsString1 = emailsWithMap.toString();
console.log('Через toString():', emailsString1);

const emailsString2 = emailsWithMap.join('; ');
console.log('Через join():', emailsString2);

