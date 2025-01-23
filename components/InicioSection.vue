<template>
    <section class="path flex flex-col justify-start items-center bg-blinkyDark bg-[url('@/assets/images/shine_phone_back.png')] bg-center bg-cover">
        <div class="w-full max-w-4xl gap-10 flex justify-between items-center pt-32 pb-36">
            <div class="flex gap-5 flex-col justify-center items-start">
                <h1 class="font-poppins font-semibold text-white text-[3.5rem] leading-none">
                    Simplifique, <br>
                    Conquiste e <br>
                    Desfrute
                </h1>
                <p class="font-poppins text-white text-lg">
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

            <FloatingPhone />  
        </div>
    </section>
</template>

<style scoped>
    .path{
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    }
</style>