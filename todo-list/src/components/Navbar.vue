<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo Vue" width="50">
      <h2 class="brand">Todo List App</h2>
    </div>
    <div class="links">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/todos/create">Add Todo</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--navbar-color);
  padding: 10px;
  margin-bottom: 30px;
}

.brand {
  font-size: 2rem;
}

.logo{
  display: flex;
  align-items: center;
}

.links ul{
  display: flex;
  align-items: center;
  list-style: none;
  padding: 20px;
  margin: 0;
}

.links a {
  font-size: 30px;
  margin-left: 20px;
  text-decoration: none;
  color: var(--text-color);
}

a.router-link-active{
  color: var(--accent-color)
}

@media (max-width: 680px){
  .navbar{
    display: block;
  }
  .links{
    margin-top: 10px;
  }
  .links ul {
    margin: 0;
    padding: 0;
  }

  .links a {
    font-size: 20px;
  }
}

</style>