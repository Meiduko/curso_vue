<template>
  <div class="todo" v-for="todo in todos" :key="todo.id">
    <p>{{ todo.title }}</p>
    <div>
      <Btn :circle="true" type="secondary" @click="$emit('remove', todo.id)" class="btn edit-todo-btn">
        <Pencil/>
      </Btn>
      <Btn :circle="true" type="danger" @click="$emit('remove', todo.id)" class="btn">
        &times;
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue"
import Pencil from './icons/Pencil.vue'

export default {
  components: { Btn, Pencil },

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
    'remove'
  ]
}
</script>

<style scoped>
.todo > div{
  display: flex;
}
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}

.edit-todo-btn{
  margin-right: 5px;
}

.btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
  cursor: pointer;
}
</style>