import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/Blog.vue'
import Post from '../components/singlePost.vue'
import AddPost from '../components/AddPost.vue'

Vue.use(Router)

export default new Router({
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
