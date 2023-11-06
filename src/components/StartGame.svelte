<script>
  import { isGameStartedGetter, resetPasswordAction } from '../store.ts'

  const startGame = () => resetPasswordAction()
</script>

{#if !$isGameStartedGetter}
  <div>
    <button
      on:click={startGame}
      id="start"
      class="bg-green-800 hover:bg-green-600 py-3 px-6 m-12 font-bold uppercase text-white"
    >
      Start
    </button>
  </div>
{/if}
