import { reactive } from "vue"

function useAlert(message, variant) {
  alert.message = message
  alert.show = true;
  alert.variant = variant
}

const alertProps = {
  message: {
    required: true,
    type: String,
  },
  show: {
    required: true,
    type: Boolean,
  },
}
const alert = reactive({
  show: false,
  message: '',
  variant: 'danger',
})

export {alertProps, useAlert, alert}