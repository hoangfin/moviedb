<script>
	import { getPopularMovies } from "../stores/MovieStore";
	import MovieList from "../components/MovieList.svelte";
	import SearchMovies from "../components/SearchMovies.svelte";
	import Preloader from "../components/Preloader.svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let popularMovies;
	let resReady = false;

	onMount(async () => {
		popularMovies = await getPopularMovies();
		let promises = [];
		popularMovies.forEach(movie => {
			const img = new Image();
			img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
			promises.push(img.decode());
		});
		try {
			await Promise.all(promises);
		} catch (e) {
			console.log(e);
		}
		resReady = true;
	});
</script>

<main>
	<SearchMovies />
	{#if resReady}
		<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
			<MovieList movies={popularMovies} />
		</section>
	{:else}
		<Preloader />
	{/if}

</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>