<script>
  import {
      isGameStartedGetter,
      isGameOverGetter,
      isGameWonGetter,
      isGameFinishedGetter,
      mistakesStore,
      resetPasswordAction,
      resetLettersAction,
      resetMistakesAction
  } from '../store.ts';

  const restartGame = () => {
      resetPasswordAction();
      resetLettersAction();
      resetMistakesAction();
  };
</script>

{#if $isGameStartedGetter}
    <img class="mx-auto" src="/hangman/{$mistakesStore}.png" alt="{$mistakesStore} mistake"/>
    <p class="text-white">Number of mistakes: {$mistakesStore}</p>
    {#if $isGameOverGetter}
        <p class="text-red-300 font-bold">Game Over!</p>
    {/if}
    {#if $isGameWonGetter}
        <p class="text-green-300 font-bold">You win!</p>
    {/if}
    {#if $isGameFinishedGetter}
        <button on:click={restartGame}
                class="bg-green-800 hover:bg-green-600 py-3 px-6 m-12 font-bold uppercase text-white"
        >
            Restart
        </button>
    {/if}
{/if}
