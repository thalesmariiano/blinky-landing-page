<script setup lang="ts">
    const showContent = ref<boolean>();
    
    const accButton = useTemplateRef('accButton');
    const content = useTemplateRef('content');

    const contentHeight = ref<number>(0);
    const accButtonHeight = ref<number>(0);

    onMounted(() => {
        if(accButton.value && content.value){
            accButtonHeight.value = accButton.value.clientHeight + 20;
            contentHeight.value = content.value.clientHeight;
        }
    });
</script>

<template>
    <div ref="accordion" class="accordion" :style="showContent ? `height:${accButtonHeight + contentHeight}px` : ` height:${accButtonHeight}px;`">
        <button ref="accButton" @click="showContent = !showContent" class="w-full flex gap-2 justify-between items-start px-10 pt-5">
            <p class="text-left text-sm sm:text-base font-poppins font-semibold bg-gradient-to-r from-blinkyBlue to-blinkyGreen bg-clip-text text-transparent"><slot name="question" /></p>
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
        @apply w-full max-w-lg sm:max-w-xl bg-blinkyLittleDark rounded-2xl transition-all duration-300 shadow-2xl overflow-hidden
    }
    .content {
        @apply flex justify-start items-start pl-10 pr-28 transition-all duration-500 py-5
    }
</style>