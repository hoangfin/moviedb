<script>
    export let movie;
</script>

<div class="movie-card">
    <a href={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="{movie.title}">
    </a>
    <div class="detail">
        <div class="rating">
            <svg xmlns="http://www.w3.org/2000/svg" class="rating-star" role="presentation">
                <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
            </svg>
            <span class="rating-score">{movie.vote_average}</span>
        </div>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

<style>
    .movie-card {
        height: 70vh;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    a { display: block; }

    img {
        display: block;
        width: 100%;
        height: 50vh;
        margin-bottom: 10px;
        object-fit: cover;
    }

    .detail { margin: 0 1rem; }

    h2, p { margin: 0; font-size: 1rem; }

    .rating {
        position: relative;
        margin-left: -5px;
    }

    .rating-star {
        display: block;
        width: 24px;
        height: 24px;
        fill: rgb(245, 197, 24);
        margin: 0.5rem 0;
    }

    .rating-score {
        position: absolute;
        top: 50%;
        left: 27px;
        transform: translateY(-50%);
    }

    p {
        color: rgba(0, 0, 0, 0.6);
    }
</style>