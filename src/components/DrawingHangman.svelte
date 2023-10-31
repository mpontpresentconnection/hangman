<script>
  import { passwordStore, mistakesStore } from '../store.ts';
</script>

{#if $passwordStore}
    <p class="text-white">Number of mistakes: {$mistakesStore}</p>
{/if}
