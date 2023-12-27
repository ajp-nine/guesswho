<template>
  <div>
    <main>
      <h1>
        Hvem er
        <span class="blur" :class="{ unblur: exists }">det</span>
        ?
      </h1>
      <template v-if="showPlayers">
        <div class="row">
          <div class="players-container">
            <ul>
              <li v-for="p in team1" :key="p">{{ p }}</li>
            </ul>
          </div>
          <div class="versus">vs</div>
          <div class="players-container">
            <ul>
              <li v-for="p in team2" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
        <div class="button-container">
          <router-link :to="{ name: 'Game' }">
            <button class="button" type="button">Start Quiz</button>
          </router-link>
        </div>
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useKeyboard } from '@/composables/keyboard'
import { ref } from 'vue'

const players: string[] = ['Rip', 'Rap', 'Rup', 'Anders And'].sort(() => Math.random() - 0.5)
const team1: string[] = []
const team2: string[] = []

const exists = ref(false)
const showPlayers = ref(false)

team1.push(...players.slice(0, players.length / 2))
team2.push(...players.slice(players.length / 2))

const keyboard = useKeyboard()

keyboard.onKeyWithCallback(' ', async () => {
  showPlayers.value = true
  exists.value = true
})
</script>

<style scoped>
h1 {
  font-size: 6em;
  font-weight: 500;
  color: silver;
  width: 100%;
  text-align: center;
}

h1 > span {
  font-weight: 700;
}

.blur {
  filter: blur(8px);
}

main {
  max-width: 1200px;
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  color: white;
}

.players-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.5em;
  color: white;
}

.row {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
}

li {
  font-size: 1em;
}

.versus {
  display: flex;
  justify-content: center;
  width: 100px;
  font-size: 2em;
  font-weight: 700;
  color: silver;
}

ul {
  width: 100px;
  list-style: none;
  padding-left: 0;
}

.button {
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  display: inline-block;
  font-size: 1.5em;
}

.button:hover {
  cursor: pointer;
}

.button-container {
  height: 80px;
  margin-top: 40px;
}

.unblur {
  animation: unblur 5s forwards;
}

@keyframes unblur {
  0% {
    filter: blur(8px);
  }
  100% {
    filter: blur(0px);
  }
}
</style>
