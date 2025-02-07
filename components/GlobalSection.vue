<template>
    <section class="w-full h-full flex gap-10 lg:gap-0 flex-col lg:flex-row justify-center items-center pt-24 pb-5 px-2 -skew-y-[4deg] bg-black">
        <SliderDivider :direction="-1" />

        <div class="space-y-10 skew-y-[4deg]">
            <div class="relative flex justify-center bg-gradient-to-b lg:bg-gradient-to-r from-blinkyLittleDark to-blinkyLittleDark/20 p-8 sm:px-14 sm:py-10 rounded-3xl">
                <img class="w-12 absolute -top-7 drop-shadow-blinkyIcon" src="@/assets/images/blinky_icon_big.png" alt="blinky icon" />
                <img class="w-full max-w-3xl absolute top-10 -left-56 mix-blend-screen skew-y-[4deg] -z-10" src="@/assets/images/light_blur_division.png" alt="light blur division" />

                <div class="space-y-8">
                    <h1 class="font-poppins font-semibold text-xl sm:text-3xl text-white">
                        A Blinky está <span class="text-blinkyOceanGreen italic">redefinindo <br>
                        o mercado global</span> - e você <br>
                        pode fazer parte disso!
                    </h1>
                    <p class="font-poppins font-light text-white">
                        Inscreva-se hoje e lidere os pagamentos <br>
                        digitais no mundo inteiro!
                    </p>
                    <a href="https://pay.blinkybr.com/register" class="blinky-button-shine w-full blinky-button text-lg">
                            Cadastre-se
                        <IconsArrowForward width="20" height="20" stroke="#000" />
                    </a>
                </div>
                
            </div>
            <div class="w-full flex gap-4 justify-center items-center">
                <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/app_store.png" alt="iphone app store link"></a>
                <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/play_store.png" alt="android play store link"></a>
            </div>
        </div>

        <SpinPlanet />
    </section>
</template>