<template>
  <div>
    <nav>
      导航栏
      <img class="avatar" src="/avatar.png" alt="avatar" />
    </nav>
    <slot />
  </div>
</template>
<style scoped>
.avatar {
  width: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>