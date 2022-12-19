import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../assets/components/Blog'
import Post from '../assets/components/singlePost.vue'
import AddPost from '../assets/components/AddPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
