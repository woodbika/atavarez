import {
  articleReference,
  defineExplanationSet,
  EXPLANATION_REFERENCE_SCOPES,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-decreto-legislativo-1-2023-violencia-machista-contra-las-mujeres",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La ficha disponible sitúa la violencia machista como manifestación extrema de desigualdad, pero no detalla sus formas. Se conserva como referencia contextual la solución conjunta del test.",
      descartes: {
        a: "La enumeración recoge distintas violencias dirigidas contra mujeres y niñas, aunque la solución almacenada añade también la violencia contra quienes apoyan a las víctimas.",
        b: "La protección de personas del entorno constituye la otra parte de la respuesta registrada; por sí sola no abarca las manifestaciones enumeradas en A.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El bloque teórico no concreta las conductas incluidas en la definición de violencia machista. Como contexto, el test registra conjuntamente amenazas, coacción y privación arbitraria de libertad.",
      descartes: {
        a: "Las amenazas y la coacción forman parte de la respuesta del test, pero esta alternativa omite la privación arbitraria de libertad.",
        b: "La privación de libertad es una de las conductas indicadas, junto con las amenazas y coacciones recogidas en la otra opción.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La teoría identifica a Emakunde como organismo de evaluación de las políticas de igualdad, pero no desarrolla esta evaluación periódica concreta; la referencia es contextual.",
      descartes: {
        a: "Las administraciones aportan información y gestionan recursos, mientras que la solución del test reserva la evaluación periódica general a Emakunde.",
        c: "Emakunde posee personalidad y funciones propias; la pregunta no atribuye la evaluación al departamento de Presidencia en el que se encuentre adscrito.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La ficha no recoge la regla específica sobre investigación de las causas y consecuencias de estas violencias. Se mantiene contextualmente la atribución del test a las administraciones públicas vascas.",
      descartes: {
        b: "Emakunde desarrolla funciones de estudio y evaluación, pero la solución almacenada formula aquí un deber general de las administraciones públicas.",
        c: "La adscripción orgánica de Emakunde a Presidencia no convierte al departamento en titular de la obligación descrita por la pregunta.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El material teórico no detalla el deber de facilitar datos sobre recursos dependientes. La solución se presenta como contextual y asigna esa información a cada administración pública vasca.",
      descartes: {
        b: "Emakunde puede centralizar evaluaciones, pero los datos de cada recurso o servicio deben proceder de la administración de la que dependa.",
        c: "El departamento de Presidencia no gestiona necesariamente todos los recursos públicos cuya información alimenta la evaluación.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La ficha parcial no contiene el destinatario de la rendición de cuentas sobre esa evaluación. Se conserva como dato contextual del test que debe presentarse ante el Parlamento Vasco.",
      descartes: {
        a: "Emakunde realiza la evaluación según la batería, por lo que no es el órgano externo ante el que se rinde cuenta de sus resultados.",
        c: "La solución registrada sitúa la rendición ante la cámara legislativa y no ante el Gobierno Vasco.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El principio general exige prevenir y erradicar la violencia, aunque la ficha no concreta quién ejecuta estas campañas. El test las atribuye contextualmente a las administraciones públicas vascas.",
      descartes: {
        b: "Emakunde impulsa las políticas de igualdad, pero la respuesta almacenada extiende la realización de campañas al conjunto de administraciones.",
        c: "El departamento de adscripción no sustituye a las distintas administraciones responsables de actuaciones de sensibilización.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La teoría aportada no desarrolla el diagnóstico formativo del personal que interviene ante la violencia. Con ese límite, se mantiene la competencia general de las administraciones públicas.",
      descartes: {
        b: "Emakunde colabora en este diagnóstico según la pregunta siguiente, pero no aparece como su único sujeto responsable en la solución registrada.",
        c: "El Consejo Vasco de Función Pública no es la entidad a la que el test atribuye la detección de estas necesidades especializadas.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "La ficha no detalla la colaboración institucional en el diagnóstico formativo. La referencia contextual conserva a Emakunde como entidad colaboradora de las administraciones responsables.",
      descartes: {
        a: "Las administraciones públicas son el sujeto del diagnóstico en la pregunta anterior; aquí se solicita la entidad con la que colaboran.",
        c: "La solución de la batería no sitúa esa colaboración específica en el Consejo Vasco de Función Pública.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El recurso teórico no recoge estas obligaciones sectoriales de capacitación. Contextualmente, el test suma la formación del personal de infancia y juventud y la de profesionales privados.",
      descartes: {
        a: "La formación de quienes trabajan con infancia y juventud es una parte de la respuesta, completada por el apoyo a profesionales de entidades privadas.",
        b: "Favorecer la capacitación del sector privado también es correcto según la batería, pero no reemplaza la garantía destinada al personal que atiende edades tempranas.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La ficha disponible no contiene el nivel de exigencia formativa para estos puestos y servicios. Se conserva contextualmente la respuesta que establece la formación como requisito.",
      descartes: {
        a: "La solución no se limita a valorar la formación como mérito, sino que exige acreditarla para desempeñar funciones y prestar servicios específicos.",
        c: "La batería aplica la exigencia tanto a los puestos como a la prestación de servicios, sin convertirla en mera recomendación en este segundo ámbito.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El principio general de atención integral no detalla en la ficha las características de la asistencia letrada. El test la define contextualmente como gratuita, especializada, inmediata e integral.",
      descartes: {
        a: "La gratuidad, especialización e inmediatez forman parte de la garantía registrada, pero falta su carácter integral.",
        b: "La asistencia debe ser integral, aunque esa cualidad se completa con gratuidad, especialización e inmediatez.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "La teoría parcial no enumera las actuaciones comprendidas en la asistencia jurídica. Como referencia contextual, la batería incluye la acusación penal y las medidas civiles o cautelares.",
      descartes: {
        a: "El ejercicio de la acción acusatoria es una actuación incluida, pero no agota la asistencia ante consecuencias civiles o uniones de hecho.",
        b: "Las medidas previas o cautelares en el ámbito familiar forman parte de la cobertura, junto con la intervención acusatoria en el proceso penal.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "La ficha no desarrolla las prestaciones psicológicas del sistema sanitario. Se mantiene con alcance contextual que la asistencia garantizada debe ser específica y especializada.",
      descartes: {
        b: "La batería no exige que el servicio esté centralizado; esa organización podría incluso dificultar la proximidad y no integra la solución registrada.",
        c: "La centralización de la opción B impide considerar correctas las dos alternativas, aunque la accesibilidad sea una cualidad deseable.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "El texto teórico disponible no concreta la dotación de medios periciales en juzgados. Con ese límite, se conserva la atribución contextual a la Administración autonómica.",
      descartes: {
        a: "La solución no distribuye esta obligación entre todas las administraciones vascas, sino que la concentra en la Administración de la Comunidad Autónoma.",
        c: "Aunque las pruebas se practiquen en juzgados, el test no atribuye la habilitación material a la Administración de Justicia como categoría separada.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "La ficha no recoge las reglas de renta de garantía de ingresos para víctimas. Contextualmente, se conserva la exención del límite mínimo de edad como solución del test.",
      descartes: {
        b: "La alternativa condiciona el derecho a que las personas de acogida no sean familiares; esa restricción no integra la solución registrada en la batería.",
        c: "Al no aceptarse la condición añadida en B, no puede darse por válida la respuesta que agrupa ambas afirmaciones.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-06-igualdad",
  referenceForQuestion: () =>
    articleReference(3, {
      scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL,
      label: "Artículo 3: prevención, atención y erradicación de la violencia machista",
    }),
});
