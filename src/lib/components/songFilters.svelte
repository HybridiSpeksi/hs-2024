<script>
     export let filters = {
        year: 0,
        production: '',
        type: '',
        scene: '',
        original_artist: '',
        original_song: ''
     }
</script>

<input type="number" bind:value={filters.year} placeholder="Vuosi" />


{filters.year}

