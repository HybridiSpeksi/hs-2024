<script>
	let data = null;
    export let id = 0;

fetch(`https://wp.hybridispeksi.fi//wp-json/ifeelquizzy/v1/data/${id}`)
		.then((response) => response.json())
		.then((json) => (data = json))
		.catch((error) => console.error('Error:', error));
    
    console.log(data);
</script>

<style>
</style>
