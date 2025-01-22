<script setup lang="ts">
    const protection = useTemplateRef('protection_icon');
    const speed = useTemplateRef('speed_icon');
    const security = useTemplateRef('security_icon');

    const map = (x: number, a: number, b: number, c: number, d: number) => (x - a) / (b - a) * (d - c) + c;
    
    const parallax = (e: MouseEvent) => {
        const tX = map(e.x, 0, window.innerWidth, -7.5, 7.5);
        const tY = map(e.y, 0, window.innerHeight, -7.5, 7.5);
        protection.value.style.transform = `translate(${-5 + tX}%,${-5 + -tY}%)`;
        speed.value.style.transform = `translate(${-5 + -tX}%,${-5 + tY}%)`;
        security.value.style.transform = `translate(${-5 + tY}%,${-5 + tX}%)`;
    }

    window.onmousemove = parallax;
</script>

<template>
     <section class="relative -skew-y-[4deg] bg-[#070707] overflow-hidden">
        <img class="w-full max-w-5xl absolute -top-80 -left-96 opacity-5 rotate-12 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -bottom-80 -right-96 opacity-5 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -top-80 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />
        <img class="w-full max-w-5xl absolute -bottom-48 -right-36 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />

        <div class="relative mx-auto w-full max-w-lg flex justify-center items-center skew-y-[4deg] py-48">
            <img class="w-14 absolute top-28 drop-shadow-blinkyIcon" src="@/assets/images/blinky_icon_big.png" />

            <img ref="protection_icon" class="w-20 absolute top-32 -right-20" src="@/assets/images/protection_dark_icon.png" />
            <img ref="speed_icon" class="w-20 absolute top-72 -left-16" src="@/assets/images/speed_dark_icon.png" />
            <img ref="security_icon" class="w-20 absolute bottom-24 left-72" src="@/assets/images/security_dark_icon.png" />

            <div class="flex gap-10 flex-col">
                <h1 class="font-poppins font-semibold text-5xl text-center text-white">
                    <span class="text-blinkyGreen">Seja Protagonista</span> <br>
                    o mundo digital <br>
                    com a Blinky!
                </h1>
                <p class="font-poppins font-light text-white text-center text-lg">
                    Como produtor, coprodutor ou afiliado, encontre na <br>
                    nossa plataforma o suporte perfeito para transformar <br>
                    ideias em lucro.
                </p>
                <a class="w-full flex gap-3 justify-center items-center font-poppins font-semibold text-lg text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                    <IconsArrowForward width="20" height="20" stroke="#000" />
                </a>
            </div>

        </div>
    </section>
</template>