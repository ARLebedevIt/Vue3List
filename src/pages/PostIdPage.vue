<template>
  <div class="postPage__wrapper">
    <h1>Страница поста с ID: {{ $route.params.id }}</h1>
  </div>
</template> 

<script>
  export default {
  }
</script>

<style scoped>
  .postPage__wrapper {
    padding-top: 15px;
  }
  h1 {
    text-align: center;
  }
</style>
