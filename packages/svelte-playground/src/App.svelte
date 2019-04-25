<script>
	import Nested from './Nested.svelte'
	import Logic from './Logic.svelte'
	import Button from './Button.svelte'
	export let name
	let src = 'https://media.giphy.com/media/l378fAEzVybK1OPYI/giphy.gif'
</script>

<style>
	h1 {
	    color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<Nested/>
<Button answer="true"/>
<Logic></Logic>
<br>
<img {src} alt="A man dancing">
