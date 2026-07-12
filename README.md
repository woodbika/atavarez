# OPOSAKETAK

Aplicación web estática para organizar oposiciones, temas y recursos de estudio. Funciona íntegramente en el navegador, sin backend, base de datos, dependencias externas ni proceso de compilación. La interfaz está en español y se adapta a móvil, tableta y escritorio.

## Funcionalidades

- Navegación jerárquica por tarjetas: oposiciones, temas y recursos.
- Recursos tipados para admitir tests y otros materiales progresivamente.
- Test completo generado automáticamente por tema, con orden natural o aleatorio.
- Búsqueda de recursos integrada en la cabecera de cada tema.
- Una pregunta por pantalla, navegación anterior/siguiente y cambio de respuestas.
- Modo concentración para centrar la pregunta y sus controles sobre un fondo suavemente difuminado.
- Ajuste temporal del tamaño del texto de las preguntas y respuestas.
- Corrección opcional en vivo, con respuesta inmediata y bloqueo de cada pregunta evaluada.
- Indicador de progreso y confirmación al finalizar con preguntas pendientes.
- Resultados con aciertos, errores, preguntas sin responder, porcentaje y puntuación sobre 10 (+1 por acierto, −⅓ por error y 0 en blanco).
- Revisión compacta con enunciado, respuesta propia, solución, estados y filtros.
- Sin historial ni progreso guardado: al salir de un test se descarta el intento.
- Rutas con hash compatibles con GitHub Pages y recarga directa.
- Navegación por teclado, foco visible, HTML semántico y soporte de `prefers-reduced-motion`.
- Modo claro por defecto y modo oscuro opcional, sin persistencia entre recargas.

## Estructura

```text
.
├── index.html                 # Documento principal
├── app.js                     # Punto de entrada
├── assets/images/             # Imágenes y atribución de procedencia
├── controllers/              # Enrutado e interacción
├── data/
│   ├── resources.js          # Registro central de recursos
│   ├── tests.js              # Export derivado de tests
│   └── tests/                # Bancos de preguntas agrupados por tema
│       └── tema-01/          # Recursos del tema 01
│           └── tests-ivot/   # Tests cuyo autor es IVOT
├── models/                   # Portal y lógica del intento activo
├── scripts/                  # Validaciones ejecutables desde Node.js
├── views/                    # Oposiciones, temas, recursos y cuestionarios
├── styles/main.css           # Sistema visual responsive
├── utils/                    # Utilidades compartidas
├── tests/                    # Pruebas de lógica y validación de datos
├── ARCHITECTURE.md           # Decisiones y límites técnicos
└── CONTRIBUTING.md           # Flujo recomendado de colaboración
```

La separación sigue un MVC pequeño: los modelos consultan, validan y calculan; las vistas generan la representación; y los controladores coordinan rutas y comportamientos del navegador. Consulta [ARCHITECTURE.md](ARCHITECTURE.md) para conocer los límites entre capas.

## Ejecutar en local

Los módulos ES necesitan servirse por HTTP. Desde la raíz del proyecto:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000/`. También sirve cualquier servidor HTTP estático equivalente.

Para ejecutar todas las verificaciones automatizadas (requiere Node.js 20 o posterior):

```bash
npm run check
```

Este comando valida todos los bancos de preguntas y ejecuta las pruebas. También pueden lanzarse por separado con `npm run validate:data` y `npm test`. No es necesario ejecutar `npm install`: el proyecto no tiene dependencias.

Cada `push` a `main` y cada pull request ejecutan estas comprobaciones mediante GitHub Actions.

## Añadir un recurso

1. Añade el archivo `.js` dentro de la carpeta de su tema y autor, por ejemplo `data/tests/tema-01/tests-ivot/`, con el mismo esquema de datos y sus exports nombrado y predeterminado.
2. Abre `data/resources.js`.
3. Para un test, impórtalo y añádelo al array `resources` mediante `testResource(testImportado)`.
4. Para otro material, añade una entrada con `id`, `type`, `title`, `classification`, `href` y, opcionalmente, `actionLabel`.

Ese registro es el único punto que hay que modificar. La oposición y el tema se derivan de `classification`, por lo que la navegación se actualiza automáticamente.

Antes de arrancar, la aplicación comprueba identificadores, clasificación, autoría, preguntas, opciones y soluciones. Si el catálogo no es válido, muestra un error controlado en lugar de iniciar parcialmente.

Cada test puede declarar un autor estructurado mediante `autor: { id, nombre }`. El registro expone este dato como `author`, lo que permitirá diferenciar y filtrar posteriormente tests oficiales y tests de otros autores sin depender del nombre de la carpeta.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, elige **Deploy from a branch**.
3. Selecciona la rama que contiene la aplicación y la carpeta **/(root)**.
4. Guarda y espera a que GitHub muestre la URL publicada.

Todos los recursos usan rutas relativas y la navegación usa hashes, por lo que funciona tanto en el dominio raíz como en una subruta del tipo `https://usuario.github.io/repositorio/`.

## Decisiones técnicas

- JavaScript moderno con ES Modules, sin framework ni compilación.
- Registro estático explícito: GitHub Pages no puede descubrir archivos del repositorio en tiempo de ejecución.
- Hash routing para no depender de redirecciones del servidor.
- Validación preventiva del catálogo tanto en el navegador como en integración continua.
- No se guarda progreso, historial ni resultados. El resultado calculado solo está disponible en las pantallas de resultado y revisión del intento recién finalizado.
- Los datos de preguntas, opciones y soluciones se importan directamente y no se modifican.

## Licencia

Este proyecto se distribuye bajo GNU GPL v3. Consulta [LICENSE](LICENSE).
