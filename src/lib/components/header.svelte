<script>
	import logo from '$lib/images/logo_white.png';
	import { afterNavigate } from '$app/navigation';

	export let data;
	
	//These are fetched in +layout.server.js
	let menuItems = data.nodes;

	let x = 0;

	let active = false;

	afterNavigate(() => (active = false));

	function menuToggle() {
		active = !active
		if (active) {
			document.body.classList.add("overflow-y-hidden")
		} else {
			document.body.classList.remove("overflow-y-hidden")
		}
	}

</script>

<svelte:window bind:innerWidth={x}></svelte:window>

<!-- Then, in your markup, you can loop through menuItems to create your navigation menu -->
<div class="header">
	<a href="/" class="logo">
		<img src={logo} alt="Logo" />
	</a>
	{#if x < 700}
	<div class="mobile-nav" class:active>
		<div class="menu-toggle" class:active on:click={menuToggle} on:keydown={(e) => {e.code ==="Enter" ? active = !active : '' }} role="button" tabindex="0">
			<div>
				<div class="con">
					<div class="bar top"></div>
					<div class="bar middle"></div>
					<div class="bar bottom"></div>
				</div>
			</div>
		</div>

		<nav class:active>
			<ul>
				{#each menuItems as item (item.id)}
					<li><a href={item.uri}>{item.title}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	{:else}
	<nav>
		{#each menuItems as item (item.id)}
			<a href={item.uri}>{item.title}</a>
		{/each}
	</nav>
	{/if}
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

	.mobile-nav{
		nav {
			display: none;
			&.active {
				display: flex;
				flex-direction: column;
				width: 100%;
				position: absolute;
				top: 70px;
				left: 0;
				height: calc(100vh - 70px);
				z-index: 10;
				background-color: black;
				ul {
					padding-top: 50px;
					display: flex;
					flex-direction: column;
					margin: 0 auto;
					list-style: none;
					li {
						font-size: 24px;
						margin: 10px;
					}
				}
			}
		}
		.menu-toggle {
			display: flex;
			position: fixed;
			top: 0;
			right: 0;
			height: 60px;
			align-items: center;
			>div {
				width: 60px;
			}
			.con {
				width: auto;
				margin: 0 auto;
				.bar {
					display: block;
					height: 3px;
					width: 28px;
					margin: 5px auto;
					border-radius: 2px;
					background-color: #fff;
					transition: all 0.15s ease;
				}
			}
			&.active {
				.con {
					.bar {
						&.top {
							color: pink;
							transform: translateY(4px) rotateZ(45deg);
						}
						&.middle {
							display: none;
						}
						&.bottom {
							transform: translateY(-4px) rotateZ(-45deg);
						}
					}
				}
			}
		}
	}
</style>
