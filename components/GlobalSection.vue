<template>
    <section class="w-full relative -skew-y-[4deg] bg-black">
        <SliderDivider />
        <img class="w-full max-w-2xl absolute -bottom-28 -left-0 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />

        <div class="w-full h-full flex justify-center items-center skew-y-[4deg] py-24">
            <div class="space-y-5">
                <div class="translate-x-10 flex gap-8 flex-col bg-gradient-to-r from-blinkyLittleDark to-blinkyLittleDark/20 px-14 py-10 rounded-3xl">
                    <h1 class="font-poppins font-semibold text-3xl text-white">
                        A Blinky está <span class="text-blinkyGreen italic">redefinindo <br>
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
                <div class="translate-x-10 w-full flex gap-4 justify-center items-center">
                    <a><img class="w-32" src="@/assets/images/app_store.png"></a>
                    <a><img class="w-32" src="@/assets/images/play_store.png"></a>
                </div>
            </div>

            <div>
                <video width="520" height="520" autoplay muted loop>
                    <source src="@/assets/videos/global.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            
        </div>
    </section>
</template>