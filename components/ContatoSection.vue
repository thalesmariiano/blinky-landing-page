<template>
    <section class="relative w-full flex flex-col justify-center items-center bg-[#070707] py-20 lg:py-32 overflow-hidden px-2">
        <img class="w-full max-w-6xl absolute -left-48 -top-96 mix-blend-screen" src="@/assets/images/light_blur_division.png" alt="light blur division" />

        <div class="relative w-full max-w-md sm:max-w-xl h-56 sm:h-72 bg-[#e6e6e6] rounded-t-3xl lg:hidden">
            <img class="absolute bottom-0" src="@/assets/images/woman_mobile.png" alt="business woman" />
        </div>
        <div class="relative w-full max-w-md sm:max-w-xl lg:max-w-5xl lg:h-80 bg-blinkyLittleBege flex items-center rounded-b-3xl lg:rounded-3xl px-5 py-10 sm:p-14">
            <div class="w-full lg:w-fit flex gap-5 flex-col justify-center items-center lg:items-start">
                <h3 class="w-full max-w-md font-poppins font-semibold text-2xl sm:text-3xl text-center lg:text-left">
                    Conecte-se e potencialize
                    seus negócios conosco!
                </h3>

                <p class="w-full max-w-md font-poppins font-light text-sm sm:text-base text-center lg:text-left">
                    Descubra como a Blinky pode transformar a maneira
                    como você conduz seus negócios. Conecte-se conosco
                    hoje e abra as portas para um futuro de prosperidade.
                </p>

                <a class="blinky-button-shine w-56 mt-2 lg:mt-0 blinky-button">
                    Fale Conosco
                    <IconsArrowForward width="20" height="20" stroke="#000" />
                </a>
            </div>

            <img class="hidden lg:block absolute bottom-0 -right-32 w-full max-w-[48.5rem]" src="@/assets/images/woman_with_icon.png" alt="business icon" />
        </div>
    </section>
</template>