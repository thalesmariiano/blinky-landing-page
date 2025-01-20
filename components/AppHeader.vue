<template>
    <div class="w-full flex justify-center items-center py-4 border-b-2 border-neutral-300/10">
        <header class="w-full max-w-4xl flex justify-between items-center">
            <img class="w-24" src="@/assets/images/blinky_logo.png" />

            <nav>
                <ul class="flex gap-10 items-center">
                    <li>
                        <a class="font-poppins font-light text-white">Inicio</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white">Soluções</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white">Global</a>
                    </li>
                    <li>
                        <a class="font-poppins font-light text-white">Contato</a>
                    </li>
                    <li>
                        <RegisterButton />
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>