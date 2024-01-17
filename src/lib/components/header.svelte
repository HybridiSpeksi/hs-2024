<script>
	import { onMount } from 'svelte';
	import logo from '../images/logo_white.png';

	let menuItems = []; // Define menuItems

	const getTopLevelPages = async () => {
		const query = `
        {
            pages(where: {parent: null}) {
                nodes {
                    id
                    title
                    uri
                }
            }
        }
        `;

		const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query
			})
		});

		const data = await response.json();

		if (!data.data || !data.data.pages) {
			console.error('Error fetching pages:', data.errors);
			return [];
		}

		return data.data.pages.nodes;
	};

	onMount(async () => {
		menuItems = await getTopLevelPages();
	});
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
