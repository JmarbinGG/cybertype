import { Howl } from 'howler'

function packPlayer(pack: string, format: string, volume: number) {
  const clicks: Howl[] = []
  for (let i = 0; i < 6; i++) {
    clicks[i] = new Howl({ src: `/sounds/${pack}/click${i + 1}.${format}`, volume })
  }

  return () => {
    const i = Math.round(Math.random() * 5)
    clicks[i].play()
  }
}

export function getSounds() {
  return {
    packs: {
      song1: packPlayer('song1', 'wav', 0.8),
      song2: packPlayer('song2', 'wav', 0.8),
      song3: packPlayer('song3', 'wav', 0.8)
    },
  }
}

type MusicListInfo = {
  name: string
  id: musicList
  type: string
}

export const musicList: MusicListInfo[] = [
  { name: 'song1', id: 'song1' },
  { name: 'song2', id: 'song2' },
  { name: 'song3', id: 'song3' }
]

export type Music = ReturnType<typeof getSounds>

export type MusicList = keyof Sounds['packs']
