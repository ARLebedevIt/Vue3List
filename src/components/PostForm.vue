<template>
  <form class="postFormPage__wrapper" @submit.prevent>
    <div class="postForm__items">
      <h4>Создание поста</h4>
      <MyInput style="font-size: 17px;" v-focus v-model="post.title" type="text" placeholder="Название" />
      <MyInput style="font-size: 17px;" v-model="post.body" type="text" placeholder="Описание" />
      <MyButton style="align-self: flex-end; margin-top: 15px; font-size: 17px;" @click="createPost">Создать</MyButton>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style>
  .postForm__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
</style>