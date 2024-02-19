<script>
	import logo from '$lib/images/logo_white.png';
	import { afterNavigate } from '$app/navigation';

	export let data;
	
	//These are fetched in +layout.server.js
	let menuItems = data.nodes;
	// console.log(menuItems)

	let x = 0;

	let active = false;

	afterNavigate(function() {
		active = false;
		document.body.classList.remove("overflow-y-hidden");
	});

	function menuToggle() {
		active = !active
		if (active) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
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

		<div class="nav" class:active>
			<a href="/" class="logo">
				<img src={logo} alt="Logo" />
			</a>
			<nav class:active>
				<ul>
					{#each menuItems as item (item.id)}
						<li><a href={item.uri}>{item.label}</a></li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
	{:else}
	<nav>
		{#each menuItems as item (item.id)}
			<a href={item.uri}>{item.label}</a>
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
		.nav {
			display: none;
			height: 70px;
			&.active {
				display: block;
				.logo {
					position: fixed;
					top: 0;
					left: 20px;
					z-index: 13;
				}
			}
			nav {
				&.active {
					display: flex;
					flex-direction: column;
					width: 100%;
					position: fixed;
					top: 0;
					left: 0;
					height: 100vh;
					z-index: 12;
					background-color: v.$black;
					ul {
						padding-top: 70px;
						display: flex;
						flex-direction: column;
						margin-right: 10px;
						list-style: none;
						text-align: right;
						li {
							font-size: 24px;
							margin: 10px;
						}
					}
				}
			}
		}
		.menu-toggle {
			display: flex;
			position: fixed;
			top: 10px;
			right: 5px;
			height: 60px;
			align-items: center;
			background-color: v.$black;
			border-radius: 50%;
			z-index: 20;
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
					background-color: v.$white;
					transition: all 0.15s ease;
				}
			}
			&.active {
				.con {
					.bar {
						&.top {
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
