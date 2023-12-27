<script setup lang="ts">
import { useBlur } from '@/composables/blur'
import { usePoint } from '@/composables/point'
import { useScoreStore } from '@/stores/score'
import { defineAsyncComponent, watch } from 'vue'
const Icon = defineAsyncComponent(() => import(`/src/assets/images/heart.svg`))
const score = useScoreStore()
const point = usePoint()
const blur = useBlur()

watch(point.currentPoint, (value) => {
  if (value === 0) {
    blur.reveal()
  }
})
</script>

<template>
  <header>
    <div class="container">
      <div class="score">{{ score.scoreTeam1 }}</div>
      <div class="icon-container">
        <TransitionGroup>
          <div v-for="index in point.currentPoint.value" :key="index">
            <Icon class="icon" />
          </div>
        </TransitionGroup>
      </div>
      <div class="score">{{ score.scoreTeam2 }}</div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.score {
  color: silver;
  font-weight: 700;
  font-size: 3em;
  min-width: 100px;
  text-align: center;
}

.icon-container {
  display: flex;
  align-items: center;
  width: 200px;
}

.icon {
  padding: 5px;
  height: 2.4rem;
  width: 2.4rem;
  color: silver;
}

.v-leave-active {
  transition: opacity 0.5s;
}

.v-leave-to {
  opacity: 0;
}
</style>
