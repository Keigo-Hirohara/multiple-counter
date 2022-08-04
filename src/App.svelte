<script lang="ts">
  import Counter from './components/Counter.svelte';
  import { countersData } from './countersData';
  import type { counter } from './types';

  function addNewCounter(): void {
    let newId: number =
      $countersData.length == 0
        ? 0
        : $countersData[$countersData.length - 1].id + 1;
    $countersData = [
      ...$countersData,
      {
        id: newId,
        count: 0,
        title: 'new',
      },
    ];
  }

  $: total = $countersData.reduce((sum: number, item: counter): number => {
    return sum + item.count;
  }, 0);

  $: titleList = $countersData.map((x: counter): string => {
    return x.title;
  });
</script>

<main>
  <h1>Multiple Counter</h1>
  {#each $countersData as counter, index (counter.id)}
    <Counter {index} />
  {/each}
  <button on:click={addNewCounter}>New Counter</button>
  <p>title list: {titleList}</p>
  <p>sum of count: {total}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  button {
    background-color: #fff89a;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
