// NIVEL 3: LA METRALLETA (Rolling Bass)
setcps(130/60/4)

stack(
  // 1. LA BASE
  s("bd*4"),
  s("~ hh ~ hh"),

  // 2. TU LÍNEA DE BAJO
  note("c2 [c2 c2 c2 c2] c2 c2") 
    .s("sawtooth")
    .lpf(1000)      // Filtro un poco abierto para oír el ataque
    .lpq(8)         // Resonancia para que "muerda"
    .gain(0.8)
    .cut(1)         // IMPORTANTE: Hace que las notas cortas no se pisen entre sí
)