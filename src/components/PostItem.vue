<template>
  <div class="post">
    <div>
      <div>Название: {{ post.title }}</div>
      <div>Описание: {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyButton @click="$router.push(`/posts/${post.id}`)">Открыть</MyButton>
      <MyButton @click="$emit('remove', post)">Удалить</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid #42B975;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 650px) {
  .post {
    flex-direction: column;
  }
}
.post__btns{
  display: flex;
  gap: 20px;
}
</style>