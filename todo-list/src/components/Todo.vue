<template>
  <div class="todo" v-for="todo in todos" :key="todo.id">
    <p>{{ todo.title }}</p>
    <div>
      <button @click="$emit('close', todo.id)" class="remove-todo-btn">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      todos: [],
    }
  },

  props:{
    todos:{
      required: true,
    }
  },

  emits: [
    'close'
  ]
}
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}

.remove-todo-btn {
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  font-size: 30px;
  color: var(--text-color);
  background: var(--danger-color);
  cursor: pointer;
}
</style>