<template>
    <div>
        <img class="w-[26rem] absolute -left-20 bottom-0 z-10" src="@/assets/images/man_on_phone.png" />
        <img class="w-[28rem] absolute -left-32 -top-36 mix-blend-screen" src="@/assets/images/light_blur_front.png" />
        
        
        <div class="absolute top-0 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 5s">
            <NotificationSale />
        </div>

        <div class="absolute top-24 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 3s">
            <NotificationSale />
        </div>

        <div class="absolute top-48 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 1s">
            <NotificationSale />
        </div>
    </div>
</template>

<style scoped>
    .notificationSale {
        animation: swipingUp 5s infinite;
    }

    @keyframes swipingUp {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform:translateY(-50px);
        }
        100% {
            opacity: 0;
            transform:translateY(-100px);
        }

    }
</style>