<script lang="ts">
    import { goto } from '$app/navigation';

    let clickCount = $state(0);
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

        <button onclick={() => goto('/rechner')} title="Das ist ein Button, welcher zum Rechner weiterleitet!">
        Zum Rechner
    </button>
</div>





<style>

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
        background: url('/aqua.svg') center / 100% 100% no-repeat;
        border: none;
        color: white;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        min-width: 120px;
        min-height: 36px;
        cursor: pointer;
        font-size: 0.7em;
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