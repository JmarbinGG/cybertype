import styles from '../styles/Stats.module.scss'
import { getSpeed } from '../lib/utils'
import { State } from './types'

type StatsProps = {
  timeTaken: number
  errors: number
  charsTyped: number
}

export function Stats(props: StatsProps) {
  const { timeTaken, errors, charsTyped } = props
  const wpmSpeed = getSpeed(state.lastHundoCharsTyped, state.lastHundoCharsTypedTime * 5)
  const errorRate = charsTyped === 0 ? 0 : (errors * 100) / state.lastHundoCharsTyped
  const accuracy = charsTyped === 0 ? 0 : Math.max(Math.round(100 - errorRate), 0)

  return (
    <div className={styles.statsContainer}>
      <Stat unit="wpm" value={wpmSpeed} />
      <Stat unit="%" value={accuracy} />
    </div>
  )
}

type StatProps = {
  unit: string
  value: string | number
  className?: string
}

function Stat(props: StatProps) {
  const { unit, value, className } = props
  return (
    <div className={`${styles.stat} ${className || ''}`}>
      <div className={styles.value}>
        <span> {value} </span>
        <span className={styles.unit}>{unit}</span>
      </div>
    </div>
  )
}
