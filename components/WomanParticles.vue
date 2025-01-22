<script setup lang="ts">
    const protection = useTemplateRef('protection_icon');
    const speed = useTemplateRef('speed_icon');
    const security = useTemplateRef('security_icon');

    const map = (x: number, a: number, b: number, c: number, d: number) => (x - a) / (b - a) * (d - c) + c;
    
    const parallax = (e: MouseEvent) => {
        const tX = map(e.x, 0, window.innerWidth, -7.5, 7.5);
        const tY = map(e.y, 0, window.innerHeight, -7.5, 7.5);
        protection.value.style.transform = `translate(${-5 + tX}%,${-5 + -tY}%)`;
        speed.value.style.transform = `translate(${-5 + -tX}%,${-5 + tY}%)`;
        security.value.style.transform = `translate(${-5 + tY}%,${-5 + tX}%)`;
    }

    window.onmousemove = parallax;
</script>

<template>
    <div class="relative">
        <img ref="protection_icon" class="w-24 absolute top-10 right-52" src="@/assets/images/protection_white_icon.png" />
        <img ref="speed_icon" class="w-24 absolute top-80 left-32" src="@/assets/images/speed_white_icon.png" />
        <img ref="security_icon" class="w-24 absolute bottom-36 left-[26rem]" src="@/assets/images/security_white_icon.png" />

        <img class="w-full max-w-3xl" src="@/assets/images/woman_icon_bg.png" />
    </div>
</template>