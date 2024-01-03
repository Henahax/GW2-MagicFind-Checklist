<script lang="ts">
  type Item = {
    value: number;
    icons: string[];
    names: {
      name: string;
      link: string;
    }[];
    description: string;
  };

  export let item: Item;
  export let calculate: any;
</script>

<tr>
  <td>
    <div class="flex">
      <input class="checkbox w-8 h-8" type="checkbox" on:change={calculate} />
    </div>
  </td>
  <td class="value text-right font-bold px-2">{item.value}</td>
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
