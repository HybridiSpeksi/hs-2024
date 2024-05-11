<script>
    export let data;
    const production = data.production;
</script>
<div class="wrap">
    <div class="nav">
        <a href="./produktiot">Produktiot</a>
    </div>
    <div class="production">
        <div class="title">
            <h1>{production.title}</h1>
        </div>
        <div class="has-content">
            <div class="text">
                {@html production.productionFields.synopsis}
            </div>
        </div>
        <div class="has-images">
             <div class="image">
                <img src="{production.productionFields.banner?.node.mediaItemUrl}" alt="{production.productionFields.banner?.node.altText}">
             </div>   
        </div>
    </div>
</div>
<style lang="scss">
    .wrap {
        padding-top: 70px;
        .production {
            .title {

            }
            .has-content {

            }
            .has-images {
                .image {
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
