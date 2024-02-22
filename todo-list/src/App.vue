<template>
  <Navbar />
  <main class="container">
    <Alert message="Todo title is required" :show="showAlert" @close="showAlert = false" />
    <section>
      <add-todo-form @submit="addTodo" />
    </section>
    <section>
      <Todo :todos="todos" @remove="removeTodo"/>
    </section>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Alert from './components/Alert.vue';
import AddTodoForm from './components/AddTodoForm.vue';
import Todo from './components/Todo.vue';

export default {
  components: {
    Navbar,
    Alert,
    AddTodoForm,
    Todo
},
  data() {
    return {
      todoTitle: "",
      todos: [],
      showAlert: false,
    };
  },
  methods: {
    addTodo(title) {
      if (title === "") {
        return this.showAlert = true;
      }
      this.todos.push({
        title,
        id: Math.floor(Math.random() * 1000)
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
}

</script>

<style scoped>

</style>
