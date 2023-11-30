import { ref } from 'vue'
const MAX_BLUR = 50
const currentValue = ref(MAX_BLUR)

export function useBlur() {
  function decreaseBlur() {
    currentValue.value -= 1
  }

  function reveal() {
    currentValue.value = 0
  }

  function resetBlur() {
    currentValue.value = MAX_BLUR
  }

  return {
    currentValue,
    decreaseBlur,
    reveal,
    resetBlur
  }
}
