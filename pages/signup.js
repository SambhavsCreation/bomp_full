import { useState } from 'react'
import Link from 'next/link'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Pretend sign up')
  }

  return (
    <div className="min-h-screen font-inter flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">Create CSM Lab Account</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition">Sign up</button>
        <p className="text-center text-sm mt-4">Have an account? <Link href="/login" className="text-blue-400 hover:underline">Login</Link></p>
      </form>
    </div>
  )
}
