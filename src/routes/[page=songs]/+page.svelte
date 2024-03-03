<script lang="ts">
    import Filters from '$lib/components/songFilters.svelte';
	import { afterUpdate, onMount } from 'svelte';
    import songData from '$lib/data/songs.json';
	import type { SongType } from '$lib/types/song.type';
    let songs: SongType[] = songData;

    let filters: any
    let songs_filtered: SongType[] = []
    let years: number[] = []

    onMount(() => {
        filters = {
            year: 2014
        }

        // find all distinct years in songs
        songs.forEach((n) => {
            if (n.year != 2014 && !years.includes(n.year)) {
                years.push(n.year)
            }
        })
        years.sort((a, b) => a - b)
    })

    afterUpdate(() => {
        songs_filtered = songs.filter((n) => {return n.year==filters?.year})
    })


    let y: number
    let hidden = true;
    async function scrollTo(song: SongType | string) {

        if (song == "top") {
            y = 0;
            handleOnScroll()
            document.body.scrollIntoView()
        } else if(typeof song === 'object') {
            let destination = song.title
            await setYear(song.year)
            let el = document.getElementById(destination)
            if (el) {
                el.scrollIntoView()
            }
        }
    }

    function setYear(year: number) {
        if (year != 2000 && filters.year != year) {
            filters.year = year
        }
        return true;
    }

    function handleOnScroll() {
        if (y > 250) {
            hidden = false;
        } else {
            hidden = true;
        }
    }

    let search_results: SongType[] = []
    function handleSearch(event: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let query: string = event.currentTarget.value.toLowerCase()
        search_results = songs.filter((n) => {
            return n.lyrics.toLowerCase().includes(query)
        }).slice(0, 10)
    }


</script>
<section>
    <h1>Laulukirja</h1>
    
    <div class="searchresults">
        <input type="text" id="search" placeholder="Hae laulua" on:input={(event) => handleSearch(event)}/>
        {#if search_results.length > 0}
        <ul>
            {#each search_results as song}
            <li>        
                <span 
                    on:click={() => scrollTo(song)} 
                    on:keydown={() => scrollTo(song)} 
                    role="button" 
                    tabindex="0">
                {song.title}
                </span>
            </li>
            {/each}
        </ul>
        {/if}
    </div>

    <div class="filters">
        <Filters bind:filters years={years}/>
        {#if songs_filtered}
        <div id="top" class="songlist">
            {#each songs_filtered as song}
            <span 
                on:click={() => scrollTo(song)} 
                on:keydown={() => scrollTo(song)}
                role="button" 
                tabindex="0"
                >
                {song.title}
            </span>
            {/each}
        </div>
        {/if}
    </div>
    
    <div class="songs">
        {#each songs_filtered as song}
        <div class="song">
            <h2 id="{song.title}">{song.title}</h2>
            {#if song.year != 2014}
            <span class="info">HybridiSpeksi {song.year}: {song.production}</span>
            <!-- <span>{song.type} kohtauksesta {song.scene} </span> -->
            {/if}
            <span class="info">Alkuperäinen esittäjä ja kappale: {song.original_artist} - {song.original_song}</span>
            <div class="lyrics">
            {#each song.lyrics.split("\n\n") as pg}
                <span class="verse">
                    {#each pg.split("\n") as line}
                    <span class="line">{line}</span>
                    {/each}
                </span>
            {/each}
            </div>

        </div>
        {/each}
    </div>

    <button class="back2top" on:click={() => scrollTo("top")} class:hidden aria-hidden="true">
        Palaa alkuun
    </button>

</section>

<style lang="scss">
    :global(body) {
        &::before {
            background-image: none!important;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 1rem;
            padding: 1rem;
            border: 1px solid #000;
            border-radius: 5px;
            box-shadow: 2px 2px 5px #000;
        }
    }
    .searchresults {
        ul {

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        li {
            margin: 0.5rem;
            list-style: none;
            span {
                cursor: pointer;
                background-color: #4b62e4;
                border: none;
                border-radius: 10%;
                padding: 0.2rem;
                &:hover {
                    text-decoration: underline;
                    background-color: #192ea5;
                }
            }
        }
    }
    .songlist {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 1rem;        
        span {
            margin: 0.5rem;
            cursor: pointer;
            background-color: #4b62e4;
            border: none;
            border-radius: 10%;
            padding: 0.2rem;
            &:hover {
                text-decoration: underline;
                background-color: #192ea5;
            }
            
        }
    }
    .songs {
        display: flex;
        flex-direction: column;
        margin: 0.8rem;

        .song {
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
            padding: 1rem;            
            span.info {
                padding: 0.5rem 0.8rem;
                font-style: italic;
            }
            .lyrics {
                display: flex;
                flex-direction: column;
                padding: 0.8rem;
                .verse {
                    display: flex;
                    flex-direction: column;
                    padding: 0.8rem 0;
                    .line {
                        line-height: 1.6rem;
                    }
                }
            }
        }
    }

    .back2top {
        height: 60px;
        width: 100px;
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 20px;
        user-select: none;
        cursor: pointer;
        bottom: 20px;
        background-color: #4b62e4;
        border: none;
        border-radius: 10%;
        padding: 0.2rem;

        &.hidden {
            opacity: 0;
            visibility: hidden;
        }
        &:hover {
            scale: 1.1;
        }
    }
</style>

<svelte:window bind:scrollY={y} on:scroll={handleOnScroll}/>

