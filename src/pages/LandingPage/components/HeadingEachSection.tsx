const HeadingEachSection = ({title, subtitle}: {title: string, subtitle?: string}) => {
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight plus-jakarta-sans-extrabold text-center text-gray-900">
      {title}
      </h2>
      {subtitle && <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-lg">
      {subtitle}
      </p>}
    </div>
  )
}

export default HeadingEachSection;