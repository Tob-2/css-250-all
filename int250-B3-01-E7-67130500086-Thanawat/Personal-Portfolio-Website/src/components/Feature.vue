<script setup>


</script>

<template>
   <section>
        <div class="w-full bg-sky-950 border-b-[3px] border-slate-400">
    
    <div class="max-w-7xl mx-auto w-full px-6 md:px-8 py-12">
        
        <div class="flex flex-col items-center mb-10">
            <p class="text-3xl md:text-4xl font-bold text-yellow-300 font-mono tracking-wide border-b-4 border-slate-400 pb-2 px-6">
                My Project
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div class="border-[3px] rounded-xl border-slate-400 bg-slate-900 text-white p-5 flex flex-col justify-between hover:shadow-[4px_4px_0px_rgba(148,163,184,1)] transition-all">
                <div>
                    <p class="text-xl font-semibold mb-4">Resume Builder</p>
                    <img src="../components/assets/resume.png" alt="Resume Builder" class="h-40 w-full object-contain mx-auto mb-6" >
                </div>
                <a href="https://github.com/navysingchai/INT250-Project.git" target="_blank" class="block text-center border-2 hover:scale-105 bg-sky-950 hover:bg-sky-900 border-slate-400 py-2 rounded-lg transition-all font-medium">View</a>
            </div>

            <div class="border-[3px] rounded-xl border-slate-400 bg-slate-900 text-white p-5 flex flex-col justify-between hover:shadow-[4px_4px_0px_rgba(148,163,184,1)] transition-all">
                <div>
                    <p class="text-xl font-semibold mb-4">CureX</p>
                    <img src="../components/assets/curex.png" alt="CureX" class="h-40 w-full object-contain mx-auto mb-6">
                </div>
                <a href="https://github.com/UltraPixel042/int250-workshop-05.git" target="_blank" class="block text-center border-2 hover:scale-105 bg-sky-950 hover:bg-sky-900 border-slate-400 py-2 rounded-lg transition-all font-medium">View</a>
            </div>

            <div class="border-[3px] rounded-xl border-slate-400 bg-slate-900 text-white p-5 flex flex-col justify-between hover:shadow-[4px_4px_0px_rgba(148,163,184,1)] transition-all">
                <div>
                    <p class="text-xl font-semibold mb-4">Game</p>
                    <img src="../components/assets/game.png" alt="Game" class="h-40 w-full object-contain mx-auto mb-6">
                </div>
                <a href="https://github.com/navysingchai/INT250-Game-Project-007xGroup.git" target="_blank" class="block text-center border-2 hover:scale-105 bg-sky-950 hover:bg-sky-900 border-slate-400 py-2 rounded-lg transition-all font-medium">View</a>
            </div>
            
        </div>

        <div class="flex flex-col items-center mt-20 mb-10">
            <p class="text-3xl md:text-4xl font-bold text-yellow-300 font-mono tracking-wide border-b-4 border-slate-400 pb-2 px-6">
                Lab & Assignment
            </p>
        </div>

        <div class="border-[3px] rounded-xl border-slate-400 bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[4px_4px_0px_rgba(148,163,184,1)] transition-all"> 
            <p class="text-2xl font-semibold">All My Works</p>
            <div class="w-full md:w-auto">     
                <a href="https://github.com/Tob-2/css-250-all.git" target="_blank" class="block md:inline-block text-center border-[3px] rounded-xl border-slate-400 bg-sky-950 px-8 py-3 animate-bounce hover:bg-slate-700 transition-colors text-lg font-bold tracking-wider">Here!!</a>
            </div>
        </div>
        
    </div>
</div>
   </section>
</template>

<style scoped></style>