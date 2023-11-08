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
  <div class="container text-center">
    <div
      class="border-4 border-gray-600 border-opacity-20 mx-auto"
      style="max-width: 400px; min-height: 400px"
    >
      {#if $mistakesStore > 0}
        <img
          class="mx-auto"
          src="/hangman/{$mistakesStore}.png"
          alt="{$mistakesStore} mistake"
        />
      {/if}
    </div>
  </div>
{/if}

{#if $isGameFinishedGetter}
  <div class="absolute top-1/2 text-center flex flex-col gap-12">
    {#if $isGameOverGetter}
      <p class="text-4xl text-red-300 font-bold">Game Over!</p>
    {/if}
    {#if $isGameWonGetter}
      <p class="text-4xl text-green-300 font-bold">You win!</p>
    {/if}
    <button
      on:click={restartGame}
      class="bg-green-800 hover:bg-green-600 py-3 px-6 font-bold uppercase text-white"
    >
      Restart
    </button>
  </div>
{/if}
