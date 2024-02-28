<script lang="ts">
	import { onMount } from "svelte";

	export let data;
	const sponsors: Sponsors = data.sponsors;
	onMount(() => {
		console.log("sponsors");
		console.log(sponsors);
	});

	type Sponsors = Sponsor[];
	type Sponsor = {
		name: string,
		webpage: string,
		mainsponsor: string,
		logo: string
	}

	function openLink(url: string) {
		window.open(url, '_blank');
	}

	function getMainSponsorHeading() {
		return sponsors.filter((sponsor) => sponsor.mainsponsor).length > 1
			? 'pääyhteistyökummanit'
			: 'Pääyhteistyökumppani';
	}

	function hasMainSponsors() {
		return sponsors.some(
			(sponsor) =>
				sponsor.logo &&
				sponsor.logo &&
				sponsor.mainsponsor
		);
	}

	function hasRegularSponsors() {
		return sponsors.some(
			(sponsor: Sponsor) =>
				sponsor.logo &&
				sponsor.logo &&
				!sponsor.mainsponsor
		);
	}
</script>

<div class="all-sponsors-container">
	{#if hasMainSponsors()}
		<h2 class="center">{getMainSponsorHeading()}</h2>
		<div class="main-sponsors-container sponsors-container">
			{#each sponsors as sponsor}
				{#if sponsor.logo && sponsor.logo && sponsor.mainsponsor}
				<div class="main-sponsor-logo-container"
					on:click={() => openLink(sponsor.webpage)}
					on:keydown={() => openLink(sponsor.webpage)}
					role=button tabindex=0
				>
					<img
						src={sponsor.logo}
						alt={sponsor.name}
						class="main-sponsor-logo"
					/>
				</div>
				{/if}
			{/each}
		</div>
	{/if}
	{#if hasRegularSponsors()}
		<h2 class="center">Yhteistyössä</h2>

		<div class="regular-sponsors-container sponsors-container">
			{#each sponsors as sponsor}
				{#if sponsor.logo && sponsor.logo && !sponsor.mainsponsor}
				<div class="sponsor-logo-container"
					on:click={() => openLink(sponsor.webpage)}
					on:keydown={() => openLink(sponsor.webpage)}
					role=button tabindex=0
				>
					<img
						src={sponsor.logo}
						alt={sponsor.name}
						class="sponsor-logo"
					/>
				</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../../style/variables' as v;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: v.$black;
		margin: 0;
	}
	.sponsors-container {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		padding-bottom: 25px;
		z-index: 1;
		img {
			z-index: 10;
		}
	}

	.all-sponsors-container {
		position: relative;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		background-color: v.$white;
		padding: 50px 0;
	}
	.all-sponsors-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('../images/logo_black.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		opacity: 0.05;
	}

	.sponsor-logo {
		max-width: 150px;
		height: auto;
		padding: 10px;
		margin: 5px;
		border: solid transparent 5px;
		cursor: pointer;
		&:hover {
			border: solid black 5px;
		}
	}

	.main-sponsor-logo {
		max-width: 400px;
		width: 100%;
		height: auto;
		margin: 10px 0;
		cursor: pointer;
		&:hover {
			border: solid black 5px;
			margin: 5px -5px;
		}
	}
</style>
