### 📂 RESUMEN TÉCNICO: NIVEL 2

#### 1\. La Lógica del Tiempo (The Cycle / Pizza Theory) 🍕

Este es el concepto más difícil de entender para los músicos tradicionales, pero el más potente para los programadores.

  * **El Ciclo (The Cycle):** En Strudel, el tiempo no es una línea infinita, es un bucle cerrado (un círculo).
  * **Densidad de Eventos:** Tú no decides cuánto dura una nota en segundos. Tú decides **cuántas notas caben en el ciclo**.
      * Pocas notas (ej. `"c2 eb2"`) = Cada nota tiene mucho espacio = **Lento**.
      * Muchas notas (ej. `"c2 eb2 g2 c2"`) = Tienen que compartir el mismo espacio = **Rápido**.
  * **Conclusión:** La velocidad de la melodía depende de la cantidad de notas que escribas dentro de las comillas.

#### 2\. Secuenciación (Sequencing)

Es el arte de ordenar eventos en el tiempo para crear una narrativa musical.

  * **Sintaxis:** `note("a b c d")`. Strudel lee de izquierda a derecha y divide el tiempo equitativamente.
  * **Intervalos Techno:** Para que suene a Techno, no usamos notas al azar. Usamos intervalos de la **Escala Menor**.
      * **Tónica (1):** La base (`c2`).
      * **Tercera Menor (b3):** La nota "triste" o seria (`eb2`).
      * **Quinta (5):** La nota de poder (`g2`).

#### 3\. Esculpido Avanzado (Resonance / Q)

En el Nivel 1 usamos el Filtro (`.lpf`) para oscurecer. En el Nivel 2 introdujimos su mejor amigo: la **Resonancia**.

  * **Concepto:** El factor **Q**.
  * **Función:** `.lpq(n)`.
  * **Efecto:** Enfatiza la frecuencia donde corta el filtro.
      * **Q Bajo (1-5):** Sonido natural.
      * **Q Alto (10-20):** Sonido "ácido", silbante o líquido (típico de la TB-303).

-----

### 📝 GLOSARIO DE TÉRMINOS (Nivel 2)

| Término | Significado Técnico | Analogía |
| :--- | :--- | :--- |
| **Secuencia** | Una lista ordenada de notas o eventos que se reproducen en bucle. | La lista de reproducción. |
| **Ciclo (Cycle)** | La unidad de tiempo base. Todo lo que escribes ocurre dentro de 1 ciclo. | La Pizza completa. |
| **Resonancia (Q)** | El énfasis o pico de volumen en el punto de corte del filtro. | El "silbido" del viento al pasar por una rendija. |
| **Riff** | Una frase musical corta y pegadiza que se repite. | El "gancho" de la canción. |

-----

### 💾 CÓDIGO MAESTRO DEL NIVEL 2

Este código representa tu graduación del segundo nivel. Combina Ritmo (Nivel 1) con Secuencia y Resonancia (Nivel 2).

```javascript
// PROYECTO NIVEL 2: SECUENCIA TECHNO
setcps(130/60/4)

stack(
  // LA BASE (Nivel 1)
  s("bd*4"),
  s("~ hh ~ hh"),

  // LA SECUENCIA (Nivel 2)
  note("c2 eb2 g2 c2") // 4 notas = El ciclo se divide en 4
    .s("sawtooth")
    .lpf(800)      // Filtro cerrado (Oscuro)
    .lpq(10)       // Resonancia ALTA (Carácter ácido/líquido)
    .gain(0.9)
)
```

-----

### 🚀 Puente al Nivel 3

Ya dominas el ritmo constante (1, 2, 3, 4) y las secuencias lineales.
Pero el Techno real es **polirrítmico** y rápido.

Para el Nivel 3, vamos a romper la simetría.
¿Recuerdas la pregunta del examen anterior sobre cómo meter 4 notas en un solo tiempo?
La respuesta era **`[ ]` (Los Corchetes)**.

**¿Estás listo para entrar en el Nivel 3: Subdivisión y Velocidad Variable (La "Metralleta")?**