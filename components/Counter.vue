<template>
  <div class="p-4">
    Counter1: {{ count1 }}
    Counter2: {{ count2 }}
    <div class="mt-2">
      <NButton @click="
        count1++;
        count2++;
                ">+</NButton>
      <NButton @click="
        count1--;
        count2--;
                ">-</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// 全局状态
const count1 = useCounter() as Ref<number>
const count2 = ref(1)
</script>