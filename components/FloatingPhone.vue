<script setup lang="ts">

    setTimeout(() => {

    }, 1000)

</script>

<template>
    <div class="relative mt-3">
        <img class="w-96" src="@/assets/images/celular.png" />

        <div class="absolute top-24 -left-32 notificationSale opacity-0" style="animation-delay: 5s">
            <NotificationSale />
        </div>

        <div class="absolute top-52 left-32 notificationSale opacity-0" style="animation-delay: 2s">
            <NotificationSale />
        </div>

        <div class="absolute top-72 right-32 notificationSale -z-10 opacity-0" style="animation-delay: 7s">
            <NotificationSale />
        </div>

        <div class="absolute top-96 left-56 -z-10 notificationSale opacity-0" style="animation-delay: 8s">
            <NotificationSale />
        </div>

        <div class="absolute top-[25rem] notificationSale opacity-0" style="animation-delay: 1s">
            <NotificationSale />
        </div>
    </div>
</template>

<style scoped>
    .notificationSale {
        animation: swipingUp 4s infinite;
    }

    @keyframes swipingUp {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
            transform:translateY(-50px);
        }
        100% {
            opacity: 0;
            transform:translateY(-100px);
        }

    }

</style>