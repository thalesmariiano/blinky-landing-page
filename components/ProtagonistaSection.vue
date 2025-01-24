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
     <section @mousemove="parallax" class="relative -skew-y-[4deg] bg-[#070707] overflow-hidden px-2">
        <img class="w-full max-w-5xl absolute -top-32 sm:-top-80 -left-64 sm:-left-96 opacity-5 rotate-12 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -bottom-32 sm:-bottom-80 -right-64 sm:-right-96 opacity-5 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -top-80 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />
        <img class="w-full max-w-5xl absolute -bottom-48 -right-36 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />

        <div class="relative mx-auto w-full max-w-lg flex justify-center items-center skew-y-[4deg] py-48">
            <img class="w-14 absolute top-28 drop-shadow-blinkyIcon" src="@/assets/images/blinky_icon_big.png" />

            <!-- parallax icons -->
            <img ref="protection_icon" class="w-20 absolute top-24 sm:top-32 -right-0 sm:-right-20" src="@/assets/images/protection_dark_icon.png" />
            <img ref="speed_icon" class="w-20 absolute top-64 sm:top-72 -left-0 sm:-left-16" src="@/assets/images/speed_dark_icon.png" />
            <img ref="security_icon" class="w-20 absolute bottom-24 left-64 sm:left-72" src="@/assets/images/security_dark_icon.png" />
            <!-- parallax icons -->

            <div class="flex gap-10 flex-col">
                <h1 class="font-poppins font-semibold text-4xl md:text-5xl text-center text-white">
                    <span class="text-blinkyOceanGreen">Seja Protagonista</span> <br>
                    o mundo digital <br>
                    com a <span class="relative back-stroke text-shadow">Blinky!</span>
                </h1>
                <p class="font-poppins font-light text-white text-center md:text-lg">
                    Como produtor, coprodutor ou afiliado, encontre na <br>
                    nossa plataforma o suporte perfeito para transformar <br>
                    ideias em lucro.
                </p>
                <a class="hoverAnimation w-full flex gap-3 justify-center items-center font-poppins font-semibold md:text-lg text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                    <IconsArrowForward width="20" height="20" stroke="#000" />
                </a>
            </div>

        </div>
    </section>
</template>

<style scoped>
    .back-stroke {
        @apply after:content-[''] after:w-full after:h-5 after:bg-blinkyOceanGreen after:absolute after:left-0 after:bottom-2 after:-z-10
    }

    .text-shadow {
        text-shadow: 0px 3px 5px rgba(0,0,0,.3);
    }
</style>