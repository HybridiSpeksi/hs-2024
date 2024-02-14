<script>
    import logo from '$lib/images/logo_white.png';
    import logoBlack from '$lib/images/logo_black.png';

    export let data;
    const people = data.people
    const address = $page.data.address;

    function capitalizeFirstLetter(str) {
    // Check if the string is empty or null
    if (!str) return str;

    // Capitalize the first letter and concatenate it with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const blackPics = [
        'tuotantiimi'
    ]

	/* 	let name = '';
	let email = '';
	let title = '';
	let message = '';

	function handleSubmit() {
		// Handle form submission here
		console.log({ name, email, title, message });
	} */
</script>

<section class="people">
    {#if typeof people === 'object' && Object.keys(people)}
        {#each Object.keys(people) as group}
        <section class="{group}">
            <div class="wrap">
                <div class="flex {group}">
                    <h2 class="flex-item twelve">{capitalizeFirstLetter(group)}</h2>
                    {#if people[group]}
                        {#each people[group] as person}
                        <div class = "flex-item three">
                            <div class="person">
                                <div class="has-image">
                                    <div class="img">
                                        <img class="cover" src="{person.personFields.image?.node.mediaItemUrl ? person.personFields.image.node.mediaItemUrl : (blackPics.includes(group) ? logoBlack : logo)}" alt="picture of {person.personFields.name}">
                                    </div>
                                </div>
                                <div class="has-details">
                                    <p class="job">{person.personFields.jobs}</p>
                                    <p class="name">{person.personFields.name}</p>
                                </div>
                            </div>
                        </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </section>  
        {/each}
    {:else}
        <div>
            <p>Ei</p>
        </div>
    {/if}
</section>
<section class="contact">
	<div class="wrap">
		<div class="address">
			<p><strong>Sähköposti: </strong>{address?.sahkopossti}</p>
			<p><strong>Y-tunnus: </strong>{address?.yTunnus}</p>
			<p><strong>Tilinumero: </strong>{address?.tilinnumero}</p>
			<p><strong>Osoite: </strong>{address?.osoite}</p>
		</div>
		<!-- 	<form on:submit|preventDefault={handleSubmit}>
            <label for="name">Name:</label>
            <input id="name" bind:value={name} required />
    
            <label for="email">Email:</label>
            <input id="email" type="email" bind:value={email} required />
    
            <label for="title">Title:</label>
            <input id="title" bind:value={title} required />
    
            <label for="message">Message:</label>
            <textarea id="message" bind:value={message} required></textarea>
    
            <button type="submit">Submit</button>
        </form> -->
	</div>
</section>

<style lang="scss">
	@use '../../style/variables' as v;
	section.contact {
		background-color: v.$gray;
		color: v.$white;
        .address {
            padding: 50px 0;
        }
		p {
			margin: 0;
			padding: 10px;
		}
	}
    section.tuotantotiimi {
        background-color: #D9D9D9;
        color: #0E0E0E;
    }
    .wrap {
        padding: 0 100px;

        h2 {
            margin-left: 0;
        }
        .flex {
            flex-wrap: wrap;
            width: auto;
            .flex-item {
                flex: 0 1 auto;
                .person {
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    .has-image {
                        width: 91px;
                        flex: 0 0 auto;
                        margin: 0 auto 5px auto;
                        .img {
                            padding-bottom: 100%;
                            border-radius: 50%;
                            position: relative;
                            img {
                                position: absolute;
                                display: block;
                                object-fit: cover;
                                object-position: 50% 50%;
                                border-radius: 50%;
                                height: 100%!important;
                                width: 100%!important;
                            }
                        }
                    }
                    .has-details {
                        text-align: center;
                        .job {
                            font-weight: 700;
                            font-size: 20px;
                            margin-bottom: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 150px;
                        }
                        .name {
                            font-size: 16px;
                            color: #727272;
                            margin-top: auto;
                        }
                        p {
                            line-height: 24px;
                            margin: 0;
                        }
                    }
                }
            }
        } 
    }

    @media only screen and (max-width: 1180px) {
        .flex-item.three {
            width: 33%;
        }
    }
    @media only screen and (max-width: 900px) {
        .flex-item.three {
            width: 50%;
        }
    }
    @media only screen and (max-width: 670px) {
        .flex{
            .flex-item.three {
                width: 100%;
                .person {
                    .has-details {
                        .job {
                            min-height: unset;
                            margin-bottom: 10px;
                        }
                    }
                }
            
            }   
        } 
    }
    
    @media only screen and (max-width: 400px) {
        .wrap {
            padding: 0 20px;
        }
    }
</style>