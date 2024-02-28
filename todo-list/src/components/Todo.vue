<template>
  <div class="todo">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <p>{{ date }}</p>
    <div class="btn-div">
      <Btn
        circle
        variant="secondary"
        @click="edit"
        class="btn edit-todo-btn"
      >
        <Pencil />
      </Btn>
      <Btn circle variant="danger" @click="remove" class="btn">
        &times;
      </Btn>
    </div>
  </div>
</template>

<script setup>
import Btn from "./Btn.vue";
import Pencil from "./icons/Pencil.vue";

const props = defineProps({
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    }
  })

const emit = defineEmits(["remove", "edit"])

function edit(){
  emit('edit');
}

function remove(){
  emit('remove');
}
</script>

<style scoped>
.todo {
  justify-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}
.todo>p{
    inline-size: 150px;
    overflow: hidden;
  }
.todo > div {
  display: flex;
}

.edit-todo-btn {
  margin-right: 5px;
}
.btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
}
@media (max-width: 900px){
  .todo{
  display: inline-block;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  height: fit-content;
  margin: 20px;
  }
  .todo>p{
    inline-size: 200px;
    overflow-wrap: break-word;
  }
  .btn-div{
    display: flexbox;
    justify-content: flex-end;
  }
}
</style>