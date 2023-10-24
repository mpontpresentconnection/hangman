import { useStore } from '@nanostores/react'
import { password } from '../store'

export default function PasswordDiscovery() {
  const letters = useStore(password).split('')
  return (
    <div className="flex justify-center p-12">
      {letters.map((letter, id) => (
        <button key={id} disabled className="flex">
          <kbd className="px-2 py-1.5 mx-0.5 text-xl rounded-md bg-gray-400 text-gray-100 border border-gray-200">
            {letter}
          </kbd>
        </button>
      ))}
    </div>
  )
}
