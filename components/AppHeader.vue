<script setup lang="ts">
    const headerNav = useTemplateRef('headerNav');  
    const showSideBar = ref<boolean>(false)

    onMounted(() => {
        window.onscroll = (e: any) => {
            if(window.scrollY <= 5) headerNav.value?.classList.remove('header-nav')
            else headerNav.value?.classList.add('header-nav')
        }
    })
</script>

<template>
    <div ref="headerNav" class="w-full flex justify-center items-center p-4 border-b-2 border-neutral-300/10 fixed top-0 left-0 z-[9999] transition-all">
        <header class="w-full max-w-4xl flex justify-between items-center">
            <img class="w-28" src="@/assets/images/blinky_logo.png" alt="blinky logo" />

            <nav class="hidden md:block">
                <ul class="flex gap-10 items-center">
                    <li>
                        <a href="#inicio" class="font-poppins font-light text-white text-lg">Inicio</a>
                    </li>
                    <li>
                        <a href="#solucoes" class="font-poppins font-light text-white text-lg">Soluções</a>
                    </li>
                    <li>
                        <a href="#global" class="font-poppins font-light text-white text-lg">Global</a>
                    </li>
                    <li>
                        <a href="#contato" class="font-poppins font-light text-white text-lg">Contato</a>
                    </li>
                    <li>
                        <a href="https://pay.blinkybr.com/register" class="blinky-button-shine blinky-button text-sm">
                            Cadastre-se
                            <IconsArrowForward width="20" height="20" stroke="#000" />
                        </a>
                    </li>
                </ul>
            </nav>

            <button @click="showSideBar = true" class="space-y-1 mt-2 md:hidden">
                <div class="w-7 h-1 bg-white rounded"></div>
                <div class="w-7 h-1 bg-white rounded"></div>
                <div class="w-7 h-1 bg-white rounded"></div>
            </button>

        </header>

        <Transition
            enter-active-class="animate__animated animate__slideInRight"
		    leave-active-class="animate__animated animate__slideOutRight"
        >
            <SideMenu
                v-show="showSideBar"
                @close="showSideBar = false"
            />
        </Transition>
        
    </div>
</template>

<style scoped>
    .header-nav {
        @apply bg-black/20 backdrop-blur-md py-[10px]
    }
</style>