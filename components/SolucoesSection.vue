<script setup lang="ts">
    const protection = useTemplateRef('protection_icon');
    const speed = useTemplateRef('speed_icon');
    const security = useTemplateRef('security_icon');

    const parallax = (e: MouseEvent) => {
        const tX = reescale(e.x, 0, window.innerWidth, -7.5, 7.5);
        const tY = reescale(e.y, 0, window.innerHeight, -7.5, 7.5);
        protection.value.style.transform = `translate(${-5 + tX}%,${-5 + -tY}%)`;
        speed.value.style.transform = `translate(${-5 + -tX}%,${-5 + tY}%)`;
        security.value.style.transform = `translate(${-5 + tY}%,${-5 + tX}%)`;
    }
</script>

<template>
    <section @mousemove="parallax" class="-skew-y-[4deg] relative w-full flex flex-col items-center pt-10 pb-16 lg:pb-0 px-2 bg-blinkyBege bg-[url('@/assets/images/bg_pattern.png')] bg-center bg-cover">
        <SliderDivider class="-top-14"/>

        <div class="skew-y-[4deg] flex flex-col md:flex-row items-center lg:items-start md:-translate-x-10 lg:translate-y-8">
            <div class="relative">
                <!-- parallax icons -->
                <img ref="protection_icon" class="w-20 lg:w-24 absolute top-10 right-52" src="@/assets/images/protection_white_icon.png" />
                <img ref="speed_icon" class="w-20 lg:w-24 absolute top-80 left-24 lg:left-32" src="@/assets/images/speed_white_icon.png" />
                <img ref="security_icon" class="w-20 lg:w-24 absolute bottom-28 lg:bottom-36 left-80 lg:left-[26rem]" src="@/assets/images/security_white_icon.png" />
                <!-- parallax icons -->

                <img class="w-full min-w-[32rem] max-w-lg md:max-w-3xl" src="@/assets/images/woman_icon_bg.png" />
            </div>

            <div class="flex gap-5 flex-col items-center md:items-start mt-5 md:-translate-x-16">
                <h1 class="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-center md:text-left bg-gradient-to-r from-[#00b7f6] to-[#00ea67] bg-clip-text text-transparent">
                    Solução para <br>
                    vender mais com <br>
                    seu E-commerce!
                </h1>
                <p class="font-poppins font-light text-sm sm:text-base lg:text-lg text-center md:text-left">
                    Mais que um gateway, a blinky é o perceiro que <br>
                    transforma sua operação digital.
                </p>
                <p class="font-poppins font-light text-sm sm:text-base lg:text-lg text-center md:text-left">
                    Com transações seguras e eficientes, <br>
                    impulsionamos o sucesso de E-commerces <br>
                    tradicional e Dropshipping, tudo com tecnologia <br>
                    de alto desempenho e o melhor, sem riscos <br>
                    de travar o saque!
                </p>

                <div class="w-80 sm:w-96 h-56 flex gap-5 flex-col items-center p-7 mt-2 bg-[url('@/assets/images/gradient_rectangle.png')] bg-no-repeat bg-top bg-contain">
                    <p class="font-poppins font-semibold text-xl lg:text-2xl text-blinkyLittleDark">
                        Aumente suas vendas <br>
                        com as melhores taxas!
                    </p>
                    <a href="https://pay.blinkybr.com/register" class="hoverAnimation w-72 flex gap-3 justify-center items-center font-poppins font-semibold text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                        <IconsArrowForward width="20" height="20" stroke="#000" />
                    </a>
                    <div class="flex gap-4 items-center">
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/app_store.png"></a>
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/play_store.png"></a>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>