// NIVEL 3: EL GALOPE (Psy/Techno Style)
setcps(135/60/4) // Un poco más rápido para que se note el efecto

stack(
  // LA BASE
  s("bd*4"),
  s("~ hh ~ hh"),

  // EL BAJO GALOPANTE
  // Fíjate: Hacemos nota normal, luego galope, nota normal, luego galope.
  note("c2 [~ c2 c2 c2] c2 [~ c2 c2 c2]") 
    .s("sawtooth")
    .lpf(1200)      
    .cut(1)         // IMPRESCINDIBLE: Corta el sonido para que sea percusivo
    .gain(0.85)
)