// NIVEL 2: TECHNO CON MOVIMIENTO
setcps(130/60/4)

stack(
  // Ritmo (Igual que antes)
  s("bd*4"),
  s("~ hh ~ hh"),

  // BAJO CON SECUENCIA
  // Strudel dividirá el tiempo en 4 partes iguales para estas notas
 note("c2 eb2")
    .s("sawtooth")
    .lpf(600)      // Filtro medio para que se entienda la melodía
    .lpq(5)        // Un poco de resonancia para darle carácter
    .gain(0.9)
)