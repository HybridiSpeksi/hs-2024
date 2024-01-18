<script lang="ts">
    import songData from '$lib/data/songs.json';
	import type { SongType } from 'src/types/song.type';
    let songs: SongType[] = songData;


</script>
{#each songs as song}
    <div class="song">
        <h2>{song.title}</h2>
        <span>Vuodelta {song.year}</span>
        <span>Speksistä {song.production}</span>
        <span>{song.type} kohtauksesta {song.scene} </span>
        <span>Alkuperäinen esittäjä ja kappale: {song.original_artist} - {song.original_song}</span>
        <div class="lyrics">
        {#each song.lyrics.split("\n\n") as pg}
            {#each pg.split("\n") as line}
            <span>{line}</span>
            <br />
            {/each}
            <br />
        {/each}
        </div>

    </div>
{/each}

<style>
    .song {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin: 1rem;
        padding: 1rem;
    }
    .lyrics {
        padding: 1rem;
        white-space: pre-wrap;
    }
</style>

