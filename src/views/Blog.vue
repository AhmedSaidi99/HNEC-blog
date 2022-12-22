<template>
    <div id="blog">
      <div class="container">
        <h1>All posts:</h1>
        <input type="text" v-model="search" placeholder="search..." class="search-field" />
        <div class="all-posts">
        <div class="post" v-for="post in filteredPosts" v-bind:key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body.slice(0, 50) }}....</p>
            <router-link v-bind:to="'/posts/' + post.id"><button>Read more >>></button></router-link>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      posts: [],
      search: ''
    }
  },
  methods: {
    async getData () {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const finalRes = await res.json()
      this.posts = finalRes
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter( post => {
        return post.title.match(this.search)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
#blog {
  flex: 1;
}
h1 {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #41b883;
  padding: 5px 10px;
  margin-bottom: 20px;
  width: fit-content;
  text-align: left;
}
.search-field {
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #41b883;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
  background: #ededed;
  color: #35495e;
}
.search-field::placeholder {
  color: #35495e;
}
.all-posts {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
}
.post {
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
}
.post:hover {
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
}
.post h2 {
  font-size: 20px;
  color: #41b883;
  margin-bottom: 8px;
}
.post a{
  text-decoration: none;
}
button {
  font-family: 'Quicksand', sans-serif;
  background: #41b883;
  color: #fff;
  border: 0;
  padding: 8px;
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
</style>