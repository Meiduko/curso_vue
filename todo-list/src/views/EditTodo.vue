<template>
  <Spinner v-if="isLoading" class="spinner"/>

  <Alert 
    variant="danger" 
    :message="alert.message" 
    :show="alert.show"
    @close="router.push('/')"
  />

  <div v-if="todo !== null" class="form">
    <h1>Edit Todo</h1>
    <form class="edit-todo-form">
      <div>
        <label>Todo Title</label>
      </div>
      <input type="text" v-model="todo.title" />
      <div>
        <label>Todo Description</label>
      </div>
      <input type="text" v-model="todo.description">
      <div>
        <label>Todo Date</label>
      </div>
      <input type="date" v-model="todo.date">
    </form>

    <div class="submit">
      <Btn @click="submit">
        <Spinner :disabled="isUpdatingTodo" v-if="isUpdatingTodo" />
        <span v-else>Submit</span>
      </Btn>
    </div>
  </div>
</template>
<script setup>

import Btn from "@/components/Btn.vue";
import Spinner from "@/components/Spinner.vue";
import Alert from "@/components/Alert.vue";
import { useFetch } from "../composables/fetch";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useAlert, alert } from "@/composables/alert";

const props = defineProps(['id']);

const isUpdatingTodo = ref(false);

const router = useRouter();

const { data: todo, error, isLoading } = useFetch(`/api/todos/${props.id}`, {
  onError: () => {
    useAlert('Failed loading todos')
  }
})


async function submit() {
  isUpdatingTodo.value = true;
  try {
    await axios.put(`/api/todos/${props.id}`, todo.value);
    router.push('/');
  } catch (e) {
    useAlert('Failed uploading todo')
  }
  isUpdatingTodo.value = false;

}
</script>

<style scoped>
.edit-todo-form>input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
  margin-top: 10px;
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