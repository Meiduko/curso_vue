<template>
  <Alert :message="alert.message" :show="alert.show" :variant="alert.variant" @close="alert.show = false" />
  <section>
    <Spinner class="spinner" v-if="isLoading" />
    <div v-else>
      <Todo v-for="todo in todos" :key="todo.id" :title="todo.title" :description="todo.description" :date="todo.date"
        @remove="removeTodo(todo.id)" @edit="$router.push(`/todos/${todo.id}/edit`)" />
    </div>
  </section>
</template>

<script setup>
import Alert from "@/components/Alert.vue";
import Todo from "@/components/Todo.vue";
import axios from "axios";
import Spinner from '@/components/Spinner.vue';
import { useFetch } from '@/composables/fetch'
import { useAlert, alert } from "@/composables/alert";

const { data: todos, isLoading } = useFetch('/api/todos', {
  onError: () => useAlert('Failed loading todos', 'danger')
});

async function removeTodo(id) {
  try {
    await axios.delete(`/api/todos/${id}`)
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }catch(e){
    useAlert('Failed deleting todo', 'danger')
  }
}
</script>

<style scoped>
.spinner {
  margin: auto;
  margin-top: 30px;
}
</style>