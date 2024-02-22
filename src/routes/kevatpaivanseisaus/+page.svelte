<script lang="ts">
	import { onMount } from 'svelte';
	import nettisivu_k1 from '$lib/images/kevatpaivanseisaus/nettisivu_k1.png';
	import nettisivu_k2 from '$lib/images/kevatpaivanseisaus/nettisivu_k2.png';
	import nettisivu_k3 from '$lib/images/kevatpaivanseisaus/nettisivu_k3.png';
	import nettisivu_k4 from '$lib/images/kevatpaivanseisaus/nettisivu_k4.png';
	import tatu from '$lib/images/kevatpaivanseisaus/tatu.png';
	import zombie from '$lib/images/kevatpaivanseisaus/zombie.png';
	import Video from '$lib/components/video.svelte';
	import kasi from '$lib/images/kevatpaivanseisaus/kasi.png';
	import kasvit from '$lib/images/kevatpaivanseisaus/kasvit.png';
	import o_sydan from '$lib/images/kevatpaivanseisaus/o_sydan.png';
	import v_sydan from '$lib/images/kevatpaivanseisaus/v_sydan.png';
	import verho1 from '$lib/images/kevatpaivanseisaus/verho1.png';
	import verho2 from '$lib/images/kevatpaivanseisaus/verho2.png';
	import verho3 from '$lib/images/kevatpaivanseisaus/verho3.png';
	import Sponsors from '$lib/components/sponsors.svelte';

	export let data;
    const sponsors = data.sponsors

	let tatuInitialRotation = 0;

	let heightMultiplier = 1.00; 
	onMount(() => {
		window.scrollTo(0, 0);
	});

	onMount(() => {
		if (window.innerWidth <= 1200) {
			tatuInitialRotation = 50;
		}
		if (window.innerWidth <= 800) {
			tatuInitialRotation = 60;
		}
		if (window.innerWidth <= 600) {
			tatuInitialRotation = 60;
			heightMultiplier = 1.35;
		}
	});
	let x = 0;
	let scroll = 0;
	
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth={x} />
<div class="page-wrapper">
	<div class="parallax-container">
		<img
			class="image"
			src={nettisivu_k1}
			alt="Kerros 1"
			style:transform={`translate3d(0, ${scroll * 0.8 * heightMultiplier}px, 0)`}
		/>
		<div id="top" class="production-logo" style:transform={`translate3d(0, ${scroll * 1.5 * heightMultiplier}px, 0)`}>
			<h1 class="neon logo">
				<div>KE<span class="flicker-slow">V</span>ÄT</div>
				<div>P<span class="flicker-slow">Ä</span>IVÄN</div>
				<div>
					SEI<span class="flicker-slow">S</span>A<span class="flicker-fast u-turn">U</span>S
				</div>
			</h1>
		</div>
		<img
			class="image"
			src={nettisivu_k2}
			alt="Kerros 2"
			style:transform={`translate3d(0, ${scroll * 0.6 * heightMultiplier}px, 0)`}
		/>
		<img
			class="image"
			src={nettisivu_k3}
			alt="Kerros 3"
			style:transform={`translate3d(0, ${scroll * 0.4 * heightMultiplier}px, 0)`}
		/>
		<img
			class="image"
			src={nettisivu_k4}
			alt="Kerros 4"
			style:transform={`translate3d(0, ${scroll * 0.1 * heightMultiplier}px, 0)`}
		/>
	</div>

	<div class="content">
		<div class="comic">
			<div class="first-panel panel">
				<div class="plants"><img src={kasvit} /></div>
				<div
					class="hand"
					style:transform={`translate3d(${scroll * -0.1 * heightMultiplier}px, ${scroll * 0.1 * heightMultiplier}px, 0)`}
				>
					<img src={kasi} />
				</div>
			</div>
			<div class="second-panel panel">
				<div
					class="heart1"
					style:transform={`translate3d(0, ${scroll * -0.01 * heightMultiplier}px, 0) rotate(${Math.min(0, -90 + (scroll) * 0.07 * heightMultiplier)}deg`}
				>
					<img src={v_sydan} />
				</div>
				<div
					class="heart2"
					style:transform={`translate3d(0, ${scroll * -0.01 * heightMultiplier}px, 0) rotate(${Math.max(0, 90 + (scroll) * -0.07 * heightMultiplier)}deg`}
				>
					<img src={o_sydan} />
				</div>
				<div class="background"><img src={nettisivu_k1} /></div>
				<div
					class="zombie"
					style:transform={`translate3d(${scroll * 0.05 * heightMultiplier}px, 0, 0)`}
				>
					<img src={zombie} />
				</div>
				<p>
					Matkalla vaaroja ja zomrizoja kuhiseva lihaviidakko koettelee luottamusta ystäviin,
					rakkauteen ja tuttuihin tapoihin. Onneksi mukana on yksi henkisen tuen humanisti. Eikä
					koskaan ole liian myöhäistä oppia rakastamaan oikein.
				</p>
			</div>
			<div class="third-panel panel">
				<div class="verho1"><img src={verho1} /></div>
				<div
					class="verho2"
					style:transform={`translate3d(${scroll * 0.025 * heightMultiplier}px, 0, 0)`}
				>
					<img src={verho2} />
				</div>
				<div class="verho3"><img src={verho3} /></div>
			</div>
		</div>
	</div>

	<div class="content">
		<h2 class="neon center">HybridiSpeksi 2024 esittää: Kevätpäivänseisaus!</h2>
		<div class="times">
			<div class="kapow" style:opacity={(scroll * heightMultiplier) > 2000 ? 1 : 0}>
				<h2>Esitykset</h2>
				<p>
					Ke 20.3.2024 19:00<br />
					To 21.3.2024 19:00<br />
					Pe 22.3.2024 19:00<br />
					Su 24.3.2024 14:00<br />
					Ti 26.3.2024 19:00<br />
					Ke 27.3.2024 19:00<br />
					To 28.3.2024 19:00<br />
					Pe 29.3.2024 17:00<br />
					Kaikki esitykset
					<a class="link" href="https://www.karen.fi/" target="_blank" style="z-index = 1000;"
						>Kårenilla</a
					><br />
				</p>
			</div>
			<div
				class="tatu"
				style:transform={`translate3d(${scroll * -0.05 * heightMultiplier}px, 0, 0) rotate(${tatuInitialRotation + (scroll * 0.004 * heightMultiplier)}deg`}
			>
				<img src={tatu} alt="tatu" />
			</div>
		</div>
		<a class="btn" href="https://kide.app/community/d96376eb-02ff-4b1b-be75-a959f0fe0c42">Osta lippuja</a>
		<div class="video-container">
			<Video
				videoURL="https://www.youtube.com/embed/mjmnFollhrw?si=IV8Sa0Th5kySAit3"
				code="mjmnFollhrw"
			/>
		</div>
	</div>
  
	<Sponsors {data} />
</div>

<style lang="scss">
	@use '../../style/variables' as v;

	.comic {
		width: 100%;
		max-width: 1000px;
		overflow: hidden;

		.panel {
			width: 100%;
			position: relative;
			padding-bottom: 48%;
			overflow: hidden;
			div {
				position: absolute;
				width: 100%;
				height: 100%;
			}
			.hand {
				width: 30%;
				top: -100;
				right: -100;
			}
			img {
				width: 100%;
				object-fit: contain;
			}
			&.second-panel {
				padding-bottom: 55%;
				.background {
					img {
						object-fit: contain;
					}
				}
				.zombie {
					width: 10%;
					position: absolute;
					right: 100;
					img {
						position: absolute;
						bottom: 120;
					}
				}

				p {
					position: absolute;
					background-color: white;
					color: black;
					padding: 10px;
					font-family: 'Comic Neue';
					font-weight: 600;
					font-size: 20px;
					border: solid black 5px;
					bottom: 0;
					margin: 0;
					@media (max-width: 750px) {
						font-size: 16px;
					}
					@media (max-width: 500px) {
						font-size: 11px;
					}
				}
			}
			.heart1 {
				transform: rotate(-90deg);
			}
			.heart2 {
				transform: rotate(90deg);
			}
		}
	}
	.video-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px 0;
	}
	.times {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: relative;
		padding: 50px 0;
		align-items: center;
		justify-content: center;
		.kapow {
			opacity: 0;
			transition: opacity 0.2s;
			transition-delay: 0.5s;
			background-image: url('$lib/images/kevatpaivanseisaus/kapow.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-position: center;
			color: v.$black;
			font-weight: 600;
			font-size: 20px;
			padding: 150px;
			text-align: center;
			width: fit-content;
			@media (max-width: 800px) {
				padding: 100px;
			}
			.link,
			p,
			h2 {
				position: relative;
				z-index: 11;
			}
		}
		.tatu {
			height: 100%;
			display: flex;
			width: 50%;
			z-index: 10;
			img {
				min-width: 1000px;
			}
			@media (max-width: 1400px) {
				margin-left: -20%;
			}
			@media (max-width: 1200px) {
				
				img {
					min-width: 800px;
				}
			}
			@media (max-width: 800px) {
				margin-top: -30%;
				img {
					min-width: 700px;
				}
			}
			@media (max-width: 600px) {
				margin-left: -20%;
				margin-top: -50%;
				img {
					min-width: 600px;
				}
			}

			@media (max-width: 450px) {
				margin-left: -40%;
				margin-top: -70%;
				img {
					min-width: 500px;
				}
			}
		}
	}
	.content {
		width: 100%;
		z-index: 10;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.parallax-container {
		position: relative;
		padding-top: 70px;
		height: 100vh;
		overflow: hidden;
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.png');
		z-index: 1;
	}
	.image {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
	}

	.logo {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 85px;

		@media (max-width: 750px) {
			font-size: 70px;
		}
	}

	.production-logo {
		text-align: center;
	}

	@font-face {
		font-family: 'Beon';
		src: url('$lib/fonts/BeonMedium-6d51.otf') format('truetype');
	}

	.u-turn {
		display: inline-block;
		transform: translateY(50%) rotate(45deg);
		transform-origin: center center;
	}

	.neon {
		font-family: 'Beon', sans-serif;
		color: #ffffff;
		font-weight: 400;
		letter-spacing: 1vw;
		text-shadow:
			1px 0px 4px #fdcefd,
			2px 0px 4px rgb(253, 198, 253),
			3px 0px 4px rgb(255, 154, 255),
			2px 0px 3px #c92cbe,
			2px 3px 15px #c415b8,
			2px 0px 15px,
			5px 0px 125px,
			20px 0vw 200px #d42cca,
			40px 0vw 200px #b826ae;
	}

	.flicker-slow {
		animation: flicker 3s linear infinite;
	}

	.flicker-fast {
		animation: flicker 1s linear infinite;
	}

	@keyframes flicker {
		0%,
		19.999%,
		22%,
		62.999%,
		64%,
		64.999%,
		70%,
		100% {
			//text-shadow: none;
			opacity: 0.99;
		}
		20%,
		21.999%,
		63%,
		63.999%,
		65%,
		69.999% {
			opacity: 0.4;
		}
	}

	.page-wrapper {
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: top center;
		position: relative;
	}

	a {
		z-index: 10000;
	}
</style>
