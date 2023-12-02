<script>
	export let index;
	export let value;
	export let icons;
	export let names;
	export let description;
	export let calculate;

	let isChecked = false;
</script>

<tr>
	<td>
		<input
			type="checkbox"
			bind:checked={isChecked}
			on:change={calculate}
			class="checkbox"
		/>
	</td>
	<td class="value px-2" {value}>{value}</td>
	<td>
		<div class="icons">
			{#each icons as icon}
				<img src={icon} alt={names[icon.id]} />
			{/each}
		</div>
	</td>
	<td class="pr-2">
		<div class="gap-x-2 gap-y-0.5 inline-flex flex-wrap">
			{#each names as name}
				<a href={name.link}>{name.name}</a>
			{/each}
		</div>
		<div>{description}</div>
	</td>
</tr>
