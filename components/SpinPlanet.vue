<template>
    <div class="w-full max-w-lg skew-y-[4deg]">
        <video width="520" height="520" autoplay muted loop>
            <source src="@/assets/videos/global.mp4" type="video/mp4">
                Your browser does not support the video tag.
        </video>

        <div class="absolute top-24 -right-0 notificationSale opacity-0" style="animation-delay: 7s">
            <NotificationSale />
        </div>

        <div class="absolute top-48 -left-10 notificationSale opacity-0" style="animation-delay: 5s">
            <NotificationSale />
        </div>

        <div class="absolute top-72 -right-12 notificationSale opacity-0" style="animation-delay: 3s">
            <NotificationSale />
        </div>

        <div class="absolute top-96 left-12 notificationSale opacity-0" style="animation-delay: 1s">
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
            transform: scale(0.7);
        }
        50% {
            opacity: 1;
            transform:translateY(-50px) scale(0.7);
        }
        100% {
            opacity: 0;
            transform:translateY(-100px) scale(0.7);
        }

    }
</style>