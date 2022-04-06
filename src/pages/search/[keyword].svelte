<script>
    import { params } from "@roxi/routify";
    import { searchMovies } from "../../stores/MovieStore";
    import MovieList from "../../components/MovieList.svelte";
    import { onMount } from "svelte";
    import Preloader from "../../components/Preloader.svelte";
    import { fly } from "svelte/transition";

    let movies;
    let resReady = false;

    onMount(async () => {
        movies = await searchMovies($params.keyword);
        let promises = [];
        movies.forEach(movie => {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            promises.push(img.decode());
        });
        try {
            await Promise.all(promises);
        } catch (error) {

        }
        resReady = true;
    });
</script>

<div class="movie-detail">
    {#if resReady}
        <section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
            <MovieList {movies} />
        </section>
    {:else}
        <Preloader />
    {/if}
</div>

<style>
    .movie-detail {
        margin: 1rem 10%;
    }

    img {
        display: block;
        width: 100%;
        border-radius: 1rem;
    }
</style>