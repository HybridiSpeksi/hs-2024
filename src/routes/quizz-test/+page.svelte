<script>
	import Quizz from '$lib/components/quizz.svelte';
	let id = 4;
</script>
<div class="quizz"><Quizz {id} /></div>
<style>
    .quizz {
        margin: 0 auto;
        max-width: 800px;
    }
</style>
