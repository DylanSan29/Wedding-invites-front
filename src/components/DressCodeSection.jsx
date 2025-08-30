export default function DressCodeSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-100 to-amber-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4 tracking-wide">DRESS CODE</h2>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-red-600 mb-12 font-serif italic">Riguroso Formal</p>

        <div className="mb-12 flex justify-center">
          <img
            src="https://specialguest.mx/wp-content/uploads/2025/04/Rectangle-34-1024x434.png"
            alt="Formal Pomeranian dogs with bow ties"
            className="max-w-full h-auto rounded-lg shadow-lg"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Inspiration Button */}
        <button className="px-8 py-3 border-2 border-amber-800 text-amber-800 font-serif text-lg tracking-wide rounded-full hover:bg-amber-800 hover:text-amber-100 transition-colors duration-300">
          VER INSPIRACIÓN
        </button>
      </div>
    </section>
  )
}
