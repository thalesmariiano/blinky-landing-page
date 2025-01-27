<template>
    <section class="relative w-full flex gap-12 flex-col lg:flex-row justify-center items-center lg:items-start bg-blinkyBege py-36 px-2">
        <img class="w-full max-w-5xl absolute -left-56 sm:-left-72 md:-left-[30rem] top-16 sm:-top-7 md:-top-52 opacity-[0.92]" src="@/assets/images/blinky_icon_big.png" />

        <div class="space-y-7 z-10 text-center lg:text-left">
            <span class="font-poppins text-sm text-neutral-400 border-2 border-neutral-400 rounded-lg px-5 py-1.5">
                Alguma dúvida?
            </span>

            <h3 class="font-poppins font-semibold text-3xl italic">
                Veja as perguntas <br>
                mais frequentes
            </h3>
        </div>

        <div class="flex flex-col gap-5 z-10">
            <Accordion :accordion-id="'acc1'">
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
            <Accordion :accordion-id="'acc2'">
                <template #question>
                    Quais métodos de pagamento a Blinky aceita?
                </template>
                <template #answer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam ea quo est? Placeat, incidunt? Commodi doloremque alias assumenda quas quos quibusdam nemo id beatae?
                    Molestias nostrum numquam vel porro expedita.
                </template>
            </Accordion>
            <Accordion :accordion-id="'acc3'">
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
            <Accordion :accordion-id="'acc4'">
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
    </section>
</template>