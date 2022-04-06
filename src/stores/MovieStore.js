import { writable } from "svelte/store";

export const MovieStore = writable();

let apiKey = "7b702eb6a197032e084d65bbe032f05a";

export async function getPopularMovies() {
    const page = Math.floor(Math.random() * 10) + 1;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            return data.results;
        }
        throw new Error(res.status);
    } catch (error) {
        console.error(error);
    }
};

export async function getMovieDetail(movieID) {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`);
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.error(error);
    }
};

export async function searchMovies(keyword) {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`);
        if (res.ok) {
            const data = await res.json();
            return data.results;
        }
    } catch (error) {
        console.error(error);
    }
}