<script lang="ts">
  import { countersData } from '../countersData';
  export let index: number;

  function plusCount(): void {
    $countersData[index].count += 1;
  }
  function minusCount(): void {
    if ($countersData[index].count <= 0) {
      return;
    }
    $countersData[index].count -= 1;
  }
  function resetCount() {
    $countersData[index].count = 0;
  }
</script>

<div>
  <input type="text" bind:value={$countersData[index].title} />

  <span>{$countersData[index].count}</span>
  <button on:click={plusCount}>+</button>
  <button on:click={minusCount}>-</button>
  <button on:click={resetCount}>reset</button>
  <button
    on:click={() => {
      $countersData.splice(index, 1);
      $countersData = $countersData;
    }}>✖️</button
  >
</div>

<style>
  button {
    background-color: #9adcff;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  }
</style>
