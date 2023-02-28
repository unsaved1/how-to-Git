'use strict';

const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
    rateMovie = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = rateMovie;

console.log(personalMovieDB);
