<template><!-- <h1>Detail Page</h1> -->
  <!-- <p>{{ $route.params.id }}</p> -->
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <div v-else>
      <h1>{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 获取文章id
const route = useRoute()
// const { title, content } = await $fetch(`/api/detail/${route.params.id}`)
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`)
const { data, pending } = await useAsyncData(fetchPost)

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