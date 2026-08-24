import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-112-a-120",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 112, contra las resoluciones y los actos de trámite; si estos últimos deciden directa o indirectamente el fondo del asunto; podrán interponerse por los interesados los recursos de alzada y potestativo de reposición. Por eso encaja «Contra las resoluciones».",
      "descartes": {
        "b": "En «Se puede interponer un recurso de alzada o reposición», la alternativa B introduce «cualquier acto de trámite» donde la norma dispone «las resoluciones».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Contra cualquier acto de trámite» no expresa la regla que el artículo 112 aplica a «Se puede interponer un recurso de alzada o reposición»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 112 permite fundar los recursos administrativos en cualquiera de las causas de nulidad o anulabilidad previstas en los artículos 47 y 48. No limita la impugnación a una sola de ellas.",
      "descartes": {
        "a": "La alternativa A vincula «¿En qué causas se tiene que fundar el recurso» con «En causas de nulidad de pleno derecho»; el artículo 112 lo relaciona con «En causas de anulabilidad y nulidad de pleno derecho».",
        "c": "En «¿En qué causas se tiene que fundar el recurso», la alternativa C introduce «nulidad de pleno derecho, anulabilidad e irregularidades» donde la norma dispone «anulabilidad y nulidad de pleno derecho»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 112 dispone que las leyes podrán sustituir el recurso de alzada; por otros procedimientos de impugnación; mediación y arbitraje. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Los procedimientos de conciliación, mediación, arbitraje y procedimientos de impugnación no pueden sustituir a», la alternativa A introduce «alzada» donde la norma dispone «revisión».",
        "b": "En «Los procedimientos de conciliación, mediación, arbitraje y procedimientos de impugnación no pueden sustituir a», la alternativa B introduce «reposición» donde la norma dispone «revisión»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 112 establece que por otros procedimientos de impugnación; ante órganos colegiados o Comisiones específicas no sometidas a instrucciones jerárquicas; el recurso de reposición podrá ser sustituido por los procedimientos a que se refiere el párrafo anterior. Esa previsión conduce a «Un órgano colegiado no sujeto a instrucciones jerárquicas».",
      "descartes": {
        "b": "En «Dicho procedimientos los resuelve», la alternativa B introduce «unipersonal» donde la norma dispone «colegiado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Un órgano unipersonal no sujeto a instrucciones jerárquicas» no expresa la regla que el artículo 112 aplica a «Dicho procedimientos los resuelve»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 112, en las mismas condiciones, el recurso de reposición podrá ser sustituido por los procedimientos a que se refiere el párrafo anterior, respetando su carácter potestativo para el interesado. Por eso encaja «El recurso de reposición».",
      "descartes": {
        "a": "En «Esos procedimientos tendrán carácter potestativo cuando sustituyan a», la alternativa A introduce «alzada» donde la norma dispone «reposición».",
        "c": "En «Esos procedimientos tendrán carácter potestativo cuando sustituyan a», la alternativa C introduce «revisión» donde la norma dispone «reposición»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 112 es contra las disposiciones administrativas de carácter general no cabrá recurso en vía administrativa. En este supuesto se ajusta a «No cabe recurso alguno en vía administrativa pero sí se puede plantear el contencioso- administrativo».",
      "descartes": {
        "b": "En «Contra las disposiciones de carácter general», la alternativa B introduce «ni en vía administrativa ni en la contencioso-administrativa» donde la norma dispone «en vía administrativa pero sí se puede plantear el contencioso- administrativo».",
        "c": "En «Contra las disposiciones de carácter general», la alternativa C introduce «Cabe el recurso extraordinario de revisión» donde la norma dispone «No cabe recurso alguno en vía administrativa pero sí se puede plantear el contencioso- administrativo»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 114 dispone que las resoluciones de los recursos de alzada. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Ley 39/2015, del 01 de octubre las resoluciones de los recursos de alzada», la alternativa B introduce «Son actos firmes a todos los efectos» donde la norma dispone «Agotan la vía administrativa».",
        "c": "En «Ley 39/2015, del 01 de octubre las resoluciones de los recursos de alzada», la alternativa C introduce «Son actos firmes en» donde la norma dispone «Agotan la»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 115 establece que interposición de recurso. Esa previsión conduce a «Ambas respuestas constituirán parte del contenido mínimo que señala la ley».",
      "descartes": {
        "a": "En «En la interposición del recurso no hay que señalar según la Ley 39/2015», la alternativa A introduce «Nombre, apellidos e identificación personal del recurrente» donde la norma dispone «Ambas respuestas constituirán parte del contenido mínimo que señala la ley».",
        "b": "En «En la interposición del recurso no hay que señalar según la Ley 39/2015», la alternativa B introduce «Órgano, unidad o centro administrativo al que se dirige» donde la norma dispone «Ambas respuestas constituirán parte del contenido mínimo que señala la ley»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 117 establece que no obstante lo dispuesto en el apartado anterior. La formulación «Con carácter general la interposición de un recurso suspende la eficacia del acto» se aparta de esa regulación y es la afirmación incorrecta.",
      "descartes": {
        "b": "La alternativa B sí concuerda con el artículo 117: el que decide sobre la suspensión de la ejecución de un acto es el órgano que resuelve el recurso.",
        "c": "La alternativa C sí concuerda con el artículo 117: para conceder la suspensión se efectúa una previa ponderación entre el daño que ocasionaría su ejecución al interesado y el daño que causaría la suspensión a terceros o al interés público."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 117 permite suspender el acto si su ejecución puede causar perjuicios de reparación imposible o difícil, o si la impugnación se funda en una causa de nulidad de pleno derecho. Una mera causa de anulabilidad no aparece como motivo autónomo de suspensión.",
      "descartes": {
        "a": "Para «Cuando se solicita la suspensión de un acto administrativo no cabe alegar», la alternativa A utiliza «un», pero la previsión aplicable fija «Una».",
        "b": "En «Cuando se solicita la suspensión de un acto administrativo no cabe alegar», la alternativa B introduce «nulidad de pleno derecho» donde la norma dispone «anulabilidad»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 117 dispone que la ejecución del acto impugnado se entenderá suspendida si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el registro electrónico de la Administración u Organismo competente para decidir sobre la misma. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «La ejecución del acto se entenderá suspendida cuando pasa el siguiente plazo sin que se haya resuelto dicha…», la alternativa A utiliza «10», pero la previsión aplicable fija «1».",
        "b": "Para «La ejecución del acto se entenderá suspendida cuando pasa el siguiente plazo sin que se haya resuelto dicha…», la alternativa B utiliza «20», pero la previsión aplicable fija «1»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 117 recoge las dos previsiones: «Asegurar la eficacia del acto» y «Proteger al interés general y a terceros». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Asegurar la eficacia del acto», pero resulta incompleta porque también debe incluirse «Proteger al interés general y a terceros».",
        "b": "La alternativa B recoge «Proteger al interés general y a terceros», pero resulta incompleta porque también debe incluirse «Asegurar la eficacia del acto»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La regulación del artículo 117 comprende «Garantía» y «Caución». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Garantía», pero resulta incompleta porque también debe incluirse «Caución».",
        "b": "La alternativa B recoge «Caución», pero resulta incompleta porque también debe incluirse «Garantía»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 117 es la suspensión se prolongará después de agotada la vía administrativa cuando, habiéndolo solicitado previamente el interesado, exista medida cautelar y los efectos de ésta se extiendan a la vía contencioso-administrativa. En este supuesto se ajusta a «Exista medida cautelar».",
      "descartes": {
        "b": "En «La suspensión podrá prolongarse después de agotada la vía administrativa cuando», la alternativa B introduce «garantía o caución» donde la norma dispone «medida cautelar».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Exista garantía o caución» no expresa la regla que el artículo 117 aplica a «La suspensión podrá prolongarse después de agotada la vía administrativa cuando»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 117 dispone que cuando el recurso tenga por objeto la impugnación de un acto administrativo que afecte a una pluralidad indeterminada de personas, la suspensión de su eficacia habrá de ser publicada en el periódico oficial en que aquél se insertó. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Cuando el recurso tenga por objeto la impugnación de un acto administrativo que afecte a una pluralidad…», la alternativa A introduce «BOE» donde la norma dispone «Diario Oficial en donde se publicó el acto recurrido».",
        "b": "En «Cuando el recurso tenga por objeto la impugnación de un acto administrativo que afecte a una pluralidad…», la alternativa B introduce «de la Comunidad Autónoma» donde la norma dispone «en donde se publicó el acto recurrido»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 118 establece que se abre cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario. Esa previsión conduce a «Se abre cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario».",
      "descartes": {
        "a": "En «El trámite de audiencia dentro de un recurso», la alternativa A introduce «siempre que lo solicite el interesado» donde la norma dispone «cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario».",
        "c": "En «El trámite de audiencia dentro de un recurso», la alternativa C introduce «siempre» donde la norma dispone «cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 118, en un plazo no inferior a diez días ni superior a quince; formulen las alegaciones y presenten los documentos y justificantes que estimen procedentes. No se tendrán en cuenta en la resolución de los recursos; documentos o alegaciones del recurrente. Por eso encaja «De 10 a 15 días».",
      "descartes": {
        "a": "Para «El plazo que se da para presentar alegaciones, documentos y justificaciones será», la alternativa A utiliza «20», pero la previsión aplicable fija «10 / 15».",
        "b": "Para «El plazo que se da para presentar alegaciones, documentos y justificaciones será», la alternativa B utiliza «20», pero la previsión aplicable fija «10 / 15»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 118 es cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario. En este supuesto se ajusta a «La Administración no los tendrá en cuenta».",
      "descartes": {
        "a": "En «Cuando se presenten fuera de ese plazo», la alternativa A introduce «tendrá porque tenerlos» donde la norma dispone «los tendrá».",
        "c": "En «Cuando se presenten fuera de ese plazo», la alternativa C introduce «en todo caso» donde la norma dispone «no»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 118 dispone que si hubiera otros interesados se les dará, en todo caso, traslado del recurso para que en el plazo antes citado, aleguen cuanto estimen procedente. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Si hubiera otros interesados», la alternativa A introduce «antes de la propuesta resolución» donde la norma dispone «en el trámite de audiencia».",
        "c": "En «Si hubiera otros interesados», la alternativa C introduce «y se abre para ellos un» donde la norma dispone «para que hagan alegaciones en el»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 118 establece que el recurso, los informes y las propuestas no tienen el carácter de documentos nuevos a los efectos de este artículo. Tampoco lo tendrán los que los interesados hayan aportado al expediente antes de recaer la resolución impugnada. Esa previsión conduce a «Los recursos, informes y propuestas».",
      "descartes": {
        "a": "En «No tiene carácter de documento nuevo», la alternativa A introduce «informes» donde la norma dispone «recursos, informes y propuestas».",
        "b": "En «No tiene carácter de documento nuevo», la alternativa B introduce «e informes» donde la norma dispone «informes y propuestas»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 119 recoge las dos previsiones: «Estimatoria de todas las pretensiones del interesado» y «Estimatoria de algunas pretensiones del interesado». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Estimatoria de todas las pretensiones del interesado», pero resulta incompleta porque también debe incluirse «Estimatoria de algunas pretensiones del interesado».",
        "b": "La alternativa B recoge «Estimatoria de algunas pretensiones del interesado», pero resulta incompleta porque también debe incluirse «Estimatoria de todas las pretensiones del interesado»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regulación del artículo 119 comprende «Inadmisión del recurso» y «Desestimación del recurso». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Inadmisión del recurso», pero resulta incompleta porque también debe incluirse «Desestimación del recurso».",
        "b": "La alternativa B recoge «Desestimación del recurso», pero resulta incompleta porque también debe incluirse «Inadmisión del recurso»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 119 dispone que no obstante, la resolución será congruente con las peticiones formuladas por el recurrente, sin que en ningún caso pueda agravarse su situación inicial. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La resolución será congruente», la alternativa A introduce «el interés general» donde la norma dispone «la petición del interesado».",
        "c": "En «La resolución será congruente», la alternativa C introduce «lo que señale la Administración» donde la norma dispone «la petición del interesado»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 119 establece que no obstante, la resolución será congruente con las peticiones formuladas por el recurrente, sin que en ningún caso pueda agravarse su situación inicial. Esa previsión conduce a «Nunca».",
      "descartes": {
        "a": "En «¿Se puede agravar la situación inicial del interesado», la alternativa A introduce «Sí, siempre que cometa una infracción durante la tramitación del recurso» donde la norma dispone «Nunca».",
        "b": "En «¿Se puede agravar la situación inicial del interesado», la alternativa B introduce «Sí, cuando lo señale la Ley» donde la norma dispone «Nunca»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 112, contra las resoluciones y los actos de trámite. Por eso encaja «Los actos de trámite que producen indefensión».",
      "descartes": {
        "a": "En «Puede ser objeto de recurso», la alternativa A introduce «causan cualquier daño a los derechos legítimos de los interesados» donde la norma dispone «producen indefensión».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los actos de trámite que causan cualquier daño a los derechos legítimos de los interesados» no expresa la regla que el artículo 112 aplica a «Puede ser objeto de recurso»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El artículo 112 recoge tanto «Los actos de trámite que directa o indirectamente deciden el fondo del asunto» como «Los actos de trámite que determinan la imposibilidad de continuar con el procedimiento». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los actos de trámite que directa o indirectamente deciden el fondo del asunto», pero resulta incompleta porque también debe incluirse «Los actos de trámite que determinan la imposibilidad de continuar con el procedimiento».",
        "b": "La alternativa B recoge «Los actos de trámite que determinan la imposibilidad de continuar con el procedimiento», pero resulta incompleta porque también debe incluirse «Los actos de trámite que directa o indirectamente deciden el fondo del asunto»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 112 dispone que la aplicación de estos procedimientos en el ámbito de la Administración Local no podrá suponer el desconocimiento de las facultades resolutorias reconocidas a los órganos representativos electos establecidos por la Ley. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La aplicación de los procedimientos de arbitraje», la alternativa A introduce «Estatal» donde la norma dispone «Local».",
        "b": "En «La aplicación de los procedimientos de arbitraje», la alternativa B introduce «Autonómica» donde la norma dispone «Local»."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "El artículo 112 establece que los recursos contra un acto administrativo que se funden únicamente en la nulidad de alguna disposición administrativa de carácter general podrán interponerse directamente ante el órgano que dictó dicha disposición. Esa previsión conduce a «Podrán interponerse directamente ante el órgano que dictó dicha disposición».",
      "descartes": {
        "a": "En «Los recursos contra un acto administrativo que se funden únicamente en la nulidad de alguna disposición…», la alternativa A introduce «Serán inadmitidos» donde la norma dispone «Podrán interponerse directamente ante el órgano que dictó dicha disposición».",
        "c": "En «Los recursos contra un acto administrativo que se funden únicamente en la nulidad de alguna disposición…», la alternativa C introduce «Deberán interponerse en la jurisdicción contencioso-administrativa» donde la norma dispone «Podrán interponerse directamente ante el órgano que dictó dicha disposición»."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "Según el artículo 112, las reclamaciones económico-administrativas se ajustarán a los procedimientos establecidos por su legislación específica. Por eso encaja «Su legislación específica».",
      "descartes": {
        "a": "En «Las reclamaciones económico-administrativas se ajustarán a los procedimientos establecidos por», la alternativa A introduce «La ley 39/2015, del 01 de octubre» donde la norma dispone «Su legislación específica».",
        "b": "En «Las reclamaciones económico-administrativas se ajustarán a los procedimientos establecidos por», la alternativa B introduce «La ley 40/2015, del 01 de octubre» donde la norma dispone «Su legislación específica»."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "La regla del artículo 114 es la resolución administrativa de los procedimientos de responsabilidad patrimonial, cualquiera que fuese el tipo de relación, pública o privada, de que derive. En este supuesto se ajusta a «Agotan la vía administrativa».",
      "descartes": {
        "b": "La alternativa B vincula «La resolución de los procedimientos de arbitraje, mediación, conciliación y procedimientos de impugnación» con «No agotan la vía administrativa»; el artículo 114 lo relaciona con «Agotan la vía administrativa».",
        "c": "En «La resolución de los procedimientos de arbitraje, mediación, conciliación y procedimientos de impugnación», la alternativa C introduce «Depende de los casos» donde la norma dispone «Agotan la vía administrativa»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "El artículo 114 dispone que las resoluciones de los órganos administrativos que carezcan de superior jerárquico, salvo que una Ley establezca lo contrario. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Las resoluciones de los órganos administrativos que carezcan de superior jerárquico» con «No agotan la vía administrativa, salvo que una ley establezca lo contrario»; el artículo 114 lo relaciona con «Agotan la vía administrativa, salvo que una ley establezca lo contrario».",
        "c": "En «Las resoluciones de los órganos administrativos que carezcan de superior jerárquico», la alternativa C introduce «Son firmes en» donde la norma dispone «Agotan la»."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "El artículo 114 establece que los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores del procedimiento. Esa previsión conduce a «Los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores del procedimiento».",
      "descartes": {
        "b": "En «Ponen fin a la vía administrativa», la alternativa B introduce «La resolución administrativa de los procedimientos de responsabilidad patrimonial» donde la norma dispone «Los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores del procedimiento».",
        "c": "En «Ponen fin a la vía administrativa», la alternativa C introduce «La resolución de los procedimientos sancionadores en los que la infracción cometida a causado daños a bienes de la…» donde la norma dispone «Los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores del procedimiento»."
      }
    },
    {
      "preguntaId": 33,
      "justificacion": "El artículo 114 recoge las dos previsiones: «Una disposición legal» y «Una disposición reglamentaria». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Una disposición legal», pero resulta incompleta porque también debe incluirse «Una disposición reglamentaria».",
        "b": "La alternativa B recoge «Una disposición reglamentaria», pero resulta incompleta porque también debe incluirse «Una disposición legal»."
      }
    },
    {
      "preguntaId": 34,
      "justificacion": "La regla del artículo 115 es el error o la ausencia de la calificación del recurso por parte del recurrente no será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter. En este supuesto se ajusta a «No será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter».",
      "descartes": {
        "b": "En «El error o la ausencia de la calificación del recurso por parte del recurrente», la alternativa B introduce «Conlleva a la necesidad de subsanación, concediéndole al recurrente el plazo de 10 días para ello» donde la norma dispone «No será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter».",
        "c": "En «El error o la ausencia de la calificación del recurso por parte del recurrente», la alternativa C introduce «Impedirá su tramitación» donde la norma dispone «No será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter»."
      }
    },
    {
      "preguntaId": 35,
      "justificacion": "El artículo 115 dispone que los vicios y defectos que hagan anulable un acto no podrán ser alegados por quienes los hubieren causado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «No podrán ser alegados por quienes los hubieran causado», la alternativa B introduce «nulo» donde la norma dispone «anulable».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los vicios y defectos que hagan nulo un acto» no expresa la regla que el artículo 115 aplica a «No podrán ser alegados por quienes los hubieran causado»."
      }
    },
    {
      "preguntaId": 36,
      "justificacion": "El artículo 116 establece que carecer de legitimación el recurrente. Esa previsión conduce a «Carecer de legitimación el recurrente».",
      "descartes": {
        "a": "En «Causas de inadmisión de los recursos. Es correcto señalar», la alternativa A introduce «Ser incompetente el órgano administrativo, pertenezca el competente a esa administración u otra» donde la norma dispone «Carecer de legitimación el recurrente».",
        "c": "En «Causas de inadmisión de los recursos. Es correcto señalar», la alternativa C introduce «Tratarse de un acto de trámite» donde la norma dispone «Carecer de legitimación el recurrente»."
      }
    },
    {
      "preguntaId": 37,
      "justificacion": "Según el artículo 120, el acuerdo de suspensión deberá ser notificado a los interesados, quienes podrán recurrirlo. Por eso encaja «El acuerdo de suspensión deberá ser notificado a los interesados, quienes podrán recurrirlo».",
      "descartes": {
        "a": "En «Cuando deban resolverse una pluralidad de recursos administrativos que traigan causa de un mismo acto…», la alternativa A introduce «órgano administrativo deberá acordar la suspensión del plazo para resolver hasta que recaiga pronunciamiento judicial» donde la norma dispone «acuerdo de suspensión deberá ser notificado a los interesados, quienes podrán recurrirlo».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano administrativo deberá acordar la suspensión del plazo para resolver hasta que recaiga…» no expresa la regla que el artículo 120 aplica a «Cuando deban resolverse una pluralidad de recursos administrativos que traigan causa de un mismo acto…»."
      }
    },
    {
      "preguntaId": 38,
      "justificacion": "La regla del artículo 120 es la interposición del correspondiente recurso por un interesado, no afectará a los restantes procedimientos de recurso que se encuentren suspendidos por traer causa del mismo acto administrativo. En este supuesto se ajusta a «No Afectará a los restantes procedimientos de recurso que se encuentren suspendidos por traer causa del mismo acto administrativo».",
      "descartes": {
        "a": "La alternativa A vincula «La interposición del correspondiente recurso por un interesado, en el caso de la pregunta anterior» con «Afectará a los restantes procedimientos de recurso que se encuentren suspendidos por traer causa del mismo acto administrativo»; el artículo 120 lo relaciona con «No Afectará a los restantes procedimientos de recurso que se encuentren suspendidos por traer causa del mismo acto administrativo».",
        "c": "En «La interposición del correspondiente recurso por un interesado, en el caso de la pregunta anterior», la alternativa C introduce «La ley no se pronuncia al respecto» donde la norma dispone «No Afectará a los restantes procedimientos de recurso que se encuentren suspendidos por traer causa del mismo acto…»."
      }
    },
    {
      "preguntaId": 39,
      "justificacion": "El artículo 120 dispone que recaído el pronunciamiento judicial, será comunicado a los interesados y el órgano administrativo competente para resolver podrá dictar resolución sin necesidad de realizar ningún trámite adicional, salvo el de audiencia, cuando proceda. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Recaído, en los supuestos de las dos preguntas anteriores, el pronunciamiento judicial», la alternativa B introduce «El órgano administrativo competente para resolver podrá dictar resolución sin necesidad de realizar ningún trámite adicional» donde la norma dispone «Será comunicado a los interesados».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano administrativo competente para resolver podrá dictar resolución sin necesidad de realizar ningún…» no expresa la regla que el artículo 120 aplica a «Recaído, en los supuestos de las dos preguntas anteriores, el pronunciamiento judicial»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-33-revision-actos-recursos-administrativos",
  references: {
    "1": articleReference(112),
    "2": articleReference(112),
    "3": articleReference(112),
    "4": articleReference(112),
    "5": articleReference(112),
    "6": articleReference(112),
    "7": articleReference(114),
    "8": articleReference(115),
    "9": articleReference(117),
    "10": articleReference(117),
    "11": articleReference(117),
    "12": articleReference(117),
    "13": articleReference(117),
    "14": articleReference(117),
    "15": articleReference(117),
    "16": articleReference(118),
    "17": articleReference(118),
    "18": articleReference(118),
    "19": articleReference(118),
    "20": articleReference(118),
    "21": articleReference(119),
    "22": articleReference(119),
    "23": articleReference(119),
    "24": articleReference(119),
    "25": articleReference(112),
    "26": articleReference(112),
    "27": articleReference(112),
    "28": articleReference(112),
    "29": articleReference(112),
    "30": articleReference(114),
    "31": articleReference(114),
    "32": articleReference(114),
    "33": articleReference(114),
    "34": articleReference(115),
    "35": articleReference(115),
    "36": articleReference(116),
    "37": articleReference(120),
    "38": articleReference(120),
    "39": articleReference(120),
  },
});
