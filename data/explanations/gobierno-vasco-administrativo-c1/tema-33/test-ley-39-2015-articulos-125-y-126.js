import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-125-y-126",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 125, contra los actos firmes en vía administrativa podrá interponerse el recurso extraordinario de revisión ante el órgano administrativo que los dictó, que también será el competente para su resolución, cuando concurra alguna de las circunstancias siguientes. Por eso encaja «Actos firmes en vía administrativa».",
      "descartes": {
        "a": "En «El recurso de revisión se plantea», la alternativa A introduce «a todos los efectos» donde la norma dispone «en vía administrativa».",
        "c": "En «El recurso de revisión se plantea», la alternativa C introduce «que agoten la» donde la norma dispone «firmes en»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 125 es contra los actos firmes en vía administrativa podrá interponerse el recurso extraordinario de revisión ante el órgano administrativo que los dictó, que también será el competente para su resolución, cuando concurra alguna de las circunstancias siguientes. En este supuesto se ajusta a «El órgano que dicto el acto».",
      "descartes": {
        "b": "En «El recurso de revisión se recurre ante», la alternativa B introduce «superior al que lo dicto» donde la norma dispone «que dicto el acto».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano superior al que lo dicto» no expresa la regla que el artículo 125 aplica a «El recurso de revisión se recurre ante»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 125 dispone que que al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La primera causa por la que se puede interponer el recurso es», la alternativa A introduce «derecho,» donde la norma dispone «hecho,».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Que al dictarlos se hubiera incurrido en un error de derecho» no expresa la regla que el artículo 125 aplica a «La primera causa por la que se puede interponer el recurso es»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 125 establece que el recurso extraordinario de revisión se interpondrá, cuando se trate de la causa a) del apartado anterior, dentro del plazo de cuatro años siguientes a la fecha de la notificación de la resolución impugnada. Esa previsión conduce a «4 años desde que se notifico el acto objeto de recurso».",
      "descartes": {
        "a": "Para «El plazo para interponerlo por esta primera causa será de», la alternativa A utiliza «3», pero la previsión aplicable fija «4».",
        "b": "En «El plazo para interponerlo por esta primera causa será de», la alternativa B introduce «dicto» donde la norma dispone «notifico»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 125 establece que el recurso extraordinario de revisión se interpondrá, cuando se trate de la causa a) del apartado anterior, dentro del plazo de cuatro años siguientes a la fecha de la notificación de la resolución impugnada. Ninguna de las restantes alternativas recoge esa regulación de forma válida.",
      "descartes": {
        "a": "La alternativa A vincula «La segunda causa por la que se puede interponer el recurso es» con «Que aparezcan documentos de valor esencial para la resolución del asunto que evidencien el error de la resolución recurrida»; el artículo 125 lo relaciona con «Ninguna es correcta».",
        "b": "La alternativa B vincula «La segunda causa por la que se puede interponer el recurso es» con «Que aparezcan documentos de valor esencial para la resolución del asunto que evidencien el error de la resolución recurrida»; el artículo 125 lo relaciona con «Ninguna es correcta»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 125 es 3 meses desde que aparecen esos documentos. En este supuesto se ajusta a «3 meses desde que aparecen esos documentos».",
      "descartes": {
        "b": "Para «El plazo para interponerlo por esta segunda causa será de», la alternativa B utiliza «4», pero la previsión aplicable fija «3».",
        "c": "Para «El plazo para interponerlo por esta segunda causa será de», la alternativa C utiliza «4», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 125 comprende «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial…» y «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial…». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial anterior a la…», pero resulta incompleta porque también debe incluirse «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial posterior a la…».",
        "b": "La alternativa B recoge «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial posterior a la…», pero resulta incompleta porque también debe incluirse «Que en la resolución hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial anterior a la…»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 125 establece que 3 meses desde la firmeza de la sentencia. Esa previsión conduce a «3 meses desde la firmeza de la sentencia».",
      "descartes": {
        "a": "En «El plazo para interponerlo por esta tercera causa será de», la alternativa A introduce «que se dicta la primera» donde la norma dispone «la firmeza de la».",
        "c": "Para «El plazo para interponerlo por esta tercera causa será de», la alternativa C utiliza «4», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 125, que la resolución se hubiese dictado como consecuencia de prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible y se haya declarado así en virtud de sentencia judicial firme. Por eso encaja «Que la resolución se hubiese dictado por prevaricación».",
      "descartes": {
        "b": "En «La cuarta causa por la que se puede interponer el recurso es», la alternativa B introduce «resolución administrativa» donde la norma dispone «sentencia judicial».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Que la resolución se hubiese dictado por prevaricación» no expresa la regla que el artículo 125 aplica a «La cuarta causa por la que se puede interponer el recurso es»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 125 es el recurso extraordinario de revisión se interpondrá; cuando se trate de la causa a) del apartado anterior; el plazo será de tres meses a contar desde el conocimiento de los documentos o desde que la sentencia judicial quedó firme. En este supuesto se ajusta a «3 meses».",
      "descartes": {
        "a": "Para «Por esta tercera causa el plazo para interponer el recurso es de», la alternativa A utiliza «1», pero la previsión aplicable fija «3».",
        "b": "Para «Por esta tercera causa el plazo para interponer el recurso es de», la alternativa B utiliza «4», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 126 dispone que el órgano competente para la resolución del recurso podrá acordar motivadamente la inadmisión a trámite. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «El órgano competente para resolver el recurso» con «En ningún caso puede inadmitir a trámite el recurso»; el artículo 126 lo relaciona con «Puede inadmitir a trámite el recurso».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Puede inadmitir a trámite el recurso» sí está respaldada por el artículo 126."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 126 establece que el órgano competente para la resolución del recurso podrá acordar motivadamente la inadmisión a trámite. Esa previsión conduce a «No necesita dictamen de la respuesta anterior».",
      "descartes": {
        "a": "En «En el caso de que se pueda inadmitir», la alternativa A introduce «Necesita el dictamen del Consejo de Estado u órgano consultivo de la Comunidad Autónoma» donde la norma dispone «No necesita dictamen de la respuesta anterior».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «No necesita dictamen de la respuesta anterior» sí está respaldada por el artículo 126."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 126, transcurrido el plazo de tres meses desde la interposición del recurso extraordinario de revisión sin haberse dictado y notificado la resolución, se entenderá desestimado, quedando expedita la vía jurisdiccional contencioso-administrativa. Por eso encaja «3 meses».",
      "descartes": {
        "a": "Para «El recurso de revisión se tendrá que resolver y notificar en el plazo máximo de», la alternativa A utiliza «1», pero la previsión aplicable fija «3».",
        "b": "Para «El recurso de revisión se tendrá que resolver y notificar en el plazo máximo de», la alternativa B utiliza «4», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 126 establece que el recurso extraordinario de revisión se entiende desestimado si transcurren tres meses sin resolución notificada. La falta de respuesta produce, por tanto, silencio negativo.",
      "descartes": {
        "b": "En «En el caso de que no se resuelve y notifique en dicho plazo», la alternativa B introduce «estima» donde la norma dispone «desestima».",
        "c": "En «En el caso de que no se resuelve y notifique en dicho plazo», la alternativa C introduce «caduca» donde la norma dispone «desestima el recurso mediante silencio administrativo»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 125 dispone que contra los actos firmes en vía administrativa podrá interponerse el recurso extraordinario de revisión ante el órgano administrativo que los dictó, que también será el competente para su resolución, cuando concurra alguna de las circunstancias siguientes. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Tras el recurso de revisión se podrá poner el siguiente recurso administrativo», la alternativa A introduce «El de reposición» donde la norma dispone «No cabe recurso administrativo alguno».",
        "b": "En «Tras el recurso de revisión se podrá poner el siguiente recurso administrativo», la alternativa B introduce «Otro de revisión» donde la norma dispone «No cabe recurso administrativo alguno»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 125 establece que contra los actos firmes en vía administrativa podrá interponerse el recurso extraordinario de revisión ante el órgano administrativo que los dictó, que también será el competente para su resolución, cuando concurra alguna de las circunstancias siguientes. Esa previsión conduce a «El Contencioso-Administrativo».",
      "descartes": {
        "a": "En «¿Qué recurso se puede plantear contra la resolución de un recurso de revisión», la alternativa A introduce «de reposición» donde la norma dispone «Contencioso-Administrativo».",
        "b": "En «¿Qué recurso se puede plantear contra la resolución de un recurso de revisión», la alternativa B introduce «Otro de revisión» donde la norma dispone «El Contencioso-Administrativo»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 126, el órgano al que corresponde conocer del recurso extraordinario de revisión debe pronunciarse no sólo sobre la procedencia del recurso, sino también, en su caso, sobre el fondo de la cuestión resuelta por el acto recurrido. Por eso encaja «El órgano que dicto el acto que se está recurriendo».",
      "descartes": {
        "a": "En «¿Quién resuelve el recurso de revisión», la alternativa A introduce «superior jerárquico al que dicto el acto» donde la norma dispone «órgano que dicto el acto que se está recurriendo».",
        "c": "En «¿Quién resuelve el recurso de revisión», la alternativa C introduce «La jurisdicción contencioso-administrativa» donde la norma dispone «El órgano que dicto el acto que se está recurriendo»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El artículo 125 regula expresamente el recurso extraordinario de revisión. Su carácter extraordinario se debe a que solo procede contra actos firmes y por causas tasadas.",
      "descartes": {
        "a": "En «¿Qué carácter tiene el recurso de revisión», la alternativa A introduce «Ordinario» donde la norma dispone «Extraordinario».",
        "b": "En «¿Qué carácter tiene el recurso de revisión», la alternativa B introduce «Potestativo» donde la norma dispone «Extraordinario»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 126 permite inadmitir motivadamente el recurso extraordinario de revisión cuando no se basa en una causa del artículo 125.1 o cuando ya se desestimaron recursos sustancialmente iguales.",
      "descartes": {
        "b": "En «¿Cuál es el recurso que se puede inadmitir a trámite», la alternativa B introduce «alzada» donde la norma dispone «revisión».",
        "c": "En «¿Cuál es el recurso que se puede inadmitir a trámite», la alternativa C introduce «reposición» donde la norma dispone «revisión»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 125 establece que el recurso extraordinario de revisión se interpondrá; cuando se trate de la causa a) del apartado anterior; dentro del plazo de cuatro años siguientes a la fecha de la notificación de la resolución impugnada. En los demás casos. Esa previsión conduce a «El de revisión».",
      "descartes": {
        "b": "En «¿Cuál es el recurso que se tiene que interponer cuando se den unos casos tasados», la alternativa B introduce «alzada» donde la norma dispone «revisión».",
        "c": "En «¿Cuál es el recurso que se tiene que interponer cuando se den unos casos tasados», la alternativa C introduce «reposición» donde la norma dispone «revisión»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 114 sitúa fuera de la alzada las resoluciones de órganos sin superior jerárquico. La teoría aporta ese criterio general, aunque no concreta de forma expresa la posición del alcalde utilizada en el supuesto.",
      "descartes": {
        "a": "En «En el siguiente supuesto ¿Qué recurso se tiene que interponer? Se deniega una licencia por el Alcalde del…», la alternativa A introduce «de reposición» donde la norma dispone «enunciado no es correcto».",
        "b": "En «En el siguiente supuesto ¿Qué recurso se tiene que interponer? Se deniega una licencia por el Alcalde del…», la alternativa B introduce «de revisión» donde la norma dispone «enunciado no es correcto»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El artículo 123 permite interponer reposición ante el mismo órgano que dictó un acto que pone fin a la vía administrativa. La teoría respalda la clase de recurso, pero la aplicación al alcalde parte del contexto municipal que no desarrolla esta ficha.",
      "descartes": {
        "b": "En «En el caso de que no fuese correcto el enunciado ¿Qué recurso se puede plantear contra dicha denegación», la alternativa B introduce «revisión» donde la norma dispone «reposición».",
        "c": "En «En el caso de que no fuese correcto el enunciado ¿Qué recurso se puede plantear contra dicha denegación», la alternativa C introduce «Ninguno» donde la norma dispone «El de reposición»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 125 permite el recurso extraordinario de revisión contra actos firmes únicamente cuando concurre alguna de sus causas tasadas. La ficha teórica no concreta si el supuesto cumple alguna de ellas, por lo que la posibilidad queda condicionada.",
      "descartes": {
        "a": "En «Y contra la resolución del de la pregunta anterior. ¿Qué recurso administrativo se puede plantear», la alternativa A introduce «reposición» donde la norma dispone «revisión».",
        "c": "En «Y contra la resolución del de la pregunta anterior. ¿Qué recurso administrativo se puede plantear», la alternativa C introduce «Ninguno» donde la norma dispone «El de revisión»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 124 establece que el plazo máximo para dictar y notificar la resolución del recurso será de un mes. Esa previsión conduce a «1 mes».",
      "descartes": {
        "b": "Para «¿Qué plazo habría para resolver el de la pregunta 22», la alternativa B utiliza «2», pero la previsión aplicable fija «1».",
        "c": "Para «¿Qué plazo habría para resolver el de la pregunta 22», la alternativa C utiliza «3», pero la previsión aplicable fija «1»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-33-revision-actos-recursos-administrativos",
  references: {
    "1": articleReference(125),
    "2": articleReference(125),
    "3": articleReference(125),
    "4": articleReference(125),
    "5": articleReference(125),
    "6": articleReference(125),
    "7": articleReference(125),
    "8": articleReference(125),
    "9": articleReference(125),
    "10": articleReference(125),
    "11": articleReference(126),
    "12": articleReference(126),
    "13": articleReference(126),
    "14": articleReference(126),
    "15": articleReference(125),
    "16": articleReference(125),
    "17": articleReference(126),
    "18": articleReference(125),
    "19": articleReference(126),
    "20": articleReference(125),
    "21": articleReference(114, { scope: "contextual" }),
    "22": articleReference(123, { scope: "contextual" }),
    "23": articleReference(125, { scope: "contextual" }),
    "24": articleReference(124),
  },
});
