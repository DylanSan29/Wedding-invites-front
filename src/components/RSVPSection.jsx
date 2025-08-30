"use client"

import { useState } from "react"

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    restrictions: "",
    drinks: [],
    message: "",
    attending: "",
  })

  const handleDrinkChange = (drink) => {
    setFormData((prev) => ({
      ...prev,
      drinks: prev.drinks.includes(drink) ? prev.drinks.filter((d) => d !== drink) : [...prev.drinks, drink],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("RSVP submitted:", formData)
    // Here you would typically send the data to your backend
    alert("¡Gracias por tu confirmación!")
  }

  const addToAppleWallet = () => {
    // Apple Wallet functionality would be implemented here
    alert("Funcionalidad de Apple Wallet próximamente")
  }

  const addToCalendar = () => {
    // Calendar functionality would be implemented here
    const event = {
      title: "Boda Mauret & Carlos",
      start: "2025-11-08T16:30:00",
      end: "2025-11-08T23:00:00",
      description: "Ceremonia y celebración de boda",
    }

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, "").replace(".000", "")}Z/${event.end.replace(/[-:]/g, "").replace(".000", "")}Z&details=${encodeURIComponent(event.description)}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-6xl md:text-7xl font-serif text-amber-100 text-center mb-12">RSVP</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="NOMBRE(S) Y APELLIDO(S)"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-transparent border-b-2 border-amber-600 text-amber-100 placeholder-amber-300 py-3 px-0 focus:outline-none focus:border-amber-400 text-lg"
              required
            />
          </div>

          {/* Restrictions Field */}
          <div>
            <input
              type="text"
              placeholder="RESTRICCIONES O ALERGIAS"
              value={formData.restrictions}
              onChange={(e) => setFormData((prev) => ({ ...prev, restrictions: e.target.value }))}
              className="w-full bg-transparent border-b-2 border-amber-600 text-amber-100 placeholder-amber-300 py-3 px-0 focus:outline-none focus:border-amber-400 text-lg"
            />
          </div>

          {/* Drink Preferences */}
          <div>
            <p className="text-amber-200 text-lg mb-4">PREFERENCIAS DE BEBIDA(S)</p>
            <div className="flex flex-wrap gap-6">
              {["Tequila", "Vodka", "Ron", "Mezcal", "Whisky"].map((drink) => (
                <label key={drink} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.drinks.includes(drink)}
                    onChange={() => handleDrinkChange(drink)}
                    className="w-4 h-4 text-amber-600 bg-transparent border-2 border-amber-600 rounded focus:ring-amber-500 focus:ring-2"
                  />
                  <span className="text-amber-200 text-lg">{drink}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="MENSAJE PARA LOS NOVIOS"
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              rows={4}
              className="w-full bg-transparent border-b-2 border-amber-600 text-amber-100 placeholder-amber-300 py-3 px-0 focus:outline-none focus:border-amber-400 text-lg resize-none"
            />
          </div>

          {/* Attendance */}
          <div>
            <p className="text-amber-200 text-lg mb-4">ASISTIRÉ:</p>
            <div className="flex gap-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="si"
                  checked={formData.attending === "si"}
                  onChange={(e) => setFormData((prev) => ({ ...prev, attending: e.target.value }))}
                  className="w-4 h-4 text-amber-600 bg-transparent border-2 border-amber-600 focus:ring-amber-500 focus:ring-2"
                  required
                />
                <span className="text-amber-200 text-lg">SÍ</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={(e) => setFormData((prev) => ({ ...prev, attending: e.target.value }))}
                  className="w-4 h-4 text-amber-600 bg-transparent border-2 border-amber-600 focus:ring-amber-500 focus:ring-2"
                />
                <span className="text-amber-200 text-lg">NO</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-12 py-4 rounded-full text-lg font-medium transition-colors duration-300 min-w-[200px]"
            >
              ENVIAR
            </button>
          </div>
        </form>

        {/* Calendar Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={addToAppleWallet}
            className="flex items-center justify-center gap-3 border-2 border-amber-600 text-amber-200 px-6 py-3 rounded-full hover:bg-amber-600 hover:text-red-900 transition-colors duration-300"
          >
            <div className="w-6 h-6 bg-amber-200 rounded-sm flex items-center justify-center">
              <div className="w-4 h-3 bg-red-900 rounded-sm"></div>
            </div>
            Agregar a Apple Wallet
          </button>
          <button
            onClick={addToCalendar}
            className="border-2 border-amber-600 text-amber-200 px-6 py-3 rounded-full hover:bg-amber-600 hover:text-red-900 transition-colors duration-300"
          >
            Agregar al calendario
          </button>
        </div>

        {/* Age Restriction Icon */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-amber-600 rounded-full">
            <span className="text-amber-200 text-xl font-bold">18+</span>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-amber-200 text-lg">*Evento solo para mayores de 18 años.</p>
          <p className="text-amber-300 text-base italic max-w-lg mx-auto leading-relaxed">
            Debido al horario del evento y a las características del lugar, le recordamos que esta es una celebración no
            apta para niños.
          </p>
        </div>
      </div>
    </section>
  )
}
