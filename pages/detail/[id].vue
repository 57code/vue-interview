<template>
  <!-- <h1>Detail Page</h1> -->
  <!-- <p>{{ $route.params.id }}</p> -->
  <h1>{{ title }}</h1>
  <div v-html="content"></div>
</template>
<script setup lang="ts">
// 获取文章id
const route = useRoute()
const { title, content } = await $fetch(`/api/detail/${route.params.id}`)

// 请求体
// $fetch('/api/detail/', {
//   body: {
//     xx: 'xxx'
//   }
// })
</script>
<style scoped lang="scss">
p {
  color: var(--link-color)
}
</style>