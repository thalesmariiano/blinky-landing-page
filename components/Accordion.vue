<script setup lang="ts">
    const showContent = ref<boolean>();
    
    const accordion = useTemplateRef('accordion')
    const content = useTemplateRef('content');
    const teste = useTemplateRef('teste');

    const accordionHeight = ref<number>(0);
    const contentHeight = ref<number>(0);
    const testeHeight = ref<number>(0);

    onMounted(() => {
        if(accordion.value && content.value && teste.value){
            testeHeight.value = teste.value.clientHeight;
            accordionHeight.value = accordion.value.clientHeight;
            contentHeight.value = content.value.clientHeight;
        }
    });
</script>

<template>
    <div ref="accordion" class="accordion" :style="showContent ? `height:${testeHeight + contentHeight}px` : ` height:${testeHeight}px; overflow: hidden`">
        <button ref="teste" @click="showContent = !showContent" class="w-full flex gap-2 justify-between items-start px-10 py-5">
            <p class="text-left font-poppins font-semibold bg-gradient-to-r from-blinkyBlue to-blinkyGreen bg-clip-text text-transparent"><slot name="question" /></p>
            <div :class="showContent ? 'rotate-180 mt-1 transition-all duration-300' : 'mt-1 transition-all duration-300'">
                <IconsCaretDown width="16" height="16" fill="#fff" />
            </div>
        </button>
        
        <div ref="content" :class="showContent ? `opacity-1 content `: 'opacity-0 content'">
            <p class="font-poppins text-blinkyLittleBege text-sm">
                <slot name="answer" />
            </p>
        </div>
    </div>
</template>

<style scoped>
    .accordion {
        @apply w-[34rem] bg-blinkyLittleDark rounded-2xl transition-all duration-300 shadow-2xl
    }
    .content {
        @apply flex justify-start items-start pl-10 pr-28 pb-5 transition-all duration-500
    }
</style>