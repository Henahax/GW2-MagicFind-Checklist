<script>
	import RowHeadline from "./RowHeadline.svelte";
	import RowItem from "./RowItem.svelte";

	import items from "../assets/items.json";

	let sum = 0;
	let calculate = function calculate() {
		console.log("calculate");
		let calc = 0;

		let checkboxes = document.getElementsByClassName("checkbox");
		let values = document.getElementsByClassName("value");

		for (var i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				calc += Number(values[i].value);
			}
		}
		sum = calc;

		var elementSum = document.getElementById("sum");
		elementSum.classList.remove("text-red-500");
		elementSum.classList.remove("text-green-500");
		if (sum >= 750) {
			elementSum.classList.add("text-green-500");
		} else {
			elementSum.classList.add("text-red-500");
		}
	};
</script>

<table class="m-auto">
	<thead class="text-left">
		<tr>
			<th></th>
			<th colspan="2">Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<RowHeadline headline="Account" />
		<tr>
			<td>
				<input type="checkbox" disabled checked class="checkbox" />
			</td>
			<td>
				<input
					type="number"
					min="0"
					max="350"
					on:change={calculate}
					class="value w-14 py-0.5 px-2 md:px-0"
				/>
			</td>
			<td>
				<div class="icons">
					<img
						alt="mf"
						src="https://wiki.guildwars2.com/images/thumb/3/31/Magic_Find.png/20px-Magic_Find.png"
					/>
				</div>
			</td>
			<td>
				<div class="gap-x-2 gap-y-0.5 inline-flex flex-wrap">
					<a href="https://wiki.guildwars2.com/images/e/e9/Account_Bonuses.jpg">
						Account Bonuses
					</a>
				</div>
				<div>Magic Find value from Hero Panel [H]</div>
			</td>
		</tr>
		<RowHeadline headline="Festival" />
		{#each items.festival as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<RowHeadline headline="Preparations" />
		{#each items.preparations as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<RowHeadline headline="Map Event Bonuses" />
		{#each items.mapeventbonuses as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<RowHeadline headline="Banners" />
		{#each items.banners as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<RowHeadline headline="Consumables (most available on Trading Post)" />
		{#each items.consumables as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<RowHeadline headline="Boosters (account bound)" />
		{#each items.boosters as item}
			<RowItem
				index={item.index}
				value={item.value}
				icons={item.icons}
				names={item.names}
				description={item.description}
				{calculate}
			/>
		{/each}
		<tr>
			<td colspan="5" class="text-center opacity-50 text-sm p-2">
				© henahax.de 2023
			</td>
		</tr>
	</tbody>
	<tfoot class="text-xl sticky bottom-0 h-12 bg-neutral-800 font-black">
		<tr>
			<td colspan="2" id="sum" class="text-right text-red-500 px-1">{sum}</td>
			<td colspan="2">
				<div class="inline-flex w-full justify-between px-2">
					% (of max 750%)
					<a
						href="https://github.com/Henahax/GW2-MagicFind-Checklist"
						class="text-xs my-auto text-neutral-500 font-normal"
					>
						Sourcecode
					</a>
				</div>
			</td>
		</tr>
	</tfoot>
</table>
