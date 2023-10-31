import { atom } from 'nanostores'

export const passwordStore = atom('' as string)
export const mistakesStore = atom(0 as number)
export const lettersStore = atom([] as string[])
