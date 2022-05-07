(function () {
'use strict';

// Фильмы
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

//   while(numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//     } else {
//       i--;
//     }
//   }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();

// =====================================
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);
// =====================================

// =====================================
// метки
// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (k = 0; k < 3; k++) {
//       if (k == 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }
// =====================================

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.Должен получиться точно такой же массив
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// return result;

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done". Для определения типа данных используйте typeof(); Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//   if (typeof(data[i]) === 'number') {
//     data[i] = data[i] * 2;
//   } else {
//     data[i] = data[i] + ' - done';
//   }
//   console.log(data[i]);
// }
// return data;

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i];
// }

// console.log(result);
// =====================================

// =====================================
// Елочка
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);
// =====================================

// =====================================
// Функции
// =====================================
// function sayHello(name) {
//   return `Привет, ${name}`;
// }

// let result = sayHello('Антон');
// console.log(result);
// =====================================

// function returnNeighboringNumbers(number) {
//   return [number - 1, number, number + 1];
// }

// let result = returnNeighboringNumbers(5);
// console.log(result);
// =====================================

// function getMathResult(num1, num2) {

//   if (typeof(num2) != 'number' || num2 <= 0) {
//     return num1;
//   }

//   let str = '';

//   for (let i = 1; i <= num2; i++) {
//     if (i === num2) {
//       str += `${num1 * i}`;
//     } else {
//       str += `${num1 * i}---`;
//     }
//   }
//   return str;
// }

// let result = getMathResult(20, -5);
// console.log(result);
// =====================================

// =====================================
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// function calculateVolumeAndArea(num) {
//   let volume = num * num * num;
//   let square = num * num * 6;
  
//   if (Number.isInteger(volume) && Number.isInteger(square) && num > 0) {
//     console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
//   } else {
//     console.log('При вычислении произошла ошибка');
//   }
// }

// calculateVolumeAndArea(-15);
// =====================================

// =====================================
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.

// function getCoupeNumber(seatNumber) {
  
//   if (typeof(seatNumber) !== 'number' || seatNumber < 0 || Number.isInteger(seatNumber) != true) {
//     console.log('Ошибка. Проверьте правильность введенного номера места');
//     return;
//   }

//   if (seatNumber > 36 || seatNumber == 0) {
//     console.log('Таких мест в вагоне не существует');
//     return;
//   }
  
//   for (let i = 1; i <= 9; i++) {
//     let numberCoupe = i * 4;
//     if (numberCoupe >= seatNumber) {
//       return i;
//     }
//   }

// }

// console.log(getCoupeNumber('Hello'));
// =====================================

// =====================================
// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// function getTimeFromMinutes(minutesTotal) {
//   if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//       return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//       case 0: 
//           hoursStr = 'часов';
//           break;
//       case 1:
//       case 21:
//           hoursStr = 'час';
//           break;
//       case 2:
//       case 3:
//       case 4:
//           hoursStr = 'часа';
//           break;
//       default:
//           hoursStr = 'часов';
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(1200);
// =====================================

// =====================================
// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом - возвращается 0. Дробные числа разрешены.

// function findMaxNumber(a, b ,c, d) {
//   if (typeof(a) !== 'number' ||
//       typeof(b) !== 'number' ||
//       typeof(c) !== 'number' ||
//       typeof(d) !== 'number') {
//       return 0;
//   } else {
//       return Math.max(a, b ,c, d);
//   }
// }

// findMaxNumber(1, 5, 6.6, 2);

}());