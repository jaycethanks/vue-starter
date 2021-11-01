<template>
  <div>
    <span>hello vue starter</span>
    <div><button @click="$router.push('/')">HomePage</button></div>
    <div><button @click="$router.push('/me')">About Me</button></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>
