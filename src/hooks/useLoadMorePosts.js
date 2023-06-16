import axios from "axios"
import { ref } from "vue"

export default function useLoadMorePosts(posts, page, limit) {
  const newPosts = ref([])
  const totalPages = ref(0)
  let newPage = ref(page)
  const loadMorePosts = async () => {
      try {
        newPage = ref(page += 1)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: newPage, _limit: limit}})
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
        posts.value = [...posts.value, ...response.data] 
      } catch (e) {
        alert('Error')
      }
    }
  return {
    newPosts, newPage
  }
}
