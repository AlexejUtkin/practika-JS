"use strict";

// Практика ч.1

const numbersOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Практика ч.2


// 1-й вариант цикла

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}


// 2-й вариант цикла

// let num = 0;
// while (num < 2) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его', '');
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         num++;
//     }
// }

// 3-й вариант цикла

// let num = 0;
// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его', '');
// do {
//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//            personalMovieDB.movies[a] = b;
//            num++;
//            console.log(num);
//         }
//     }
// while (num < 3);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}




console.log(personalMovieDB);