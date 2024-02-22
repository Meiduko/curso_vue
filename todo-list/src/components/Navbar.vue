<template>
  <nav class="navbar">
    <img src="@/assets/logo.svg" alt="Logo Vue" width="50">
    <h2 class="brand">Todo List App</h2>
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
  background: var(--navbar-color);
  padding: 20px;
  margin-bottom: 30px;
}

.brand {
  font-size: 2rem;
}
</style>