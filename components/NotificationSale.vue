<template>
    <div class="w-64 h-14 bg-zinc-400/95 rounded-2xl">
        <div class="w-full h-full flex justify-start p-3">
            <div class="min-w-8 w-8 h-full bg-white flex justify-center items-center rounded-md">
                <img class="min-w-4 w-4" src="@/assets/images/blinky_icon_big.png" alt="blinky icon" />
            </div>
            <div class="w-full flex justify-between ml-3">
                <div>
                    <p class="text-xs text-white font-poppins font-semibold">Venda Realizada!</p>
                    <p class="text-[11px] text-white font-poppins">Valor: R$ {{ Math.floor(Math.random() * 999) }},00</p>
                </div>
                <p class="text-[11px] text-white font-poppins font-light">Agora</p>
            </div>
        </div>
        
    </div>
</template>