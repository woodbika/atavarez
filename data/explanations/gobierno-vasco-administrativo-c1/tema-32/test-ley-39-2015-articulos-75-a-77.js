import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-75-a-77",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 75, los actos de instrucción que requieran la intervención de los interesados habrán de practicarse en la forma que resulte más conveniente para ellos y sea compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales. Por eso encaja «Instrucción».",
      "descartes": {
        "a": "En «Los actos que se efectúan para recabar, comprobar, obtener datos se denomina», la alternativa A introduce «Ordenación» donde la norma dispone «Instrucción».",
        "c": "En «Los actos que se efectúan para recabar, comprobar, obtener datos se denomina», la alternativa C introduce «Ambas respuestas son sinónimos» donde la norma dispone «Instrucción»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 75 es los actos de instrucción necesarios para la determinación; se realizarán de oficio y a través de medios electrónicos; por el órgano que tramite el procedimiento. En este supuesto se ajusta a «De oficio por el órgano que tramita el procedimiento».",
      "descartes": {
        "a": "La alternativa A vincula «Los actos de instrucción se realizarán» con «De oficio o a instancia de parte por el órgano que tramita el procedimiento»; el artículo 75 lo relaciona con «De oficio por el órgano que tramita el procedimiento».",
        "c": "En «Los actos de instrucción se realizarán», la alternativa C introduce «resuelve» donde la norma dispone «tramita»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 75 dispone que los actos de instrucción necesarios para la determinación. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Los interesados podrán proponer actos de instrucción», la alternativa A introduce «Siempre» donde la norma dispone «Además de lo señalado en la respuesta b) también cuando constituyan trámites legales o reglamentarios».",
        "b": "En «Los interesados podrán proponer actos de instrucción», la alternativa B introduce «Cuando requieran su intervención» donde la norma dispone «Además de lo señalado en la respuesta b) también cuando constituyan trámites legales o reglamentarios»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del artículo 75 comprende «El control de los tiempos y plazos y la identificación de los órganos responsables» y «La tramitación ordenada de los expedientes, así como facilitar la simplificación y la publicidad de los procedimientos». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «El control de los tiempos y plazos y la identificación de los órganos responsables», pero resulta incompleta porque también debe incluirse «La tramitación ordenada de los expedientes, así como facilitar la simplificación y la publicidad de los procedimientos».",
        "b": "La alternativa B recoge «La tramitación ordenada de los expedientes, así como facilitar la simplificación y la publicidad de los procedimientos», pero resulta incompleta porque también debe incluirse «El control de los tiempos y plazos y la identificación de los órganos responsables»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 75, los actos de instrucción que requieran la intervención de los interesados habrán de practicarse en la forma que resulte más conveniente para ellos y sea compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales. Por eso encaja «Los actos de instrucción que requieran la intervención de los interesados».",
      "descartes": {
        "a": "La alternativa A vincula «Habrán de practicarse en la forma que resulte más cómoda para los interesados y sea compatible» con «Los actos de instrucción»; el artículo 75 lo relaciona con «Los actos de instrucción que requieran la intervención de los interesados».",
        "c": "En «Habrán de practicarse en la forma que resulte más cómoda para los interesados y sea compatible», la alternativa C introduce «señale la Administración» donde la norma dispone «requieran la intervención de los interesados»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 75 recoge las dos previsiones: «De contradicción» y «Igualdad de los interesados». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «De contradicción», pero resulta incompleta porque también debe incluirse «Igualdad de los interesados».",
        "b": "La alternativa B recoge «Igualdad de los interesados», pero resulta incompleta porque también debe incluirse «De contradicción»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 76 dispone que los interesados podrán, en cualquier momento del procedimiento anterior al trámite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los interesados podrán aducir alegaciones, aportar documentos u otros elementos de juicio», la alternativa B introduce «de la propuesta de resolución» donde la norma dispone «del trámite de audiencia».",
        "c": "En «Los interesados podrán aducir alegaciones, aportar documentos u otros elementos de juicio», la alternativa C introduce «de la resolución» donde la norma dispone «del trámite de audiencia»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 76 establece que el órgano que redacta la propuesta de resolución. Esa previsión conduce a «El órgano que redacta la propuesta de resolución».",
      "descartes": {
        "b": "La alternativa B vincula «Todo ello será admitido y tenido en cuenta por» con «El órgano que redacta la resolución»; el artículo 76 lo relaciona con «El órgano que redacta la propuesta de resolución».",
        "c": "En «Todo ello será admitido y tenido en cuenta por», la alternativa C introduce «Depende de los casos» donde la norma dispone «El órgano que redacta la propuesta de resolución»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 76, en todo momento podrán los interesados alegar los defectos de tramitación y; los que supongan paralización; infracción de los plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. Por eso encaja «Antes de la resolución».",
      "descartes": {
        "a": "En «Los defectos de tramitación podrán ser alegados», la alternativa A introduce «del trámite de audiencia» donde la norma dispone «de la resolución».",
        "b": "La alternativa B vincula «Los defectos de tramitación podrán ser alegados» con «Antes de la propuesta de resolución»; el artículo 76 lo relaciona con «Antes de la resolución»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 76 es en todo momento podrán los interesados alegar los defectos de tramitación y; los que supongan paralización; infracción de los plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. En este supuesto se ajusta a «Antes de la resolución».",
      "descartes": {
        "a": "En «La infracción de un plazo preceptivamente señalado puede alegarse», la alternativa A introduce «del trámite de audiencia» donde la norma dispone «de la resolución».",
        "b": "La alternativa B vincula «La infracción de un plazo preceptivamente señalado puede alegarse» con «Antes de la propuesta de resolución»; el artículo 76 lo relaciona con «Antes de la resolución»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 76 dispone que en todo momento podrán los interesados alegar los defectos de tramitación y; los que supongan paralización; infracción de los plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La omisión de un trámite puede alegarse», la alternativa A introduce «del trámite de audiencia» donde la norma dispone «de la resolución. © Creado por IVOT. Prohibida la reproducción parcial o total».",
        "b": "En «La omisión de un trámite puede alegarse», la alternativa B introduce «propuesta de resolución» donde la norma dispone «resolución. © Creado por IVOT. Prohibida la reproducción parcial o total»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 76 establece que en todo momento podrán los interesados alegar los defectos de tramitación y; los que supongan paralización; infracción de los plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados antes de la resolución definitiva del asunto. Esa previsión conduce a «Antes de la resolución».",
      "descartes": {
        "a": "En «La paralización de un procedimiento puede alegarse», la alternativa A introduce «del trámite de audiencia» donde la norma dispone «de la resolución».",
        "b": "La alternativa B vincula «La paralización de un procedimiento puede alegarse» con «Antes de la propuesta de resolución»; el artículo 76 lo relaciona con «Antes de la resolución»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 76, dichas alegaciones podrán dar lugar, si hubiere razones para ello, a la exigencia de la correspondiente responsabilidad disciplinaria. Por eso encaja «Alegaciones relativas a defectos de tramitación».",
      "descartes": {
        "a": "En «Podrán dar lugar a responsabilidad disciplinaria», la alternativa A introduce «Cualquier alegación efectuada por el interesado» donde la norma dispone «Alegaciones relativas a defectos de tramitación».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Alegaciones relativas a defectos de tramitación» sí está respaldada por el artículo 76."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 77 es los hechos relevantes para la decisión de un procedimiento podrán acreditarse por cualquier medio de prueba admisible en Derecho, cuya valoración se realizará de acuerdo con los criterios establecidos en la Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil. En este supuesto se ajusta a «Por cualquier medio de prueba admisible en derecho».",
      "descartes": {
        "a": "La alternativa A vincula «Los hechos relevantes para la decisión de un procedimiento podrán acreditarse» con «Por cualquier medio de prueba»; el artículo 77 lo relaciona con «Por cualquier medio de prueba admisible en derecho».",
        "c": "En «Los hechos relevantes para la decisión de un procedimiento podrán acreditarse», la alternativa C introduce «que acepte la administración» donde la norma dispone «admisible en derecho»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 77 recoge las dos previsiones: «Cuando no se tengan por ciertos los hechos alegados por los interesados» y «Cuando la naturaleza del procedimiento lo exija». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando no se tengan por ciertos los hechos alegados por los interesados», pero resulta incompleta porque también debe incluirse «Cuando la naturaleza del procedimiento lo exija».",
        "b": "La alternativa B recoge «Cuando la naturaleza del procedimiento lo exija», pero resulta incompleta porque también debe incluirse «Cuando no se tengan por ciertos los hechos alegados por los interesados»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 77 establece que asimismo, cuando lo considere necesario, el instructor, a petición de los interesados, podrá decidir la apertura de un período extraordinario de prueba por un plazo no superior a diez días. Esa previsión conduce a «De 10 a 30 días».",
      "descartes": {
        "a": "Para «Por un plazo», la alternativa A utiliza «10», pero la previsión aplicable fija «10 / 30».",
        "c": "Para «Por un plazo», la alternativa C utiliza «10 / 15», pero la previsión aplicable fija «10 / 30»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 77, cuando la Administración no tenga por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo exija. Por eso encaja «El órgano que tramita el procedimiento».",
      "descartes": {
        "b": "En «Acuerda la apertura del trámite de prueba», la alternativa B introduce «resuelve» donde la norma dispone «tramita».",
        "c": "En «Acuerda la apertura del trámite de prueba», la alternativa C introduce «Depende de los casos» donde la norma dispone «El órgano que tramita el procedimiento»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 77 es el instructor del procedimiento sólo podrá rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resolución motivada. En este supuesto se ajusta a «Podrá rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias».",
      "descartes": {
        "a": "En «El instructor del procedimiento», la alternativa A introduce «Nunca podrá rechazar pruebas propuestas por los interesados» donde la norma dispone «Podrá rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias».",
        "b": "En «El instructor del procedimiento», la alternativa B introduce «que propongan los interesados, si suponen un gasto público excesivo» donde la norma dispone «propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 77 dispone que en los procedimientos de carácter sancionador, los hechos declarados probados por resoluciones judiciales penales firmes vincularán a las Administraciones Públicas respecto de los procedimientos sancionadores que substancien. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En los procedimientos de carácter sancionador las Administraciones respecto a los mismos quedan vinculados a…», la alternativa A introduce «definitivas» donde la norma dispone «firmes».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Resoluciones judiciales penales firmes» sí está respaldada por el artículo 77."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 77 establece que harán prueba de los hechos salvo que se acredite lo contrario. Esa previsión conduce a «Harán prueba de los hechos salvo que se acredite lo contrario».",
      "descartes": {
        "a": "En «Los documentos formalizados por los funcionarios que tengan la condición de autoridad y en los que se recojan…», la alternativa A introduce «cuando se acredite lo que ellos señalan» donde la norma dispone «salvo que se acredite lo contrario».",
        "c": "En «Los documentos formalizados por los funcionarios que tengan la condición de autoridad y en los que se recojan…», la alternativa C introduce «siempre que dichos documentos se hayan sometido a su acreditación» donde la norma dispone «de los hechos salvo que se acredite lo contrario»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 77, cuando la prueba consista en la emisión de un informe de un órgano administrativo, organismo público o Entidad de derecho público, se entenderá que éste tiene carácter preceptivo. Por eso encaja «Preceptivo».",
      "descartes": {
        "b": "En «Cuando la prueba consista en la emisión de un informe de un órgano administrativo», la alternativa B introduce «Facultativo» donde la norma dispone «Preceptivo».",
        "c": "En «Cuando la prueba consista en la emisión de un informe de un órgano administrativo», la alternativa C introduce «Vinculante. © Creado por IVOT. Prohibida la reproducción parcial o total» donde la norma dispone «Preceptivo»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(75),
    "2": articleReference(75),
    "3": articleReference(75),
    "4": articleReference(75),
    "5": articleReference(75),
    "6": articleReference(75),
    "7": articleReference(76),
    "8": articleReference(76),
    "9": articleReference(76),
    "10": articleReference(76),
    "11": articleReference(76),
    "12": articleReference(76),
    "13": articleReference(76),
    "14": articleReference(77),
    "15": articleReference(77),
    "16": articleReference(77),
    "17": articleReference(77),
    "18": articleReference(77),
    "19": articleReference(77),
    "20": articleReference(77),
    "21": articleReference(77),
  },
});
