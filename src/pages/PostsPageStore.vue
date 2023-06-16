<template>
  <div class="postStorePage__wrapper">
    <!-- <h1>{{ $store.state.isAuth ? 'Пользователь авторизован' : 'Авторизуйтесь' }}</h1>
    <div>
      <MyButton @click="$store.commit('incrementLikes')">Лайк</MyButton>
      <MyButton @click="$store.commit('decrementLikes')">Дизлайк</MyButton>
    </div> -->
    <h1>Страница с постами</h1>
    <MyInput v-focus :model-value="searchQuery"
      @update:model-value="setSearchQuery" placeholder="Поиск" />
     <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect :options="sortOptions" :model-value="selectedSort"
      @update:model-value="setSelectedSort" />
     </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList v-if="!isPostsLoading" @remove="removePost" :posts="sortedAndSearchedPosts" />
    <div v-else>...Loading</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
     <!-- <div class="page__wrapper">
      <div @click="changePage(pageNumber)" :class="{'current-page': page === pageNumber}" class="page" v-for="pageNumber in totalPages" 
      :key="pageNumber">{{ pageNumber }}</div>
    </div>  -->
  </div>
</template> 

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/UI/MyButton.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    components: {
    PostForm,
    PostList,
    MyButton
},
data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  }
</script>

<style>
  .postStorePage__wrapper{
    padding: 15px;
  }
  h1 {
    text-align: center;
  }
  .page__wrapper{
    display: flex;
    margin-top: 15px;
  }
  .page{
    border: 1px solid black;
    padding: 10px;
  }
  .current-page {
    border: 2px solid seagreen
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .app__buttons{
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
  }
</style>
