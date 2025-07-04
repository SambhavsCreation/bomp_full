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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">Create CSM Lab Account</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Sign up</button>
        <p className="text-center text-sm mt-4">Have an account? <Link href="/login" className="text-indigo-600 hover:underline">Login</Link></p>
      </form>
    </div>
  )
}
