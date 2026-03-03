<script lang="ts">
    let clickCount = $state(0);
</script>


<h1>Svelte testing repo :)</h1>
<p>Hier geht es zu meinem GitHub: <a href="https://github.com/alimegl">github.com/alimegl</a></p>
<p>Here i'm trying out svelte!</p>



<button onclick={() => clickCount++} title="Das ist ein Button!">
    clickCount: {clickCount}
</button>

<br>

<button onclick={() => clickCount = 0} title="Das ist ein Button, welcher den Counter resettet!">
    Reset clickCount
</button>


<style>
	h1 {
		color: red;
        text-align: center;
        font-size: 3em;
	}

    p {
        color: blue;
        text-align: center;
        font-size: 1.5em;
    }
    button {
        display: block;
        margin: 0 auto;
    }
</style>