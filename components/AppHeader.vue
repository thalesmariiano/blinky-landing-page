<script setup lang="ts">
    const headerNav = useTemplateRef('headerNav');  

    onMounted(() => {
        window.onscroll = (e: any) => {
            if(window.scrollY <= 5) headerNav.value?.classList.remove('header-nav')
            else headerNav.value?.classList.add('header-nav')
        }
    })

    
   

</script>

<template>
    <div ref="headerNav" class="w-full flex justify-center items-center py-4 border-b-2 border-neutral-300/10 fixed top-0 left-0 z-[9999] transition-all">
        <header class="w-full max-w-4xl flex justify-between items-center">
            <img class="w-28" src="@/assets/images/blinky_logo.png" />

            <nav>
                <ul class="flex gap-10 items-center">
                    <li>
                        <a class="font-poppins font-light text-white text-lg">Inicio</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white text-lg">Soluções</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white text-lg">Global</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white text-lg">Contato</a>
                    </li>
                    <li>
                        <a class="hoverAnimation flex gap-3 items-center text-sm font-poppins font-semibold text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                            Cadastre-se
                            <IconsArrowForward width="20" height="20" stroke="#000" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style scoped>
    .header-nav {
        @apply bg-black/20 backdrop-blur-md py-[10px]
    }

</style>