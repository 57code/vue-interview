<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  useHead({
    titleTemplate: (s) => {
      return s ? `${s} - 村长的技术空间` : '村长的技术空间'
    }
  })
</script>