"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 84,
    hours: 4,
    minutes: 57,
    seconds: 20,
  })

  useEffect(() => {
    // Set wedding date (you can modify this date)
    const weddingDate = new Date("2024-12-31T18:00:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ]

  return (
    <section className="bg-stone-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Countdown Title */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-900 leading-tight">
            PREPÁRATE PARA CELEBRAR
            <br />
            <span className="text-amber-800">CON NOSOTROS EN</span>
          </h2>
        </div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-amber-900 mb-2">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-light tracking-wider text-amber-800">{unit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
