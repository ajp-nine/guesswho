<template>
  <TheHeader />
  <main>
    <div>
      <div class="answer-container">
        <div v-if="currentValue === 0" class="answer">{{ currentImage.name }}</div>
      </div>
      <div>
        <img :src="imageSrc" :style="{ filter: blurStyle }" />
      </div>
    </div>
    <div class="pagination">{{ imagePos + 1 }} / {{ images.length }}</div>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { useBlur } from '@/composables/blur'
import { useImage } from '@/composables/image'
import { useKeyboard } from '@/composables/keyboard'
import { computed } from 'vue'

useKeyboard()
const { images, imagePos } = useImage()
const { currentValue } = useBlur()

const blurStyle = computed(() => {
  return `blur(${currentValue.value}px)`
})

const imageSrc = computed(() => {
  return `images/${currentImage.value.filename}`
})

const currentImage = computed(() => {
  return images.value[imagePos.value]
})
</script>

<style scoped>
main {
  max-width: 1200px;
  width: 100vw;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}

img {
  max-height: 80vh;
}

.answer-container {
  display: flex;
  justify-content: center;
  height: 80px;
}

.answer {
  color: silver;
  font-size: 3rem;
}

.pagination {
  color: white;
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-weight: 700;
  font-size: 2em;
}
</style>
