<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="postList">
      <PostItem @remove="$emit('remove', post)" :key="post.id" :post="post" v-for="post in posts" />
    </transition-group>
  </div>
  <h2 v-else style="color: white;">
    Список постов пуст
  </h2>
</template>
<script>
import PostItem from './PostItem.vue';
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  components: { PostItem }
}
</script>

<style>
.postList-item {
  display: inline-block;
  margin-right: 10px;
}
.postList-enter-active,
.postList-leave-active {
  transition: all 0.5s ease;
}
.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.postList-move {
  transition: transform 0.4s ease;
}
</style>