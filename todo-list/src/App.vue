<template>
  <Navbar />
  <main class="container">
    <EditTodoForm
      :show="editTodoForm.show"
      @close="editTodoForm = false"
      @submit="updateTodo"
      v-model="editTodoForm.todo.title"
    />

    <Alert 
      :message="alert.message" 
      :show="alert.show" 
      :variant="alert.variant" 
      @close="alert.show = false" 
      />

    <section>
      <AddTodoForm :isLoading="isPostingTodo" @submit="addTodo" />
    </section>

    <section>
      <Spinner class="spinner" v-if="isLoading" />
      <div v-else>
        <Todo v-for="todo in todos" :key="todo.id" :title="todo.title" @remove="removeTodo(todo.id)"
        @edit="showEditTodoForm(todo)" />
      </div>
    </section>
  </main>
</template>

<script>
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import AddTodoForm from "./components/AddTodoForm.vue";
import Todo from "./components/Todo.vue";
import Btn from "./components/Btn.vue";
import axios from "axios";
import Spinner from './components/Spinner.vue';
import EditTodoForm from './components/EditTodoForm.vue';

export default {
  components: {
    Alert,
    Navbar,
    AddTodoForm,
    Todo,
    Btn,
    Spinner,
    EditTodoForm,
  },

  data() {
    return {
      todoTitle: "",
      todos: [],
      alert: {
        show: false,
        message: '',
        variant: 'danger',
      },
      isLoading: false,
      isPostingTodo: false,
      editTodoForm: {
        show: false,
        todo: {
          id: 0,
          title: "",
        },
      },
    };
  },

  created() {
    this.fetchTodos();
  },

  methods: {
    async fetchTodos() {
      this.isLoading = true;
      try {
        const res = await axios.get('/api/todos'); 
        this.todos = await res.data;
      } catch (e) {
        this.showAlert('Failed loading todos, check your connection')
      }
      this.isLoading = false;
    },

    showAlert(message, variant = "danger") {
      this.alert.show = true;
      this.alert.message = message;
      this.alert.variant = variant;
    },

    async addTodo(title) {
      if (title === "") {
        this.showAlert('Todo title is required')
        return;
      }
      this.isPostingTodo = true;
      const res = await axios.post('/api/todos', {
        title
      });
      this.isPostingTodo = false;

      console.log(res.data);

      this.fetchTodos();
    },

    showEditTodoForm(todo) {
      this.editTodoForm.show = true;
      this.editTodoForm.todo = { ...todo };
    },

    async updateTodo() {
      try {
        // todo.title = this.editTodoForm.todo.title;
        // todo.id = this.editTodoForm.todo.id;
        const { id, title } = this.editTodoForm.todo;
        // await axios.put(`/api/todos/${todo.id}`, {'id': todo.id, 'title': todo.title});
        await axios.put(`/api/todos/${id}`, { title });
        const todo = this.todos.find(
          (todo) => todo.id === this.editTodoForm.todo.id
        );
        todo.title = this.editTodoForm.todo.title;
      } catch (e) {
        this.showAlert("Failed updating todo");
      }
      // this.editTodoForm.show = false;
      this.editTodoForm.show = false;

    },

    async removeTodo(id) {
      await axios.delete(`/api/todos/${id}`)
      this.fetchTodos();
    },
  },
};
</script>

<style scoped>
.spinner{
  margin: auto;
  margin-top: 30px;
}
</style>