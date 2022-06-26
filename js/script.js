"use strict";

const numberOfFilms = +prompt('Сколько фильмов ві посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt('Один из последних просмотреных фильмов?', ''),
    mark1 = +prompt('Один из последних просмотреных фильмов?', ''),
    lastFilm2 = prompt('Один из последних просмотреных фильмов?', ''),
    mark2 = +prompt('Один из последних просмотреных фильмов?', '');

personalMovieDB.movies[lastFilm1] = mark1;
personalMovieDB.movies[lastFilm2] = mark2;

console.log(personalMovieDB);