<script setup lang="ts">
import { usePoint } from '@/composables/point'
import { useScoreStore } from '@/stores/score'
import { defineAsyncComponent } from 'vue'
const Icon = defineAsyncComponent(() => import(`/src/assets/images/heart.svg`))
const score = useScoreStore()
const point = usePoint()
</script>

<template>
  <header>
    <div class="container">
      <div class="score">{{ score.scoreTeam1 }}</div>
      <div class="icon-container">
        <div v-for="index in point.currentPoint.value" :key="index">
          <Icon class="icon" />
        </div>
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
  margin-left: 100px;
  margin-right: 100px;
}

.score {
  color: silver;
  font-weight: 700;
  font-size: 3em;
}

.icon-container {
  display: flex;
  align-items: center;
}

.icon {
  padding: 5px;
  height: 2.4rem;
  width: 2.4rem;
  color: silver;
}
</style>
