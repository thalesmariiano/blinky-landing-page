<template>
     <section class="relative -skew-y-[4deg] bg-[#070707] overflow-hidden">
        <img class="w-full max-w-5xl absolute -top-80 -left-96 opacity-5 rotate-12 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -bottom-80 -right-96 opacity-5 skew-y-[4deg]" src="@/assets/images/blinky_icon_white.png" />
        <img class="w-full max-w-5xl absolute -top-80 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />
        <img class="w-full max-w-5xl absolute -bottom-48 -right-36 mix-blend-screen skew-y-[4deg]" src="@/assets/images/light_blur_division.png" />

        <div class="w-full h-full flex justify-center items-center skew-y-[4deg] py-48">
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


        <!-- <SliderDivider /> -->
    </section>
</template>