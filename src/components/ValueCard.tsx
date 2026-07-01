export default function ValueCard ({src, title, subtitle}) {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-4 lg:gap-6 bg-primary px-4 pt-4 lg:px-6 lg:pt-6 rounded-xl">
      <div className="space-y-2 lg:space-y-4">
        <h3>{title}</h3>
        <p className="text-xs lg:text-sm">{subtitle}</p>
      </div>
      <div className="h-40 lg:h-50 overflow-hidden">
        <img src={src} alt={title} className="object-cover w-full h-full rounded-t-xl"/>
      </div>
    </div>
  )
}