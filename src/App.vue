<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { useKeyboard } from '@/composables/keyboard'
import { computed } from 'vue'
import { useBlur } from './composables/blur'
import { useImage } from './composables/image'

useKeyboard()
const { images, imagePos } = useImage()
const { currentValue } = useBlur()

const blurStyle = computed(() => {
  return `blur(${currentValue.value}px)`
})

const imageSrc = computed(() => {
  return `images/${images.value[imagePos.value].filename}`
})
</script>

<template>
  <TheHeader />
  <main>
    <div>
      <div>
        <img :src="imageSrc" :style="{ filter: blurStyle }" />
      </div>
    </div>
  </main>
</template>

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
</style>
