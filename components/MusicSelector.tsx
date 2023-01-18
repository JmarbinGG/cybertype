import { MusicList, musicList } from '../lib/music'
import { Action } from '../lib/types'
import styles from '../styles/SoundSelector.module.scss'
import { DoneIcon } from './icons'

export type Props = {
  handleClose: () => void
  selectedSong: MusicList
  dispatch: React.Dispatch<Action>
}

export function MusicSelector(props: Props) {
  return (
    <div className={styles.options}>
      {musicList.map(musicList => {
        return (
          <div
            key={musicList.id}
            className={styles.option}
            data-active={props.selectedSoundPack === musicList.id}
            onClick={() => {
              props.dispatch({ type: 'setSoundPack', data: musicList.id })
              props.handleClose()
            }}
          >
            {props.selectedSong === musicList.id && (
              <div className={styles.done}> {DoneIcon} </div>
            )}
            <div className={styles.name}> {musicList.name}</div>
            <div className={styles.type}> {musicList.type}</div>
          </div>
        )
      })}
    </div>
  )
}
