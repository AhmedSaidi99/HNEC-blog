<template>
    <div id="post">
      <div class="container">
        <div class="single-post">
          <h1>{{ post.title }} {{ post.id }}</h1>
          <p> {{ post.body }}</p>
        </div>
        <div class="controls">
          <router-link v-bind:class="{disabled: disablePrev}" v-bind:to="'/posts/' + (post.id - 1)"><span>&larr; Previous</span></router-link>
          <router-link v-bind:class="{disabled: disableNext}" v-bind:to="'/posts/' + (post.id + 1)"><span>Next &rarr;	</span></router-link>
        </div>
        <ul class="related-posts">
          <li v-for="post in relatedPosts">
            <h3>{{ post.title }}</h3>
            <p> {{ post.body.slice(0, 100) }}</p>
            <router-link v-bind:to="'/posts/' + post.id"><button>Read more >>></button></router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      id: this.$route.params.id,
      post: {},
      relatedPosts: [],
      totalOfPosts: 0,
      disablePrev: this.$route.params.id == 1,
      disableNext: this.$route.params.id == this.totalOfPosts
    }
  },
  methods: {
    async getData (id) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const singlePost = await res.json()
        this.post = singlePost
        this.getRelatedPosts();
    },
    async getRelatedPosts () {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const posts = await res.json()
        this.totalOfPosts = posts.length

        const postsCount = 3;
        const relatedPosts = []
        for (let i = 0; i < postsCount; i++) {
          relatedPosts[i] = posts[Math.floor(Math.random() * posts.length)]
        }
        this.relatedPosts = relatedPosts
    }
  },
  
  created () {
    this.getData(this.id);
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getData(toParams.id)
        this.disablePrev = (toParams.id == 1)
        this.disableNext = (toParams.id == this.totalOfPosts)
      }
    )
  }
}
</script>
<style scoped>
#post {
  text-align: left;
}
h1 {
  margin-bottom: 50px;
}
.single-post {
  max-width: 700px;
  margin-top: 50px;
}
.controls {
  margin-top: 50px;
  font-size: 13px;
}
.controls a {
  text-decoration: none;
  color: white;
  background: #35495e;
  padding: 5px;
  border-radius: 5px;
}
.controls a.disabled {
    opacity: 0.5;
    pointer-events: none;
}
.related-posts {
  display: flex;
  gap: 30px;
  list-style-type: none;
  margin: 100px 0;
  padding: 30px;
  border-radius: 30px;
  background-color: #41b883;
  position: relative;
}
.related-posts::before {
  content: 'RELATED POSTS :';
    position: absolute;
    top: -40px;
    background: #35495e;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    border-radius: 10px;
}
@media (max-width: 764px) {
  .related-posts {
    flex-direction: column;
  }
  .related-posts li:not(:last-child) {
    border-bottom: 2px solid #35495e;
    padding-bottom: 20px;
  }
}
.related-posts li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
}
h3 {
  /* font-size: 16px; */
  margin-bottom: 10px;
}
.related-posts p {
  color: whitesmoke;
  font-size: 13px;
  font-weight: 300;
}
button {
  font-family: 'Quicksand', sans-serif;
  background: #35495e;
  color: #fff;
  border: 0;
  padding: 8px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
</style>
