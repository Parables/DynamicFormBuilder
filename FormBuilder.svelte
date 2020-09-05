<script>
	import {createEventDispatcher } from 'svelte'
	let dispatch = createEventDispatcher()
	import  Form  from './Form'
export	let form = new Form({id: "Test Form", sections: []})

</script>

<h1>{form.id}</h1>
{#each form.sections as s, i (i)}
<div>
	<span style="margin-right: 20px;">{s.title}</span>
	<button on:click={()=>{dispatch('sectionremoved',{section: s, index: i})}}>Remove Section	</button>
</div>
{/each}