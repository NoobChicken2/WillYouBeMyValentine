<script>
    import { page } from '$app/state';

    let createlink = (endpoint) => {
        return page.url.href + endpoint
    }

    let mousePos = $state({ 'x' : '' , 'y' : '' });
    let noButton = $state();
    let transform = $state({ 'x' : 0, 'y' : 0 });
    let mouseSpeed = $state(0);

    function updateMousePos(event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;
    }

    setInterval(() => {
        
            let lastMousePositionX = mousePos.x;
            let lastMousePositionY = mousePos.y;

        setTimeout(() => { 
            let mouseHypothenus = Math.sqrt(Math.pow(Math.abs(lastMousePositionX  - mousePos.x), 2) + Math.pow(Math.abs(lastMousePositionY - mousePos.y), 2));
            mouseSpeed = mouseHypothenus * 100;
        }, 10)

    }, 100);

    function showDocument(event) {
        let coordinates = noButton.getBoundingClientRect();

        let speedMultiplier = mouseSpeed / 500;
        if ( speedMultiplier < 1 ) {
            speedMultiplier = 1;
        }
        const moveAmount = 75 * speedMultiplier;

        let centerY = coordinates.top + ( coordinates.height / 2 );
        let centerX = coordinates.left + ( coordinates.width / 2 );

        let mouseHypothenus = Math.sqrt(Math.pow(Math.abs(centerX - event.clientX), 2) + Math.pow(Math.abs(centerY - event.clientY), 2));
        let multiplier = moveAmount / mouseHypothenus;
        let x = ( centerX - event.clientX ) * multiplier;
        let y = ( centerY - event.clientY ) * multiplier;

        transform.x += Math.round(x);
        transform.y += Math.round(y);

        noButton.style.transform = `translate(${transform.x}px, ${transform.y}px)`;
    }

    $effect( () => {
        // console.log(mousePos.x + ', ' + mousePos.y);
    } )

</script>

{#snippet button(text, endpoint)}
    <a href={createlink(endpoint)}>
        <button class="shadow-sm rounded-lg transition ease-in-out duration-300 bg-[#41d3af] hover:bg-teal-500 font-bold text-[#04074e] py-4 px-8">{text}</button>
    </a>
{/snippet}

<svelte:window on:mousemove="{updateMousePos}"/>

<!-- <div class="absolute mx-auto">
    <span class="font-bold">{mouseSpeed} px/s</span>
</div> -->

<main class="h-[100vh] flex justify-center items-center bg-blue-300">
    <div class="w-3/4 h-4/5 flex flex-col gap-16 justify-center items-center pb-48">
        <p>
            Placeholder question?
        </p>
        <div class='flex justify-center items-center gap-10'>
            {@render button('Yes', 'message')}
            <a href={createlink('next')}>
                <button class="shadow-sm rounded-lg transition ease-in-out duration-300 bg-[#41d3af] hover:bg-teal-500 font-bold text-[#04074e] py-4 px-8"
                        bind:this={noButton}
                        onmouseover={showDocument}
                        onfocus={showDocument}>
                    No
                </button>
            </a>
        </div>
    </div>
</main>
