<script>
    import { page } from '$app/stores';
    export let data
    const productions = data.productions.nodes;
</script>
<div class="wrap">
    {#if productions}
    <div class="productions">
    {#each productions as prod}
        <div class="production">
            <a href="{$page.url.pathname + '/' + prod.slug}">
                <div class="title">
                    <h2>{prod.title}</h2>
                    -
                    <span>{prod.productionFields.year}</span>
                </div>
            </a>
        </div>
    {/each}
    </div>
    {/if}
</div>
<style lang="scss">
    .wrap {
        padding-top: 70px;
        .productions {
            .production {
                .title {
                    display: flex;
                    h2 {
                        margin: 0;
                        padding: 0;
                        font-size: 16px;
                    }
                    :first-child {
                        margin-right: 5px;
                    }
                    :last-child {
                        margin-left: 5px
                    }
                }
            }
        }
    }
</style>
