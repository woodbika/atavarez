import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-106-a-111",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Ante una necesidad urgente e inaplazable puede asignarse una comisión con reserva, para un puesto del encuadre profesional correspondiente o para funciones distintas de las del destino habitual.",
      descartes: {
        a: "La urgencia es el presupuesto de la comisión, pero la pregunta recoge además sus efectos y posibles objetos.",
        b: "La reserva del puesto protege el retorno, aunque no resume por sí sola todo el régimen descrito.",
        c: "Las funciones admisibles están bien delimitadas y deben leerse junto con la urgencia y la reserva.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La comisión ordinaria se desempeña voluntariamente. Las reglas retributivas de las otras opciones están formuladas de manera incorrecta.",
      descartes: {
        b: "Se perciben las retribuciones del puesto efectivamente desempeñado, no las del puesto del que se conserva la titularidad.",
        c: "En tareas especiales se garantiza como mínimo la retribución del puesto propio; la opción la convierte erróneamente en un máximo.",
        d: "Solo A es válida, porque B cambia el puesto de referencia y C invierte el umbral retributivo.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Cada administración puede fijar tanto la permanencia máxima en una comisión como el intervalo mínimo antes de participar en otra provisión temporal de esta clase.",
      descartes: {
        a: "El tope de permanencia es una medida posible, pero no la única de las dos que permite el artículo 106.6.",
        b: "El período de espera también puede regularse y funciona junto con el límite de duración.",
        d: "Ambas facultades organizativas se reconocen expresamente.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La comisión en otra administración es voluntaria y mantiene la reserva del puesto de origen.",
      descartes: {
        b: "Dura un año y puede prorrogarse hasta un máximo total de cuatro, no de dos.",
        c: "Puede finalizar por decisión motivada de cualquiera de las administraciones afectadas, no solo de la de destino.",
        d: "Las imprecisiones de plazo y competencia impiden considerar correctas las tres opciones.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Durante la comisión se aplican las condiciones de trabajo de la administración de destino, con las excepciones legales específicas.",
      descartes: {
        b: "Sí existen excepciones: la carrera profesional y la sanción de separación del servicio conservan su régimen propio.",
        c: "La excepción disciplinaria no alcanza a todo el régimen disciplinario, sino específicamente a la separación del servicio.",
        d: "La retribución corresponde al puesto realmente desempeñado en la administración de destino.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La misión de cooperación es voluntaria, conserva el puesto y exige justificar que el personal propio no puede realizar las funciones encomendadas.",
      descartes: {
        a: "Voluntariedad y reserva son ciertas, pero la justificación de C también resulta necesaria.",
        b: "La duración debe ser inferior a seis meses, no superior.",
        c: "La imposibilidad con medios propios es un requisito válido y se suma a la opción A.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La propia resolución decide si se cobran las retribuciones del puesto de origen o las del destino, adaptando la solución a cada misión.",
      descartes: {
        a: "El origen es una de las dos posibilidades, pero no se impone automáticamente.",
        b: "El destino también puede tomarse como referencia, siempre que así lo acuerde la resolución.",
        d: "El artículo 108.2 sí atribuye expresamente esta elección a la resolución.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Antes de imponer una comisión forzosa debe darse audiencia a la persona afectada, para que pueda alegar sobre sus circunstancias.",
      descartes: {
        a: "Los criterios se desarrollan reglamentariamente mediante decreto del Gobierno Vasco, no por una ley del Parlamento.",
        c: "La representación del personal debe ser informada, pero no se exige que autorice la decisión.",
        d: "A y C alteran el instrumento regulador y convierten la información en autorización.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Si el puesto forzoso paga menos que el propio, se abona durante la comisión un complemento por la diferencia para evitar una pérdida retributiva impuesta.",
      descartes: {
        a: "La duración máxima es un año, prorrogable por otro, no por cuatro años adicionales.",
        b: "Una comisión forzosa no termina por renuncia de la persona comisionada.",
        d: "Solo C es correcta: las otras dos contradicen duración y carácter obligatorio.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Si la comisión forzosa obliga a cambiar de residencia, nacen las indemnizaciones previstas legalmente para compensar ese desplazamiento.",
      descartes: {
        a: "El cambio de residencia es posible y por eso la norma regula sus consecuencias económicas.",
        c: "Negar toda indemnización cargaría sobre la persona un coste derivado de una decisión forzosa.",
        d: "El derecho no queda a la libre elección de la resolución; nace cuando concurren los requisitos legales.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La convocatoria de proyectos o funciones especiales debe concretar funciones, requisitos y retribuciones, además de dar publicidad a esos elementos.",
      descartes: {
        a: "La duración máxima es de dos años, prorrogable por otros dos; la opción reduce el período inicial a uno.",
        c: "La regla temporal de A es errónea y no puede combinarse con B.",
        d: "La obligación informativa de la administración convocante sí figura en el artículo 110.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La comisión termina por reincorporación de quien tenía reserva, cobertura definitiva o adscripción provisional de personal de carrera y desaparición de la urgencia que la justificó.",
      descartes: {
        a: "El reingreso es causa válida, pero comparte la enumeración con las situaciones B y C.",
        b: "La cobertura del puesto extingue la necesidad temporal, junto con los demás supuestos propuestos.",
        c: "Si cesa la necesidad urgente, pierde sentido mantener la comisión, aunque no sea la única causa.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "El transcurso del plazo concedido extingue la comisión por agotarse su duración temporal.",
      descartes: {
        a: "La renuncia aceptada puede operar en comisiones voluntarias, pero no en una comisión forzosa.",
        b: "La revocación debe ser expresa y motivada; una revocación tácita no satisface la regla.",
        d: "A y B contienen límites incorrectos, por lo que no pueden sumarse al vencimiento del plazo.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: {
    1: articleReference(106), 2: articleReference(106), 3: articleReference(106),
    4: articleReference(107), 5: articleReference(107),
    6: articleReference(108), 7: articleReference(108),
    8: articleReference(109), 9: articleReference(109), 10: articleReference(109),
    11: articleReference(110), 12: articleReference(111), 13: articleReference(111),
  },
});
