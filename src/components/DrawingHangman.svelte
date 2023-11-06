<script>
  import {
    isGameStartedGetter,
    isGameOverGetter,
    isGameWonGetter,
    isGameFinishedGetter,
    mistakesStore,
    resetPasswordAction,
    resetLettersAction,
    resetMistakesAction,
  } from '../store.ts'

  const restartGame = () => {
    resetPasswordAction()
    resetLettersAction()
    resetMistakesAction()
  }
</script>

{#if $isGameStartedGetter}
  <div
    class="border-4 border-gray-600 border-opacity-20 mx-auto"
    style="width: 300px; height: 400px"
  >
    {#if $mistakesStore > 0}
      <img
        class="mx-auto"
        src="/hangman/{$mistakesStore}.png"
        alt="{$mistakesStore} mistake"
      />
    {/if}
  </div>
  <p class="text-white">Number of mistakes: {$mistakesStore}</p>
  {#if $isGameOverGetter}
    <p class="text-red-300 font-bold">Game Over!</p>
  {/if}
  {#if $isGameWonGetter}
    <p class="text-green-300 font-bold">You win!</p>
  {/if}
  {#if $isGameFinishedGetter}
    <button
      on:click={restartGame}
      class="bg-green-800 hover:bg-green-600 py-3 px-6 m-12 font-bold uppercase text-white"
    >
      Restart
    </button>
  {/if}
{/if}
