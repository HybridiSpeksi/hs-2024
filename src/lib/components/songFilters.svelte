<script lang="ts">
	export let filters = {
		year: 2014,
		production: '',
		type: '',
		scene: '',
		original_artist: '',
		original_song: ''
	};

	let productions: {[code:number]: string } = {
		2015: 'H.A.L.I.',
		2016: 'BratvaKontra',
		2017: 'Kruunun kohtalo',
		2018: 'Älä ammu ohi',
		2019: 'Viimeinen lohikäärmeisku',
		2020: '2101: Avaruusristeily',
		2022: 'Inferno: Kunnes Kadotus meidät korjaa',
		2023: 'Kreivin aikaan',
		2024: 'Kevätpäivänseisaus'
	}

    export let years: number[]
</script>

<div class="filters">

	<button
		class="meidan {2014 == filters.year ? 'active' : ''}"
		on:click={() => {
			filters.year = 2014;
		}}>Meidän speksi
	</button>
	
	<div>	
	{#each years as year}
		<button 
			class="{year == filters.year ? 'active' : ''}"
			on:click={() => {
				filters.year = year;
			}}><span>{year}: {productions[year]}</span>
		</button>
	{/each}
	</div>

</div>

<style lang="scss">
	.filters {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		div {
			max-width: 75%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		
		}
	}
	button {
		margin: 10px;
		// width: 80px;
		// height: 40px;
		border: none;
		border-radius: 10%;
		background-color: #ad18a3;
		cursor: pointer;
		font-size: 1.3rem;
		&.meidan {
			width: 160px;
		}
		&.active {
			background-color: #d42cca;
			scale: 1.1;
		}
		&:hover {
			background-color: #d42cca;
			border: none;
			scale: 1.1;
		}
		span {
			padding: 0.5rem;
		}
	}

</style>
