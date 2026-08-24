import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-85-y-86",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 85, iniciado un procedimiento sancionador, si el infractor reconoce su responsabilidad, se podrá resolver el procedimiento con la imposición de la sanción que proceda. Por eso encaja «Se podrá resolver el procedimiento con la imposición de la sanción que proceda».",
      "descartes": {
        "a": "En «Iniciado un procedimiento sancionador, si el infractor reconoce su responsabilidad», la alternativa A introduce «hacer la propuesta de resolución señalando en ella» donde la norma dispone «resolver el procedimiento con la imposición de».",
        "c": "En «Iniciado un procedimiento sancionador, si el infractor reconoce su responsabilidad», la alternativa C introduce «hará la propuesta de resolución sin necesidad de realizar trámite de audiencia» donde la norma dispone «podrá resolver el procedimiento con la imposición de la sanción que proceda»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 85 es se efectúe en cualquier momento anterior a la resolución. En este supuesto se ajusta a «Se efectúe en cualquier momento anterior a la resolución».",
      "descartes": {
        "a": "En «Cuando la sanción tenga únicamente carácter pecuniario o bien quepa imponer una sanción pecuniaria y otra no…», la alternativa A introduce «al trámite de audiencia» donde la norma dispone «a la resolución».",
        "b": "La alternativa B vincula «Cuando la sanción tenga únicamente carácter pecuniario o bien quepa imponer una sanción pecuniaria y otra no…» con «Se efectúe en cualquier momento anterior a la propuesta de resolución»; el artículo 85 lo relaciona con «Se efectúe en cualquier momento anterior a la resolución»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 85 recoge las dos previsiones: «La reposición de la situación alterada» y «La determinación de la indemnización por los daños y perjuicios causados por la comisión de la infracción». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «La reposición de la situación alterada», pero resulta incompleta porque también debe incluirse «La determinación de la indemnización por los daños y perjuicios causados por la comisión de la infracción».",
        "b": "La alternativa B recoge «La determinación de la indemnización por los daños y perjuicios causados por la comisión de la infracción», pero resulta incompleta porque también debe incluirse «La reposición de la situación alterada»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 86 establece que los citados instrumentos deberán establecer como contenido mínimo la identificación de las partes intervinientes; el ámbito personal; funcional y territorial. Esa previsión conduce a «20%».",
      "descartes": {
        "a": "Para «Como mínimo, por pago voluntario, se obtiene una reducción de», la alternativa A utiliza «10», pero la previsión aplicable fija «20».",
        "c": "Para «Como mínimo, por pago voluntario, se obtiene una reducción de», la alternativa C utiliza «30», pero la previsión aplicable fija «20»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 85, las citadas reducciones, deberán estar determinadas en la notificación de iniciación del procedimiento y su efectividad estará condicionada al desistimiento o renuncia de cualquier acción o recurso en vía administrativa contra la sanción. Por eso encaja «Deberán estar determinadas en la notificación de iniciación del procedimiento».",
      "descartes": {
        "b": "En «En relación con esas reducciones», la alternativa B introduce «No se requiere el desistimiento o renuncia de cualquier acción o recurso en vía administrativa contra la sanción» donde la norma dispone «Deberán estar determinadas en la notificación de iniciación del procedimiento».",
        "c": "En «En relación con esas reducciones», la alternativa C introduce «El porcentaje de reducción podrá ser disminuido reglamentariamente» donde la norma dispone «Deberán estar determinadas en la notificación de iniciación del procedimiento»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 86 recoge las dos previsiones: «Personas tanto de derecho público» y «Personas de derecho privado». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Personas tanto de derecho público», pero resulta incompleta porque también debe incluirse «Personas de derecho privado».",
        "b": "La alternativa B recoge «Personas de derecho privado», pero resulta incompleta porque también debe incluirse «Personas tanto de derecho público»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 86 dispone que las Administraciones Públicas podrán celebrar acuerdos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «¿Cómo tienen que ser los acuerdos, pactos, convenios o contratos», la alternativa B introduce «verse sobre materias no susceptibles de transacción» donde la norma dispone «no sean contrarios al Ordenamiento jurídico».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Que verse sobre materias no susceptibles de transacción» no expresa la regla que el artículo 86 aplica a «¿Cómo tienen que ser los acuerdos, pactos, convenios o contratos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 86 establece que las Administraciones Públicas podrán celebrar acuerdos. Ninguna de las restantes alternativas recoge esa regulación de forma válida.",
      "descartes": {
        "a": "En «Los pactos, acuerdos, convenios o contratos», la alternativa A introduce «Son siempre finalizadores del procedimiento» donde la norma dispone «Ninguna es correcta».",
        "b": "En «Los pactos, acuerdos, convenios o contratos», la alternativa B introduce «Se pueden incluir en el procedimiento, pero siempre con carácter vinculante para la resolución» donde la norma dispone «Ninguna es correcta»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 86 recoge las dos previsiones: «La identificación de las partes intervinientes y plazo de vigencia» y «El ámbito personal, funcional y territorial». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «La identificación de las partes intervinientes y plazo de vigencia», pero resulta incompleta porque también debe incluirse «El ámbito personal, funcional y territorial».",
        "b": "La alternativa B recoge «El ámbito personal, funcional y territorial», pero resulta incompleta porque también debe incluirse «La identificación de las partes intervinientes y plazo de vigencia»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 86 es los citados instrumentos deberán establecer como contenido mínimo la identificación de las partes intervinientes; el ámbito personal; debiendo publicarse o no según su naturaleza y las personas a las que estuvieran destinados. En este supuesto se ajusta a «Se publicarán dependiendo de su naturaleza y las personas a las que estuvieran destinados».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «tendrán que publicar siempre» donde la norma dispone «publicarán dependiendo de su naturaleza y las personas a las que estuvieran destinados».",
        "b": "En este supuesto, la alternativa B introduce «únicamente del número de destinatarios» donde la norma dispone «de su naturaleza y las personas a las que estuvieran destinados»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 86 dispone que requerirán en todo caso la aprobación expresa del Consejo de Ministros u órgano equivalente de las Comunidades Autónomas, los acuerdos que versen sobre materias de la competencia directa de dicho órgano. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Cuando un acuerdo que verse sobre materias de la competencia directa del Consejo de Ministros», la alternativa A introduce «su caso comunicación al» donde la norma dispone «todo caso aprobación expresa del».",
        "b": "En «Cuando un acuerdo que verse sobre materias de la competencia directa del Consejo de Ministros», la alternativa B introduce «comunicación al» donde la norma dispone «aprobación expresa del»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 86 recoge las dos previsiones: «No supondrán alteración de las competencias atribuidas a los órganos administrativos» y «No supondrán alteración de las responsabilidades que correspondan a las autoridades y funcionarios relativos al…». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «No supondrán alteración de las competencias atribuidas a los órganos administrativos», pero resulta incompleta porque también debe incluirse «No supondrán alteración de las responsabilidades que correspondan a las autoridades y funcionarios relativos al funcionamiento de los…».",
        "b": "La alternativa B recoge «No supondrán alteración de las responsabilidades que correspondan a las autoridades y funcionarios relativos al funcionamiento de los…», pero resulta incompleta porque también debe incluirse «No supondrán alteración de las competencias atribuidas a los órganos administrativos»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 86, el acuerdo que fijen las partes deberá fijar la cuantía y el modo de indemnización. Por eso encaja «El acuerdo que fijen las partes deberá fijar la cuantía y el modo de indemnización».",
      "descartes": {
        "a": "En «En procedimientos de responsabilidad patrimonial», la alternativa A introduce «No cabe la terminación convencional» donde la norma dispone «El acuerdo que fijen las partes deberá fijar la cuantía y el modo de indemnización».",
        "c": "En «En procedimientos de responsabilidad patrimonial», la alternativa C introduce «es posible solo en los casos en los que el dictamen del Consejo de Estado u órgano autonómico equivalente es preceptivo» donde la norma dispone «que fijen las partes deberá fijar la cuantía y el modo de indemnización»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(85),
    "2": articleReference(85),
    "3": articleReference(85),
    "4": articleReference(86),
    "5": articleReference(85),
    "6": articleReference(86),
    "7": articleReference(86),
    "8": articleReference(86),
    "9": articleReference(86),
    "10": articleReference(86),
    "11": articleReference(86),
    "12": articleReference(86),
    "13": articleReference(86),
  },
});
