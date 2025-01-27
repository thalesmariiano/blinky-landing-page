<template>
    <div class="relative mt-3">
        <img class="w-72 lg:w-96 floatingPhone z-10" src="@/assets/images/celular.png" />

        <div class="absolute top-24 -left-24 sm:-left-32 notificationSale opacity-0" style="animation-delay: 5s">
            <NotificationSale class="scale-50 sm:scale-90 lg:scale-100" />
        </div>

        <div class="absolute top-52 left-32 notificationSale opacity-0" style="animation-delay: 2s">
            <NotificationSale class="scale-50 sm:scale-75 lg:scale-100" />
        </div>

        <div class="absolute top-48 right-32 notificationSale -z-10 opacity-0 md:hidden" style="animation-delay: 9s">
            <NotificationSale class="scale-50 sm:scale-75 lg:scale-100" />
        </div>

        <div class="absolute top-32 left-36 -z-10 notificationSale opacity-0" style="animation-delay: 8s">
            <NotificationSale class="scale-50 sm:scale-75 lg:scale-100" />
        </div>

        <div class="absolute top-80 notificationSale opacity-0" style="animation-delay: 1s">
            <NotificationSale class="scale-50 sm:scale-75 lg:scale-100" />
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