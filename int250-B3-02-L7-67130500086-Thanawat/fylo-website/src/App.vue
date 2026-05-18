<script setup>
    import EarlyAccess from './components/EarlyAccess.vue';
import FAQ from './components/FAQ.vue';
import Features from './components/Features.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import NavBar from './components/NavBar.vue';
import Productive from './components/Productive.vue';
import Testimonial from './components/Testimonial.vue';
</script>

<template>
    <div class=" min-h-screen w-full dark:bg-darkBlue dark:text-white font-opensans">
    <NavBar />
    <Hero />
    <Features />
    <Productive />
    <FAQ />
    <Testimonial />
    <EarlyAccess />
    <Footer />
    </div>
</template>

<style scoped></style>
