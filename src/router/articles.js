import Layout from '@/components/AppLayout/Layout.vue'
import ArticlesCreate from '@/views/Articles/ArticlesCreate'

export default {
  path: '/articles',
  component: Layout,
  redirect: '/articles/create',
  children: [
    {
      path: '/articles/create',
      name: 'articles-create',
      component: ArticlesCreate
    }
  ]
}