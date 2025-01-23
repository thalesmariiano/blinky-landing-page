<template>
    <section class="w-full h-full flex justify-center items-center py-24 -skew-y-[4deg] bg-black">
        <SliderDivider />

        <div class="space-y-10 skew-y-[4deg]">
            <div class="relative flex gap-8 flex-col bg-gradient-to-r from-blinkyLittleDark to-blinkyLittleDark/20 px-14 py-10 rounded-3xl">
                <img class="w-12 absolute -top-7 left-[14.5rem] drop-shadow-blinkyIcon" src="@/assets/images/blinky_icon_big.png" />
                <img class="w-full max-w-3xl absolute top-10 -left-56 mix-blend-screen skew-y-[4deg] -z-10" src="@/assets/images/light_blur_division.png" />

                <h1 class="font-poppins font-semibold text-3xl text-white">
                    A Blinky está <span class="text-blinkyOceanGreen italic">redefinindo <br>
                    o mercado global</span> - e você <br>
                    pode fazer parte disso!
                </h1>
                <p class="font-poppins font-light text-white">
                    Inscreva-se hoje e lidere os pagamentos <br>
                    digitais no mundo inteiro!
                </p>
                <a class="w-full flex gap-3 justify-center items-center font-poppins font-semibold text-lg text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                    <IconsArrowForward width="20" height="20" stroke="#000" />
                </a>
            </div>
            <div class="w-full flex gap-4 justify-center items-center">
                <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/app_store.png"></a>
                <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/play_store.png"></a>
            </div>
        </div>

        <SpinPlanet />
    </section>
</template>