import { atom } from 'nanostores'

export const password = atom<string>('')
export const mistakes = atom<number>(0)
export const letters = atom<[]>([])
