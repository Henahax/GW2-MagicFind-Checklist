<script lang="ts">
  import Category from "./lib/Category.svelte";
  import items from "./assets/items.json";

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

<main class="justify-center w-fit mx-auto">
  <h1 class="text-center text-2xl font-bold p-4">
    Guild Wars 2 MagicFind Checklist
  </h1>
  <table class="table-auto px-2">
    <thead>
      <th></th>
      <th class="text-left px-2">Value</th>
      <th></th>
      <th class="text-left">Info</th>
    </thead>
    <tbody>
      <tr class="bg-neutral-800">
        <td colspan="4" class="px-2">Account</td>
      </tr>
      <tr>
        <td>
          <div class="flex">
            <input class="w-8 h-8" type="checkbox" checked disabled />
          </div>
        </td>
        <td class="text-right">
          <input
            id="account"
            class="w-16 h-8 px-2 md:px-0 text-right"
            type="number"
            min="0"
            max="350"
            value="0"
            on:change={calculate}
          />
        </td>
        <td>
          <div class="flex flex-wrap m-2">
            <img
              src="https://wiki.guildwars2.com/images/thumb/3/31/Magic_Find.png/20px-Magic_Find.png"
              alt="MagicFind"
            />
          </div>
        </td>
        <td>
          <div class="flex">
            <a
              class="text-neutral-200 hover:text-neutral-300 underline"
              href="https://wiki.guildwars2.com/images/e/e9/Account_Bonuses.jpg"
              >Account Bonuses</a
            >
          </div>
          <div class="text-neutral-400 text-sm">
            Magic Find value from Hero Panel in "Achievements" tab
          </div>
        </td>
      </tr>
      <Category name="Festival" items={items.festival} {calculate} />
      <Category name="Preparations" items={items.preparations} {calculate} />
      <Category
        name="Map Event Bonuses"
        items={items.mapeventbonuses}
        {calculate}
      />
      <Category name="Banners" items={items.banners} {calculate} />
      <Category name="Consumeables" items={items.consumables} {calculate} />
      <Category name="Boosters" items={items.boosters} {calculate} />
      <tr>
        <td colspan="4">
          <div class="w-fit text-center mx-auto">
            <div class="text-sm text-neutral-400">© henahax.de 2024</div>
            <a
              class="text-xs underline text-neutral-500 hover:text-neutral-400"
              href="https://github.com/Henahax/GW2-MagicFind-Checklist"
            >
              Sourcecode
            </a>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot class="sticky bottom-0 h-12 bg-neutral-800 font-black border-0">
      <tr>
        <td colspan="2" id="sum" class="text-right text-xl px-2">{sum}</td>
        <td colspan="2" class="text-xl">% (of max 750%)</td>
      </tr>
    </tfoot>
  </table>
</main>
