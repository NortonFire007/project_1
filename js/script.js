"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов ви посмотрели', '');
        //isNaN - проверяет на НЕ число, если не  чмсло ,вернет правду
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов ви посмотрели', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Один из последних просмотреных фильмов?', ''),
                mark = prompt('На сколько ви оцениваете этот фильм?', '');
            if (mark != null && lastFilm != null && mark != '' && lastFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = mark;
                console.log('Done!');
            } else { i--; console.log('Error!'); }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Мадо посмотрел');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Для начала неплох');
        } else if (personalMovieDB.count >= 30) {
            console.log('О, ви киноман');
        } else {
            console.log('Error!');
        }
    },

    writeYourGenres: function () {
        //for (let i = 0; i < 3; i++) {  }
        let i = 0;
        while (i < 3) {
            let genre = prompt(`Ваш любимый жанр  под номером ${i + 1}`);
            if (genre != null && genre !== '') {
                personalMovieDB.genres[i] = genre; i++;
            } else console.log('Не хитри!!!');
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    showMyDB: function (hidden) {
        if (!hidden) console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

