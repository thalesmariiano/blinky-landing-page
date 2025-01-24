<template>
    <div class="glowEffect absolute -top-12 left-0 w-full h-14 sm:h-[4.5rem] flex gap-10 md:gap-20 justify-center items-center bg-gradient-to-r from-blinkyBlue to-blinkyGreen">
        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">As menores taxas do mercado</p>
        <img class="w-8" src="@/assets/images/blinky_icon_black.png" />
        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">Saque instantâneo</p>
        <img class="w-8" src="@/assets/images/blinky_icon_black.png" />
        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">Saques via Criptomoeda (USDT)</p>
    </div>
</template>

<style scoped>
    .glowEffect {
        @apply after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-r after:from-blinkyBlue after:to-blinkyGreen after:blur-md after:opacity-60
    }
</style>