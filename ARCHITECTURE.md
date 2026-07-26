# Arquitectura de OPOSAKETAK

OPOSAKETAK es una aplicación estática con módulos ES, sin framework, backend ni fase de compilación. Esta restricción es deliberada: permite publicarla directamente en GitHub Pages y mantener los datos bajo control de versiones.

## Capas

- `data/`: fuentes estáticas. Los tests y materiales se agrupan por oposición, tema y autor.
- `models/`: reglas de negocio, acceso al catálogo y validación de datos.
- `views/`: funciones puras de representación que generan el HTML de cada pantalla.
- `controllers/`: navegación y coordinación de eventos del navegador.
- `utils/`: operaciones puras reutilizables, sin acceso al DOM.

`AppController` coordina rutas y transiciones entre pantallas. Los comportamientos con ciclo de vida propio, como la revisión y los controles del test, se mantienen en controladores específicos para evitar listeners huérfanos.

Los paneles laterales de configuración y novedades comparten `SidePanelController`, que centraliza el bloqueo del fondo, la restauración del foco, el cierre con Escape y la navegación cíclica por teclado. El contenido de las novedades reside en `data/updates.js` y se representa desde una vista específica.

## Estado

El intento activo vive exclusivamente en memoria mediante `TestSession`. Al abandonar o recargar la aplicación se descartan respuestas y resultados. Solo las preferencias del panel se conservan en `localStorage`; no se utiliza `sessionStorage`, IndexedDB ni cookies.

## Datos

`data/oppositions.js` define la identidad estable, los metadatos y las portadas de
cada oposición. Cada proceso selectivo mantiene su registro en
`data/<id>-resources.js`; `data/resources.js` se limita a agregarlos.
`resource-factory.js` resuelve la clasificación común desde el catálogo, por lo que
los recursos no determinan sus rutas a partir de textos visibles.

Antes de iniciar la aplicación, `opposition-validator.js` y
`resource-validator.js` verifican:

- identificadores únicos;
- pertenencia de cada recurso a una oposición conocida y coherente;
- clasificación y autoría obligatorias;
- preguntas y opciones con texto;
- opciones sin identificadores duplicados;
- existencia de la respuesta correcta.

El mismo control puede ejecutarse con `npm run validate:data` y forma parte de la integración continua.

Las novedades tienen un esquema independiente y se validan con `update-validator.js`;
la verificación conjunta cubre oposiciones, recursos, preguntas y novedades antes de
arrancar o publicar.

## Navegación

Las rutas usan fragmentos (`#/...`) para ser compatibles con GitHub Pages sin reglas
de redirección. El primer segmento de catálogo utiliza el `id` estable de la oposición;
los alias de `legacyIds` mantienen compatibles los enlaces históricos. Los resultados
solo son accesibles mientras el intento finalizado permanezca en memoria.

## Criterios de evolución

1. Mantener las reglas de negocio fuera de las vistas.
2. Escapar cualquier texto procedente de los bancos de preguntas.
3. Añadir validaciones y pruebas al ampliar el esquema de datos.
4. Evitar dependencias cuando la plataforma web resuelva la necesidad de forma clara.
5. Conservar navegación por teclado, foco visible y movimiento reducido.
