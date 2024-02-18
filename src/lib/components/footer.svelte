<script>
	import '../../style/app.scss';
	import { page } from '$app/stores';
	import logo from '$lib/images/logo_white.png';
	let address = $page.data.address;
	let pages = $page.data.nodes;
</script>

<section class="wrap">
	<div class="footer-top">
		<div class="pages">
			<h2>Sivut</h2>
			<ul>
				{#each pages as item (item.id)}
					<li><a href={item.path}>{item.label}</a></li>
				{/each}
			</ul>
		</div>
		<div class="address">
			<h2>Osoite</h2>
			<p><strong>Sähköposti: </strong>{address?.sahkopossti}</p>
			<p><strong>Y-tunnus: </strong>{address?.yTunnus}</p>
			<p><strong>Tilinumero: </strong>{address?.tilinnumero}</p>
			<p><strong>Osoite: </strong>{address?.osoite}</p>
		</div>
		<div class="socials">
			<h2>Tärkeät linkit</h2>
			<a href"/kalenteri">Kalenteri</a>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="logo"><a href="/"><img src={logo} alt="HybridiSpeksi logo" /></a></div>
		<div class="links">
			<ul>
				<li><a href="/hybridispeksi-ry-yhdistyksen-saannot">Yhdistyksen säännöt</a></li>
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	@use '../../style/variables' as v;

	section {
		padding-top: 50px;
		background-color: v.$black;
		color: v.$white;
		display: flex;
		flex-direction: column;

		a {
			color: v.$white;
			text-decoration: underline;
		}
		li {
			list-style: none;
		}
		h2 {
			padding: 0;
			margin: 0;
		}
	}
	.footer-top {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		div {
			width: calc(33.33% - 50px);
			padding: 0 25px;
			min-width: 350px;
		}
	}
	.footer-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.links {
			margin-left: auto;
		}
	}

	.logo {
		height: 100px;
		img {
			height: 100%;
		}
	}
</style>
