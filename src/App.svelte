<script lang="ts">
  import Section from "./lib/Section.svelte";
  import data from "./assets/data.json";

  let sum = 0;

  let calculate = function calculate() {
    let calc = 0;

    let checkboxes = document.getElementsByClassName("checkbox");
    let values = document.getElementsByClassName("value");

    calc += Number(document.getElementById("account")!.value);

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        calc += Number(values[i].textContent);
      }
    }
    sum = calc;

    var elementSum = document.getElementById("sum")!;
    elementSum.classList.remove("text-red-500");
    elementSum.classList.remove("text-green-500");
    if (sum >= 750) {
      elementSum.classList.add("text-green-500");
    } else {
      elementSum.classList.add("text-red-500");
    }
  };
</script>

<main class="justify-center w-fit mx-auto p-1">
  <h1 class="text-center text-2xl font-bold p-4">
    <nobr>Guild Wars 2</nobr> <nobr>MagicFind Checklist</nobr>
  </h1>
  <table class="table-auto px-2">
    <thead>
      <th></th>
      <th class="text-left px-2">Value</th>
      <th></th>
      <th class="text-left">Info</th>
    </thead>
    <tbody>
      {#each data as category}
        <Section {category} {calculate} />
      {/each}
      <tr>
        <td colspan="4">
          <div class="w-fit text-center mx-auto text-sm text-neutral-400 p-4">
            © henahax.de 2024
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot class="sticky bottom-1 h-12 bg-neutral-800 font-black border-0">
      <tr>
        <td colspan="2" id="sum" class="text-right text-xl px-2 text-red-500"
          >{sum}</td
        >
        <td colspan="2" class="text-xl">% (of max 750%)</td>
      </tr>
    </tfoot>
  </table>
</main>
