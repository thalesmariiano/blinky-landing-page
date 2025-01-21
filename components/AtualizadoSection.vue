<template>
    <div>
        <div class="w-full h-28 -skew-y-[4deg] bg-black"></div>
        <section class="w-full flex gap-10 flex-col justify-center items-center pt-32 pb-5 bg-black -translate-y-24 border-t-2 border-neutral-300/10">
            <div class="w-full max-w-5xl h-[32rem] flex justify-center items-center">
                <div class="w-full h-full flex flex-col justify-center items-center bg-gradient-to-tr from-blinkyLittleDark to-blinkyDark/80 rounded-l-3xl">
                    <div class="space-y-7">
                        <h1 class="font-poppins font-semibold text-3xl text-white">
                            <span class="text-blinkyGreen">Mantenha-se atualizado</span> <br>
                            sobre tudo o que ocorre em <br>
                            sua operação através do <br>
                            nosso <span class="text-blinkyGreen italic">aplicativo exclusivo.</span>
                        </h1>
                        <p class="font-poppins font-light text-white">
                            Com uma tecnologia incomparável, <span class="font-semibold italic">a Blinky é <br>
                            a solução definitiva para o processamento de <br>
                            pagamentos</span>, proporcionando uma experiência <br>
                            execepcional para os seus clientes e facilitando <br>
                            cada transação e saque pelo aplicativo.
                        </p>
                        <div class="flex gap-4 justify-center items-center">
                            <p class="font-poppins font-semibold italic text-white">Baixe o aplicativo: </p>
                            <a><img class="w-28" src="@/assets/images/app_store.png"></a>
                            <a><img class="w-28" src="@/assets/images/play_store.png"></a>
                        </div>
                    </div>
                    
                </div>
                <div class="relative w-full max-w-md h-full bg-gradient-to-br from-blinkyBlue to-blinkyGreen rounded-r-3xl">
                    <img class="w-[26rem] absolute -left-20 bottom-0" src="@/assets/images/man_on_phone.png" />
                </div>
            </div>

            <div class="w-full max-w-2xl bg-blinkyLittleDark border-2 border-neutral-700 px-20 py-5 rounded-3xl">
                <div class="flex gap-5 items-center">
                    <label class="flex gap-4 items-center group">
                        <input type="checkbox" name="checkbox" class="hidden" checked disabled />
                        <div class="w-4 h-4 border-2 border-blinkyGreen rounded transition-all">
                            <div class="w-full h-full bg-blinkyGreen check-path hidden group-has-[:checked]:block"></div>
                        </div>  
                    </label>
                    <p class="font-poppins italic text-white">Sem improviso para visualizar suas notificações de venda.</p>
                </div>

                <div class="flex gap-5 items-center">
                    <label class="flex gap-4 items-center group">
                        <input type="checkbox" name="checkbox" class="hidden" checked disabled />
                        <div class="w-4 h-4 border-2 border-blinkyGreen rounded transition-all">
                            <div class="w-full h-full bg-blinkyGreen check-path hidden group-has-[:checked]:block"></div>
                        </div>
                    </label>
                    <p class="font-poppins italic text-white">Sem dificuldade para realizar o saque pelo celular.</p>
                </div>
                
                
            </div>
        </section>
    </div>
</template>

<style scoped>
    .check-path {
        clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    }
</style>