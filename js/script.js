"use strict";

// // Практика ч.1

// let numbersOfFilms;

// function start() {
//     numbersOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
//     while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
//         numbersOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numbersOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', '').trim(),
//             b = prompt('На сколько оцените его', '');
//         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }

// rememberMyFilms ();

// function detectedPersonalLevel () {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы класический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Ошибка');
//     }
// }

// detectedPersonalLevel ();


// // Практика ч.3

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }

// }

// writeYourGenres ();


// Пракика ч.4

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', '').trim(),
                b = prompt('На сколько оцените его', '');
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' && genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр #${i + 1}, - это ${item}`);
            });
        }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectedPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
