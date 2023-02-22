<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <p
      class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200"
      @click="appConfig.title = 'hello'"
    >
      appConfig: {{ appConfig.title }}
    </p>

    <label>
      dark mode:
      <NSwitch id="toggle" v-model:value="appConfig.theme.dark" />
    </label>
  </div>
</template>

<script setup lang="ts">
// 获取appConfig信息
const appConfig = useAppConfig();

// 获取环境变量
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig);

if (process.server) {
  console.log('API secret:', runtimeConfig.apiSecret);
  
}

</script>