import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-91-a-95",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 91, el dictamen al que se refiere el artículo 81.2 o. Por eso encaja «En su caso, una vez recibido el dictamen del Consejo de Estado u órgano autonómico equivalente de la comunidad autónoma».",
      "descartes": {
        "a": "En «En los procedimientos de responsabilidad patrimonial el órgano competente resolverá o someterá la propuesta…», la alternativa A introduce «todo caso, una vez finalizado el trámite de audiencia» donde la norma dispone «su caso, una vez recibido el dictamen del Consejo de Estado u órgano autonómico equivalente de la comunidad autónoma».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «En su caso, una vez recibido el dictamen del Consejo de Estado u órgano autonómico equivalente de la comunidad autónoma» sí está respaldada por el artículo 91."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 91 es cuando no se estimase procedente formalizar la propuesta de terminación convencional, el órgano competente resolverá en los términos previstos en el apartado siguiente. En este supuesto se ajusta a «El órgano competente resolverá».",
      "descartes": {
        "a": "En «Cuando no se estimase procedente formalizar la propuesta de terminación convencional», la alternativa A introduce «Se archivarán las actuaciones realizadas, sin más trámite» donde la norma dispone «El órgano competente resolverá».",
        "c": "En «Cuando no se estimase procedente formalizar la propuesta de terminación convencional», la alternativa C introduce «Se retrotraerán las actuaciones al momento previo al inicio de las negociaciones» donde la norma dispone «El órgano competente resolverá»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 91 dispone que será necesario que la resolución se pronuncie sobre la existencia o no de la relación de causalidad entre el funcionamiento del servicio público y la lesión producida y; sobre la valoración del daño causado; la cuantía y el modo de la indemnización. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «sobre la valoración del daño causado», la alternativa B introduce «terminación convencional en» donde la norma dispone «resolución con la que termina».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La terminación convencional en un procedimiento de responsabilidad patrimonial» no expresa la regla que el artículo 91 aplica a «sobre la valoración del daño causado»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 91 fija en seis meses el plazo máximo para resolver y notificar los procedimientos de responsabilidad patrimonial. Transcurrido ese tiempo opera el efecto previsto para la falta de resolución expresa.",
      "descartes": {
        "a": "Para «En los procedimientos de responsabilidad patrimonial el plazo máximo para resolver y notificar es de», la alternativa A utiliza «3», pero la previsión aplicable fija «6».",
        "b": "Para «En los procedimientos de responsabilidad patrimonial el plazo máximo para resolver y notificar es de», la alternativa B utiliza «4», pero la previsión aplicable fija «6»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 91, transcurridos seis meses desde que se inició el procedimiento sin que haya recaído y se notifique resolución expresa o, en su caso, se haya formalizado el acuerdo, podrá entenderse que la resolución es contraria a la indemnización del particular. Por eso encaja «Podrá entenderse que la resolución es contraria a la indemnización del particular».",
      "descartes": {
        "a": "En «Si en el plazo anterior no ha recaído y notificado resolución expresa o», la alternativa A introduce «favorable» donde la norma dispone «contraria».",
        "c": "En «Si en el plazo anterior no ha recaído y notificado resolución expresa o», la alternativa C introduce «el procedimiento ha caducado» donde la norma dispone «la resolución es contraria a la indemnización del particular»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 92 es el Ministro respectivo o por el Consejo de Ministros. En este supuesto se ajusta a «El Ministro respectivo o por el Consejo de Ministros».",
      "descartes": {
        "b": "En «En el ámbito de la Administración General del Estado», la alternativa B introduce «Secretario de Estado» donde la norma dispone «Ministro».",
        "c": "En «En el ámbito de la Administración General del Estado», la alternativa C introduce «Presidente del Gobierno» donde la norma dispone «Ministro respectivo»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 92 comprende «En el ámbito autonómico» y «En el ámbito local». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «En el ámbito autonómico», pero resulta incompleta porque también debe incluirse «En el ámbito local».",
        "b": "La alternativa B recoge «En el ámbito local», pero resulta incompleta porque también debe incluirse «En el ámbito autonómico»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 92 establece que en el caso de las Entidades de Derecho Público, las normas que determinen su régimen jurídico podrán establecer los órganos a quien corresponde la resolución de los procedimientos de responsabilidad patrimonial. Esa previsión conduce a «Las normas que determinen su régimen jurídico podrán establecer los órganos a quien corresponde la resolución de los procedimientos de responsabilidad patrimonial».",
      "descartes": {
        "b": "En «En el caso de las Entidades de Derecho Público», la alternativa B introduce «previstas en esta ley establecerán, en todo caso, los órganos a quien corresponda» donde la norma dispone «que determinen su régimen jurídico podrán establecer los órganos a quien corresponde».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Las normas que determinen su régimen jurídico podrán establecer los órganos a quien corresponde la resolución de los procedimientos de…» sí está respaldada por el artículo 92."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 93, en los procedimientos iniciados de oficio, la Administración podrá desistir, motivadamente, en los supuestos y con los requisitos previstos en las Leyes. Por eso encaja «En los procedimientos iniciados de oficio».",
      "descartes": {
        "b": "En «La Administración podrá desistir, motivadamente», la alternativa B introduce «a instancia de parte» donde la norma dispone «de oficio».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «En los procedimientos iniciados a instancia de parte» no expresa la regla que el artículo 93 aplica a «La Administración podrá desistir, motivadamente»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 94 es todo interesado podrá desistir de su solicitud o, cuando ello no esté prohibido por el ordenamiento jurídico, renunciar a sus derechos. En este supuesto se ajusta a «De la solicitud».",
      "descartes": {
        "b": "En «Se puede desistir por parte del interesado», la alternativa B introduce «sus derechos» donde la norma dispone «la solicitud».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De sus derechos» no expresa la regla que el artículo 94 aplica a «Se puede desistir por parte del interesado»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 94 dispone que todo interesado podrá desistir de su solicitud o, cuando ello no esté prohibido por el ordenamiento jurídico, renunciar a sus derechos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Se puede renunciar por parte del interesado», la alternativa A introduce «la solicitud» donde la norma dispone «sus derechos».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De la solicitud» no expresa la regla que el artículo 94 aplica a «Se puede renunciar por parte del interesado»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 94 establece que si el escrito de iniciación se hubiera formulado por dos o más interesados, el desistimiento o la renuncia sólo afectará a aquellos que la hubiesen formulado. Esa previsión conduce a «El desistimiento o la renuncia afectará a aquéllos que la hubieran formulado».",
      "descartes": {
        "a": "En «Si el escrito de iniciación se hubiera formulado por dos o más interesados», la alternativa A introduce «todos los interesados» donde la norma dispone «aquéllos que la hubieran formulado».",
        "c": "En «Si el escrito de iniciación se hubiera formulado por dos o más interesados», la alternativa C introduce «no afectará a ninguno porque se requiere unanimidad» donde la norma dispone «afectará a aquéllos que la hubieran formulado»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 94, tanto el desistimiento como la renuncia podrán hacerse por cualquier medio que permita su constancia, siempre que incorpore las firmas que correspondan de acuerdo con lo previsto en la normativa aplicable. Por eso encaja «Se deberá efectuar por cualquier medio que permita su constancia».",
      "descartes": {
        "a": "En «Tanto el desistimiento como la renuncia», la alternativa A introduce «escrito» donde la norma dispone «cualquier medio que permita su constancia».",
        "c": "En «Tanto el desistimiento como la renuncia», la alternativa C introduce «Nunca se puede efectuar de forma verbal» donde la norma dispone «Se deberá efectuar por cualquier medio que permita su constancia»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 94 es la Administración aceptará de plano el desistimiento o la renuncia; y declarará concluso el procedimiento salvo que; instasen éstos su continuación en el plazo de diez días desde que fueron notificados del desistimiento o renuncia. En este supuesto se ajusta a «Siempre aceptará de plano el desistimiento o la renuncia».",
      "descartes": {
        "b": "En «La Administración», la alternativa B introduce «Podrá rechazar en determinados supuestos» donde la norma dispone «Siempre aceptará de plano».",
        "c": "En «La Administración», la alternativa C introduce «Podrá en todo caso rechazar» donde la norma dispone «Siempre aceptará de plano»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 94 dispone que la Administración aceptará de plano el desistimiento o la renuncia; y declarará concluso el procedimiento salvo que; instasen éstos su continuación en el plazo de diez días desde que fueron notificados del desistimiento o renuncia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Si hubiese terceros interesados» con «En todo caso continuará el procedimiento»; el artículo 94 lo relaciona con «Continuará siempre el procedimiento que estos se personen en el plazo de 10 días desde que se les a notificado el desistimiento e instan la…».",
        "c": "La alternativa C vincula «Si hubiese terceros interesados» con «Nunca continuará el procedimiento porque no tienen la condición de interesados»; el artículo 94 lo relaciona con «Continuará siempre el procedimiento que estos se personen en el plazo de 10 días desde que se les a notificado el desistimiento e instan la…»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 94 establece que la Administración podrá limitar los efectos del desistimiento o la renuncia al interesado y seguirá el procedimiento. Esa previsión conduce a «La Administración podrá limitar los efectos del desistimiento o la renuncia al interesado y seguirá el procedimiento».",
      "descartes": {
        "a": "En «Si la cuestión suscitada por la incoación del procedimiento entrañase interés general o fuera conveniente…», la alternativa A introduce «rechazará el desistimiento o la renuncia del» donde la norma dispone «podrá limitar los efectos del desistimiento o la renuncia al».",
        "c": "En «Si la cuestión suscitada por la incoación del procedimiento entrañase interés general o fuera conveniente…», la alternativa C introduce «se iniciará un procedimiento de oficio» donde la norma dispone «seguirá el procedimiento»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 95, en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento. Por eso encaja «En procedimientos iniciados a instancia de parte».",
      "descartes": {
        "b": "En «La caducidad que regula la Ley 39/2015, del 01 de octubre después del desistimiento y la renuncia es», la alternativa B introduce «de oficio» donde la norma dispone «a instancia de parte».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «En procedimientos iniciados de oficio» no expresa la regla que el artículo 95 aplica a «La caducidad que regula la Ley 39/2015, del 01 de octubre después del desistimiento y la renuncia es»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 95 es la caducidad no producirá por sí sola la prescripción de las acciones del particular o de la Administración. En este supuesto se ajusta a «El interesado debe paralizar el procedimiento durante un plazo».",
      "descartes": {
        "b": "En «En dicho caso para que se caduque el procedimiento», la alternativa B introduce «La administración» donde la norma dispone «El interesado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La administración debe paralizar el procedimiento durante un plazo» no expresa la regla que el artículo 95 aplica a «En dicho caso para que se caduque el procedimiento»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 95 dispone que en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «Dicho plazo es de», la alternativa A utiliza «1», pero la previsión aplicable fija «Tres».",
        "b": "Para «Dicho plazo es de», la alternativa B utiliza «2», pero la previsión aplicable fija «Tres»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 95 establece que consumido este plazo sin que el particular requerido realice las actividades necesarias para reanudar la tramitación, la Administración acordará el archivo de las actuaciones, notificándoselo al interesado. Esa previsión conduce a «La Administración acuerda el archivo de las actuaciones con una resolución».",
      "descartes": {
        "a": "En «Si transcurre ese plazo», la alternativa A introduce «sin necesidad de» donde la norma dispone «con una».",
        "c": "En «Si transcurre ese plazo», la alternativa C introduce «continúa en todo caso de oficio el procedimiento, excluyendo del mismo al interesado» donde la norma dispone «acuerda el archivo de las actuaciones con una resolución»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 95, no podrá acordarse la caducidad por la simple inactividad del interesado en la cumplimentación de trámites, siempre que no sean indispensables para dictar resolución. Dicha inactividad no tendrá otro efecto que la pérdida de su derecho al referido trámite. Por eso encaja «La caducidad conlleva a la obligación de dictar una resolución que se notificará al interesado».",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «Contra la caducidad no cabe recurso alguno» donde la norma dispone «La caducidad conlleva a la obligación de dictar una resolución que se notificará al interesado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Contra la caducidad no cabe recurso alguno» no expresa la regla que el artículo 95 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 95 es en los procedimientos iniciados a solicitud del interesado, cuando se produzca su paralización por causa imputable al mismo, la Administración le advertirá que, transcurridos tres meses, se producirá la caducidad del procedimiento. En este supuesto se ajusta a «Indispensable para resolver».",
      "descartes": {
        "a": "En «Para que un procedimiento se caduque el trámite que tiene que efectuar el interesado es», la alternativa A introduce «Dispensable» donde la norma dispone «Indispensable».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Dispensable para resolver» no expresa la regla que el artículo 95 aplica a «Para que un procedimiento se caduque el trámite que tiene que efectuar el interesado es»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 95 establece que no podrá acordarse la caducidad por la simple inactividad del interesado en la cumplimentación de trámites, siempre que no sean indispensables para dictar resolución. Dicha inactividad no tendrá otro efecto que la pérdida de su derecho al referido trámite. Ninguna de las restantes alternativas recoge esa regulación de forma válida.",
      "descartes": {
        "a": "En «Toda inactividad del interesado en la cumplimentación de trámites conlleva», la alternativa A introduce «A la caducidad» donde la norma dispone «Ninguna es correcta».",
        "b": "En «Toda inactividad del interesado en la cumplimentación de trámites conlleva», la alternativa B introduce «A la pérdida de su derecho al referido trámite» donde la norma dispone «Ninguna es correcta»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 95 establece que la caducidad no producirá por sí sola la prescripción de las acciones del particular o de la Administración, pero los procedimientos caducados no interrumpirán el plazo de prescripción. Esa previsión conduce a «No producirá por sí sola la prescripción de las acciones del particular o de la administración».",
      "descartes": {
        "b": "La alternativa B vincula «La caducidad» con «Producirá por sí sola la prescripción de las acciones del particular o de la Administración»; el artículo 95 lo relaciona con «No producirá por sí sola la prescripción de las acciones del particular o de la administración».",
        "c": "En «La caducidad», la alternativa C introduce «pero sí las» donde la norma dispone «o»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 95, la caducidad no producirá por sí sola la prescripción de las acciones del particular o de la Administración, pero los procedimientos caducados no interrumpirán el plazo de prescripción. Por eso encaja «No interrumpen el plazo de prescripción».",
      "descartes": {
        "a": "La alternativa A vincula «Los procedimientos caducados» con «Interrumpen el plazo de prescripción»; el artículo 95 lo relaciona con «No interrumpen el plazo de prescripción».",
        "c": "La alternativa C vincula «Los procedimientos caducados» con «No interrumpen el plazo de prescripción cuando se inicia de oficio y sí si se ha iniciado de oficio»; el artículo 95 lo relaciona con «No interrumpen el plazo de prescripción»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 95 es podrá no ser aplicable la caducidad en el supuesto de que la cuestión suscitada afecte al interés general, o fuera conveniente sustanciarla para su definición y esclarecimiento. En este supuesto se ajusta a «Podrá no ser aplicable la caducidad».",
      "descartes": {
        "b": "En «Cuando la cuestión suscitada afecte al interés general», la alternativa B introduce «Nunca se aplicaría» donde la norma dispone «Podrá no ser aplicable».",
        "c": "En «Cuando la cuestión suscitada afecte al interés general», la alternativa C introduce «Se iniciaría un procedimiento de oficio» donde la norma dispone «Podrá no ser aplicable la caducidad»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(91),
    "2": articleReference(91),
    "3": articleReference(91),
    "4": articleReference(91),
    "5": articleReference(91),
    "6": articleReference(92),
    "7": articleReference(92),
    "8": articleReference(92),
    "9": articleReference(93),
    "10": articleReference(94),
    "11": articleReference(94),
    "12": articleReference(94),
    "13": articleReference(94),
    "14": articleReference(94),
    "15": articleReference(94),
    "16": articleReference(94),
    "17": articleReference(95),
    "18": articleReference(95),
    "19": articleReference(95),
    "20": articleReference(95),
    "21": articleReference(95),
    "22": articleReference(95),
    "23": articleReference(95),
    "24": articleReference(95),
    "25": articleReference(95),
    "26": articleReference(95),
  },
});
