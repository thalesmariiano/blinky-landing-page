<template>
    <div class="relative w-72 h-12 rounded-xl overflow-hidden">
        <div class="bg-white/50 w-full h-full blur-lg"></div>

        <div class="absolute left-0 top-0 w-full h-full flex justify-start p-2">
            <div class="min-w-[2.2rem] w-[2.2rem] h-full bg-white flex justify-center items-center rounded-md">
                <img class="min-w-5 w-5" src="@/assets/images/blinky_icon_big.png" />
            </div>
            <div class="w-full flex justify-between ml-3">
                <div>
                    <p class="text-xs text-white">Venda Realizada!</p>
                    <p class="text-xs text-neutral-300">Valor: R$ {{ Math.floor(Math.random() * 999) }},00</p>
                </div>
                <p class="text-xs text-neutral-300/60">Agora</p>
            </div>
        </div>
        
    </div>
</template>