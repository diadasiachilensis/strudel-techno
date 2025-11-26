### 📂 RESUMEN TÉCNICO: NIVEL 3

#### 1\. Subdivisión Temporal (Time Division)

Es la capacidad de alterar la velocidad de reproducción dentro de un ciclo fijo sin cambiar el BPM global.

  * **La Herramienta:** Los Corchetes **`[ ]`**.
  * **La Lógica:** Todo lo que entra en un corchete debe ocurrir en el espacio de *un solo paso*.
      * `note("a b")` = Pasos de negras (1/4). Velocidad normal.
      * `note("a [b b b b]")` = El paso 2 se divide en 4 semicorcheas (1/16). Velocidad 4x.
  * **Aplicación en Techno:** Se usa para llenar el espectro de frecuencia y dar sensación de "prisa" o "adrenalina".

#### 2\. Articulación Dinámica (Transient Shaping)

Cuando aumentamos la velocidad (notas rápidas), las colas de sonido (release) de la nota anterior chocan con el ataque de la siguiente, creando "barro" (mud).

  * **El Problema:** Solapamiento de frecuencias graves.
  * **La Solución:** **`.cut(n)`**.
  * **Funcionamiento:** Convierte el instrumento en **Monofónico** dentro del grupo `n`. Una nota nueva "mata" instantáneamente a la anterior. Esto crea el efecto **Staccato** (notas cortas y percusivas) esencial para el Techno rápido.

#### 3\. Patrones Rítmicos Avanzados

No todas las notas rápidas son iguales.

  * **The Machine Gun (La Metralleta):** `[x x x x]`. Flujo continuo de semicorcheas. Genera tensión constante.
  * **The Gallop (El Galope):** `[~ x x x]`. Silencio en el tiempo fuerte + 3 notas rápidas. Genera "Groove" y empuje.

-----

### 📝 GLOSARIO DE TÉRMINOS (Diccionario Industrial)

| Término | Significado en el Estudio | En Código Strudel |
| :--- | :--- | :--- |
| **Rolling Bass** | Línea de bajo continua y repetitiva que corre en semicorcheas (1/16). Es el motor del Techno moderno. | `note("[c2 c2 c2 c2]")` |
| **Transient** | El "ataque" inicial de un sonido. El primer milisegundo que golpea. | Se enfatiza usando `.cut(1)` |
| **Staccato** | Articulación musical donde las notas duran muy poco y están separadas por silencios imperceptibles. | `.cut(1)` o `.legato(0.5)` |
| **16th Notes** | "Semicorcheas". La unidad de tiempo estándar del Techno. Hay 16 en un compás. | `[x x x x]` dentro de un tiempo. |
| **Monophonic** | Un sintetizador que solo puede tocar una nota a la vez (como la voz humana o la TB-303). | `.cut(1)` |

-----

### 💾 CÓDIGO MAESTRO DEL NIVEL 3

Este código combina la **Subdivisión** (velocidad) con la **Articulación** (limpieza). Es un "Rolling Bass" profesional.

```javascript
// PROYECTO NIVEL 3: ROLLING TECHNO (La Máquina)
setcps(135/60/4) // 135 BPM (Velocidad de ataque)

stack(
  // CAPA 1: EL METRÓNOMO
  s("bd*4"),      // Bombo negras
  s("~ hh ~ hh"), // Hats contratiempo

  // CAPA 2: EL ROLLING BASS (Motor de Subdivisión)
  // Mezclamos notas normales con ráfagas rápidas
  note("c2 [c2 c2 c2 c2] c2 [~ c2 c2 c2]") 
    .s("sawtooth")  // Diente de sierra
    .lpf(1000)      // Filtro medio
    .lpq(8)         // Resonancia agresiva
    .cut(1)         // <--- LA CLAVE: Corta las colas para limpiar el sonido
    .gain(0.8)
)
```
