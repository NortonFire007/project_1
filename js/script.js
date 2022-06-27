"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ви посмотрели', '');
    //isNaN - проверяет на НЕ число, если не  чмсло ,вернет правду
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ви посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотреных фильмов?', ''),
            mark = prompt('На сколько ви оцениваете этот фильм?', '');
        if (mark != null && lastFilm != null && mark != '' && lastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = mark;
            console.log('Done!');
        } else { i--; console.log('Error!'); }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мадо посмотрел');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Для начала неплох');
    } else if (personalMovieDB.count >= 30) {
        console.log('О, ви киноман');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

