export default function RecommendationsSection() {
  const hotels = [
    {
      name: "JW Marriott",
      image: "assets/images/jw-marriott-hotel-building-black-and-white.png",
    },
    {
      name: "Holiday Inn",
      image: "/assets/images/holiday-inn-hotel-building-black-and-white.png",
    },
    {
      name: "Hotel HNF",
      image: "/assets/images/modern-hotel-building-black-and-white.png",
    },
  ]

  const makeupArtists = [
    {
      name: "CAROLA CALDERÓN",
      handle: "@CAROLACALDERON.MAKEUP",
    },
    {
      name: "VALERIA MED",
      handle: "@VALERIA.VALMED",
    },
    {
      name: "ANA PAULA CELIS",
      handle: "@ANAPAULACELIS.MAKEUP",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-amber-900 to-amber-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hotels Section */}
        <div className="text-center mb-16">
          <h2 className="text-red-400 font-serif text-lg mb-2 italic">Recomendaciones de</h2>
          <h3 className="text-amber-100 font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">HOTELES</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    className="w-full h-48 object-cover grayscale"
                  />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 border-2 border-amber-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-white font-serif text-xl mb-4">{hotel.name}</h4>
                  <button className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded font-medium transition-colors">
                    MÁS INFO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Section */}
        <div className="text-center mb-16">
          <h2 className="text-red-400 font-serif text-lg mb-2 italic">Pronóstico del</h2>
          <h3 className="text-amber-100 font-serif text-4xl md:text-5xl font-light tracking-wide mb-8">CLIMA</h3>

          <div className="flex flex-col items-center mb-6">
            <div className="w-4 h-4 bg-orange-400 rounded-full mb-4"></div>
            <p className="text-amber-200 text-lg mb-2">Hoy estaremos a</p>
            <p className="text-amber-100 text-xl font-light">28°C cielo claro</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-amber-200 text-sm leading-relaxed">
              Nota importante: Aunque nuestro corazón estará cálido, las noches en noviembre suelen refrescar.
              <br />
              Les recomendamos traer un abrigo o un chal, tendremos un lugar designado para que puedan
              <br />
              dejarlo cómodamente.
            </p>
          </div>
        </div>

        {/* Makeup Artists Section */}
        <div className="text-center">
          <h2 className="text-red-400 font-serif text-lg mb-2 italic">Ponte guapa</h2>
          <h3 className="text-amber-100 font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">MAKEUP</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {makeupArtists.map((artist, index) => (
              <div key={index} className="text-center">
                <h4 className="text-amber-100 font-serif text-xl mb-2">{artist.name}</h4>
                <p className="text-amber-300 text-sm mb-6">{artist.handle}</p>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-900 px-8 py-2 rounded-full font-medium transition-colors">
                  CONTACTAR
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
