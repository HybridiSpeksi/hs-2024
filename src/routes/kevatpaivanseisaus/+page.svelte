<script>
</script>

<div class="production-logo">
	<h1 class="neon">
		<div>KE<span class="flicker-slow">V</span>ÄT</div>
		<div>P<span class="flicker-slow">Ä</span>IVÄN</div>
		<div>SEI<span class="flicker-slow">S</span>A<span class="flicker-fast u-turn">U</span>S</div>
	</h1>
</div>

<style>
	.production-logo {
		text-align: center;
	}

	@font-face {
		font-family: 'Beon';
		src: url('../../lib/fonts/BeonMedium-6d51.otf') format('truetype');
	}

	.u-turn {
		display: inline-block;
		transform: translateY(50%) rotate(45deg);
		transform-origin: center center;
	}

	.neon {
		font-family: 'Beon', sans-serif;
		font-size: 130px;
		color: #ffffff;
		font-weight: 400;
		letter-spacing: 8px;
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
</style>
