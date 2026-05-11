<script setup>
    import { ref } from 'vue'
import ToastNotification from './ToastNotification.vue'

// สมมติว่ามี ref สำหรับ Toast
const myToast = ref(null)

const handleSave = () => {
  // ใส่โค้ดส่งข้อมูลของคุณตรงนี้
  console.log('ส่งงานเรียบร้อย!')
  
  // เรียก Toast ให้เด้งขึ้นมา
  if (myToast.value) {
    myToast.value.showToast('Assignment submitted successfully!')
  }
}

</script>

<template>
    <div class="flex space-x-7 mb-5">
        <div class=" flex flex-col p-5  bg-white shadow-sm border border-slate-200  rounded-2xl w-xl space-y-5">
            <div class="flex justify-between  ">
                <h3 class="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full font-semibold text-sm">INT250</h3>
                <h3 class="bg-orange-100 text-orange-700 py-1 px-3 rounded-full font-semibold text-sm">In Progress</h3>
            </div>
            <div class=" space-y-3">
                <h1 class="font-bold text-xl">CSS Framework</h1>
                <h3 class="text-sm text-slate-500">Learn how to build responsive and interactive web applications using
                    Vue.js and Tailwind CSS.</h3>
            </div>

            <div class="w-full max-w-lg">

                <!-- ส่วนข้อความด้านบน -->
                <div class="flex justify-between items-center mb-2">
                    <span class="text-slate-500 font-medium text-sm">Progress</span>
                    <span class="text-slate-900 font-bold text-sm">72%</span>
                </div>

                <!-- ส่วนหลอดเปอร์เซ็นต์ -->
                <div class="w-full bg-slate-100 rounded-full h-2.5">
                    <!-- แถบสีที่วิ่งตามเปอร์เซ็นต์ -->
                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 72%"></div>
                </div>

            </div>


            <div class="flex space-x-3">
                <button class=" bg-indigo-600 text-white text-sm font-medium w-44 py-3 rounded-2xl my-7">View Courses
                    Details</button>
                <button @click="handleSave"
                    class=" bg-white text-black border border-slate-200 text-sm font-medium w-44 py-3 rounded-2xl my-7">Submit
                    Assignment</button>
            </div>
        </div>
            <ToastNotification ref="myToast" />

        <div class=" flex flex-col p-5  bg-white shadow-sm border border-slate-200  rounded-2xl w-xl space-y-5">
            <div class="flex justify-between  ">
                <h3 class="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full font-semibold text-sm">INT250</h3>
                <h3 class="bg-orange-100 text-orange-700 py-1 px-3 rounded-full font-semibold text-sm">In Progress</h3>
            </div>
            <div class=" space-y-3">
                <h1 class="font-bold text-xl">Object-Oriented Programming</h1>
                <h3 class="text-sm text-slate-500">Practice Java programming, object-oriented design, and software development principles.</h3>
            </div>

            <div class="w-full max-w-lg">

                <!-- ส่วนข้อความด้านบน -->
                <div class="flex justify-between items-center mb-2">
                    <span class="text-slate-500 font-medium text-sm">Progress</span>
                    <span class="text-slate-900 font-bold text-sm">58%</span>
                </div>

                <!-- ส่วนหลอดเปอร์เซ็นต์ -->
                <div class="w-full bg-slate-100 rounded-full h-2.5">
                    <!-- แถบสีที่วิ่งตามเปอร์เซ็นต์ (เปลี่ยน width เป็น 58%) -->
                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 58%"></div>
                </div>

            </div>

            <div class="flex space-x-3">
                <button class=" bg-indigo-600 text-white text-sm font-medium w-44 py-3 rounded-2xl my-7">View Courses
                    Details</button>
                <button @click="handleSave"
                    class=" bg-white text-black border border-slate-200 text-sm font-medium w-44 py-3 rounded-2xl my-7">Submit
                    Assignment</button>
            </div>
            <ToastNotification ref="myToast" />
        </div>
    </div>
</template>

<style scoped></style>