<template>
    <section class="w-full space-y-10 pt-14 pb-24 bg-black">
        <div class="w-full h-10 border-t-2 border-neutral-300/10"></div>

        <div class="w-full flex flex-col md:flex-row justify-center items-center px-2">
                
            <div class="relative w-full max-w-lg lg:max-w-xl h-[28rem] md:h-[25rem] lg:h-[33rem] flex flex-col justify-center items-center p-2 sm:p-5 bg-gradient-to-tr from-blinkyLittleDark to-blinkyDark/80 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
                
                <img class="w-9 lg:w-11 absolute top-5 lg:top-6 md:mr-24 lg:mr-0 drop-shadow-blinkyIcon" src="@/assets/images/blinky_icon_big.png" alt="blinky icon" />

                <div class="space-y-7 text-center md:text-left mt-5 md:mt-0">
                    <h1 class="font-poppins font-semibold text-xl lg:text-3xl text-white">
                        <span class="text-blinkyGreen">Mantenha-se atualizado</span> <br>
                        sobre tudo o que ocorre em <br>
                        sua operação através do <br>
                        nosso <span class="text-blinkyGreen italic">aplicativo exclusivo.</span>
                    </h1>
                    <p class="font-poppins font-light text-white text-xs sm:text-sm lg:text-base">
                        Com uma tecnologia incomparável, <span class="font-semibold italic">a Blinky é <br>
                        a solução definitiva para o processamento de <br>
                        pagamentos</span>, proporcionando uma experiência <br>
                        execepcional para os seus clientes e facilitando <br>
                        cada transação e saque pelo aplicativo.
                    </p>
                    <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <p class="font-poppins font-semibold italic text-white">Baixe o aplicativo: </p>
                        <div class="flex gap-4">
                            <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/app_store.png" alt="ihone app store link"></a>
                            <a><img class="w-28 hover:scale-105 transition-all" src="@/assets/images/play_store.png" alt="android play store link"></a>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
            <ManNotification />
        </div>

        <div class="w-full px-2">
            <div class="w-full max-w-2xl mx-auto space-y-3 bg-blinkyLittleDark border-2 border-neutral-700 px-5 sm:px-10 md:px-20 py-5 rounded-3xl">
                <div class="w-full flex gap-2 sm:gap-5 justify-center sm:justify-start items-center">
                    <div class="flex gap-4 items-center">
                        <div class="w-4 h-4 border-2 border-blinkyGreen rounded">
                            <div class="w-full h-full bg-blinkyGreen check-path"></div>
                        </div>  
                    </div>
                    <p class="font-poppins italic text-white text-[10px] sm:text-base">Sem improviso para visualizar suas notificações de venda.</p>
                </div>

                <div class="w-full flex gap-2 sm:gap-5 justify-center sm:justify-start items-center">
                    <div class="flex gap-4 items-center">
                        <div class="w-4 h-4 border-2 border-blinkyGreen rounded">
                            <div class="w-full h-full bg-blinkyGreen check-path"></div>
                        </div>
                    </div>
                    <p class="font-poppins italic text-white text-[10px] sm:text-base">Sem dificuldade para realizar o saque pelo celular.</p>
                </div>   
                    
            </div>
        </div>
            
    </section>
</template>

<style scoped>
    .check-path {
        clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    }
</style>