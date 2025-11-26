// PROYECTO NIVEL 1: TECHNO BÁSICO
setcps(130/60/4) // Velocidad estándar

stack(
  // 1. EL MOTOR (Ritmo)
  s("bd*4"),         // Bombo en cada tiempo (Tierra)
  s("~ hh ~ hh"),    // Hi-hat en contratiempo (Aire)

  // 2. & 3. NOTA + MÁQUINA (Bajo filtrado)
  note("c2")         // Nota grave (Sótano)
    .s("sawtooth")   // Instrumento agresivo
    .chop(4)         // Cortado rítmicamente (igual que el bombo)
    .lpf(500)        // FILTRO: Solo frecuencias bajas (Oscuridad)
    .gain(0.8)       // Volumen controlado
)
//.lpf(2000) FILTRO: Se "abrió" y se volvió más brillante y agresivo.