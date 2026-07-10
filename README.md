# OPOSAKETAK

Aplicación web estática para organizar oposiciones, temas y recursos de estudio. Funciona íntegramente en el navegador, sin backend, base de datos, dependencias externas ni proceso de compilación. La interfaz está en español y se adapta a móvil, tableta y escritorio.

## Funcionalidades

- Navegación jerárquica por tarjetas: oposiciones, temas y recursos.
- Recursos tipados para admitir tests y otros materiales progresivamente.
- Test completo generado automáticamente por tema, con orden natural o aleatorio.
- Búsqueda de recursos integrada en la cabecera de cada tema.
- Una pregunta por pantalla, navegación anterior/siguiente y cambio de respuestas.
- Indicador de progreso y confirmación al finalizar con preguntas pendientes.
- Resultados con aciertos, errores, preguntas sin responder, porcentaje y puntuación sobre 10 (+1 por acierto, −⅓ por error y 0 en blanco).
- Revisión completa con respuesta propia, solución y estado textual de cada pregunta.
- Estado temporal en memoria: al recargar se descartan progreso y resultados.
- Rutas con hash compatibles con GitHub Pages y recarga directa.
- Navegación por teclado, foco visible, HTML semántico y soporte de `prefers-reduced-motion`.

## Estructura

```text
.
├── index.html                 # Documento principal
├── app.js                     # Punto de entrada
├── controllers/              # Enrutado e interacción
├── data/
│   ├── resources.js          # Registro central de recursos
│   ├── tests.js              # Export derivado de tests
│   └── tests/                # Bancos de preguntas agrupados por tema
│       └── tema-01/          # Recursos del tema 01
│           └── tests-ivot/   # Tests cuyo autor es IVOT
├── models/                   # Portal y estado temporal de sesión
├── views/                    # Oposiciones, temas, recursos y cuestionarios
├── styles/main.css           # Sistema visual responsive
├── utils/                    # Utilidades compartidas
└── tests/                    # Pruebas de lógica y validación de datos
```

La separación sigue un MVC pequeño: los modelos consultan y calculan, las vistas generan la representación y el controlador coordina las rutas y los eventos.

## Ejecutar en local

Los módulos ES necesitan servirse por HTTP. Desde la raíz del proyecto:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000/`. También sirve cualquier servidor HTTP estático equivalente.

Para ejecutar las verificaciones automatizadas (requiere Node.js 18 o posterior):

```bash
npm test
```

No es necesario ejecutar `npm install`: el proyecto no tiene dependencias.

## Añadir un recurso

1. Añade el archivo `.js` dentro de la carpeta de su tema y autor, por ejemplo `data/tests/tema-01/tests-ivot/`, con el mismo esquema de datos y sus exports nombrado y predeterminado.
2. Abre `data/resources.js`.
3. Para un test, impórtalo y añádelo al array `resources` mediante `testResource(testImportado)`.
4. Para otro material, añade una entrada con `id`, `type`, `title`, `classification`, `href` y, opcionalmente, `actionLabel`.

Ese registro es el único punto que hay que modificar. La oposición y el tema se derivan de `classification`, por lo que la navegación se actualiza automáticamente.

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
- El progreso y los resultados se mantienen solo en memoria. La aplicación elimina la antigua clave `opotest:v1` y no escribe datos en `localStorage`.
- Los datos de preguntas, opciones y soluciones se importan directamente y no se modifican.

## Licencia

Este proyecto se distribuye bajo GNU GPL v3. Consulta [LICENSE](LICENSE).
