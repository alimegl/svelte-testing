<script lang="ts">
    import { goto } from '$app/navigation';
</script>

<h1>Rechner</h1>

<p>Hier ist mein Rechner</p>
<br>
<br>


<button onclick={() => goto('/')} title="Das ist ein Button, welcher zurück zum Hauptmenü führt!">
    Zum Hauptmenü
</button>

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
        font-size: 3em;
    }

    p {
        color: rgb(230, 230, 243);
        font-size: 1.5em;
    }
    button {
        margin: 0 auto;
        background-color: rgb(0, 191, 255);
        border: 1px solid black;
    }

</style>