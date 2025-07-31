export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-tr from-blue-700 via-orange-400 to-yellow-400 animate-gradient-xy"
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-400 rounded-full opacity-30 animate-bounce-slow blur-3xl"></div>
      <div className="absolute -bottom-16 -right-10 w-96 h-96 bg-yellow-400 rounded-full opacity-30 animate-pulse-fast blur-3xl"></div>

      <div className="relative z-10 w-full max-w-xl p-14 bg-white/90 rounded-3xl shadow-lg backdrop-blur-md">
        {children}
      </div>
    </div>
  )
}
