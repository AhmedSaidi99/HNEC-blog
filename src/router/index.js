import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../views/Blog'
import Post from '../views/singlePost.vue'
import AddPost from '../views/AddPost.vue'

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
