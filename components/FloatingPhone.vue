<template>
    <div class="relative mt-3">
        <img class="w-96 floatingPhone" src="@/assets/images/celular.png" />

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
    .floatingPhone {
        animation: floating 4s ease infinite
    }

    @keyframes floating {
        0% {
           transform: translateY(0);
        }
        50% {
            transform: translateY(-25px)
        }
        100% {
            transform: translateY(0)
        }
    }

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