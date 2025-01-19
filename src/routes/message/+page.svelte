<script>
    import { fade } from 'svelte/transition'

	let messages = ['Test1', 'Test2Test2', 'Test3Test3Test3'];

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
            if(i === messages.length - 1){
                i = 0;
            } else {
                i += 1;
            }
            
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});

    function typewriter(node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
</script>

<div class="flex items-center justify-center">
	{#key i}
		<p in:typewriter={{speed: 1}}>
			{messages[i]}
		</p>
	{/key}
</div>
