# Counter — Contador animado con scroll reveal

Componente que anima un número desde `0` hasta un valor final cuando entra en el
viewport, con una curva de desaceleración (*ease-out*) y soporte de decimales,
prefijo y sufijo.

## Estructura de archivos

| Archivo                     | Responsabilidad                                            |
| --------------------------- | ---------------------------------------------------------- |
| `useCountUp.js`             | Hook con la lógica de animación e intersección             |
| `Counter.jsx`               | Componente visual que consume el hook y formatea el número |
| `SatisfiedClientsBadge.jsx` | Ejemplo de uso dentro de una tarjeta de UI                 |

---

## `useCountUp(end, options)`

Hook que anima un contador desde `0` hasta `end`, disparándose únicamente
cuando el elemento observado entra en el viewport.

### Parámetros

| Parámetro          | Tipo     | Por defecto | Descripción                                |
| ------------------ | -------- | ----------- | ------------------------------------------ |
| `end`              | `number` | —           | Valor final al que debe llegar el contador |
| `options.duration` | `number` | `2000`      | Duración de la animación en milisegundos   |
| `options.decimals` | `number` | `0`         | Número de decimales a mostrar              |

### Retorno

| Propiedad | Tipo        | Descripción                                           |
| --------- | ----------- | ----------------------------------------------------- |
| `ref`     | `RefObject` | Debe asignarse al elemento DOM que se quiere observar |
| `value`   | `number`    | Valor actual del contador durante la animación        |

### Funcionamiento interno

1. **Detección de visibilidad.** Se usa un `IntersectionObserver` con
   `threshold: 0.4`, es decir, se considera "visible" cuando al menos el 40 %
   del elemento está dentro del viewport.

2. **Disparo único.** Un `ref` llamado `started` actúa como candado: al ser un
   `ref` (no `state`), modificarlo no provoca un re-render y su valor
   persiste entre renders. Esto evita que la animación se reinicie si el
   usuario hace scroll hacia arriba y hacia abajo repetidamente.

3. **Bucle de animación.** Se usa `requestAnimationFrame` en lugar de
   `setInterval`, ya que sincroniza cada actualización con el refresco de
   pantalla del navegador (normalmente 60 fps), resultando en una animación
   más fluida y eficiente.

4. **Curva de easing.** En cada frame se calcula:
   ```js
   const progress = Math.min(Math.max((now - start) / duration, 0), 1); // 0 → 1
   const eased = 1 - (1 - progress) ** 2; // ease-out quadratic
   ```
   Esta fórmula hace que el contador arranque rápido y frene progresivamente
   hacia el final, en vez de avanzar a velocidad constante (lineal).

5. **Redondeo a N decimales.** Ver sección dedicada más abajo.

6. **Limpieza (cleanup).** Al desmontar el componente o cambiar `end`,
   `duration` o `decimals`:
   - `cancelled = true` evita que un frame ya encolado ejecute `setValue`
     sobre un componente desmontado.
   - `cancelAnimationFrame(rafId)` cancela el frame pendiente.
   - `observer.disconnect()` deja de observar el nodo.

### Redondeo a N decimales

JavaScript no representa los decimales de forma exacta en coma flotante
(`0.1 + 0.2 === 0.30000000000000004`). Para evitar arrastrar errores de
precisión durante la animación, se usa el patrón **multiplicar → redondear →
dividir**:

```js
const factor = 10 ** decimals;
Math.round(eased * end * factor) / factor;
```

**Ejemplo con `decimals = 2`:**

| Paso | Operación                   | Resultado |
| ---- | --------------------------- | --------- |
| 1    | `factor = 10 ** 2`          | `100`     |
| 2    | Valor crudo de la animación | `47.2367` |
| 3    | Multiplicar por `factor`    | `4723.67` |
| 4    | `Math.round(4723.67)`       | `4724`    |
| 5    | Dividir por `factor`        | `47.24`   |

Este mismo patrón funciona para cualquier cantidad de decimales:
- `decimals = 0` → `factor = 1` → redondeo normal al entero más cercano.
- `decimals = 1` → `factor = 10` → redondeo a un decimal.

Se guarda como **número** (no como string) para poder seguir usándolo en
comparaciones internas (`progress < 1`) y para que sea `Counter` quien decida
después cómo formatearlo.

---

## `Counter`

Componente visual que consume `useCountUp` y da formato al número.

### Props

| Prop        | Tipo     | Por defecto | Descripción                                 |
| ----------- | -------- | ----------- | ------------------------------------------- |
| `end`       | `number` | —           | Valor final del contador (requerido)        |
| `prefix`    | `string` | `""`        | Texto antes del número (ej. `"$"`)          |
| `suffix`    | `string` | `""`        | Texto después del número (ej. `"+"`, `"%"`) |
| `decimals`  | `number` | `0`         | Decimales a mostrar                         |
| `className` | `string` | `""`        | Clases CSS para el `<span>` contenedor      |

> **Nota:** `duration` no se expone como prop en `Counter`; siempre usa el
> valor por defecto del hook (2000 ms). Si se necesita configurar, habría que
> añadirlo explícitamente.

### Formato de salida

```js
{decimals ? value.toFixed(decimals) : value.toLocaleString()}
```

- **Con decimales** (`decimals` distinto de `0`): usa `toFixed(decimals)`,
  que garantiza siempre esa cantidad exacta de dígitos (ej. `"12.50"`).
- **Sin decimales** (`decimals = 0`, valor *falsy*): usa `toLocaleString()`,
  que añade separadores de miles según el idioma del navegador
  (ej. `"2.500"` en vez de `"2500"`).

### Ejemplo de uso

```jsx
<Counter end={2500} suffix="+" />
// → 2.500+

<Counter end={98.5} decimals={1} suffix="%" />
// → 98.5%
```

---

## `SatisfiedClientsBadge` (ejemplo de integración)

Tarjeta de UI que envuelve `Counter` dentro de un badge con icono y estilos
Tailwind (glow, blur, hover). No añade lógica adicional al contador: solo
demuestra su uso con `end={2500}` y `suffix="+"`.

---

## Resumen de diseño

| Decisión técnica                                    | Motivo                                                            |
| --------------------------------------------------- | ----------------------------------------------------------------- |
| `IntersectionObserver` en vez de listener de scroll | Más eficiente, nativo del navegador                               |
| `ref` (`started`) como candado                      | Evita re-renders y reinicios de la animación                      |
| `requestAnimationFrame` en vez de `setInterval`     | Sincronizado con el refresco de pantalla                          |
| Easing `ease-out quadratic`                         | Sensación de "frenado" natural al final del conteo                |
| `factor` + `Math.round`                             | Redondeo preciso, evitando errores de coma flotante               |
| Cleanup en `useEffect`                              | Previene fugas de memoria y updates sobre componentes desmontados |