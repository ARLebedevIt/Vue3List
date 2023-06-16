import PostsPage from '@/pages/PostsPage'
import Main from '@/pages/Main'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'
import PostsPageStore from '@/pages/PostsPageStore'
import { createRouter, createWebHistory } from 'vue-router'
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostsPageStore
  },
  {
    path: '/composition',
    component: PostsPageCompositionApi
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router