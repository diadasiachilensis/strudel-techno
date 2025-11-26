stack(
  // 1. El Ritmo (Motor)
  //Ritmo: Bombo en 4 tiempos + Hi-hat en contratiempo.
  s("bd*4"),
  s("~ hh ~ hh"),

  // 2. El Bajo (Melodía Grave)
  //Notas: Usar la octava baja (c2) para el peso.
  note("c2")       // La nota grave (piso 2)
  //Timbre: Usar ondas de sierra (sawtooth) y filtrarlas (lpf) para oscuridad.
    .s("sawtooth") // El instrumento (sierra eléctrica)
    .chop(4)       // Lo cortamos en 4 pedazos para que vaya a ritmo
    .lpf(500)      //las paredes actúan como un Filtro de Paso Bajo (Low Pass Filter - LPF)
)