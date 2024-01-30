<script>
    export let data;
    const people = data.people
    console.log(people)

    function capitalizeFirstLetter(str) {
    // Check if the string is empty or null
    if (!str) return str;

    // Capitalize the first letter and concatenate it with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
</script>

<div>
    {#if typeof people === 'object'  && Object.keys(people)}
    {#each Object.keys(people) as group}
    <div class="{group}">
        <h2>{capitalizeFirstLetter(group)}</h2>
        {#if people[group]}
            {#each people[group] as person}
            <div class = "aaaa">
                {person.personFields.name}
                {person.personFields.jobs}
                {#if person.personFields.image?.node}
                    {person.personFields.image.node.mediaItemUrl}
                {/if}
            </div>
            {/each}
        {/if}
    </div>
        
    {/each}
    {/if}
</div>


<style lang="scss">
    .aaaa{
        margin: 20px;
        background-color: red;
    }
</style>