<script lang="ts">
    let clickCount = $state(0);
    import { setAge, isAdult } from '$lib/ageCheck';

    function switchToCalc() {
        window.location.href = '/rechner/';
    }

</script>


<h1>Svelte testing repo :)</h1>
<p>Hier geht es zu meinem GitHub: <a href="https://github.com/alimegl">github.com/alimegl</a></p>
<p>Here i'm trying out svelte!</p>

<br>

<button onclick={() => clickCount++} title="Das ist ein Button!">
    clickCount: {clickCount}
</button>

<br>

<button onclick={() => clickCount = 0} title="Das ist ein Button, welcher den Counter resettet!">
    Reset clickCount
</button>

<br>

<button onclick={switchToCalc} title="Das ist ein Button, welcher zum Rechner weiterleitet!">
    Zum Rechner
</button>





<style>
    :global(body) {
        background-image: url('/Aurora.jpg');
        background-size: cover;
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
    }
    button {
        display: block;
        margin: 0 auto;
        background-color: rgb(0, 191, 255);
        border: 1px solid black;
}   
    
</style>