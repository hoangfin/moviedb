<script>
    import { params } from "@roxi/routify";
    import { getMovieDetail } from "../../stores/MovieStore";
    import { onMount } from "svelte";
    import Preloader from "../../components/Preloader.svelte";
    import { fly } from "svelte/transition";

    let movieDetail;
    let resReady = false;

    onMount(async () => {
        movieDetail = await getMovieDetail($params.id);
        try {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
            await img.decode();
            console.log("img.decode has been completed");
        } catch (error) {

        }
        resReady = true;
        console.log("resReady is set to true");
    });
</script>
    {#if resReady}
        <div class="movie-detail" in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
            <h2>{movieDetail.title}</h2>
            <span>{movieDetail.release_date}</span>
            <span class="separator"></span>
            {movieDetail.runtime} min
            <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt="{movieDetail.title}">
            <ul>
                {#each movieDetail.genres as genre}
                    <li>{genre.name}</li>
                {/each}
            </ul>
            <p>{movieDetail.overview}</p>
        </div>
    {:else}
        <Preloader />
    {/if}

<style>
    .movie-detail {
        margin: 1rem 10%;
    }

    h2 { margin-bottom: 0.5rem; }

    .separator {
        display: inline-block;
        margin: 0 0.5rem 0.2rem;
        padding: 1px;
        font-size: 1rem;
        line-height: 0.5rem;
        border-radius: 50%;
        vertical-align: middle;
        background-color: currentColor;
    }

    img {
        display: block;
        width: 100%;
        margin: 1rem 0;
        border-radius: 1rem;
    }

    ul {
        list-style: none;
        margin: 0 0 0 -0.5rem;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0.5rem 0.5rem;
        padding: 0.5rem;
        font-weight: 700;
        border: 1px solid black;
        border-radius: 1rem;
    }
</style>