import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen font-inter flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h1 className="text-5xl font-bold mb-8 animate-fade-in">Welcome to CSM Lab</h1>
      <p className="mb-6 text-center max-w-xl animate-slide-up" style={{animationDelay: '0.1s'}}>
        We accelerate industrial experimentation with state-of-the-art Bayesian Optimisation, letting you automate discovery like never before.
      </p>
      <div className="flex space-x-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <Link href="/login" className="inline-block px-6 py-2 bg-blue-600 rounded-full text-white font-semibold shadow hover:bg-blue-700 transition">Login</Link>
        <Link href="/signup" className="inline-block px-6 py-2 bg-white text-blue-600 rounded-full font-semibold shadow hover:bg-gray-100 transition">Sign up</Link>
      </div>
    </div>
  )
}
