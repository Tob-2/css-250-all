<script setup>
import { ref } from 'vue'

// ตัวแปรควบคุมการแสดงผลและข้อความ
const isVisible = ref(false)
const toastMessage = ref('')

// ฟังก์ชันสำหรับเรียกแสดง Toast (ค่าเริ่มต้นจะแสดง 3 วินาที)
const showToast = (message, duration = 3000) => {
  toastMessage.value = message
  isVisible.value = true
  
  // ตั้งเวลาให้ซ่อนอัตโนมัติเมื่อครบกำหนด
  setTimeout(() => {
    isVisible.value = false
  }, duration)
}

// เปิดให้ Component อื่น (เช่น หน้าหลักของคุณ) สามารถเรียกใช้ฟังก์ชันนี้ได้
defineExpose({ showToast })
</script>

<template>
  <!-- ใช้ Transition ของ Vue เพื่อทำแอนิเมชันเด้งเข้า-ออก -->
 
    <div 
      v-if="isVisible" 
      class=" animate-bounce  fixed bottom-5 right-5 flex items-center w-full max-w-xs p-4 space-x-3 text-green-700 bg-green-100 rounded-xl  border border-green-100"
    >
    
      
      
      <!-- ส่วนแสดงข้อความ -->
      <div class="ml-3 text-sm font-medium">{{ toastMessage }}</div>
      
      
    </div>
  
</template>

<style scoped>

</style>