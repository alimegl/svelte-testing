<script lang="ts">
    let clickCount = $state(0);

    function switchToCalc() {
        window.location.href = '/rechner/';
    }

</script>


<h1>Svelte testing repo :)</h1>

<div class="center">
    <div class="text">
    <p>Hier geht es zu meinem GitHub: <a href="https://github.com/alimegl" target="_blank">github.com/alimegl</a></p>
    <p>Here i'm trying out svelte!</p>
    </div>

    <button onclick={() => clickCount++} title="Das ist ein Button!">
        clickCount: {clickCount}
    </button>

    <button onclick={() => clickCount = 0} title="Das ist ein Button, welcher den Counter resettet!">
        Reset clickCount
    </button>

    <button onclick={switchToCalc} title="Das ist ein Button, welcher zum Rechner weiterleitet!">
        Zum Rechner
    </button>
</div>





<style>
    :global(body) {
        background-image: url('/Aurora.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 90vh;
    }
	h1 {
		color: rgb(69, 181, 255);
        text-align: center;
        font-size: 3em;
	}

    p {
        color: rgb(230, 230, 243);
        text-align: center;
        font-size: 1.5em;
        margin: 0;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
    button {
        display: block;
        margin: 0 auto;
        background-color: rgb(0, 191, 255);
        border: 1px solid black;
}   
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(80vh - 100px);
        gap: 1rem;
    }


</style>