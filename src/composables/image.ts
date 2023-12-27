import { ref } from 'vue'

const DEFAULT_BREAKPOINTS = [40, 30, 20, 10, 5]
const images = ref([
  {
    filename: 'trial.jpeg',
    pointBreakpoints: DEFAULT_BREAKPOINTS,
    name: 'Bubber'
  }
])
const imagePos = ref(0)

export function useImage() {
  function nextImage() {
    if (imagePos.value < images.value.length - 1) {
      imagePos.value++
    }
  }

  function previousImage() {
    if (imagePos.value > 0) {
      imagePos.value--
    }
  }

  return {
    nextImage,
    previousImage,
    imagePos,

    images
  }
}
