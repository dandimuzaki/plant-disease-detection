export default function StepCard ({children, text, subtext}: {children: React.ReactNode, text: string, subtext: string}) {
  return (
    <div className="flex items-start gap-2 lg:gap-4">
      <div className="p-2 rounded-lg bg-primary text-accent-bg text-lg">
        {children}
      </div>
      <div className="text-background">
        <p className="font-medium lg:text-lg">
          {text}
        </p>
        <p className="lg:text-base text-sm">
          {subtext}
        </p>
      </div>
    </div>
  )
}