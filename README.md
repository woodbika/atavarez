# OPOSAKETAK

Aplicación web estática para organizar oposiciones, apartados del temario y recursos de estudio. Funciona íntegramente en el navegador, sin backend, base de datos, dependencias externas ni proceso de compilación. La interfaz está en español y se adapta a móvil, tableta y escritorio.

## Funcionalidades

- Navegación jerárquica por tarjetas: oposiciones, apartados del temario y recursos.
- Recursos teóricos estructurados, con navegación por capítulos y fragmentos relacionados desde los tests.
- Recursos tipados para admitir tests y otros materiales progresivamente.
- Test completo generado automáticamente en los apartados que lo admiten, con orden natural o aleatorio.
- Tests configurables por orden, selección aleatoria o intervalo de preguntas.
- Búsqueda de recursos integrada en la cabecera de cada apartado.
- Una pregunta por pantalla, navegación anterior/siguiente y cambio de respuestas.
- Modo concentración para centrar la pregunta y sus controles sobre un fondo suavemente difuminado.
- Ajuste temporal del tamaño del texto de las preguntas y respuestas.
- Corrección opcional en vivo, con respuesta inmediata y bloqueo de cada pregunta evaluada.
- Cuenta atrás opcional de 40 segundos por pregunta o una duración personalizada, con pausa que bloquea temporalmente el intento.
- Indicador de progreso y confirmación al finalizar con preguntas pendientes.
- Resultados con aciertos, errores, preguntas sin responder, porcentaje y puntuación sobre 10 (+1 por acierto, −⅓ por error y 0 en blanco).
- Revisión compacta con enunciado, respuesta propia, solución, estados y filtros.
- Sin historial ni progreso guardado: al salir de un test se descarta el intento.
- Rutas con hash compatibles con GitHub Pages y recarga directa.
- Navegación por teclado, foco visible, HTML semántico y soporte de `prefers-reduced-motion`.
- Panel de configuración con modos claro y oscuro, tres temas visuales y valores iniciales para los tests, guardados localmente y restablecibles.
- Panel de novedades validado, con aviso temporal durante las primeras 24 horas de cada actualización.

## Estructura

```text
.
├── index.html                 # Documento principal
├── app.js                     # Punto de entrada
├── assets/images/             # Imágenes y atribución de procedencia
├── controllers/              # Enrutado e interacción de cada pantalla
├── data/
│   ├── oppositions.js        # Catálogo de oposiciones e identificadores estables
│   ├── resources.js          # Agregador de los registros de cada oposición
│   ├── resource-factory.js   # Normalización común de tests y teorías
│   ├── *-resources.js        # Registro propio de cada oposición
│   ├── updates.js            # Novedades visibles en la cabecera
│   ├── resources/            # Materiales agrupados por oposición y apartado
│   └── tests/                # Bancos de preguntas agrupados por oposición
│       └── <oposicion>/
│           └── <apartado>/
│               └── tests-<autor>/
├── models/                   # Catálogo, validación e intento activo
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

Para ejecutar todas las verificaciones automatizadas (requiere Node.js 22 o posterior):

```bash
npm run check
```

Este comando comprueba la sintaxis del código de producción, valida los bancos de
preguntas y los archivos locales referenciados, y ejecuta las pruebas. También pueden
lanzarse por separado con `npm run check:source`, `npm run validate:data`,
`npm run validate:assets` y `npm test`. No es necesario ejecutar `npm install`: el
proyecto no tiene dependencias.

Cada `push` a `main` y cada pull request ejecutan estas comprobaciones mediante GitHub Actions.

## Añadir una oposición

1. Declara la oposición en `data/oppositions.js` con un `id` estable, sus datos visibles, sus portadas y, si no usa temas numerados, la colección `sections`.
2. Crea un registro `data/<id>-resources.js`.
3. Usa `createOppositionResourceFactory()` para convertir sus tests y teorías en recursos normalizados.
4. Importa ese registro desde `data/resources.js`.
5. Guarda sus bancos en `data/tests/<id>/<apartado>/` y sus materiales en `data/resources/<id>/<apartado>/`.

El `id` no depende de los textos visibles y usa minúsculas, números y guiones. Los
nombres de la administración, cuerpo, grupo o escala pueden corregirse sin cambiar
las rutas de la aplicación. `legacyIds` permite conservar enlaces publicados antes
de una modificación.

Una oposición puede declararse con `status: "coming-soon"` para mostrar su ficha en
la pantalla inicial sin permitir todavía el acceso. Cuando disponga de recursos debe
cambiarse a `status: "available"` y configurar sus portadas.

## Añadir un recurso

1. Añade el archivo `.js` dentro de la carpeta de su oposición y apartado.
2. Abre el archivo `data/<id>-resources.js` de esa oposición.
3. Para un test, impórtalo y añádelo al array `resources` mediante `testResource(testImportado)`.
4. Para otro material, añade una entrada con `id`, `type`, `title`, `classification`, `href` y, opcionalmente, `actionLabel`.

Los recursos teóricos se guardan en `data/resources/<id>/tema-XX/teoria/`, junto con su fuente original cuando corresponda. Su contenido estructurado se registra con `type: "teoria"` para presentarlo como lectura dentro de la aplicación.

Los archivos existentes que todavía contienen administración, cuerpo, grupo y escala
siguen siendo compatibles. Para un recurso nuevo basta con identificar la oposición
y el tema; la factoría completa la clasificación común:

```js
clasificacion: {
  oposicionId: "gobierno-vasco-administrativo-c1",
  tema: {
    numero: "01",
    titulo: "Título del tema",
  },
}
```

Los identificadores de tests, teorías y otros recursos deben ser únicos en todo el
catálogo, aunque pertenezcan a oposiciones diferentes.

El registro puede especializar cómo se inicia un test sin modificar el controlador
general: `orderModes` y `defaultOrder` definen el orden disponible;
`questionSelection` admite una selección aleatoria de cantidad fija o un intervalo;
y `includeInCombinedTest: false` excluye el banco de la recopilación automática.
Estas propiedades forman parte del esquema validado.

Un test puede enlazar un fragmento de teoría mediante `relatedTheory`, indicando el `resourceId` de la teoría y una selección por `blockIds` o por intervalo de artículos. El modal reutiliza y filtra ese contenido original; no mantiene copias parciales de la teoría.

El registro de cada oposición es el único lugar que conoce sus recursos. El agregador
central no contiene tests individuales y la navegación mantiene separados los temas
que tengan el mismo número en oposiciones diferentes.

## Publicar una novedad

Añade una entrada a `data/updates.js` con un `id` único, categoría, fecha ISO, título y descripción. La aplicación valida los campos antes de arrancar y muestra el indicador de la campana durante las 24 horas posteriores a `publishedAt`.

Antes de arrancar, la aplicación comprueba identificadores, clasificación, autoría, preguntas, opciones y soluciones. Si el catálogo no es válido, muestra un error controlado en lugar de iniciar parcialmente.

Cada test puede declarar un autor estructurado mediante `autor: { id, nombre }`. El registro expone este dato como `author`, lo que permitirá diferenciar y filtrar posteriormente tests oficiales y tests de otros autores sin depender del nombre de la carpeta.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, elige **Deploy from a branch**.
3. Selecciona la rama que contiene la aplicación y la carpeta **/(root)**.
4. Guarda y espera a que GitHub muestre la URL publicada.

Todos los recursos usan rutas relativas y la navegación usa hashes, por lo que funciona tanto en el dominio raíz como en una subruta del tipo `https://usuario.github.io/repositorio/`.

El archivo `.nojekyll` indica a GitHub Pages que publique el repositorio como contenido estático sin procesarlo con Jekyll. Antes de publicar cambios conviene ejecutar `npm run check` y revisar manualmente las vistas de test, resultados y revisión en los tamaños de pantalla soportados.

## Decisiones técnicas

- JavaScript moderno con ES Modules, sin framework ni compilación.
- Registro estático explícito: GitHub Pages no puede descubrir archivos del repositorio en tiempo de ejecución.
- Hash routing para no depender de redirecciones del servidor.
- Validación preventiva de oposiciones, recursos y configuraciones de test tanto en el navegador como en integración continua.
- No se guarda progreso, historial ni resultados. El resultado calculado solo está disponible en las pantallas de resultado y revisión del intento recién finalizado; únicamente las preferencias del panel se conservan en `localStorage`.
- Los datos de preguntas, opciones y soluciones se importan directamente y no se modifican.

## Licencia

Este proyecto se distribuye bajo GNU GPL v3. Consulta [LICENSE](LICENSE).
