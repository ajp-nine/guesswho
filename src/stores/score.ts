import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScoreStore = defineStore('score', () => {
  const scoreTeam1 = ref(0)
  const scoreTeam2 = ref(0)
  function increaseTeam1() {
    scoreTeam1.value++
  }
  function decreaseTeam1() {
    scoreTeam1.value--
  }

  function increaseTeam2() {
    scoreTeam2.value++
  }
  function decreaseTeam2() {
    scoreTeam2.value--
  }

  return { scoreTeam1, scoreTeam2, increaseTeam1, decreaseTeam1, increaseTeam2, decreaseTeam2 }
})
