import { ref } from 'vue'
const MAX_POINT = 5
const currentPoint = ref(MAX_POINT)

export function usePoint() {
  function decreasePoint() {
    if (currentPoint.value > 0) {
      currentPoint.value--
    }
  }

  function resetPoint() {
    currentPoint.value = MAX_POINT
  }

  return {
    currentPoint,
    decreasePoint,
    resetPoint
  }
}
