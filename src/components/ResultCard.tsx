export default function ResultCard ({text, className}) {
  return (
    <div className={`${className} px-2 py-1 lg:px-4 lg:py-2 rounded bg-background/80 text-accent-bg text-sm lg:text-base`}>
      {text}
    </div>
  )
}