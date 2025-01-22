<template>
    <section
        class="-skew-y-[4deg] relative w-full flex flex-col items-center pt-16 bg-blinkyBege bg-[url('@/assets/images/bg_pattern.png')] bg-center bg-cover">
        <SliderDivider />

        <div class="skew-y-[4deg] flex -translate-x-10">
            <div>
                <img class="w-full max-w-3xl" src="@/assets/images/woman_icon_bg.png" />
            </div>

            <div class="flex gap-5 flex-col mt-5 -translate-x-16">
                <h1 class="font-poppins font-semibold text-5xl bg-gradient-to-r from-[#00b7f6] to-[#00ea67] bg-clip-text text-transparent">
                    Solução para <br>
                    vender mais com <br>
                    seu E-commerce!
                </h1>
                <p class="font-poppins font-light text-lg">
                    Mais que um gateway, a blinky é o perceiro que <br>
                    transforma sua operação digital.
                </p>
                <p class="font-poppins font-light text-lg">
                    Com transações seguras e eficientes, <br>
                    impulsionamos o sucesso de E-commerces <br>
                    tradicional e Dropshipping, tudo com tecnologia <br>
                    de alto desempenho e o melhor, sem riscos <br>
                    de travar o saque!
                </p>

                <div class="w-96 h-56 flex gap-5 flex-col items-center p-7 mt-2 bg-[url('@/assets/images/gradient_rectangle.png')] bg-no-repeat bg-top bg-contain">
                    <p class="font-poppins font-semibold text-2xl text-blinkyLittleDark">
                        Aumente suas vendas <br>
                        com as melhores taxas!
                    </p>
                    <a class="w-72 flex gap-3 justify-center items-center font-poppins font-semibold text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                        <IconsArrowForward width="20" height="20" stroke="#000" />
                    </a>
                    <div class="flex gap-4 items-center">
                        <a><img class="w-28" src="@/assets/images/app_store.png"></a>
                        <a><img class="w-28" src="@/assets/images/play_store.png"></a>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>