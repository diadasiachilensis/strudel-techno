// NIVEL 3: RITMO INDUSTRIAL
setcps(130/60/4)

stack(
  s("bd*4"),
  s("~ hh ~ hh"),

  // MIRA ESTA LÍNEA CON ATENCIÓN
  note("c2 [c2 c2 c2 c2] c2 c2") 
    .s("sawtooth")
    .lpf(1500)   
    .gain(0.8)
)