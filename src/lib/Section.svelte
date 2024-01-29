<script lang="ts">
  import Line from "./Line.svelte";

  export let category: any;
  export let calculate: any;
</script>

<tr class="bg-neutral-800">
  <td colspan="4" class="px-2">{category.name}</td>
</tr>
{#each category.items as item}
  <Line {item} {calculate} />
{/each}
