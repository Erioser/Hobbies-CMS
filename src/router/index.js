import Vue from 'vue'
import Router from 'vue-router'
import articles from '@/router/articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/hobbies',
  routes: [
    {
      path: '/',
      redirect: '/articles'
    },
    articles
  ]
})
