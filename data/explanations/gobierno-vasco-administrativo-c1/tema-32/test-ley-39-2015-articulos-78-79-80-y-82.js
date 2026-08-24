import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-78-79-80-y-82",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 78, la Administración comunicará a los interesados, con antelación suficiente, el inicio de las actuaciones necesarias para la realización de las pruebas que hayan sido admitidas. Por eso encaja «Con antelación suficiente».",
      "descartes": {
        "a": "En «La Administración comunicará a los interesados el inicio de las actuaciones necesarias para la realización de…», la alternativa A introduce «una antelación de 10 días» donde la norma dispone «antelación suficiente».",
        "b": "En «La Administración comunicará a los interesados el inicio de las actuaciones necesarias para la realización de…», la alternativa B introduce «una antelación de 15 días» donde la norma dispone «antelación suficiente»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 78 es en la notificación se consignará el lugar, fecha y hora en que se practicará la prueba, con la advertencia, en su caso, de que el interesado puede nombrar técnicos para que le asistan. En este supuesto se ajusta a «De que el interesado puede nombrar técnicos para que le asistan».",
      "descartes": {
        "a": "En «En la notificación se consignará la advertencia, en su caso», la alternativa A introduce «asesores» donde la norma dispone «técnicos».",
        "b": "En «En la notificación se consignará la advertencia, en su caso», la alternativa B introduce «interesado deberá nombrar asesores» donde la norma dispone «el interesado puede nombrar técnicos»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 78 recoge las dos previsiones: «Cuando se hayan hecho a petición del interesado» y «Cuando impliquen gastos que la administración no deba soportar». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando se hayan hecho a petición del interesado», pero resulta incompleta porque también debe incluirse «Cuando impliquen gastos que la administración no deba soportar».",
        "b": "La alternativa B recoge «Cuando impliquen gastos que la administración no deba soportar», pero resulta incompleta porque también debe incluirse «Cuando se hayan hecho a petición del interesado»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 78 establece que en los casos en que, a petición del interesado, deban efectuarse pruebas cuya realización implique gastos que no deba soportar la Administración, ésta podrá exigir el anticipo de los mismos, a reserva de la liquidación definitiva, una vez practicada la prueba. Esa previsión conduce a «La Administración podrá exigir el anticipo de dichos gastos».",
      "descartes": {
        "a": "En «En dicho caso», la alternativa A introduce «deberá» donde la norma dispone «podrá».",
        "b": "La alternativa B vincula «En dicho caso» con «La Administración nunca podrá exigir el anticipo de dichos gastos»; el artículo 78 lo relaciona con «La Administración podrá exigir el anticipo de dichos gastos»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 78, en los casos en que, a petición del interesado, deban efectuarse pruebas cuya realización implique gastos que no deba soportar la Administración, ésta podrá exigir el anticipo de los mismos, a reserva de la liquidación definitiva, una vez practicada la prueba. Por eso encaja «Una vez practicada la prueba».",
      "descartes": {
        "b": "En «La liquidación definitiva se efectúa», la alternativa B introduce «Antes de la práctica de» donde la norma dispone «Una vez practicada».",
        "c": "En «La liquidación definitiva se efectúa», la alternativa C introduce «Nunca se puede hacer la liquidación definitiva» donde la norma dispone «Una vez practicada la prueba»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 79 es a efectos de la resolución del procedimiento; se solicitarán aquellos informes que sean preceptivos por las disposiciones legales; y los que se juzguen necesarios para resolver. En este supuesto se ajusta a «Se solicitarán aquellos informes que se juzguen necesarios para resolver porque se estiman convenientes».",
      "descartes": {
        "a": "En «A efectos de la resolución del procedimiento», la alternativa A introduce «sean preceptivos» donde la norma dispone «se juzguen necesarios para resolver».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Se solicitarán aquellos informes que sean preceptivos porque se estiman convenientes» no expresa la regla que el artículo 79 aplica a «A efectos de la resolución del procedimiento»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 80 dispone que salvo disposición expresa en contrario, los informes serán facultativos y no vinculantes. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Salvo disposición expresa en contrario», la alternativa A introduce «preceptivos y» donde la norma dispone «facultativos y no».",
        "c": "En «Salvo disposición expresa en contrario», la alternativa C introduce «preceptivos» donde la norma dispone «facultativos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 80 establece que 10 días. Esa previsión conduce a «10 días».",
      "descartes": {
        "b": "Para «Los informes serán evacuados, con carácter general, en el plazo de», la alternativa B utiliza «15», pero la previsión aplicable fija «10».",
        "c": "Para «Los informes serán evacuados, con carácter general, en el plazo de», la alternativa C utiliza «30», pero la previsión aplicable fija «10»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 80 recoge las dos previsiones: «Un plazo mayor» y «Un plazo menor». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Un plazo mayor», pero resulta incompleta porque también debe incluirse «Un plazo menor».",
        "b": "La alternativa B recoge «Un plazo menor», pero resulta incompleta porque también debe incluirse «Un plazo mayor»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 80 es de no emitirse el informe en el plazo señalado. En este supuesto se ajusta a «Se podrán proseguir las actuaciones».",
      "descartes": {
        "a": "En «De no emitirse el informe en el plazo señalado, con carácter general», la alternativa A introduce «paralizarán las sucesivas» donde la norma dispone «podrán proseguir las».",
        "c": "En «De no emitirse el informe en el plazo señalado, con carácter general», la alternativa C introduce «dará por finalizado el procedimiento» donde la norma dispone «podrán proseguir las actuaciones»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 80 dispone que de no emitirse el informe en el plazo señalado; y sin perjuicio de la responsabilidad en que incurra el responsable de la demora; se podrán proseguir las actuaciones salvo cuando se trate de un informe preceptivo. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La respuesta de la pregunta anterior tiene una excepción», la alternativa B introduce «sea determinante para la resolución del procedimiento» donde la norma dispone «el informe sea preceptivo».",
        "c": "En «La respuesta de la pregunta anterior tiene una excepción», la alternativa C introduce «Se tienen que dar ambas circunstancias» donde la norma dispone «Que el informe sea preceptivo»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 80 establece que se podrán proseguir las actuaciones. Esa previsión conduce a «Se podrán proseguir las actuaciones».",
      "descartes": {
        "a": "En «y transcurre el plazo para evacuarlo», la alternativa A introduce «paralizarán las sucesivas» donde la norma dispone «podrán proseguir las».",
        "c": "En «y transcurre el plazo para evacuarlo», la alternativa C introduce «dará por finalizado el procedimiento» donde la norma dispone «podrán proseguir las actuaciones»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 80, el informe emitido fuera de plazo podrá no ser tenido en cuenta al adoptar la correspondiente resolución. Por eso encaja «Podrá no ser tenido en cuenta».",
      "descartes": {
        "a": "En «El informe de la pregunta anterior emitido fuera de plazo», la alternativa A introduce «No se tendrá en cuenta en ningún caso» donde la norma dispone «Podrá no ser tenido en cuenta».",
        "c": "En «El informe de la pregunta anterior emitido fuera de plazo», la alternativa C introduce «Deberá ser tenido en cuenta, en todo caso» donde la norma dispone «Podrá no ser tenido en cuenta»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 82 sitúa el trámite de audiencia una vez instruido el procedimiento y antes de redactar la propuesta de resolución. Así puede conocerse el expediente antes de la decisión.",
      "descartes": {
        "a": "En «El trámite de audiencia se abre», la alternativa A introduce «Antes de la instrucción y después de la ordenación» donde la norma dispone «Después de la instrucción y antes de la propuesta de resolución».",
        "c": "La alternativa C vincula «El trámite de audiencia se abre» con «Después de la instrucción y antes de la resolución»; el artículo 82 lo relaciona con «Después de la instrucción y antes de la propuesta de resolución»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 82 dispone que trámite de audiencia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «El trámite de audiencia tiene un plazo de», la alternativa A utiliza «10», pero la previsión aplicable fija «10 / 15».",
        "b": "Para «El trámite de audiencia tiene un plazo de», la alternativa B utiliza «10 / 30», pero la previsión aplicable fija «10 / 15»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "La regulación del artículo 82 comprende «Pueda presentar alegaciones» y «Presentar documentos y justificaciones que estimen pertinentes». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Pueda presentar alegaciones», pero resulta incompleta porque también debe incluirse «Presentar documentos y justificaciones que estimen pertinentes».",
        "b": "La alternativa B recoge «Presentar documentos y justificaciones que estimen pertinentes», pero resulta incompleta porque también debe incluirse «Pueda presentar alegaciones»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 82, si antes del vencimiento del plazo los interesados manifiestan su decisión de no efectuar alegaciones ni aportar nuevos documentos o justificaciones, se tendrá por realizado el trámite. Por eso encaja «Puede antes del vencimiento del plazo manifestar su decisión de no realizar nada».",
      "descartes": {
        "a": "En «El interesado», la alternativa A introduce «manifestar su voluntad de que no se abra tal trámite» donde la norma dispone «antes del vencimiento del plazo manifestar su decisión de no realizar nada».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Puede manifestar su voluntad de que no se abra tal trámite» no expresa la regla que el artículo 82 aplica a «El interesado»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 82 es se podrá prescindir del trámite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado. En este supuesto se ajusta a «Cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado».",
      "descartes": {
        "a": "La alternativa A vincula «Se podrá prescindir del trámite de audiencia» con «Cuando el interesado así lo solicite»; el artículo 82 lo relaciona con «Cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros hechos ni otras alegaciones y pruebas que las…».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Cuando el interesado así lo solicite» no expresa la regla que el artículo 82 aplica a «Se podrá prescindir del trámite de audiencia»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 75 dispone que los actos de instrucción que requieran la intervención de los interesados habrán de practicarse en la forma que resulte más conveniente para ellos y sea compatible, en la medida de lo posible, con sus obligaciones laborales o profesionales. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Habrán de practicarse en la forma que resulte más cómoda para los interesados y sea compatible» con «Los actos de instrucción»; el artículo 75 lo relaciona con «Los actos de instrucción que requieran la intervención de los interesados».",
        "c": "En «Habrán de practicarse en la forma que resulte más cómoda para los interesados y sea compatible», la alternativa C introduce «señale la Administración» donde la norma dispone «requieran la intervención de los interesados»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 75 recoge tanto «De contradicción» como «Igualdad de los interesados». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «De contradicción», pero resulta incompleta porque también debe incluirse «Igualdad de los interesados».",
        "b": "La alternativa B recoge «Igualdad de los interesados», pero resulta incompleta porque también debe incluirse «De contradicción»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(78),
    "2": articleReference(78),
    "3": articleReference(78),
    "4": articleReference(78),
    "5": articleReference(78),
    "6": articleReference(79),
    "7": articleReference(80),
    "8": articleReference(80),
    "9": articleReference(80),
    "10": articleReference(80),
    "11": articleReference(80),
    "12": articleReference(80),
    "13": articleReference(80),
    "14": articleReference(82),
    "15": articleReference(82),
    "16": articleReference(82),
    "17": articleReference(82),
    "18": articleReference(82),
    "19": articleReference(75),
    "20": articleReference(75),
  },
});
