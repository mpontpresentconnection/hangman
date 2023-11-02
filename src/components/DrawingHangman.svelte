<script>
  import { getIsGameStarted, getIsGameOver, getIsGameWon, getIsGameFinished, mistakesStore } from '../store.ts';
</script>

{#if $getIsGameStarted}
    <img class="mx-auto" src="/hangman/{$mistakesStore}.png" alt="{$mistakesStore} mistake"/>
    <p class="text-white">Number of mistakes: {$mistakesStore}</p>
    {#if $getIsGameOver}
        <p class="text-red-300 font-bold">Game Over!</p>
    {/if}
    {#if $getIsGameWon}
        <p class="text-green-300 font-bold">You win!</p>
    {/if}
    {#if $getIsGameFinished}
        <button class="bg-green-800 hover:bg-green-600 py-3 px-6 m-12 font-bold uppercase text-white"> Restart</button>
    {/if}
{/if}
