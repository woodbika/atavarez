import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-11-2022-empleo-publico-vasco-articulos-51-y-52",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 51, los presupuestos de las administraciones públicas vascas. Por eso encaja «Los presupuestos de las administraciones públicas vascas».",
      "descartes": {
        "a": "En «Determinarán las plantillas presupuestarias», la alternativa A introduce «La Oferta de Empleo Público» donde la norma dispone «Los presupuestos de las administraciones públicas vascas».",
        "c": "En «Determinarán las plantillas presupuestarias», la alternativa C introduce «Relaciones de Puestos de Trabajo» donde la norma dispone «Los presupuestos de las administraciones públicas vascas»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 51 es los presupuestos de las administraciones públicas vascas determinarán las plantillas presupuestarias o la relación de plazas dotadas presupuestariamente que corresponden a cada puesto de trabajo. En este supuesto se ajusta a «Las Plantillas presupuestarias».",
      "descartes": {
        "b": "En «La relación de plazas dotadas presupuestariamente que corresponden a cada puesto de trabajo», la alternativa B introduce «Relaciones de Puestos de Trabajo» donde la norma dispone «Plantillas presupuestarias».",
        "c": "En «La relación de plazas dotadas presupuestariamente que corresponden a cada puesto de trabajo», la alternativa C introduce «La Oferta de Empleo Público» donde la norma dispone «Las Plantillas presupuestarias»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 51 dispone que en el supuesto de plazas laborales, se expresará el número y su adscripción al grupo profesional en que, en su caso, se clasifique el personal laboral. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «En el supuesto de plazas laborales, se expresará», la alternativa B introduce «De forma individualizada, respecto de cada puesto de trabajo, la retribución fijada para dicho personal» donde la norma dispone «El número y su adscripción al grupo profesional en que, en su caso, se clasifique el personal laboral».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «El número y su adscripción al grupo profesional en que, en su caso, se clasifique el personal laboral» sí está respaldada por el artículo 51."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 51 establece que en el caso de dotaciones para personal eventual, se expresará de forma individualizada, respecto de cada puesto de trabajo, la retribución fijada para dicho personal. Esa previsión conduce a «Se expresará de forma individualizada, respecto de cada puesto de trabajo, la retribución fijada para dicho personal».",
      "descartes": {
        "a": "En «En el caso de dotaciones para personal eventual», la alternativa A introduce «el número y su adscripción al grupo profesional en que, en su caso, se clasifique el personal laboral» donde la norma dispone «de forma individualizada, respecto de cada puesto de trabajo, la retribución fijada para dicho personal».",
        "b": "En «En el caso de dotaciones para personal eventual», la alternativa B introduce «conjunta, respecto de la relación de puestos» donde la norma dispone «individualizada, respecto de cada puesto»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "La regla aplicable figura en el artículo 51: las plantillas presupuestarias correspondientes a personal funcionario público relacionarán las consignaciones crediticias ordenadas por los siguientes conceptos. Frente a ella, «Retribuciones básicas correspondientes a cada uno de los puestos» introduce el elemento incorrecto.",
      "descartes": {
        "b": "La alternativa B sí concuerda con el artículo 51: pagas extraordinarias.",
        "c": "La alternativa C sí concuerda con el artículo 51: retribuciones complementarias."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 51 es las plantillas presupuestarias del personal laboral incluirán, asimismo, las correspondientes dotaciones de créditos, ordenadas según los conceptos retributivos abonables en función de lo establecido en los convenios colectivos que resulten de aplicación. En este supuesto se ajusta a «Los Convenios Colectivos».",
      "descartes": {
        "a": "En «En relación al personal laboral», la alternativa A introduce «El Estatuto de los Trabajadores» donde la norma dispone «Los Convenios Colectivos».",
        "b": "En «En relación al personal laboral», la alternativa B introduce «Esta Ley de Función Pública Vasca» donde la norma dispone «Los Convenios Colectivos»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 51 comprende «Dotaciones globales para abonar las gratificaciones e indemnizaciones a que tuviera derecho el personal» y «Las previsiones para ejecutar las sentencias firmes de los tribunales que reconozcan derechos de contenido económico». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Dotaciones globales para abonar las gratificaciones e indemnizaciones a que tuviera derecho el personal», pero resulta incompleta porque también debe incluirse «Las previsiones para ejecutar las sentencias firmes de los tribunales que reconozcan derechos de contenido económico».",
        "b": "La alternativa B recoge «Las previsiones para ejecutar las sentencias firmes de los tribunales que reconozcan derechos de contenido económico», pero resulta incompleta porque también debe incluirse «Dotaciones globales para abonar las gratificaciones e indemnizaciones a que tuviera derecho el personal»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 51 establece que en los territorios históricos la plantilla será aprobada en la correspondiente norma foral anual de presupuestos por las juntas generales. Esa previsión conduce a «Por las Juntas Generales en la correspondiente norma foral anual de presupuestos».",
      "descartes": {
        "a": "En «En los territorios históricos la plantilla será aprobada», la alternativa A introduce «el Parlamento Vasco en la correspondiente ley» donde la norma dispone «las Juntas Generales en la correspondiente norma foral».",
        "c": "En «En los territorios históricos la plantilla será aprobada», la alternativa C introduce «la Diputación Foral» donde la norma dispone «las Juntas Generales»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 51, en los municipios corresponderá la aprobación de la plantilla al órgano competente de acuerdo con lo que establezca la legislación de régimen local. Por eso encaja «Al órgano competente de acuerdo con lo que establezca la legislación de régimen local».",
      "descartes": {
        "b": "En «En los municipios corresponderá la aprobación de la plantilla», la alternativa B introduce «A las Juntas Generales de acuerdo con lo que se establezca en la norma foral anual de presupuestos» donde la norma dispone «Al órgano competente de acuerdo con lo que establezca la legislación de régimen local».",
        "c": "En «En los municipios corresponderá la aprobación de la plantilla», la alternativa C introduce «norma foral anual de presupuestos» donde la norma dispone «legislación de régimen local»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 51 es las plantillas presupuestarias de las administraciones forales y locales se publicarán en el boletín oficial del territorio histórico correspondiente. En este supuesto se ajusta a «El Boletín Oficial del territorio histórico correspondiente».",
      "descartes": {
        "a": "En «Las plantillas presupuestarias de las administraciones forales y locales se publicarán en», la alternativa A introduce «Estado» donde la norma dispone «territorio histórico correspondiente».",
        "b": "En «Las plantillas presupuestarias de las administraciones forales y locales se publicarán en», la alternativa B introduce «País Vasco» donde la norma dispone «territorio histórico correspondiente»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 52 dispone que las necesidades de personal para la cobertura de puestos con asignación presupuestaria que no puedan ser cubiertas con los efectivos existentes en cada administración y que. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula este supuesto con «La oferta de empleo público expresará las plazas vacantes que deban cubrirse por personal funcionario de carrera exclusivamente»; el artículo 52 lo relaciona con «serán objeto de oferta de empleo público».",
        "c": "La alternativa C vincula este supuesto con «La inclusión de dichas plazas precisará de la realización de concurso previo»; el artículo 52 lo relaciona con «serán objeto de oferta de empleo público»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 52 establece que la aprobación de la oferta de empleo público o de cualquier instrumento similar comporta la obligación de convocar las dotaciones de los puestos comprometidas y. Esa previsión conduce a «Un diez por ciento adicional».",
      "descartes": {
        "b": "Para «La aprobación de la oferta de empleo público o de cualquier instrumento similar comporta la obligación de…», la alternativa B utiliza «Un / veinte / ciento», pero la previsión aplicable fija «Un / diez / ciento».",
        "c": "Para «La aprobación de la oferta de empleo público o de cualquier instrumento similar comporta la obligación de…», la alternativa C utiliza «Un / treinta / ciento», pero la previsión aplicable fija «Un / diez / ciento»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 52, la ejecución de la oferta de empleo público, o de cualquier instrumento similar, deberá finalizar en el plazo de tres años a contar desde la fecha de aprobación de la convocatoria. Por eso encaja «Tres años a contar desde la fecha de aprobación de la convocatoria».",
      "descartes": {
        "a": "Para «La ejecución de la oferta de empleo público», la alternativa A utiliza «Un», pero la previsión aplicable fija «Tres».",
        "c": "Para «La ejecución de la oferta de empleo público», la alternativa C utiliza «Cinco», pero la previsión aplicable fija «Tres»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 52 es el transcurso del señalado plazo de tres años sin haber finalizado el procedimiento selectivo. En este supuesto se ajusta a «A la necesidad de que».",
      "descartes": {
        "a": "En «Si transcurrido el plazo señalado sin haber finalizado el plazo señalado, conllevará», la alternativa A introduce «anular la aprobación de la convocatoria» donde la norma dispone «prorrogar expresamente y de manera justificada el desarrollo de dicho proceso selectivo por el período mínimo necesario para…».",
        "c": "En «Si transcurrido el plazo señalado sin haber finalizado el plazo señalado, conllevará», la alternativa C introduce «tres meses más, con detalle de las medidas a adoptar a dicho fin» donde la norma dispone «el período mínimo necesario para su finalización»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 52 dispone que la oferta de empleo público o cualquier instrumento similar de gestión será aprobada anualmente por los órganos competentes de cada una de las administraciones públicas vascas o por el de las entidades respectivas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula este supuesto con «Se podrán convocar pruebas selectivas para la provisión de plazas por personal funcionario de carrera o personal laboral fijo»; el artículo 52 lo relaciona con «La oferta de empleo público o cualquier instrumento similar de gestión será aprobada anualmente por los órganos competentes de cada una de…».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Se podrán convocar pruebas selectivas para la provisión de plazas por personal funcionario de carrera o…» no expresa la regla que el artículo 52 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 52 establece que en el Boletín Oficial del País Vasco. Esa previsión conduce a «En el Boletín Oficial del País Vasco».",
      "descartes": {
        "a": "En «Las ofertas de empleo público en el caso de la Administración pública de la Comunidad Autónoma de Euskadi», la alternativa A introduce «Estado» donde la norma dispone «País Vasco».",
        "c": "La alternativa C vincula «Las ofertas de empleo público en el caso de la Administración pública de la Comunidad Autónoma de Euskadi» con «En el Boletín Oficial del Estado y en el Boletín Oficial del País Vasco»; el artículo 52 lo relaciona con «En el Boletín Oficial del País Vasco»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 52, en el Boletín oficial del territorio histórico respectivo. Por eso encaja «En el Boletín oficial del territorio histórico respectivo».",
      "descartes": {
        "a": "En «Las ofertas de empleo público en los casos de las administraciones forales y locales , deberán ser publicadas», la alternativa A introduce «Estado» donde la norma dispone «territorio histórico respectivo».",
        "b": "La alternativa B vincula «Las ofertas de empleo público en los casos de las administraciones forales y locales , deberán ser publicadas» con «En el Boletín Oficial del País Vasco y en el Boletín oficial del territorio histórico respectivo»; el artículo 52 lo relaciona con «En el Boletín oficial del territorio histórico respectivo»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 52 es la Universidad del País Vasco deberá de publicar su oferta de empleo público en el «Boletín Oficial del País Vasco» y en el «Boletín Oficial del Estado», además de en su sede electrónica. En este supuesto se ajusta a «El Boletín Oficial del Estado y en el Boletín Oficial del País Vasco».",
      "descartes": {
        "a": "La alternativa A vincula «La Universidad del País Vasco deberá de publicar su oferta de empleo público en» con «El Boletín Oficial del Estado»; el artículo 52 lo relaciona con «El Boletín Oficial del Estado y en el Boletín Oficial del País Vasco».",
        "c": "La alternativa C vincula «La Universidad del País Vasco deberá de publicar su oferta de empleo público en» con «El Boletín Oficial del País Vasco»; el artículo 52 lo relaciona con «El Boletín Oficial del Estado y en el Boletín Oficial del País Vasco»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 52 dispone que los órganos de gobierno de las administraciones públicas vascas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «los órganos de gobierno de las administraciones públicas vascas», la alternativa B introduce «El registro de personal de la Administración de la Comunidad Autónoma» donde la norma dispone «La Comisión de Coordinación del Empleo Público».",
        "c": "En «los órganos de gobierno de las administraciones públicas vascas», la alternativa C introduce «El Consejo Vasco del Empleo Público» donde la norma dispone «La Comisión de Coordinación del Empleo Público de Euskadi»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 52 establece que los actos de convocatoria de las ofertas de empleo público o instrumentos similares. Esa previsión conduce a «Los respectivos órganos de gobierno de las administraciones públicas vascas convocantes del proceso selectivo».",
      "descartes": {
        "a": "En «Los actos de convocatoria de las ofertas de empleo público o instrumentos similares», la alternativa A introduce «El Gobierno Vasco» donde la norma dispone «Los respectivos órganos de gobierno de las administraciones públicas vascas convocantes del proceso selectivo».",
        "b": "En «Los actos de convocatoria de las ofertas de empleo público o instrumentos similares», la alternativa B introduce «La Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «Los respectivos órganos de gobierno de las administraciones públicas vascas convocantes del proceso selectivo»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 52, los actos de convocatoria de las ofertas de empleo público o instrumentos similares. Por eso encaja «La oferta de empleo público o instrumento similar de gestión podrá contener medidas derivadas del contenido de los planes de ordenación del empleo público».",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «deberá» donde la norma dispone «podrá».",
        "c": "La alternativa C vincula este supuesto con «Se deberán incluir en la oferta de empleo público las dotaciones que sean objeto de un expediente de amortización o de un expediente de…»; el artículo 52 lo relaciona con «La oferta de empleo público o instrumento similar de gestión podrá contener medidas derivadas del contenido de los planes de ordenación del…»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-17-empleo-publico-vasco",
  references: {
    "1": articleReference(51),
    "2": articleReference(51),
    "3": articleReference(51),
    "4": articleReference(51),
    "5": articleReference(51),
    "6": articleReference(51),
    "7": articleReference(51),
    "8": articleReference(51),
    "9": articleReference(51),
    "10": articleReference(51),
    "11": articleReference(52),
    "12": articleReference(52),
    "13": articleReference(52),
    "14": articleReference(52),
    "15": articleReference(52),
    "16": articleReference(52),
    "17": articleReference(52),
    "18": articleReference(52),
    "19": articleReference(52),
    "20": articleReference(52),
    "21": articleReference(52),
  },
});
