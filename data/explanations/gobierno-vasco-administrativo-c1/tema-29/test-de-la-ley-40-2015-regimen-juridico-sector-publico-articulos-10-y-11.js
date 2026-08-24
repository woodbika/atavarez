import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-de-la-ley-40-2015-regimen-juridico-sector-publico-articulos-10-y-11",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 10, los órganos superiores. Por eso encaja «Los órganos superiores».",
      "descartes": {
        "b": "En «¿Quién puede avocar para sí la resolución de asuntos que correspondan a otros órganos», la alternativa B introduce «inferiores» donde la norma dispone «superiores».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los órganos inferiores» no expresa la regla que el artículo 10 aplica a «¿Quién puede avocar para sí la resolución de asuntos que correspondan a otros órganos»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 10 permite que un órgano superior avoque asuntos atribuidos a órganos que dependan de él. Por eso, los órganos a los que alude la pregunta han de ser inferiores.",
      "descartes": {
        "a": "En «Esos otros órganos tienen que ser», la alternativa A introduce «superiores» donde la norma dispone «inferiores».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los órganos superiores» no expresa la regla que el artículo 10 aplica a «Esos otros órganos tienen que ser»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 10 recoge las dos previsiones: «Ordinariamente» y «Por delegación». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Ordinariamente», pero resulta incompleta porque también debe incluirse «Por delegación».",
        "b": "La alternativa B recoge «Por delegación», pero resulta incompleta porque también debe incluirse «Ordinariamente»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 10 establece que en los supuestos de delegación de competencias en órganos no dependientes jerárquicamente, el conocimiento de un asunto podrá ser avocado únicamente por el órgano delegante. Esa previsión conduce a «El órgano delegante».",
      "descartes": {
        "a": "En «Si un órgano ejerce la competencia por delegación pero no era un órgano jerárquicamente dependiente solamente…», la alternativa A introduce «superior» donde la norma dispone «delegante».",
        "c": "En «Si un órgano ejerce la competencia por delegación pero no era un órgano jerárquicamente dependiente solamente…», la alternativa C introduce «Es lo mismo la respuesta a y b» donde la norma dispone «El órgano delegante»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 10, en todo caso, la avocación se realizará mediante acuerdo motivado que deberá ser notificado a los interesados en el procedimiento, si los hubiere, con anterioridad o simultáneamente a la resolución final que se dicte. Por eso encaja «Antes de la resolución final o simultáneamente a ésta».",
      "descartes": {
        "a": "En «La avocación se tiene que hacer por acuerdo motivado que será notificado a los interesados si los hubiera», la alternativa A introduce «propuesta de resolución» donde la norma dispone «resolución final o simultáneamente a ésta».",
        "b": "En «La avocación se tiene que hacer por acuerdo motivado que será notificado a los interesados si los hubiera», la alternativa B introduce «del trámite de audiencia» donde la norma dispone «de la resolución final o simultáneamente a ésta»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 10 es contra el acuerdo de avocación no cabrá recurso, aunque podrá impugnarse en el que, en su caso, se interponga contra la resolución del procedimiento. En este supuesto se ajusta a «No cabe recurso alguno».",
      "descartes": {
        "a": "En «Contra el acuerdo de avocaci ón», la alternativa A introduce «Cabe recurso de reposición» donde la norma dispone «No cabe recurso alguno».",
        "b": "En «Contra el acuerdo de avocaci ón», la alternativa B introduce «Cabe recurso de reposición o de alzada dependiendo si se ha agotado la vía administrativa o no» donde la norma dispone «No cabe recurso alguno»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 11 comprende «Órganos competentes» y «Entidades de derecho público competentes». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Órganos competentes», pero resulta incompleta porque también debe incluirse «Entidades de derecho público competentes».",
        "b": "La alternativa B recoge «Entidades de derecho público competentes», pero resulta incompleta porque también debe incluirse «Órganos competentes»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 11 recoge tanto «Un órgano o entidad de la misma administración» como «Un órgano o entidad de distinta administración». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Un órgano o entidad de la misma administración», pero resulta incompleta porque también debe incluirse «Un órgano o entidad de distinta administración».",
        "b": "La alternativa B recoge «Un órgano o entidad de distinta administración», pero resulta incompleta porque también debe incluirse «Un órgano o entidad de la misma administración»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 11, la realización de actividades de carácter material o técnico de la competencia de los órganos administrativos o de las Entidades de Derecho Público podrá ser encomendada a otros órganos o Entidades de Derecho Público de la misma o de distinta Administración. Por eso encaja «Actividades de carácter material, técnico o de servicios».",
      "descartes": {
        "b": "En «Se encomiendan», la alternativa B introduce «Actos o resoluciones de carácter jurídico que dan soporte o en los que se integran dichas actividades» donde la norma dispone «Actividades de carácter material, técnico o de servicios».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Actos o resoluciones de carácter jurídico que dan soporte o en los que se integran dichas actividades» no expresa la regla que el artículo 11 aplica a «Se encomiendan»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 11 es la normativa en materia de contratos. En este supuesto se ajusta a «La normativa en materia de contratos».",
      "descartes": {
        "a": "En «Si la encomienda se hace a favor de personas físicas o jurídicas de derecho privado se aplicará», la alternativa A introduce «propia de la administración» donde la norma dispone «en materia de contratos».",
        "b": "En «Si la encomienda se hace a favor de personas físicas o jurídicas de derecho privado se aplicará», la alternativa B introduce «El acuerdo expreso de los órganos o entidades intervinientes» donde la norma dispone «La normativa en materia de contratos»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 11 dispone que encargado del tratamiento de los datos de carácter personal a los que pudiera tener acceso en ejecución de la encomienda de gestión. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En todo caso, la Entidad u órgano encomendado tendrá la condición de», la alternativa A introduce «Responsable» donde la norma dispone «Encargado».",
        "c": "En «En todo caso, la Entidad u órgano encomendado tendrá la condición de», la alternativa C introduce «Responsable del tratamiento de los datos de carácter personal a los que pu diera» donde la norma dispone «Encargado del tratamiento de los datos de carácter personal a los que pudiera»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 11 establece que cuando la encomienda de gestión se realice entre órganos administrativos o Entidades de Derecho Público pertenecientes a la misma Administración deberá formalizarse en los términos que establezca su normativa propia y. Esa previsión conduce a «La normativa propia de la administración».",
      "descartes": {
        "b": "En «Si la encomienda se hace dentro de la misma administración lo primero que se tiene que mirar es», la alternativa B introduce «El acuerdo expreso de los órganos o entidades intervinie ntes» donde la norma dispone «La normativa propia de la administración».",
        "c": "En «Si la encomienda se hace dentro de la misma administración lo primero que se tiene que mirar es», la alternativa C introduce «en materia de contratos» donde la norma dispone «propia de la administración»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 11, cuando la encomienda de gestión se realice entre órganos administrativos o Entidades de Derecho Público pertenecientes a la misma Administración deberá formalizarse en los términos que establezca su normativa propia y. Por eso encaja «El acuerdo expreso de los órganos o entidades intervinientes».",
      "descartes": {
        "a": "En «Y en su defecto», la alternativa A introduce «La normativa propia de la administración» donde la norma dispone «El acuerdo expreso de los órganos o entidades intervinientes».",
        "c": "En «Y en su defecto», la alternativa C introduce «La normativa en materia de contratos» donde la norma dispone «El acuerdo expreso de los órganos o entidades intervinientes»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 11 es el instrumento de formalización de la encomienda de gestión y su resolución deberá ser publicada; en el Boletín Oficial del Estado; en el Boletín oficial de la Comunidad Autónoma o en el de la Provincia. En este supuesto se ajusta a «Se tendrá que publicar en el Diario Oficial que corresponda».",
      "descartes": {
        "a": "En «Para que sea eficaz el instrumento de formalización d e la encomienda y su resolución», la alternativa A introduce «autorizar por el órgano superior al encomendante» donde la norma dispone «publicar en el Diario Oficial que corresponda».",
        "c": "En «Para que sea eficaz el instrumento de formalización d e la encomienda y su resolución», la alternativa C introduce «autorizar por el órgano superior al encomendado» donde la norma dispone «publicar en el Diario Oficial que corresponda»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 11 dispone que cada Administración podrá regular los requisitos necesarios para la validez de tales acuerdos que incluirán, al menos, expresa mención de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gestión encomendada. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Para la validez de los acuerdos se establecerán los requisitos necesarios por», la alternativa A introduce «Ley» donde la norma dispone «Cada administración».",
        "c": "En «Para la validez de los acuerdos se establecerán los requisitos necesarios por», la alternativa C introduce «La Administración General del Estado» donde la norma dispone «Cada administración»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "La regulación del artículo 11 comprende «Expresa mención a la actividad o actividades a las que afecten y plazo de vigencia» y «Naturaleza y alcance de la gest ión encomendada». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Expresa mención a la actividad o actividades a las que afecten y plazo de vigencia», pero resulta incompleta porque también debe incluirse «Naturaleza y alcance de la gest ión encomendada».",
        "b": "La alternativa B recoge «Naturaleza y alcance de la gest ión encomendada», pero resulta incompleta porque también debe incluirse «Expresa mención a la actividad o actividades a las que afecten y plazo de vigencia»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 11, cuando la encomienda de gestión se realice entre órganos y Entidades de Derecho Público de distintas Administraciones se formalizará mediante firma del correspondiente convenio entre ellas. Por eso encaja «Se tendrá que efectuar un convenio entre ellas».",
      "descartes": {
        "a": "En «Si la encomienda se efectúa entre distintas administraciones», la alternativa A introduce «aplicará la normativa de cada administración» donde la norma dispone «tendrá que efectuar un convenio entre ellas».",
        "c": "En «Si la encomienda se efectúa entre distintas administraciones», la alternativa C introduce «aplicará la normativa de la administración encomendante» donde la norma dispone «tendrá que efectuar un convenio entre ellas»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 11 es cuando la encomienda de gestión se realice entre órganos y Entidades de Derecho Público de distintas Administraciones se formalizará mediante firma del correspondiente convenio entre ellas. En este supuesto se ajusta a «La gestión ordinaria de los servicios de la comunidad autónoma por Diputaciones, Cabildos y Consejos Insulares».",
      "descartes": {
        "a": "En «La respuesta de la pregunta anterior tiene una excepción», la alternativa A introduce «del Estado por la administración autonómica» donde la norma dispone «de la comunidad autónoma por Diputaciones, Cabildos y Consejos Insulares».",
        "c": "En «La respuesta de la pregunta anterior tiene una excepción», la alternativa C introduce «las Diputaciones, Cabildos y Consejos Insulares por los Ayuntamientos» donde la norma dispone «la comunidad autónoma por Diputaciones, Cabildos y Consejos Insulares»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 11 dispone que cuando la encomienda de gestión se realice entre órganos y Entidades de Derecho Público de distintas Administraciones se formalizará mediante firma del correspondiente convenio entre ellas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En dicho caso se regirán por», la alternativa A introduce «propia de la administración estatal» donde la norma dispone «en materia de régimen local».",
        "b": "En «En dicho caso se regirán por», la alternativa B introduce «propia de la administración autonómica» donde la norma dispone «en materia de régimen local»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-29-organizacion-administrativa",
  references: {
    "1": articleReference(10),
    "2": articleReference(10),
    "3": articleReference(10),
    "4": articleReference(10),
    "5": articleReference(10),
    "6": articleReference(10),
    "7": articleReference(11),
    "8": articleReference(11),
    "9": articleReference(11),
    "10": articleReference(11),
    "11": articleReference(11),
    "12": articleReference(11),
    "13": articleReference(11),
    "14": articleReference(11),
    "15": articleReference(11),
    "16": articleReference(11),
    "17": articleReference(11),
    "18": articleReference(11),
    "19": articleReference(11),
  },
});
