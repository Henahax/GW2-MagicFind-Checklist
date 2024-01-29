<script lang="ts">
  import type { Item } from "../types";

  export let item: Item;
  export let calculate: any;

  function selectText(event) {
    event.target.select();
  }
</script>

<tr>
  <td>
    <div class="flex">
      {#if item.type === "number"}
        <input class="checkbox w-8 h-8" type="checkbox" checked disabled />
      {/if}
      {#if item.type === "checkbox"}
        <input class="checkbox w-8 h-8" type="checkbox" on:change={calculate} />
      {/if}
    </div>
  </td>
  <td class="value text-right font-bold px-2">
    {#if item.type === "number"}
      <input
        id="account"
        class="w-16 h-8 px-2 md:px-0 text-right select-all"
        type="number"
        min="0"
        max="350"
        value="0"
        on:change={calculate}
        on:click={selectText}
      />
    {/if}
    {#if item.type === "checkbox"}
      {item.value}
    {/if}
  </td>
  <td>
    <div class="flex flex-wrap m-2">
      {#each item.icons as icon}
        <img src={icon} alt={item.description} />
      {/each}
    </div>
  </td>
  <td>
    <div class="inline-flex flex-wrap gap-x-2">
      {#each item.names as name}
        <a
          class="text-neutral-200 hover:text-neutral-300 underline"
          href={name.link}>{name.name}</a
        >
      {/each}
    </div>
    <div class="text-neutral-400 text-sm">{item.description}</div>
  </td>
</tr>
