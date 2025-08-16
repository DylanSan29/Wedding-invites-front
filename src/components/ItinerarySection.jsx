export default function ItinerarySection() {
  return (
    <section className="bg-red-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Emblem */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-serif mb-12 tracking-wider">ITINERARIO</h2>

        {/* Vintage Card */}
        <div className="bg-stone-100 rounded-lg p-8 md:p-12 mx-auto max-w-2xl relative">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-stone-400 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-stone-400 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-stone-400 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-stone-400 rounded-br-lg"></div>

          {/* Date */}
          <div className="text-red-900 text-lg md:text-xl font-serif mb-8 tracking-wide">8 DE NOVIEMBRE DEL 2025</div>

          {/* Events */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Ceremonia */}
            <div className="text-center">
              {/* Church illustration */}
              <div className="mb-4 flex justify-center">
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-stone-600">
                  <rect x="20" y="35" width="40" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="35" y="25" width="10" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="15,35 40,15 65,35" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="25" y="45" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="49" y="45" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="30" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-stone-700 mb-2">Ceremonia</h3>
              <p className="text-stone-600 text-lg">4:30 pm</p>
            </div>

            {/* Fiesta */}
            <div className="text-center">
              {/* Reception venue illustration */}
              <div className="mb-4 flex justify-center">
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-stone-600">
                  <rect x="10" y="30" width="60" height="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="15" y="35" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="27" y="35" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="45" y="35" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="57" y="35" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="5,30 40,10 75,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="25" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="55" cy="25" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-stone-700 mb-2">Fiesta</h3>
              <p className="text-stone-600 text-lg">6:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
