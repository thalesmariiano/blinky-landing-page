<template>
    <footer class="w-full py-16 px-5 bg-[#090909] space-y-12">
        <div class="mx-auto w-full max-w-4xl flex gap-10 flex-col md:flex-row justify-between items-center md:items-start">
            <img class="w-32" src="@/assets/images/blinky_logo.png" />

            <div class="flex gap-10 sm:gap-24 flex-col sm:flex-row items-center sm:items-start">
                <div class="space-y-3 text-center sm:text-left">
                    <p class="font-poppins font-semibold text-white italic">Navegue:</p>
                    <nav class="flex gap-12">
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

                <div class="space-y-3 text-center sm:text-left">
                    <p class="font-poppins font-semibold text-white italic">Baixe nosso aplicativo:</p>
                    <div class="flex gap-4 items-center">
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/app_store.png"></a>
                        <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/play_store.png"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto w-full max-w-5xl space-y-10">
            <p class="font-poppins font-semibold text-white italic text-center">Políticas</p>
            
            <nav>
                <ul class="flex gap-10 flex-wrap justify-center">
                    <li>
                        <a class="font-poppins font-light text-white text-sm">
                            Termos e condições de uso
                        </a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white text-sm">
                            Política de Privacidade
                        </a>
                    </li>
                    <li>
                        <a class="text-center block font-poppins font-light text-white text-sm">
                            Política de Segurança <br>
                            da Informação
                        </a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white text-sm">
                            Política de Complicance
                        </a>
                    </li>
                    <li>
                        <a class="text-center block font-poppins font-light text-white text-sm">
                            Política de Prevenção à <br>
                            Lavagem de Dinheiro
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>