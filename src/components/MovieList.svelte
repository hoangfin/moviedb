<script>
    import MovieCard from "./MovieCard.svelte";
    export let movies;
</script>

<ul>
    {#each movies as movie}
        <li><MovieCard {movie} /></li>
    {/each}
</ul>

<style>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 1rem;
        row-gap: 2rem;
    }

    li {
        /* overflow: hidden; */
    }
</style>