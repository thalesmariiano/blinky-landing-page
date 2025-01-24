<template>
    <section class="path flex flex-col justify-start items-center bg-blinkyDark bg-[url('@/assets/images/shine_phone_back.png')] bg-center bg-cover">
        <div class="w-full max-w-4xl gap-10 flex flex-col lg:flex-row lg:justify-between items-center pt-32 pb-36 sm:px-4">
            <div class="flex gap-5 flex-col justify-center items-center lg:items-start">
                <h1 class="font-poppins font-semibold text-white text-5xl lg:text-[3.5rem] text-center lg:text-left leading-none">
                    Simplifique, <br>
                    Conquiste e <br>
                    Desfrute
                </h1>
                <p class="font-poppins text-white text-sm sm:text-base lg:text-lg text-center lg:text-left">
                    Transforme cada venda em um passo a passo <br>
                    para o topo e venda mais pagando menos
                </p>
                <a class="hoverAnimation flex gap-3 items-center font-poppins font-semibold text-lg text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-5 py-1.5 rounded-lg">
                    Cadastre-se
                    <IconsArrowForward width="20" height="20" stroke="#000" />
                </a>
                <div class="flex gap-4 items-center">
                    <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/app_store.png"></a>
                    <a><img class="w-32 hover:scale-105 transition-all" src="@/assets/images/play_store.png"></a>
                </div>
            </div>
            
            <img class="w-[40rem] absolute top-96 sm:top-0 right-0 sm:right-64 opacity-30" src="@/assets/images/blinky_icon_outline.png" />
            <FloatingPhone />  
        </div>
    </section>
</template>

<style scoped>
    .path{
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    }
</style>