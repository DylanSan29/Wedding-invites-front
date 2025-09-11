"use client"

import { useState } from "react"

export default function GiftRegistrySection() {
  const [copiedCard, setCopiedCard] = useState(null)

  const copyToClipboard = async (text, cardName) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCard(cardName)
      setTimeout(() => setCopiedCard(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="bg-gradient-to-b from-amber-900 to-amber-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-amber-100 mb-8 text-balance">GRACIAS POR ACOMPAÑARNOS</h2>

        {/* Subtitle */}
        <p className="text-amber-200 text-lg md:text-xl max-w-4xl mx-auto mb-6 leading-relaxed">
          Su presencia es el mejor regalo que podemos recibir y de verdad nos llena el corazón que estén con nosotros.
        </p>

        <p className="text-amber-200 text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Pero si además quieren hacernos un detallito extra... Les contamos que hemos decidido no hacer mesa de
          regalos. En lugar de eso, nos encantaría que nos ayudaran a cumplir uno de nuestros más grandes sueños: una
          luna de miel inolvidable.
        </p>

        {/* Bank Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mauret's Card */}
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl p-8 border border-amber-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 text-red-400 font-script text-2xl transform rotate-12">Novia</div>

            <h3 className="text-red-400 text-xl font-serif mb-6">MAURET GUERRERO LOBATO</h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-amber-300 text-sm mb-1">Tarjeta</p>
                <p className="text-amber-100 font-mono text-lg">4152 3139 5037 5712</p>
              </div>
              <div>
                <p className="text-amber-300 text-sm mb-1">Concepto</p>
                <p className="text-amber-100">Donación Boda</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-amber-300 text-sm mb-1">CLABE</p>
              <p className="text-amber-100 font-mono">012 320 01528289398 9</p>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => copyToClipboard("4152313950375712", "mauret")}
                className="bg-amber-700 hover:bg-amber-600 text-amber-100 px-6 py-2 rounded-full border border-amber-600 transition-colors"
              >
                {copiedCard === "mauret" ? "COPIADO" : "COPIAR NÚMERO"}
              </button>

              <div className="text-amber-400 text-xs font-bold border border-amber-600 px-3 py-1 rounded">BBVA</div>
            </div>
          </div>

          {/* Carlos's Card */}
          <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl p-8 border border-amber-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 text-red-400 font-script text-2xl transform rotate-12">Novio</div>

            <h3 className="text-red-400 text-xl font-serif mb-6">CARLOS CERVANTES LAGUNES</h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-amber-300 text-sm mb-1">Tarjeta</p>
                <p className="text-amber-100 font-mono text-lg">5206 9496 6096 3397</p>
              </div>
              <div>
                <p className="text-amber-300 text-sm mb-1">Concepto</p>
                <p className="text-amber-100">Donación Boda</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-amber-300 text-sm mb-1">CLABE</p>
              <p className="text-amber-100 font-mono">002320701931514590</p>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => copyToClipboard("5206949660963397", "carlos")}
                className="bg-amber-700 hover:bg-amber-600 text-amber-100 px-6 py-2 rounded-full border border-amber-600 transition-colors"
              >
                {copiedCard === "carlos" ? "COPIADO" : "COPIAR NÚMERO"}
              </button>

              <div className="text-amber-400 text-xs font-bold border border-amber-600 px-3 py-1 rounded">BANCO</div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-amber-200 text-lg italic max-w-4xl mx-auto leading-relaxed">
          Lo que pensaban darnos, si lo pueden convertir en un depósito, prometemos usarlo para crear recuerdos
          increíbles, brindar por ustedes desde el otro lado del mundo y vivir aventuras que seguro les contaremos a la
          vuelta.
        </p>
      </div>
    </section>
  )
}
