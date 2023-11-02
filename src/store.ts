import {
  atom,
  computed,
  type WritableAtom,
  type ReadableAtom,
} from 'nanostores'

const LIMIT_MISTAKES: number = 8

export const passwordStore: WritableAtom<string> = atom('' as string)
export const mistakesStore: WritableAtom<number> = atom(0 as number)
export const lettersStore: WritableAtom<string[]> = atom([] as string[])
export const getIsGameStarted: ReadableAtom<boolean> = computed(
  passwordStore,
  (password: string): boolean => password.length > 0,
)
export const getIsGameOver: ReadableAtom<boolean> = computed(
  mistakesStore,
  (mistakes: number): boolean => mistakes >= LIMIT_MISTAKES,
)
export const getIsGameWon: ReadableAtom<boolean> = computed(
  [passwordStore, lettersStore],
  (password: string, letters: string[]): boolean =>
    password
      .split('')
      .every((letter: string): boolean => letters.includes(letter)),
)
export const getIsGameFinished: ReadableAtom<boolean> = computed(
  [getIsGameOver, getIsGameWon],
  (isGameOver: boolean, isGameWon: boolean): boolean => isGameOver || isGameWon,
)
