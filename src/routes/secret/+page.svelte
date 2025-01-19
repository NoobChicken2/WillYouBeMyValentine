<!-- <script>
    const middle = 5;
    const gridItems = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let angle = $state();

    const interval = setInterval(() => {
        angle = !angle;
    }, 1000)
</script>

<div class="h-[100vh] w-full bg-pink-500 overflow-hidden">
    <div class="h-[100vh] w-full grid grid-cols-4 grid-row-4">
        {#each gridItems as items, index}
            {#if index == middle}
                <div class="flex flex-col items-center justify-start col-span-2 row-span-2">
                    <p class="text-2xl">Dashuria ime ti ❤❤❤</p>
                    <br>
                    <p>Te uroj nje sezon provimesh sa me te suksesshme dhe sa me pak te stresuesshem 😘😘</p>
                    <br>
                    <p>E di shume mire qe kjo periudhe do te jete mjaft e veshtire per ty nga ana psikologjike, mendore dhe fizike dhe ti nuk do jesh gjithmon ne 100% tende. 
                    <br>Une dua te jem gjithe kohes krahe teje duke te suportuar ne cdo moment te kesaj periudhe per ta bere diten me te bukur me budalliqet e mia.</p>
                    <br>
                    <p><b class="text-red-800">Te dua pa mase zemer</b> dhe deshira ime eshte te ndikoje sa me pozitivisht ne jeten tende.</p>
                    <br>
                    <p>Mbaje ne mend qe per sa kohe te me kesh mua ske per tu ndiere kurre vetem. Mund te me perdoresh per cfaredolloj gjeje ti te kesh nevoje 😉</p>
                    <br>
                    <p>🥰<b class="text-red-800">LOVE YOU WITH ALL MY HEART</b>🥰</p>
                </div>
            {:else}
                <div class="p-10 flex items-center justify-center">
                    <img src="/cat.png" alt='Rose' class="{angle ? 'rotate-12' : '-rotate-12'}">
                </div>
            {/if}
        {/each}
    </div>
</div> -->