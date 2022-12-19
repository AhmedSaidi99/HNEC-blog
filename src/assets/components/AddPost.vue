<template>
    <div id="add-post">
      <div class="container">
        <h1>Add a post:</h1>
        <form v-if="!submitted">
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Post Content:</label>
            <textarea v-model.lazy.trim="post.body"></textarea>
            <hr />
            <button v-on:click.prevent="postData">Add Post</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
        <div id="preview" v-if="submitted">
            <p>Title:     {{ post.title }}</p>
            <p>Content:   {{ post.body }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                body: '',
            },
            authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
            submitted: false
        }
    },
    methods: {
        async postData (){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.post) 
            })
            const finalRes = await res.json()
            if (finalRes) {
                this.submitted = true;
            }
            console.log(finalRes)
        }
    }
}
</script>
<style scoped>
#add-post {
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
form {
    max-width: 500px;
    justify-self: center;
} 
label{
    display: block;
    margin: 20px 0 10px 10px;
    font-weight: bold;
    text-align: left;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid #35495e;
    outline: none;
}
#preview{
    padding: 20px;
    border: 2px dotted #41b883;
    border-radius: 20px;
    margin: 30px 0;
    font-weight: bold;
}
h3{
    margin: 20px 0;
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