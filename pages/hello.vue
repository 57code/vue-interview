<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
// 请求数据 $fetch
const { message } = await $fetch('/api/hello')
</script>