<script>
	import FormBuilder from './FormBuilder.svelte'
	import  Form  from './Form'
	let form = new Form({id: "Test Form", sections: []})
	let title ="New Section"
	
	 function addSection(){
		form= form.addSection({title: title, rows:[]}); 
		form.print()
	}
	
	function removeSection(e){
		let {section, index} = e.detail
		form = form.removeSection(section, index)
	}
</script>

<div>
	<label for="newSection"></label>
	<input id="newSection" name="newSection" type="text" bind:value={title} /> 
	<button on:click={addSection} >
		Add Section
	</button>

</div>
<FormBuilder bind:form on:sectionremoved={removeSection}  />
