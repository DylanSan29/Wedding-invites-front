export default function Header2() {
  const navigationItems = [
    "INICIO",
    "ITINERARIO",
    "DRESS CODE",
    "RECOMENDACIONES",
    "MESA DE REGALOS",
    "RSVP",
    "GALERÍA",
  ]

  return (
    
    <header className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('/assets/images/editt.png')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container (Es el contenedor Flexbox que centra verticalmente) */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        
        {/* Main Title (Se mantiene centrado en el medio) */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-6xl font-light tracking-[0.2em] text-white md:text-7xl lg:text-8xl">MAURET</h1>
          <div className="my-4 flex items-center justify-center">
            <div className="h-px w-8 bg-white/60"></div>
            <div className="mx-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/60">
              <div className="h-6 w-6 rounded-full border border-white/60"></div>
            </div>
            <div className="h-px w-8 bg-white/60"></div>
          </div>
          <h1 className="font-serif text-6xl font-light tracking-[0.2em] text-white md:text-7xl lg:text-8xl">CARLOS</h1>
        </div>

        {/* Navigation Menu 
            Añadido: order-last (para que vaya al final, debajo del título)
        */}
        <nav 
            className="w-full max-w-4xl order-last" // <-- CLASE AÑADIDA
            style={{backgroundColor: 'transparent'}}
        >
          {/* Modificado: 
            - grid grid-cols-2 gap-4 text-center (en móvil para apilar en dos columnas)
            - md:flex md:flex-wrap md:justify-center (en escritorio para volver a la línea horizontal)
          */}
          <ul className="grid grid-cols-2 gap-4 text-center text-sm font-light tracking-wider text-white/90 md:flex md:flex-wrap md:items-center md:justify-center md:gap-8 lg:gap-12">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors duration-300 hover:text-white hover:underline hover:decoration-1 hover:underline-offset-4"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}