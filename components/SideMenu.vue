<template>
    <div class="w-full h-screen fixed top-0 right-0 bg-[#083027] md:hidden p-5">
        <div class="w-full flex justify-end">
            <button @click="$emit('close')">
                <IconsClose widht="44" height="44" fill="#fff" />
            </button>
        </div>
        <nav>
            <ul class="space-y-5 mt-5">
                <li class="text-center">
                    <a href="#inicio" class="font-poppins font-light text-white text-lg">Inicio</a>
                </li>
                <li class="text-center">
                    <a href="#solucoes" class="font-poppins font-light text-white text-lg">Soluções</a>
                </li>
                <li class="text-center">
                    <a href="#global" class="font-poppins font-light text-white text-lg">Global</a>
                </li>
                <li class="text-center">
                    <a href="#contato" class="font-poppins font-light text-white text-lg">Contato</a>
                </li>
                <li class="text-center">
                    <a class="w-72 hoverAnimation mx-auto flex gap-3 justify-center items-center text-sm font-poppins font-semibold text-black bg-gradient-to-r from-blinkyBlue to-blinkyGreen px-4 py-1.5 rounded-lg">
                        Cadastre-se
                        <IconsArrowForward width="20" height="20" stroke="#000" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>