<script setup>
</script>

<template>
    <section class="bg-gray-100 py-20">

        <div class="max-w-6xl mx-auto px-6">

            <!-- FORM BOX -->
            <div class="
  bg-indigo-900
  bg-[url('@/assets/bg-shorten-mobile.svg')]
  lg:bg-[url('@/assets/bg-shorten-desktop.svg')]
  bg-no-repeat
  bg-top-right
  bg-cover
  p-6
  rounded-xl
">

                <form class="flex flex-col md:flex-row gap-4">

                    <input type="text" placeholder="Shorten a link here" class="flex-1 p-3 rounded-md" />

                    <button type="submit" class="bg-cyan-500 text-white px-6 py-3 rounded-md font-bold">
                        Shorten It!
                    </button>

                </form>
            </div>


            <!-- LINK CARD -->
            <div class="space-y-4">

                <!-- CARD 1 -->
                <div class="bg-white p-4 rounded-md 
                    flex flex-col md:flex-row 
                    md:items-center 
                    md:justify-between 
                    gap-4">

                    <p class="break-all">
                        http://frontendmentor.io
                    </p>

                    <div class="flex flex-col md:flex-row md:items-center gap-4">

                        <p class="text-cyan-500">
                            https://rel.link/k4IKyK
                        </p>

                        <button class="bg-cyan-500 text-white px-6 py-2 rounded-md">
                            Copy
                        </button>

                    </div>

                </div>


                <!-- CARD 2 -->
                <div class="bg-white p-4 rounded-md 
                    flex flex-col md:flex-row 
                    md:items-center 
                    md:justify-between 
                    gap-4">

                    <p class="break-all">
                        http://frontendmentor.io
                    </p>

                    <div class="flex flex-col md:flex-row md:items-center gap-4">

                        <p class="text-cyan-500">
                            https://rel.link/k4IKyK
                        </p>

                        <button class="bg-cyan-500 text-white px-6 py-2 rounded-md">
                            Copy
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>