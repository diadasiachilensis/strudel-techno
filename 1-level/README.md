### 📂 RESUMEN TÉCNICO: NIVEL 1

#### 1\. El Motor Rítmico (The Groove)

El Techno no es aleatorio; es una rejilla matemática perfecta.

  * **Concepto:** **Four-on-the-floor** (Cuatro en el suelo).
  * **Definición:** Es el patrón rítmico donde el bombo golpea en cada tiempo fuerte del compás (1, 2, 3, 4). Es lo que da la sensación de "motor" o "tren".
  * **El Contratiempo (Off-beat):** Es el espacio *entre* los golpes (el "y"). Aquí es donde vive la energía. Si el bombo es la tierra, el contratiempo es el aire.
  * **Sintaxis en Código:**
      * `s("bd*4")` → Genera el Four-on-the-floor.
      * `~` (Tilde) → Representa el **Silencio** o espacio vacío necesario para crear el contratiempo.
      * `stack(...)` → La función de **Concurrencia**. Permite que el bombo y el hi-hat suenen simultáneamente en "hilos" separados.

#### 2\. Espectro de Frecuencias (Pitch & Octaves)

Entendimos que la música es vertical (agudos vs. graves).

  * **El Low-End (Subs):** La zona de frecuencias graves (20Hz - 100Hz) que hace vibrar el pecho.
  * **La Regla de la Octava:**
      * **C1 - C2 (Octavas Bajas):** Zona del Bajo y Sub-bajo. Aquí vive la potencia.
      * **C4 - C5 (Octavas Medias/Altas):** Zona de Melodía y "Leads". Aquí vive la emoción.
  * **Sintaxis en Código:**
      * `note("c2")` → Define la altura de la nota. El número `2` es crítico para el género.

#### 3\. Diseño Sonoro (Timbre & Synthesis)

No basta con tocar la nota; hay que esculpir el sonido.

  * **Forma de Onda (Waveform):** La "materia prima" del sonido.
      * **Sawtooth (Diente de Sierra):** La onda reina del Techno. Agresiva, rica en armónicos y cortante.
  * **Procesamiento Sustractivo (Filtering):** El arte de quitar para mejorar.
      * **LPF (Low Pass Filter):** Filtro de Paso Bajo. La herramienta más importante del DJ.
      * **Cutoff Frequency (Frecuencia de Corte):** El número dentro del paréntesis `.lpf(500)`.
          * Valor Bajo (ej. 200) = Sonido opaco, oscuro, "bajo el agua".
          * Valor Alto (ej. 5000) = Sonido brillante, abierto, "en tu cara".

-----

### 📝 GLOSARIO DE TÉRMINOS (Para memorizar)

| Término | Significado en el Club | En Código Strudel |
| :--- | :--- | :--- |
| **Kick / Bombo** | El golpe grave principal. El corazón del track. | `s("bd")` |
| **Hi-hat / Platillo** | El sonido agudo metálico (`tss`). Marca el ritmo. | `s("hh")` |
| **BPM** | *Beats Per Minute*. La velocidad (Techno = 130-140). | `setcps(130/60/4)` |
| **Loop** | Un ciclo que se repite infinitamente. | (Todo el código es un loop) |
| **Build-up** | Subida de tensión antes de que explote el tema. | Aumentar el valor de `.lpf()` |

-----

### 💾 CÓDIGO MAESTRO DEL NIVEL 1

Este bloque resume todo lo aprendido. Si entiendes cada línea de esto, estás listo para avanzar.

```javascript
// CONFIGURACIÓN GLOBAL
setcps(130/60/4) // 130 BPM (Velocidad Estándar de Techno)

stack(
  // HILO 1: RITMO (Four-on-the-floor)
  s("bd*4"),      // El Bombo golpeando 4 veces (Tierra)
  
  // HILO 2: CONTRATIEMPO (Off-beat)
  s("~ hh ~ hh"), // El silencio (~) es clave para el ritmo (Aire)

  // HILO 3: LÍNEA DE BAJO (Low-End)
  note("c2")      // Octava 2 = Frecuencias Graves
    .s("sawtooth") // Timbre agresivo (Sierra)
    .chop(4)       // Articulación rítmica
    .lpf(500)      // LPF cerrado = Oscuridad/Profundidad
    .gain(0.9)     // Ganancia de salida
)
```