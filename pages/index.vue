<template><!-- <h1>Index Page</h1>
  <BaseFooButton></BaseFooButton>
  <div>
    <NButton>hello</NButton>
  </div>
</NuxtLink> -->
  <div class="flex items-center flex-col gap-2 py-4">

    <!-- 错误处理 -->
    <div v-if="error">{{ error.message }}</div>

    <!-- 加载状态显示 -->
    <div v-if="pending">加载中...</div>

    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
          post.title
        }}</NuxtLink>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>

      <!-- 分页按钮 -->
      <NButton @click="prev">上一页</NButton>
      <NButton @click="next">下一页</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">

// 配置标题
useHead({
  title: '文章列表'
})

// const posts = await $fetch("/api/posts");
const page = ref(1)
const { data: posts, pending, error, refresh } = await useFetch(
  () => `/api/posts?page=${page.value}`)

function prev() {
  page.value--
  refresh()
}
function next() {
  page.value++
  refresh()
}
</script>