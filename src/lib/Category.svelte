<script lang="ts">
  import Item from "./Item.svelte";

  type Item = {
    value: number;
    icons: string[];
    names: {
      name: string;
      link: string;
    }[];
    description: string;
  };

  export let name: string;
  export let items: Item[];
  export let calculate: any;
</script>

<tr class="bg-neutral-800">
  <td colspan="4" class="px-2">{name}</td>
</tr>
{#each items as item}
  <Item {item} {calculate} />
{/each}
