<template>
  <div class="p-4">
    Count: {{ count }} Counter: {{ counter }} CounterRef: {{ counterRef }}
    <div class="mt-2">
      <NButton
        @click="
          counter++;
          counterRef++;
        "
        >+</NButton
      >
      <NButton
        @click="
          counter--;
          counterRef--;
        "
        >-</NButton
      >
    </div>

    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
// 局部状态
const counterRef = ref(Math.round(Math.random() * 1000));
const counter = useState("counter", () => Math.round(Math.random() * 1000));
// 全局状态
const count = useCounter();
</script>