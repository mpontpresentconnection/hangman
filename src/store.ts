import { atom } from 'nanostores'

export const passwordStore = atom<string>('')
export const mistakesStore = atom<number>(0)
export const lettersStore = atom<[]>([])
export const successesStore = atom<[number]>([1])
