import {
  articleReference,
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const contextualStructureReference = blockReference(
  "estructura",
  "Estructura de la Constitución",
  { scope: "contextual" },
);

const explicacionesConstitucionKaixoOpe2022 = {
  testId:
    "test-constitucion-estructura-contenido-derechos-deberes-fundamentales-kaixo",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El artículo 1.1 enumera la libertad, la justicia, la igualdad y el pluralismo político como valores superiores; por eso encaja «La igualdad». La ficha local no reproduce el contenido del Título Preliminar y la referencia es contextual.",
      descartes: {
        a: "La soberanía nacional reside en el pueblo español, pero esa regla del artículo 1.2 no la convierte en uno de los cuatro valores superiores.",
        b: "«Social» forma parte de la definición de España como Estado social y democrático de Derecho, no de la enumeración de valores superiores.",
        d: "El carácter democrático califica al Estado; el valor que figura en la lista constitucional es el pluralismo político, no «la democracia».",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El artículo 1.3 define la forma política del Estado como Monarquía parlamentaria. La ficha de teoría no contiene el texto de ese artículo y solo sitúa el Título Preliminar, de modo que su alcance aquí es contextual.",
      descartes: {
        a: "«Monarquía constitucional» es una categoría descriptiva, pero no la denominación empleada por el artículo 1.3.",
        b: "La Constitución configura un Estado democrático, aunque esa expresión no identifica su forma política.",
        d: "«Monarquía democrática» combina dos rasgos del sistema, pero no reproduce la fórmula constitucional.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "La supremacía constitucional somete a ciudadanos y poderes públicos a la Constitución e impide actuar al margen de sus preceptos. El bloque de estructura no desarrolla esa regla y aporta únicamente una referencia contextual.",
      descartes: {
        a: "La Constitución tiene procedimientos propios de reforma en su Título X; no se modifica mediante los cauces previstos para cualquier otra norma.",
        b: "La reforma no se reduce a aprobar una ley: exige seguir el procedimiento constitucional y las mayorías que correspondan.",
        c: "Los poderes constituidos pueden promover y aprobar una reforma si respetan las reglas del Título X; la Constitución no es irreformable.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "El artículo 9.3 garantiza la irretroactividad de las disposiciones sancionadoras no favorables, justo lo contrario de lo afirmado en la opción B. La ficha no reproduce el artículo 9 y la referencia de estructura es contextual.",
      descartes: {
        a: "La jerarquía normativa sí aparece entre los principios garantizados por el artículo 9.3.",
        c: "El principio de legalidad abre la relación de garantías del artículo 9.3.",
        d: "La interdicción de la arbitrariedad de los poderes públicos también está expresamente garantizada.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El control de constitucionalidad de leyes y disposiciones con fuerza de ley corresponde al Tribunal Constitucional. La teoría local solo ubica esta institución en el Título IX y no detalla sus competencias, por lo que la referencia es contextual.",
      descartes: {
        a: "El Tribunal Constitucional es un órgano constitucional jurisdiccional e independiente, no un órgano político.",
        b: "Su marco específico es la Constitución y su ley orgánica; la opción formula de manera imprecisa una sujeción general a normas con rango de ley.",
        c: "No forma parte del Poder Judicial ni ocupa su cúspide; ejerce una jurisdicción constitucional separada.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "El control de las normas forales fiscales de Álava, Gipuzkoa y Bizkaia está reservado al Tribunal Constitucional en los procesos previstos por su ley orgánica. La ficha no contiene este régimen especial y solo ofrece un marco contextual.",
      descartes: {
        b: "Aunque estas normas no tengan rango formal de ley, su control fiscal específico fue sustraído a la jurisdicción ordinaria.",
        c: "El Tribunal Superior de Justicia del País Vasco no puede declarar su inconstitucionalidad mediante el control reservado al Tribunal Constitucional.",
        d: "La competencia especial no se comparte con los tribunales ordinarios: corresponde únicamente al Tribunal Constitucional.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "El artículo 54 encomienda al Defensor del Pueblo la defensa de los derechos del Título I y le permite supervisar la actividad administrativa. Esa función sustenta la opción D.",
      descartes: {
        a: "Es alto comisionado de las Cortes Generales y lo designan las propias Cámaras, no el Gobierno.",
        b: "Debe rendir cuentas a las Cortes Generales, que son la institución de la que depende, y no al Gobierno.",
        c: "No dispone de potestades ejecutivas para anular decisiones: investiga, supervisa y formula resoluciones o recomendaciones.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "El artículo 53.3 dispone que estos principios informan la legislación, la práctica judicial y la actuación de los poderes públicos. Funcionan, por tanto, como mandatos de orientación y necesitan desarrollo legal para ser alegados ante la jurisdicción ordinaria.",
      descartes: {
        a: "No reciben la tutela directa propia de los derechos fundamentales; su eficacia se articula conforme a las leyes que los desarrollen.",
        c: "El propio artículo 53.3 condiciona su alegación judicial a lo que disponga la legislación de desarrollo.",
        d: "El recurso de amparo protege el artículo 14, la Sección 1.ª del Capítulo II y la objeción de conciencia, no los principios del Capítulo III.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "El artículo 31.1 exige un sistema tributario justo inspirado en igualdad y progresividad, vinculado a la capacidad económica y sin alcance confiscatorio. No establece que el sistema deba ser proporcional.",
      descartes: {
        b: "La prohibición del alcance confiscatorio forma parte expresa de la regla constitucional.",
        c: "La igualdad y la progresividad son los dos principios que el artículo menciona para inspirar el sistema tributario.",
        d: "La contribución al gasto público se determina de acuerdo con la capacidad económica de cada persona.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "El derecho del artículo 15 pertenece a la Sección 1.ª del Capítulo II y su desarrollo está reservado a ley orgánica. Los artículos 15 y 53 de la ficha no reproducen esa exigencia específica, por lo que la referencia es contextual.",
      descartes: {
        a: "La opción expresa la reserva de ley de forma general, pero no concreta el carácter orgánico exigido para desarrollar este derecho fundamental.",
        b: "El derecho vincula desde la Constitución y no queda suspendido hasta que el legislador apruebe su desarrollo.",
        d: "Un reglamento no puede sustituir la ley orgánica ni regular por sí solo el desarrollo esencial del derecho a la vida y a la integridad.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "La normativa del Defensor del Pueblo le permite formular advertencias, recomendaciones y sugerencias; por eso es incorrecto negar esa facultad. El artículo 54 de la ficha no detalla esas competencias y actúa como referencia contextual.",
      descartes: {
        a: "Puede promover actuaciones ante la jurisdicción ordinaria en supuestos legalmente previstos, como la solicitud de habeas corpus ante el juez competente.",
        b: "Está legitimado para interponer el recurso de inconstitucionalidad ante el Tribunal Constitucional.",
        d: "También está legitimado para interponer recurso de amparo en defensa de los derechos constitucionalmente protegidos.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La vivienda del artículo 47 es un principio rector del Capítulo III. Según el artículo 53.3, solo puede alegarse ante la jurisdicción ordinaria de acuerdo con las leyes que lo desarrollen.",
      descartes: {
        a: "El artículo 47 no está incluido entre los derechos que pueden acceder directamente al recurso de amparo.",
        b: "El procedimiento preferente y sumario protege el artículo 14 y los derechos de la Sección 1.ª del Capítulo II, no el derecho a la vivienda.",
        c: "Agotar previamente la vía judicial no convierte el artículo 47 en un derecho susceptible de amparo constitucional.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La legitimación para el amparo corresponde a quien invoque un interés legítimo, al Defensor del Pueblo y al Ministerio Fiscal. El artículo 53.2 de la ficha menciona el recurso, pero no detalla sus legitimados, así que la referencia es contextual.",
      descartes: {
        b: "El Defensor del Pueblo figura expresamente entre quienes pueden interponer un recurso de amparo.",
        c: "El Ministerio Fiscal también tiene legitimación constitucional para promoverlo.",
        d: "La persona directamente afectada puede recurrir cuando invoque el interés legítimo exigido por la Constitución y la ley orgánica.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "Una persona física puede presentar una demanda individual ante el TEDH después de agotar los recursos internos efectivos, incluido el amparo cuando proceda. El artículo 10.2 solo establece el criterio interpretativo internacional y no contiene estas reglas de admisibilidad; la referencia es contextual.",
      descartes: {
        a: "El sistema europeo es subsidiario: con carácter general deben utilizarse antes los recursos disponibles en el ordenamiento interno.",
        b: "Agotar únicamente la jurisdicción ordinaria puede ser insuficiente si el recurso de amparo resulta disponible y efectivo para la vulneración denunciada.",
        d: "El Convenio admite expresamente demandas individuales de personas que se consideren víctimas de una vulneración.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "Durante el estado de alarma puede limitarse la circulación o permanencia de personas y vehículos, sin suspender el derecho. Los artículos 19 y 55 de la ficha no desarrollan las medidas propias de la alarma y aportan una referencia contextual.",
      descartes: {
        b: "La suspensión de la inviolabilidad domiciliaria y del secreto de las comunicaciones se vincula a los estados de excepción o de sitio, no al de alarma.",
        c: "La información inmediata sobre derechos y motivos de la detención no puede suspenderse mediante la declaración del estado de alarma.",
        d: "La suspensión de reunión y manifestación pertenece al régimen constitucional de excepción o sitio; la alarma permite limitaciones, no esa suspensión general.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "La disposición adicional primera declara que la Constitución ampara y respeta los derechos históricos de los territorios forales. La ficha enumera las disposiciones adicionales, pero no reproduce su contenido, de modo que la referencia es contextual.",
      descartes: {
        a: "La fórmula constitucional no utiliza «reconoce y confirma», sino los verbos «ampara y respeta».",
        c: "«Confirma» no es el término elegido por la disposición para expresar la protección de esos derechos históricos.",
        d: "La actualización del régimen foral se remite al marco constitucional y estatutario; la Constitución no dice que «confirma y desarrolla» esos derechos.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "Los derechos de los artículos 15 a 29 se desarrollan mediante ley orgánica, no necesariamente mediante ley ordinaria. El artículo 53 de la ficha recoge la tutela reforzada, pero no detalla la reserva orgánica ni el procedimiento de reforma, por lo que la referencia es contextual.",
      descartes: {
        b: "Una reforma que afecte a la Sección 1.ª del Capítulo II debe seguir el procedimiento agravado previsto constitucionalmente.",
        c: "Estos derechos pueden protegerse mediante recurso de amparo ante el Tribunal Constitucional.",
        d: "También cuentan ante los tribunales ordinarios con un procedimiento basado en preferencia y sumariedad.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "El Tribunal Constitucional se compone de doce miembros nombrados por el Rey, aunque las propuestas proceden de distintos órganos constitucionales. La ficha solo sitúa el Título IX y no reproduce su composición; la referencia es contextual.",
      descartes: {
        a: "La composición constitucional es de doce miembros, no de diez.",
        c: "El Gobierno propone dos integrantes, pero no elige diez ni determina por sí solo la composición del Tribunal.",
        d: "Las Cortes proponen ocho miembros; el nombramiento corresponde al Rey y las cuatro plazas restantes parten del Gobierno y del Consejo General del Poder Judicial.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "El Tribunal Constitucional resuelve conflictos entre el Estado y las comunidades autónomas y conoce de los recursos de inconstitucionalidad y amparo, pero no de conflictos entre el Estado y las instituciones de la Unión Europea. La ficha no desarrolla el artículo competencial y la referencia es contextual.",
      descartes: {
        a: "Los conflictos de competencia entre el Estado y las comunidades autónomas forman parte de sus atribuciones constitucionales.",
        b: "El recurso de amparo por vulneración de los derechos señalados en el artículo 53.2 corresponde al Tribunal Constitucional.",
        c: "El control de leyes y disposiciones normativas con fuerza de ley se ejerce mediante el recurso de inconstitucionalidad.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "El artículo 13 reconoce a los extranjeros las libertades públicas del Título I en los términos de los tratados y la ley, pero no les atribuye sin distinción todos los derechos fundamentales en la misma posición que a los españoles. Por eso la afirmación D es incorrecta.",
      descartes: {
        a: "El artículo 10.2 ordena interpretar los derechos y libertades de conformidad con la Declaración Universal y los tratados ratificados por España.",
        b: "Los derechos fundamentales admiten límites constitucionalmente previstos; el artículo 20.4 ofrece un ejemplo al proteger honor, intimidad, propia imagen e infancia.",
        c: "La propia Constitución reconoce derechos ejercitables por personas jurídicas, como la libertad de creación de centros docentes del artículo 27.6.",
      },
    },
  ],
};

export default defineExplanationSet(explicacionesConstitucionKaixoOpe2022, {
  theoryResourceId: "tema-01-constitucion-espanola",
  references: {
    1: contextualStructureReference,
    2: contextualStructureReference,
    3: contextualStructureReference,
    4: contextualStructureReference,
    5: contextualStructureReference,
    6: contextualStructureReference,
    7: articleReference(54),
    8: articleReference(53),
    9: articleReference(31),
    10: articleReference([15, 53], { scope: "contextual" }),
    11: articleReference(54, { scope: "contextual" }),
    12: articleReference([47, 53]),
    13: articleReference(53, { scope: "contextual" }),
    14: articleReference(10, { scope: "contextual" }),
    15: articleReference([19, 55], { scope: "contextual" }),
    16: contextualStructureReference,
    17: articleReference(53, { scope: "contextual" }),
    18: contextualStructureReference,
    19: contextualStructureReference,
    20: articleReference([10, 13, 20, 27]),
  },
});
