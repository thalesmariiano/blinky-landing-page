<template>
    <div>
        <img class="w-[26rem] absolute -left-20 bottom-0 z-10" src="@/assets/images/man_on_phone.png" />
        <img class="w-[28rem] absolute -left-32 -top-36 mix-blend-screen" src="@/assets/images/light_blur_front.png" />
        
        
        <div class="absolute top-0 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 1s">
            <NotificationSale />
        </div>

        <div class="absolute top-16 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 2s">
            <NotificationSale />
        </div>

        <div class="absolute top-32 right-0 notificationSale opacity-0 -z-5" style="animation-delay: 3s">
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
        50% {
            opacity: 1;
            transform:translateY(-50px);
            filter: drop-shadow(0px 10px 10px rgba(0,0,0,.5));
        }
        100% {
            opacity: 0;
            transform:translateY(-60px);
        }

    }
</style>