<template>
    <footer id="footer">
      <div class="container">
        <img src="../assets/logo.png" width="50" style="{box-}" />
        <div>
            <p>Copyright HNEC Learning - {{ currentYear }}</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
    background-color: #35495e;
    color: white;
    border-top: 5px solid #577a67;
    padding: 10px 0;
    font-weight: bold;
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    top: 100%;
}
footer .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
}
p {
    letter-spacing: 2.5px;
}
</style>
