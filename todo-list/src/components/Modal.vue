<template >
  <div ref="modal" v-show="show" class="modal">

    <div class="modal-content">
      <div class="modal-header">
        <slot name="header" />
      </div>
      <div class="modal-body">
        <slot name="content" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const modal = ref(null)

const props = defineProps({
  show: {
    default: false,
  }
})

function clickListener(e) {
  if(e.target === modal.value) {
    emit('close')
  }
}

function closeOnEscapeListener (e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('click', clickListener);
  window.addEventListener('keydown', closeOnEscapeListener);
})

onBeforeUnmount(() => {
  window.removeEventListener('click', clickListener);
  window.removeEventListener('keydown', closeOnEscapeListener);
})

const emit = defineEmits(['close']);
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

.modal-header {
  padding: 2px 16px;
  background-color: rgb(83, 83, 93);
  color: white;
}

.modal-body {
  padding: 2px 16px;
  background-color: var(--background-color);
}

.modal-footer {
  padding: 2px 16px;
  background-color: rgb(83, 83, 93);
  color: white;
}
</style>