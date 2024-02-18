<script>
    let media;
</script>
<svelte:window bind:innerWidth={media}/>
<svelte:head>
    <title>HybridiSpeksin kalenteri</title>
    <meta name="description" content="HybridiSpeksin kalenteri" />

</svelte:head>

<section class="wrap">
    <div class="calendar__container">
        <iframe
        id="calendar"
        src="https://calendar.google.com/calendar/embed?height=1000&amp;wkst=2&amp;ctz=Europe%2FHelsinki&amp;src=ZDNqcGUzazg4bnBxOWY5N2JhMjZmaTl1NWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23227F63&amp;showTz=0&amp;mode={media < 800 ?'AGENDA':'MONTH'}&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;hl=fi"
        style="border-width: 0"
        width="100%"
        height="600"
        frameborder="0"
        title="kalenteri"
        />
    </div>
</section>

<style lang="scss">
.calendar {
    &__container {
        height: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
}
</style>