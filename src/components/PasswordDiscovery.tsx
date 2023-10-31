import { useStore } from '@nanostores/react'
import { passwordStore, lettersStore } from '../store'

export default function PasswordDiscovery() {
  const password = useStore(passwordStore).split('')
  const letters = useStore(lettersStore)

  return (
    <div className="flex justify-center p-12">
      {password.map((letter, position) => (
        <button key={position} disabled className="flex">
          <kbd className="px-2 py-1.5 mx-0.5 text-xl rounded-md bg-gray-400 text-gray-100 border border-gray-200">
            {letters.includes(letter) ? letter : '—'}
          </kbd>
        </button>
      ))}
    </div>
  )
}
