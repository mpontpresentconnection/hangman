import {
  atom,
  computed,
  action,
  type WritableAtom,
  type ReadableAtom,
} from 'nanostores'
import { generate } from './password.ts'

const LIMIT_MISTAKES: number = 8

export const passwordStore: WritableAtom<string> = atom('' as string)
export const mistakesStore: WritableAtom<number> = atom(0 as number)
export const lettersStore: WritableAtom<string[]> = atom([] as string[])
export const isGameStartedGetter: ReadableAtom<boolean> = computed(
  passwordStore,
  (password: string): boolean => password.length > 0,
)
export const isGameOverGetter: ReadableAtom<boolean> = computed(
  mistakesStore,
  (mistakes: number): boolean => mistakes >= LIMIT_MISTAKES,
)
export const isGameWonGetter: ReadableAtom<boolean> = computed(
  [passwordStore, lettersStore],
  (password: string, letters: string[]): boolean =>
    !!password &&
    password
      .split('')
      .every((letter: string): boolean => letters.includes(letter)),
)
export const isGameFinishedGetter: ReadableAtom<boolean> = computed(
  [isGameOverGetter, isGameWonGetter],
  (isGameOver: boolean, isGameWon: boolean): boolean => isGameOver || isGameWon,
)
export const resetMistakesAction = action(
  mistakesStore,
  'resetMistakesAction',
  (mistakes: WritableAtom<number>) => {
    mistakes.set(0)
  },
)
export const resetPasswordAction = action(
  passwordStore,
  'resetPasswordAction',
  (password: WritableAtom<string>) => {
    password.set(generate())
  },
)
export const resetLettersAction = action(
  lettersStore,
  'resetLettersAction',
  (letters: WritableAtom<string[]>) => {
    letters.set([])
  },
)
