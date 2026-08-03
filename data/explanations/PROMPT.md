# Prompt para crear explicaciones de tests

Utiliza este prompt cuando haya que crear o ampliar las `explanations` de uno o varios tests que dispongan de una ficha de teoría en el repositorio.

## Encargo

Crea las explicaciones de los tests indicados a continuación:

- Oposición: `[indicar oposición]`
- Tema o bloque: `[indicar tema o bloque]`
- Teoría: `[ruta o id del recurso teórico]`
- Tests: `[rutas o ids de los tests]`

## Instrucciones obligatorias para el asistente

Trabaja exclusivamente con el contenido existente en el repositorio. Antes de escribir una explicación:

1. Lee por completo esta instrucción.
2. Lee `data/explanations/README.md`; es la guía editorial canónica.
3. Lee `data/explanations/explanation-schema.js`; es el contrato técnico obligatorio.
4. Lee íntegramente la ficha de teoría y cada test incluido en el encargo.
5. Revisa cómo se registran la teoría, los tests y sus explicaciones en los recursos de la oposición correspondiente.

No modifiques bajo ningún concepto:

- el enunciado de una pregunta;
- sus opciones o sus identificadores;
- `respuestaCorrecta` ni ninguna clave de soluciones;
- el identificador, título o contenido del test;
- el contenido de la ficha teórica.

Si detectas un error o una contradicción, no lo corrijas de forma silenciosa. Conserva la solución registrada y aplica el protocolo de discrepancias definido en `data/explanations/README.md`.

## Análisis previo

Antes de redactar, determina para cada pregunta:

- qué regla, concepto, dato, artículo o bloque permite resolverla;
- si la teoría sustenta la respuesta de forma `directa` o solo aporta un marco `contextual`;
- por qué falla específicamente cada alternativa no registrada como correcta;
- si existe una contradicción verificable entre la teoría y la solución almacenada.

Usa únicamente referencias que existan realmente en la ficha teórica. No atribuyas a una norma, artículo o apartado información que no figure en el recurso disponible y no completes lagunas recurriendo a conocimiento supuesto.

## Redacción de cada pregunta

La explicación debe seguir el modelo breve, pedagógico, técnico y verificable de `data/explanations/README.md`:

- `justificacion`: expón primero la regla útil y después aplícala a la respuesta registrada. Normalmente bastan una o dos frases.
- `descartes`: explica el fallo concreto de cada alternativa restante —competencia, concepto, ámbito, plazo, mayoría, efecto, excepción o dato— sin repetir mecánicamente la justificación.
- `referencia`: genérala mediante el ayudante apropiado de `explanation-schema.js`, normalmente `articleReference` o `blockReference`.
- `notaRevision`: inclúyela solo ante una discrepancia comprobada y formula con claridad qué indica la teoría y qué solución conserva el test.

Evita frases genéricas, circulares o despectivas. No escribas que una opción es incorrecta únicamente porque no coincide con la correcta. No repitas el mismo párrafo en la justificación y en los descartes, ni produzcas explicaciones en serie que solo sustituyan el texto de la opción.

Cuando la referencia sea `contextual`, indícalo también en la explicación: la persona debe entender que la ficha sitúa la materia, pero no demuestra por sí sola la solución registrada.

## Implementación

1. Conserva la organización de `data/explanations/<oposicion>/<tema>/` y los nombres estables ya utilizados por el proyecto.
2. Crea un conjunto por test con `defineExplanationSet` y la versión de esquema vigente; no construyas manualmente una variante del contrato.
3. Incluye una explicación para todas las preguntas y un descarte para todas las opciones que no sean la respuesta registrada.
4. Registra los nuevos conjuntos en el recurso o índice correspondiente sin alterar el orden funcional de los tests.
5. Si usas una factoría para trabajo repetitivo, considera su resultado un borrador: revisa semánticamente cada pregunta antes de darla por terminada.

## Verificación obligatoria

Ejecuta, en este orden:

```sh
npm run audit:explanations
npm run check
```

No des la tarea por finalizada si falla alguna comprobación. Además de los validadores automáticos, realiza una revisión manual para confirmar que cada referencia respalda lo escrito y que los descartes son específicos.

## Informe de entrega

Al terminar, comunica de forma concisa:

- tests y preguntas cubiertos;
- número de referencias directas y contextuales;
- discrepancias documentadas, sin modificar sus soluciones;
- dudas o asociaciones que no puedan justificarse con la teoría disponible;
- resultado de `audit:explanations` y de `check`.

Si falta teoría suficiente para explicar una pregunta con rigor, no inventes contenido: deja constancia de la limitación y solicita criterio antes de incorporar una explicación no verificable.
