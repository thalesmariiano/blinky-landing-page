<script setup lang="ts">
    useHead({
        title: "Blinky",
        meta: [
            {
                name: 'description',
                content: 'Simplifique, Conquiste e Desfrute. Transforme cada venda em um passo a passo para o topo e venda mais pagando menos.'
            }
        ],
    })
    useSeoMeta({
        title: 'Blinky',
        ogTitle: 'Blinky',
        ogType: 'website',
        ogUrl: 'https://blinkybr.com',
        description: 'Simplifique, Conquiste e Desfrute. Transforme cada venda em um passo a passo para o topo e venda mais pagando menos.',
        ogDescription: 'Simplifique, Conquiste e Desfrute. Transforme cada venda em um passo a passo para o topo e venda mais pagando menos.'
    })
</script>

<template>
    <div class="w-full bg-black overflow-x-hidden">
        <AppHeader />
        <InicioSection id="inicio" />
        <SolucoesSection id="solucoes" />
        <ProtagonistaSection />
        <GlobalSection id="global" />
        <AtualizadoSection />
        <FAQSection />
        <ContatoSection id="contato" />
        <AppFooter />
    </div>
</template>