# Contribuir

## Requisitos

- Node.js 22 o posterior para validaciones y pruebas.
- Un servidor HTTP estático para abrir la aplicación localmente.

## Flujo recomendado

1. Crea una rama breve y descriptiva.
2. Realiza cambios pequeños y relacionados.
3. Ejecuta `npm run check`.
4. Comprueba manualmente modo claro, oscuro, móvil y navegación por teclado.
5. Usa mensajes de commit descriptivos y no incluyas datos locales.

`npm run check` verifica la sintaxis de los módulos de producción, valida el catálogo
y sus archivos locales, y ejecuta las pruebas de lógica. No publiques directamente
si alguna de estas comprobaciones falla.

Las novedades se mantienen en `data/updates.js`. Usa fechas ISO completas con zona horaria para que el aviso de 24 horas sea determinista.

## Añadir tests

Guarda cada banco en la carpeta de su oposición, apartado y autor. Regístralo después
en `data/<id-de-oposicion>-resources.js`; `data/resources.js` solo agrega esos
registros. La validación automática debe completarse sin errores antes de publicar.

Si el test dispone de una ficha teórica, sus justificaciones deben seguir
`data/explanations/README.md`. Si las genera o amplía un asistente, debe seguir también
`data/explanations/PROMPT.md`. Las soluciones no se modifican desde una explicación:
las diferencias con la teoría se documentan mediante la nota de revisión prevista
por el esquema. Ejecuta `npm run audit:explanations` antes de incorporar el recurso.

No incluyas información personal, credenciales, resultados de usuarios ni material cuya distribución no esté autorizada.
