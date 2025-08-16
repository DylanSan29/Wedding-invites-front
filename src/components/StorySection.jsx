export default function StorySection() {
  const storyImages = [
    {
      src: "/desert-embrace.png",
      alt: "Mauret and Carlos embracing",
    },
    {
      src: "/desert-kiss.png",
      alt: "Mauret and Carlos kissing at sunset",
    },
    {
      src: "/desert-dance.png",
      alt: "Mauret and Carlos dancing in canyon",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Story Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-amber-900 leading-tight font" >
            QUEREMOS QUE FORMES PARTE
            <br />
            <span className="text-amber-800">DE NUESTRA HISTORIA</span>
          </h2>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {storyImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
