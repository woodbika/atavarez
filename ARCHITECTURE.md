# Arquitectura de OPOSAKETAK

OPOSAKETAK es una aplicación estática con módulos ES, sin framework, backend ni fase de compilación. Esta restricción es deliberada: permite publicarla directamente en GitHub Pages y mantener los datos bajo control de versiones.

## Capas

- `data/`: fuentes estáticas. Los tests se agrupan por tema y autor.
- `models/`: reglas de negocio, acceso al catálogo y validación de datos.
- `views/`: funciones puras de representación que generan el HTML de cada pantalla.
- `controllers/`: navegación y coordinación de eventos del navegador.
- `utils/`: operaciones puras reutilizables, sin acceso al DOM.

`AppController` coordina rutas y transiciones entre pantallas. Los comportamientos con ciclo de vida propio, como la revisión y los controles del test, se mantienen en controladores específicos para evitar listeners huérfanos.

## Estado

El intento activo vive exclusivamente en memoria mediante `TestSession`. Al abandonar o recargar la aplicación se descartan respuestas y resultados. Solo las preferencias del panel se conservan en `localStorage`; no se utiliza `sessionStorage`, IndexedDB ni cookies.

## Datos

Cada recurso se registra en `data/resources.js`. Antes de iniciar la aplicación, `resource-validator.js` verifica:

- identificadores únicos;
- clasificación y autoría obligatorias;
- preguntas y opciones con texto;
- opciones sin identificadores duplicados;
- existencia de la respuesta correcta.

El mismo control puede ejecutarse con `npm run validate:data` y forma parte de la integración continua.

## Navegación

Las rutas usan fragmentos (`#/...`) para ser compatibles con GitHub Pages sin reglas de redirección. Los resultados solo son accesibles mientras el intento finalizado permanezca en memoria.

## Criterios de evolución

1. Mantener las reglas de negocio fuera de las vistas.
2. Escapar cualquier texto procedente de los bancos de preguntas.
3. Añadir validaciones y pruebas al ampliar el esquema de datos.
4. Evitar dependencias cuando la plataforma web resuelva la necesidad de forma clara.
5. Conservar navegación por teclado, foco visible y movimiento reducido.
