<script setup lang="ts">
    useHead({
        title: "Blinky"
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