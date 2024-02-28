<template>
  <div v-if="show" class="alert" :style="{backgroundColor}">
    <p>{{ message }}</p>
    <p @click="close" class="close-alert">&times;</p>
  </div>
</template>

<script setup>
import { useBackgroundColor, backgroundColorProps } from "../composables/backgroundColor.js";
import { alertProps } from "@/composables/alert";

const props = defineProps({
  ...alertProps,
  ...backgroundColorProps
})

const emit = defineEmits(['close']);

const backgroundColor = useBackgroundColor(props)

function close () {
  emit('close');
}
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
  height: 50px;
}

.close-alert {
  font-size: 50px;
  cursor: pointer;
}
</style>