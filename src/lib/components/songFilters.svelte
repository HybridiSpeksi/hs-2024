<script>
     export let filters = {
        year: 0,
        production: '',
        type: '',
        scene: '',
        original_artist: '',
        original_song: ''
     }

     let years = [2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023]
</script>
<button on:click={() => {filters.year=2014}}>Meidän</button>
{#each years as year}
<button on:click={() => {filters.year=year}}>{year}</button>
{/each}

