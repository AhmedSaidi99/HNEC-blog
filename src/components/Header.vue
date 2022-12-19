<template>
    <header id="header">
      <div class="container">
        <img src="../assets/logo.png" width="100" />
        <nav>
            <router-link to="/">Blog</router-link>
            <router-link class="add" to="/add-post">+</router-link>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
header {
    background-color: #ededed;
    color: #41b883;
    border-bottom: 2px solid #41b883;
    padding: 15px 0;
}
header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav {
    margin-right: 50px;
    display: flex;
    align-items: center;
}
nav a {
    padding: 8px;
    margin: 0 10px;
    border-radius: 8px;
    text-decoration: none;
    background-color: #ddd;
    color: #35495e;
    font-weight: bold;
    font-size: 20px;
}
.router-link-exact-active {
    background-color: #41b883;
    color: white;
}
.add {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  line-height: 50px;
  padding: 0;
  font-size: 30px;
}
</style>
