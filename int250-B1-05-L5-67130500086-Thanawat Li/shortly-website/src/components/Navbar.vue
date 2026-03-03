<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>

    <nav class="bg-indigo-50/50">
       
            <!-- desktop size -->

            <div class="max-w-6xl mx-auto flex justify-between p-6 gap-8">
                <!-- left side button -->
                <img src="../Assets/logo.svg" alt="">
                <div class=" hidden lg:flex items-center gap-2">

                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Resources</button>
                </div>

                <!-- right side -->
                <div class=" hidden lg:flex items-center gap-2 ">
                    <button>login </button>
                    <button>sign up</button>

                </div>
                <!-- hamberger button -->

                <button @click="isOpen = !isOpen" class="lg:hidden">
                    {{ isOpen ? '✕' : '☰' }}
                </button>


                <div v-show="isOpen" class="lg:hidden mt-6 flex flex-col items-center gap-6 bg-white shadow-lg p-6">
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Resources</button>
                    <button>Login</button>
                    <button class="bg-orange-500 text-white px-4 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>


            </div>




        

    </nav>
</template>

<style scoped></style>