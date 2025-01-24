<script setup lang="ts">
    import Splide from '@splidejs/splide'
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

    const splide = useTemplateRef('splide')

	onMounted(() => {
		new Splide(splide.value, {
			type: 'loop',
			perPage: 3,
			arrows: false,
			drag: false,
			pagination: false,
            fixedWidth: '100%',
			autoScroll: {
				speed: 1.5
			}
		}).mount({ AutoScroll })		
	})
</script>

<template>
    <div class="glowEffect absolute -top-12 left-0 w-full h-14 sm:h-[4.5rem] flex items-center bg-gradient-to-r from-blinkyBlue to-blinkyGreen">
        <section ref="splide" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">As menores taxas do mercado</p>
                    </li>
                    <li class="splide__slide">
                        <img class="w-8" src="@/assets/images/blinky_icon_black.png" />
                    </li>
                    <li class="splide__slide">
                        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">Saque instantâneo</p>
                    </li>
                    <li class="splide__slide">
                        <img class="w-8" src="@/assets/images/blinky_icon_black.png" />
                    </li>
                    <li class="splide__slide">
                        <p class="font-poppins font-semibold text-xl md:text-2xl whitespace-nowrap">Saques via Criptomoeda (USDT)</p>
                    </li>
                    <li class="splide__slide">
                        <img class="w-8" src="@/assets/images/blinky_icon_black.png" />
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .glowEffect {
        @apply after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-r after:from-blinkyBlue after:to-blinkyGreen after:blur-md after:opacity-60
    }
</style>