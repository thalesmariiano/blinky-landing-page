<script setup lang="ts">
    const { accordionId } = defineProps(['accordionId'])
</script>

<template>
    <div class="accordion group">
        <div class="w-full flex flex-col justify-between items-center">
            <input class="hidden" :id="accordionId" type="radio" name="faq-accordion" />
            <div class="w-full flex justify-between items-center">
                <label :for="accordionId" class="accordion-title"><slot name="question" /></label>
            </div>

            <div class="accordion-content w-full max-h-0 group-has-[:checked]:max-h-96">
                <p class="font-poppins text-blinkyLittleBege text-sm pb-5">
                    <slot name="answer" />
                </p>
            </div>
        </div> 
    </div>
</template>

<style scoped>
    .accordion {
        @apply w-full max-w-lg sm:max-w-xl bg-blinkyLittleDark rounded-2xl shadow-xl relative
    }
    .accordion-title {
        @apply w-full p-5 cursor-pointer text-sm sm:text-base font-poppins font-semibold bg-gradient-to-r from-blinkyBlue to-blinkyGreen bg-clip-text text-transparent
    }

    .accordion-content {
        @apply w-full px-5 transition-all duration-500 overflow-hidden
    }

    .accordion::after {
        content: url(@/assets/images/caret-down.svg);
        width: 16px;
        height: 16px;
        position: absolute;
        right: 20px;
        top: 20px;
        transition: all 500ms
    }

    .accordion:has(:checked)::after {
        rotate: 180deg
    }

</style>