<script>
	import logo from '../images/logo_white.png';
	
	export let data;
	
	//These are fetched in +layout.server.js
	let menuItems = data.nodes;
</script>

<!-- Then, in your markup, you can loop through menuItems to create your navigation menu -->
<div class="header">
	<a href="/" class="logo">
		<img src={logo} alt="Logo" />
	</a>

	<nav>
		{#each menuItems as item (item.id)}
			<a href={item.uri}>{item.title}</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	@use '../../style/variables' as v;
	.header {
		background-color: rgba(v.$black, 0.5);
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		padding-right: 20px;

		nav {
			display: flex;
			flex-direction: row;

			span {
				padding: 10px;
			}
		}
	}

	.logo {
		height: 70px;
		img {
			height: 100%;
		}
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	nav a {
		color: #fff;
		text-decoration: none;
	}
</style>
