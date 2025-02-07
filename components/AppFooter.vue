<template>
    <footer class="w-full py-10 md:py-16 bg-[#090909] space-y-5 sm:space-y-12">
        <div class="mx-auto w-full max-w-4xl flex gap-10 flex-col md:flex-row justify-between items-center md:items-start sm:px-2">
            <img class="w-32" src="@/assets/images/blinky_logo.png" alt="blinky logo" />

            <div class="w-full sm:w-fit flex gap-10 sm:gap-24 flex-col sm:flex-row items-center sm:items-start">
                <div class="w-full sm:w-fit space-y-3 text-center sm:text-left border-t-2 border-neutral-300/10 sm:border-none pt-5 sm:pt-0">
                    <p class="font-poppins font-semibold text-white italic">Navegue:</p>
                    <nav class="flex justify-center sm:justify-start gap-12">
                        <div class="flex gap-5 flex-col">
                            <a href="#inicio" class="font-poppins font-light text-white text-sm">Inicio</a>
                            <a href="#global" class="font-poppins font-light text-white text-sm">Global</a>
                        </div>
                        <div class="flex gap-5 flex-col">
                            <a href="#solucoes" class="font-poppins font-light text-white text-sm">Soluções</a>
                            <a href="#contato" class="font-poppins font-light text-white text-sm">Contato</a>
                        </div>
                    </nav>
                </div>

                <div class="w-full sm:w-fit space-y-3 text-center sm:text-left border-t-2 border-neutral-300/10 sm:border-none px-2 pt-5 sm:pt-0">
                    <p class="font-poppins font-semibold text-white italic">Baixe nosso aplicativo:</p>
                    <div class="flex gap-4 justify-center items-center sm:justify-start">
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/app_store.png" alt="iphone app store link"></a>
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/play_store.png" alt="android play store link"></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mx-auto w-full max-w-5xl space-y-10 border-t-2 border-neutral-300/10 sm:border-none px-2 pt-5 sm:pt-0">
            <p class="font-poppins font-semibold text-white italic text-center">Políticas</p>
            
            <nav class="w-full max-w-md md:max-w-full mx-auto">
                <ul class="flex gap-10 flex-wrap justify-center">
                    <li>
                        <a class="w-32 md:w-fit font-poppins text-center block font-light break-words text-white text-sm">
                            Termos e condições de uso
                        </a>
                    </li>
                    <li>
                        <a class="w-32 md:w-fit font-poppins text-center block font-light break-words text-white text-sm">
                            Política de Privacidade
                        </a>
                    </li>
                    <li>
                        <a class="w-32 md:w-[10rem] font-poppins text-center block font-light break-words text-white text-sm">
                            Política de Segurança
                            da Informação
                        </a>
                    </li>
                    <li>
                        <a class="w-32 md:w-fit font-poppins text-center block font-light break-words text-white text-sm">
                            Política de Complicance
                        </a>
                    </li>
                    <li>
                        <a class="w-44 font-poppins text-center block font-light break-words text-white text-sm">
                            Política de Prevenção à
                            Lavagem de Dinheiro
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>