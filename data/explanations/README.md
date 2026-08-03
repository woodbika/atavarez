# Plantilla canónica de explicaciones

Esta carpeta contiene las explicaciones pedagógicas que aparecen en la revisión de los tests. Este documento es la referencia obligatoria para crear o modificar cualquier conjunto de `explanations` asociado a una ficha de teoría.

Cuando el trabajo se encargue a un asistente, se utilizará además `PROMPT.md`. El prompt dirige el proceso y este documento, junto con `explanation-schema.js`, define los criterios editoriales y el contrato técnico que debe respetar.

## Objetivo

Cada explicación debe permitir que la persona entienda la regla, compruebe su origen en la teoría y distinga con rapidez por qué encaja una opción y no las demás. No debe limitarse a repetir la respuesta correcta ni a reformular todas las opciones con una frase genérica.

## Contrato de datos

Se utilizará `defineExplanationSet` de `explanation-schema.js`. La versión vigente es la **2**.

```js
import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "id-estable-del-test",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El artículo 140 garantiza la autonomía municipal. Por eso la garantía procede de la Constitución.",
      descartes: {
        a: "Los estatutos pueden regular aspectos territoriales, pero no son el origen de esta garantía constitucional.",
        c: "El Estado no sustituye al precepto que reconoce expresamente la autonomía municipal.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "id-estable-de-la-teoria",
  references: {
    1: articleReference(140),
  },
});
```

Cada pregunta debe contener:

- `preguntaId`: el identificador original de la pregunta.
- `referencia`: la genera la plantilla a partir de un artículo o bloque real de la ficha teórica.
- `justificacion`: explica la regla relevante y la conecta con la respuesta registrada.
- `descartes`: contiene una explicación específica para cada opción no registrada como correcta.
- `notaRevision`, solo cuando exista una discrepancia comprobada entre la solución del test y la teoría.

## Modelo de redacción

La justificación tendrá normalmente dos movimientos, en una o dos frases breves:

1. **Regla o dato verificable.** Indicar qué establece la teoría y, cuando ayude, el artículo o apartado.
2. **Aplicación.** Explicar por qué esa regla conduce a la respuesta registrada.

Cada descarte debe aportar el matiz concreto que falla: sujeto competente, plazo, mayoría, ámbito, excepción, concepto o efecto jurídico. Si una alternativa solo es incompleta, se dirá que es incompleta; no se afirmará que contradice la teoría.

El tono será técnico, sereno y directo. Se prefieren expresiones como `El artículo distingue...`, `Esta opción confunde...` o `El plazo aplicable es...`. Se evitarán fórmulas vacías o repetitivas como `es obvio`, `simplemente`, `altera la formulación aplicable`, `el dato decisivo` o `la respuesta correcta es correcta porque...`.

## Referencias y alcance

- `articleReference(140)` enlaza la explicación con uno o varios artículos existentes.
- `blockReference("estructura", "Estructura de la Constitución")` se usa cuando la fuente no está articulada.
- El alcance predeterminado es `directa`: la referencia debe sostener la conclusión.
- El alcance `contextual` solo se utiliza cuando la ficha ayuda a situar la materia pero no contiene literalmente la solución. En ese caso, la explicación debe reconocer ese límite y no presentar la teoría como prueba directa.

Nunca se inventará una referencia ni se deducirá una regla ausente de la ficha teórica.

## Discrepancias con la solución

Las soluciones del test no se modifican desde `explanations`. Si la teoría contradice una solución, se mantiene la respuesta registrada y se añade:

```js
notaRevision: {
  tipo: "discrepancia-teorica",
  titulo: "La solución del test no coincide con la teoría",
  texto:
    "La teoría establece [...]. Por ello apunta a la opción C, aunque se mantiene la opción A registrada en el test.",
}
```

La justificación y los descartes deben ser transparentes con esa discrepancia: nunca presentarán como respaldada por la teoría una solución que la propia nota cuestiona.

## Proceso obligatorio

1. Leer la ficha teórica completa y delimitar qué bloque o artículo responde cada pregunta.
2. Mantener intactos el enunciado, las opciones y `respuestaCorrecta`.
3. Redactar primero la regla y después los descartes específicos.
4. Comprobar que no se repite la misma explicación dentro del test salvo que las preguntas sean realmente equivalentes.
5. Marcar las contradicciones verificadas mediante `notaRevision`.
6. Ejecutar `npm run audit:explanations` y después `npm run check`.

## Criterio de aceptación

Una explicación está terminada cuando es completa, breve, comprensible sin perder precisión, trazable hasta una referencia real y coherente con la solución o con su nota de discrepancia. La generación automática solo puede producir un borrador: siempre requiere revisión de contenido antes de incorporarse.
