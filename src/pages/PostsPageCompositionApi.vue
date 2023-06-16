<template>
  <div class="postsPage__wrapper">
    <h1>Страница с постами</h1>
    <MyInput v-focus placeholder="Поиск" v-model="searchQuery" />
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect :options="sortOptions" v-model="selectedSort" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"  />
    </MyDialog>
    <PostList v-if="!isPostsLoading" @remove="removePost"  :posts="sortedAndSearchedPosts" />
    <div v-else>...Идёт загрузка</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template> 

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import axios from 'axios';
export default {
  components: {
    PostForm,
    PostList,
    MyInput
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ]
    }
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading, page } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      page,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  },
  methods: {
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { _page: this.page, _limit: this.limit }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        console.log(e);
      }
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
  }
}
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.postsPage__wrapper {
  padding: 15px;
}
.page {
  padding: 10px;
}
.current-page {
  border: 2px solid seagreen
}
.app__buttons {
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 0px;
}</style>
