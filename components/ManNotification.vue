<template>
    <div class="relative w-full max-w-lg md:max-w-sm lg:max-w-md h-[25rem] lg:h-[33rem] flex justify-center md:block bg-gradient-to-br from-blinkyBlue to-blinkyGreen rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl">
        <div class="absolute lg:-left-20 bottom-0 md:z-10">
            <img class="w-80 lg:w-[26rem]" src="@/assets/images/man_on_phone.png" />
        </div>

        <img class="w-[28rem] absolute -left-32 -top-44 mix-blend-screen z-20" src="@/assets/images/light_blur_front.png" />
        
        <div class="relative md:-z-5 mt-10 scale-75 md:scale-100">
            <div class="absolute top-10 md:top-0 -right-52 md:-right-0 notificationSale opacity-80" style="animation-delay: 1s">
                <NotificationSale />
            </div>

            <div class="absolute top-32 md:top-16 -right-7 md:-right-3 lg:right-0 notificationSale opacity-80" style="animation-delay: 2s">
                <NotificationSale />
            </div>

            <div class="absolute top-64 md:top-32 -right-32 md:-right-3 lg:right-0 notificationSale opacity-80 z-50" style="animation-delay: 3s">
                <NotificationSale />
            </div>
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
            opacity: 0.8;
            transform:translateY(-50px);
            filter: drop-shadow(0px 10px 10px rgba(0,0,0,.3));
        }
        100% {
            opacity: 0;
            transform:translateY(-60px);
        }

    }
</style>