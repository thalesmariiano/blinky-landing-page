<template>
    <div class="relative w-full flex gap-12 justify-center items-start bg-blinkyBege overflow-hidden py-36">
        <img class="w-full max-w-7xl absolute -left-[38rem] -top-72 opacity-[0.92]" src="@/assets/images/blinky_icon_big.png" />

        <div class="space-y-7">
            <span class="font-poppins text-sm text-neutral-400 border-2 border-neutral-400 rounded-lg px-5 py-1.5">
                Alguma dúvida?
            </span>

            <h3 class="font-poppins font-semibold text-3xl italic">
                Veja as perguntas <br>
                mais frequentes
            </h3>
        </div>

        <div class="flex flex-col gap-5">
            <Accordion>
                <template #question>
                    Quais são as etapas para configurar a Blinky <br>
                    meu site ou plataforma de vendas de info produtos?
                </template>
                <template #answer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam ea quo est? Placeat, incidunt? Commodi doloremque alias assumenda quas quos quibusdam nemo id beatae?
                    Molestias nostrum numquam vel porro expedita.
                </template>
            </Accordion>
            <Accordion>
                <template #question>
                    Quais métodos de pagamento a Blinky aceita?
                </template>
                <template #answer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam ea quo est? Placeat, incidunt? Commodi doloremque alias assumenda quas quos quibusdam nemo id beatae?
                    Molestias nostrum numquam vel porro expedita.
                </template>
            </Accordion>
            <Accordion>
                <template #question>
                    Quanto tempo leva para os fundos das vendas <br>
                    estarem disponíveis em minha conta com a Blinky?
                </template>
                <template #answer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam ea quo est? Placeat, incidunt? Commodi doloremque alias assumenda quas quos quibusdam nemo id beatae?
                    Molestias nostrum numquam vel porro expedita.
                </template>
            </Accordion>
            <Accordion>
                <template #question>
                    A Blinky fornece relatórios detalhados <br>
                    sobre minhas vendas e transações?
                </template>
                <template #answer>
                    Sim, você consegue ver todos os detalhes <br>
                    das suas vendas e exportar esse relatório.
                </template>
            </Accordion>
        </div>
    </div>
</template>