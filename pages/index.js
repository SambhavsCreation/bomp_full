import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">
        Welcome to CSM Lab
      </h1>
      <p className="mb-4 text-center max-w-xl animate-slide-up" style={{animationDelay:'0.1s'}}>
        We accelerate industrial experimentation with state-of-the-art Bayesian
        Optimisation, letting you automate discovery like never before.
      </p>
      <div className="space-x-4 animate-slide-up" style={{animationDelay:'0.2s'}}>
        <Link href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">Login</Link>
        <Link href="/signup" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded shadow hover:bg-indigo-50 transition">Sign up</Link>
      </div>
    </div>
  )
}
