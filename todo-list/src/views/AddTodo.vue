<template>
  <Alert :message="alert.message" :show="alert.show" :variant="alert.variant" @close="alert.show = false"/>

  <div class="form">
    <h1>Add Todo</h1>
    <form class="add-todo-form">
      <input v-model="todoTitle" type="text" placeholder="Todo title" />
      <input v-model="todoDesc" type="text" placeholder="Todo description">
      <input v-model="todoDate" type="date" placeholder="Todo date">
    </form>

    <div class="submit">
      <Btn @click="addTodo(todoTitle, todoDesc, todoDate)">
        <span>Submit</span>
      </Btn>
    </div>
  </div>
</template>

<script setup>
import Alert from "@/components/Alert.vue";
import Btn from "../components/Btn.vue"
import { ref } from "vue";
import { useAlert, alert } from "@/composables/alert";
import axios from "axios";
import { useRouter } from "vue-router";

const props = defineProps({
    isLoading: {
      default: false,
      type: Boolean,
    }
  });

const emit = defineEmits(['submit'])
const router = useRouter();

async function addTodo(todoTitle, todoDesc, todoDate) {
  if (todoTitle === "" || todoDesc === "" || todoDate === "") {
    useAlert('todo title is required', 'danger')
  } else {
    try {
      await axios.post('/api/todos', {
        title: todoTitle,
        description: todoDesc,
        date: todoDate
      })
      router.push('/');
    } catch (e) {
      useAlert('Failed uploading todo', 'danger')
    }
  };
}

const todoTitle = ref("");
const todoDesc = ref("");
const todoDate = ref("");
</script>

<style scoped>
.add-todo-form > input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
  margin-top: 15px;
}

.form {
  background-color: var(--navbar-color);
  padding: 20px;
  border-radius: 20px;
}

.submit {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}

.submit button {
  height: 50px;
  width: 80px;
}

.spinner {
  margin: auto;
}

</style>