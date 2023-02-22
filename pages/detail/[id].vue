<template><!-- <h1>Detail Page</h1> -->
  <!-- <p>{{ $route.params.id }}</p> -->
  <div class="p-5">
    <div v-if="error">{{ errorMsg }}</div>
    <div v-else-if="pending">加载中...</div>
    <div v-else>
      <h1>{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
      <!-- 评论区 -->
      <div class="py-2">
        <NInput
          v-model:value="value"
          type="textarea"
          placeholder="输入评论"
        />
        <NButton @click="onSubmit">发送</NButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NuxtError } from '#app'

const route = useRoute()
useHead({
  title: route.params.id as string
})

// 获取文章id
// const { title, content } = await $fetch(`/api/detail/${route.params.id}`)
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`)
const { data, pending, error } = await useAsyncData(fetchPost)
const errorMsg = computed(() => error.value as NuxtError)
watchEffect(() => {
  if (unref(error)) {
    // 如果有错误对象，则展示错误页
    showError(errorMsg.value)
  }
})
// 请求体
// $fetch('/api/detail/', {
//   body: {
//     xx: 'xxx'
//   }
// })

// 增加评论相关逻辑，注意登录状态的获取和使用
const value = useState("comment", () => "");
const store = useUser()
const { isLogin } = storeToRefs(store)
const router = useRouter()
const onSubmit = () => {
  if (isLogin.value) {
    // 提交留言...
    value.value = ''
  } else {
    // 要求登录
    router.push('/login?callback=' + route.path)
  }
}

</script>
<style scoped lang="scss">
p {
  color: var(--link-color)
}
</style>