<script>
	export let answer = 'a mystery'
	let count = 0

	$: doubled = count * 2
	$: console.log(`the count is ${count}`)

	function handleClick() {
	    count += 1
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
<p>answer {answer}</p>