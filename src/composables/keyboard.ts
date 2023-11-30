import { useScoreStore } from '@/stores/score'
import { onKeyStroke } from '@vueuse/core'
import { useBlur } from './blur'
import { useImage } from './image'
import { usePoint } from './point'

export function useKeyboard() {
  const score = useScoreStore()
  const blur = useBlur()
  const point = usePoint()
  const image = useImage()

  function onKey(key: string, callback: () => void, dedupe = true) {
    onKeyStroke(
      key,
      (e) => {
        callback()
        e.preventDefault()
      },
      { dedupe }
    )
  }

  // Points
  onKey('q', score.increaseTeam1)
  onKey('a', score.decreaseTeam1)
  onKey('e', score.increaseTeam2)
  onKey('d', score.decreaseTeam2)

  // Reduce
  onKey(
    ' ',
    () => {
      blur.decreaseBlur()

      if (
        image.images.value[image.imagePos.value].pointBreakpoints.some(
          (bp) => blur.currentValue.value === bp
        )
      ) {
        point.decreasePoint()
      }
    },
    false
  )
  onKey('Enter', () => {
    blur.reveal()
  })

  // Image navigation
  onKey('ArrowRight', () => {
    image.nextImage()
    point.resetPoint()
    blur.resetBlur()
  })
  onKey('ArrowLeft', () => {
    image.previousImage()
    point.resetPoint()
    blur.resetBlur()
  })
}
