import { Howl } from 'howler'

function packPlayer(pack: string, format: string, volume: number, link: string) {
  const song: Howl[] = []
    song[1] = new Howl({ src: link, volume })
  

  return () => {
    song[1].play()
  }
}

export function getSounds() {
  return {
    packs: {
      song1: packPlayer('song1', 'wav', 0.8, 'https://drive.google.com/uc?export=download&id=10kwRyjDu32UxUNZFFfGuU2rtJbExFs-v'),
      song2: packPlayer('song2', 'wav', 0.8, 'https://drive.google.com/uc?export=download&id=10kwRyjDu32UxUNZFFfGuU2rtJbExFs-v'),
      song3: packPlayer('song3', 'wav', 0.8, 'https://drive.google.com/uc?export=download&id=10kwRyjDu32UxUNZFFfGuU2rtJbExFs-v')
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
