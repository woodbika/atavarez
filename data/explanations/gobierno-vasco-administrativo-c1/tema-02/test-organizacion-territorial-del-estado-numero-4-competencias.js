import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-organizacion-territorial-del-estado-numero-4-competencias",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Administración de Justicia» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«La gestión en materia de protección del medio ambiente» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La formulación que conserva ese alcance es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Los montes y aprovechamientos forestales» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Bases y coordinación de la planificación general de la actividad económica» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Autorización para la convocatoria de consultas populares por vía de referéndum» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«La agricultura y ganadería, de acuerdo con la ordenación general de la economía» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Bases de régimen minero y energético» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Obras públicas de interés general o cuya realización afecte a más de una Comunidad Autónoma» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. El elemento que completa la regla es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Organización de sus instituciones de autogobierno» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. El elemento que completa la regla es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Ordenación del territorio, urbanismo y vivienda» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Ferrocarriles y transportes terrestres que transcurran por el territorio de más de una Comunidad Autónoma; régimen general de comunicaciones; tráfico y circulación de vehículos a motor; correos y telecomunicaciones; cab…» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Defensa y Fuerzas Armadas» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación laboral» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación sobre propiedad intelectual e industrial» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Sistema monetario: divisas, cambio y convertibilidad; bases de la ordenación de crédito, banca y seguros» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La formulación que conserva ese alcance es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Ferias interiores» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación sobre pesas y medidas, determinación de la hora oficial» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Régimen aduanero y arancelario; comercio exterior» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Marina mercante y abanderamiento de buques; iluminación de costas y señales marítimas; puertos de interés general; aeropuertos de interés general; control del espacio aéreo, tránsito y transporte aéreo, servicio meteoro…» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Promoción del deporte y de la adecuada utilización del ocio» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La formulación que conserva ese alcance es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Asistencia social» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Fomento y coordinación general de la investigación científica y técnica» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Nacionalidad, inmigración, emigración, extranjería y derecho de asilo» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Normas básicas del régimen de prensa, radio y televisión y, en general, de todos los medios de comunicación social» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Defensa del patrimonio cultural, artístico y monumental español contra la exportación y la expoliación; museos, bibliotecas y archivos de titularidad estatal» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La consecuencia concreta es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Sanidad e higiene» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Régimen de producción, comercio, tenencia y uso de armas y explosivos» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«La regulación de las condiciones básicas que garanticen la igualdad de todos los españoles en el ejercicio de los derechos y en el cumplimiento de los deberes constitucionales» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación básica y régimen económico de la Seguridad Social» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La formulación que conserva ese alcance es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«La artesanía» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Sanidad exterior. Bases y coordinación general de la sanidad. Legislación sobre productos farmacéuticos» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«La legislación, ordenación y concesión de recursos y aprovechamientos hidráulicos cuando las aguas discurran por más de una Comunidad Autónoma, y la autorización de las instalaciones eléctricas cuando su aprovechamiento…» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 33,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Los puertos de refugio, los puertos y aeropuertos deportivos y, en general, los que no desarrollen actividades comerciales» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 34,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Pesca marítima» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 35,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La garantía mencionada corresponde a «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Las bases del régimen jurídico de las Administraciones públicas y del régimen estatutario de sus funcionarios que, en todo caso, garantizarán a los administrados un tratamiento común ante ellas» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 36,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. El elemento que completa la regla es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Estadística para fines estatales» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 37,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«La pesca en aguas interiores, el marisqueo y la acuicultura, la caza y la pesca fluvial» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 38,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación básica sobre protección del medio ambiente y sobre montes, aprovechamientos forestales y vías pecuarias» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 39,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Legislación mercantil, penal y penitenciaria» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 40,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La consecuencia concreta es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Relaciones internacionales» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 41,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. El elemento que completa la regla es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Promoción y ordenación del turismo en su ámbito territorial» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 42,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. En este caso debe aplicarse «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«Las alteraciones de los términos municipales comprendidos en su territorio y, en general, las funciones que correspondan a la Administración del Estado sobre las Corporaciones locales y cuya transferencia autorice la le…» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 43,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La formulación que conserva ese alcance es «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Hacienda general y Deuda del Estado» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 44,
      "justificacion": "El artículo 148 permite que las comunidades autónomas asuman esta materia. La consecuencia concreta es «Las Comunidades Autónomas podrán asumir la competencia».",
      "descartes": {
        "b": "«La coordinación y demás facultades en relación con las policías locales en los términos que establezca una ley orgánica» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 45,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. La garantía mencionada corresponde a «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Regulación de las condiciones de obtención, expedición y homologación de títulos académicos y profesionales y normas básicas para el desarrollo del artículo 27 de la Constitución, a fin de garantizar el cumplimiento de…» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 46,
      "justificacion": "El artículo 149 reserva esta materia a la competencia exclusiva del Estado. En este caso debe aplicarse «Es competencia exclusiva del Estado».",
      "descartes": {
        "a": "«Las reglas relativas a la aplicación y eficacia de las normas jurídicas, relaciones jurídico-civiles relativas a las formas de matrimonio, ordenación de los registros e instrumentos públicos, bases de las obligaciones c…» figura en la reserva estatal del artículo 149, no en el catálogo de materias asumibles del artículo 148."
      }
    },
    {
      "preguntaId": 47,
      "justificacion": "El artículo 148 permite ampliar las competencias una vez transcurridos cinco años y mediante la reforma del Estatuto de Autonomía. Las dos condiciones deben cumplirse conjuntamente.",
      "descartes": {
        "a": "El plazo de cinco años es necesario, pero no basta por sí solo: la ampliación exige también reformar el Estatuto.",
        "b": "La reforma estatutaria es imprescindible, aunque solo puede utilizarse después del plazo de cinco años previsto constitucionalmente."
      }
    },
    {
      "preguntaId": 48,
      "justificacion": "La Constitución permite a las comunidades autónomas asumir el fomento de la cultura y, al mismo tiempo, atribuye al Estado el servicio de la cultura como deber y función esencial. Por eso son válidas las dos afirmaciones.",
      "descartes": {
        "a": "Describe correctamente la vertiente autonómica, pero omite el deber cultural que el artículo 149.2 asigna al Estado.",
        "b": "«La cultura» aparece en el catálogo del artículo 148; calificarla como exclusiva del Estado contradice esa ubicación."
      }
    },
    {
      "preguntaId": 49,
      "justificacion": "El artículo 149.2 encomienda al Estado facilitar la comunicación cultural entre las comunidades autónomas, de acuerdo con ellas.",
      "descartes": {
        "b": "La diferencia relevante está en «Las Comunidades Autónomas»: el artículo 149.2 emplea «El Estado» y ese matiz cambia el alcance de la regla.",
        "c": "El artículo 149.2 sí regula la cuestión y ofrece una respuesta concreta: «El Estado»."
      }
    },
    {
      "preguntaId": 50,
      "justificacion": "El artículo 149.3 permite que los Estatutos atribuyan a las comunidades autónomas las materias que la Constitución no reserva expresamente al Estado.",
      "descartes": {
        "b": "«Las materias atribuidas expresamente al Estado por esta CE» regula una posibilidad diferente; en este caso, el artículo 149.3 establece «Las materias no atribuidas expresamente al Estado por esta CE».",
        "c": "La respuesta conjunta también daría por válida «Las materias atribuidas expresamente al Estado por esta CE», pero el artículo 149.3 solo respalda «Las materias no atribuidas expresamente al Estado por esta CE»."
      }
    },
    {
      "preguntaId": 51,
      "justificacion": "Las competencias que un Estatuto de Autonomía no haya asumido corresponden al Estado, según el artículo 149.3.",
      "descartes": {
        "b": "La diferencia relevante está en «A las Comunidades Autónomas limítrofes»: el artículo 149.3 emplea «Al Estado» y ese matiz cambia el alcance de la regla.",
        "c": "La alternativa añade o cambia una condición que el artículo 149.3 no contempla. La formulación aplicable es «Al Estado»."
      }
    },
    {
      "preguntaId": 52,
      "justificacion": "En caso de conflicto, el artículo 149.3 da prevalencia a la norma estatal salvo en las materias atribuidas a la competencia exclusiva autonómica.",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 149.3 establece «lo que no esté atribuido a la exclusiva competencia de las CCAA», no «caso».",
        "c": "La alternativa invierte o absolutiza la regla: el artículo 149.3 establece «todo lo que no esté atribuido a la exclusiva competencia de las CCAA», no «ningún caso»."
      }
    },
    {
      "preguntaId": 53,
      "justificacion": "El artículo 149.3 establece que el derecho estatal será, en todo caso, supletorio del derecho de las comunidades autónomas.",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 149.3 establece «será, en todo», no «no será, en ningún».",
        "c": "«su» sustituye el elemento previsto por la norma, que en el artículo 149.3 es «todo»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-02-organizacion-territorial-del-estado",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "27": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "30": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "31": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "32": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "33": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "34": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "35": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "36": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "37": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "38": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "39": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "40": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "41": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "42": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "43": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "44": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "45": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "46": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "47": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "48": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículos 148 y 149",
    "articulos": [
      148,
      149
    ]
  },
  "49": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149.2",
    "articulos": [
      149
    ]
  },
  "50": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149.3",
    "articulos": [
      149
    ]
  },
  "51": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149.3",
    "articulos": [
      149
    ]
  },
  "52": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149.3",
    "articulos": [
      149
    ]
  },
  "53": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149.3",
    "articulos": [
      149
    ]
  }
},
});
