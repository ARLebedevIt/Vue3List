<template>
  <div class="postsPage__wrapper">
    <h1>Страница с постами</h1>
    <MyInput v-focus placeholder="Поиск" v-model="searchQuery" />
     <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect :options="sortOptions" v-model="selectedSort" />
     </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList v-if="!isPostLoading" @remove="removePost" :posts="sortedAndSearchedPosts" />
    <div v-else >...Loading</div>
    <div v-intersection="loadingMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div @click="changePage(pageNumber)" :class="{'current-page': page === pageNumber}" class="page" 
      v-for="pageNumber in totalPages" 
      :key="pageNumber">{{ pageNumber }}</div>
    </div> -->
  </div>
</template> 

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyInput from '@/components/UI/MyInput.vue'
import axios from 'axios'
  export default {
    components: {
    PostForm,
    PostList,
    MyInput
},
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'}
        ]
      }
    }, 
    methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.dialogVisible = true
      },
      // changePage(pageNumber) {
      //   this.page = pageNumber
      // },
      async fetchPosts() {
        try {
          this.isPostLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { _page: this.page, _limit: this.limit}})
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
        } catch (e) {
          alert('Error')
        } finally {
          this.isPostLoading = false
        }
      },
      async loadingMorePosts() {
        try {
          this.page += 1
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { _page: this.page, _limit: this.limit}})
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data] 
        } catch (e) {
          alert('Error')
        }
      }
    },
    mounted() {
      this.fetchPosts()
    },
    computed: { // analog useMemo
      sortedPost() {
        return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
      },
      sortedAndSearchedPosts() {
        return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }   
    },
    // watch: {
    //   page() {
    //     this.fetchPosts()
    //   }
    // }
    // watch: { // Аналог useEffect
    //   selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //   })
    //   }
    // }
  }
</script>

<style>
  .page__wrapper{
    display: flex;
    margin-top: 15px;
  }
  .postsPage__wrapper{
    padding: 15px;
  }
  .page{
    padding: 10px;
  }
  .current-page {
    border: 2px solid seagreen
  }
  .app__buttons{
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
  }
  .observer{
    height: 0px;
  }
</style>
