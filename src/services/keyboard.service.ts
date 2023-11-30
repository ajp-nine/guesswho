import { useScoreStore } from '@/stores/score'
import { onKeyStroke } from '@vueuse/core'

class KeyboardService {
  public init(reduceCb: any) {
    const score = useScoreStore()
    // Score
    onKeyStroke(
      'q',
      (e) => {
        score.increaseTeam1()
        e.preventDefault()
      },
      { dedupe: true }
    )
    onKeyStroke(
      'a',
      (e) => {
        score.decreaseTeam1()
        e.preventDefault()
      },
      { dedupe: true }
    )
    onKeyStroke(
      'e',
      (e) => {
        score.increaseTeam2()
        e.preventDefault()
      },
      { dedupe: true }
    )
    onKeyStroke(
      'd',
      (e) => {
        score.decreaseTeam2()
        e.preventDefault()
      },
      { dedupe: true }
    )

    // Reduce

    onKeyStroke('f', (e) => {
      reduceCb()
      e.preventDefault()
    })
  }
}

export const keyboardService = new KeyboardService()
