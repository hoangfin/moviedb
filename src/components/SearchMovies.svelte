<script>
    import { goto } from "@roxi/routify";

    let keyword;

    function submit() {
        $goto(`/search/${keyword}`);
    }
</script>

<form on:submit|preventDefault={submit}>
    <input bind:value={keyword} placeholder="Search for a movie..." type="text" size="40" />
    <button>Search</button>
</form>

<style>
    form {
        position: relative;
        width: 100%;
        margin: 2rem 0;
    }

    input {
        display: block;
        width: 100%;
        /* font-size: 1rem; */
        padding: 0.5rem;
        padding-right: 5rem;
        border-radius: 10px;
        outline: none;
        color: rgb(255, 255, 255);
        background-color: rgb(63, 63, 63);
        border: none;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        padding: 0 0.5rem;
        outline: none;
        border: none;
        color: white;
        background-color: rgb(96, 110, 201);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
    }
</style>