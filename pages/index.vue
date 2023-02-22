<template><!-- <h1>Index Page</h1>
  <BaseFooButton></BaseFooButton>
  <div>
    <NButton>hello</NButton>
  </div>
  <NuxtLink to="/detail/1">Detail Page 1</NuxtLink> -->
    <div class="flex items-center flex-col gap-2 py-4">
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
          post.title
        }}</NuxtLink>
        <p class="text-slate-500">发布于: {{ post.date }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
const posts = await $fetch("/api/posts");
</script>