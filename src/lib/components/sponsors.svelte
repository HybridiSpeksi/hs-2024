<script>
	export let data;
	const sponsors = data.sponsors;

	function openLink(url) {
		window.open(url, '_blank');
	}

	function getMainSponsorHeading() {
		return sponsors.filter((sponsor) => sponsor.sponsorFields.mainsponsor).length > 1
			? 'pääyhteistyökummanit'
			: 'Pääyhteistyökumppani';
	}

	function hasMainSponsors() {
		return sponsors.some(
			(sponsor) =>
				sponsor.sponsorFields.logo &&
				sponsor.sponsorFields.logo.node.mediaItemUrl &&
				sponsor.sponsorFields.mainsponsor
		);
	}

	function hasRegularSponsors() {
		return sponsors.some(
			(sponsor) =>
				sponsor.sponsorFields.logo &&
				sponsor.sponsorFields.logo.node.mediaItemUrl &&
				!sponsor.sponsorFields.mainsponsor
		);
	}
</script>

<div class="all-sponsors-container">
	{#if hasMainSponsors()}
		<h2 class="center">{getMainSponsorHeading()}</h2>
		<div class="main-sponsors-container sponsors-container">
			{#each sponsors as { sponsorFields }, index (sponsorFields.name)}
				{#if sponsorFields.logo && sponsorFields.logo.node.mediaItemUrl && sponsorFields.mainsponsor}
					<img
						src={sponsorFields.logo.node.mediaItemUrl}
						alt={sponsorFields.name}
						class="main-sponsor-logo"
						on:click={() => openLink(sponsorFields.webpage)}
					/>
				{/if}
			{/each}
		</div>
	{/if}
	{#if hasRegularSponsors()}
		<h2 class="center">Yhteistyössä</h2>

		<div class="regular-sponsors-container sponsors-container">
			{#each sponsors as { sponsorFields }, index (sponsorFields.name)}
				{#if sponsorFields.logo && sponsorFields.logo.node.mediaItemUrl && !sponsorFields.mainsponsor}
					<img
						src={sponsorFields.logo.node.mediaItemUrl}
						alt={sponsorFields.name}
						class="sponsor-logo"
						on:click={() => openLink(sponsorFields.webpage)}
					/>
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
		margin: 10px;
		cursor: pointer;
		&:hover {
			border: solid black 5px;
		}
	}

	.main-sponsor-logo {
		max-width: 400px;
		width: 100%;
		height: auto;
		margin: 0 25px;
		padding: 10px;
		cursor: pointer;
		&:hover {
			border: solid black 5px;
		}
	}
</style>
