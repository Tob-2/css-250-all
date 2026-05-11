<script setup>
import CourseModal from './CourseModal.vue';
import StatCard from './StatCard.vue';

</script>

<template >
    <section class=" bg-slate-50 min-h-screen flex flex-col overflow-hidden ">
        <div class="flex flex-col bg-indigo-600   mx-auto  rounded-3xl text-white px-7 mt-10 w-7xl">
            <h3 class=" text-md font-medium pt-7">Welcome back, Student</h3>
            <h1 class=" text-4xl font-bold pt-5">Continue your learning journey today.</h1>
            <h3 class=" pt-5">Track your courses, review assignments, and monitor your learning progress in one place.</h3>
            <button class=" bg-white text-indigo-600 text-md font-medium w-40 py-3 rounded-2xl my-7">View My Courses</button>
        </div>

        <div>
            <StatCard />
        </div >
        <div class=" w-7xl mx-auto mt-10 space-y-3">
            <h1 class="text-2xl font-bold text-black">My Courses</h1>
            <h3 class=" text-slate-500">Review your course and assignment status.</h3>
            <CourseModal />
        </div>

    </section>

</template>

<style scoped></style>