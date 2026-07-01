export default function Navbar () {
  return (
    <nav className="hidden lg:fixed z-2 w-full h-12 lg:h-16 lg:grid grid-cols-3 px-12 items-center bg-primary/80">
      <a href="/home" className="text-xl lg:text-3xl font-bold text-accent-bg">Periksa<span className="text-background">Kit</span></a>
      <div className="menu flex gap-4 items-center justify-center">
        <a href="/home">Home</a>
        <a href="/home/#model">Model AI</a>
        <a href="/home/#faq">FAQ</a>
      </div>
      <button className="w-45 flex justify-self-end">
        <a href="/home/#predict" className="w-full lg:w-fit font-medium bg-accent-bg hover:bg-accent-bg/60 text-background rounded-lg px-4 py-2">
          Periksa Tanaman
        </a>
      </button>
    </nav>
  )
}