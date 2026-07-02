export default function Badge ({text}: {text: string}) {
  return (
    <div className="w-fit px-2 py-1 lg:px-4 lg:py-2 rounded-full bg-primary/50 text-accent-bg text-xs lg:text-sm">
      {text}
    </div>
  )
}