import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-11-2022-empleo-publico-vasco-articulos-178-a-180-tipos-de-faltas",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El artículo 178 considera muy grave abandonar el servicio o desatender las tareas encomendadas cuando la conducta reviste notoria gravedad.",
      descartes: {
        b: "La nota de notoria gravedad sitúa expresamente esta conducta por encima de las faltas graves.",
        c: "No se trata de un descuido menor: el precepto exige abandono o desatención con una gravedad especialmente manifiesta.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El artículo 178 tipifica como muy grave causar daños graves a terceras personas o bienes por incumplir las medidas de seguridad y prevención.",
      descartes: {
        b: "La combinación de daños graves a terceros e inobservancia preventiva está incluida de forma expresa entre las faltas muy graves.",
        c: "La entidad del daño y el riesgo para terceros descartan la calificación leve.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El artículo 180 califica como leve no facilitar a la ciudadanía información debida que corresponde a la unidad donde se trabaja.",
      descartes: {
        a: "El supuesto descrito no figura en el catálogo de faltas muy graves.",
        b: "La falta grave exige un trato gravemente desconsiderado o impedir el ejercicio de derechos y deberes; aquí solo se omite la información debida.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "El abuso de autoridad en el ejercicio del puesto aparece expresamente entre las faltas graves del artículo 179.",
      descartes: {
        a: "El artículo 178 no incluye el abuso de autoridad, por sí solo, en la categoría muy grave.",
        c: "La ley atribuye a esta conducta una entidad superior a la de una falta leve.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "La negligencia en la custodia de secretos oficiales es muy grave cuando provoca su publicación, difusión o conocimiento indebido, según el artículo 178.",
      descartes: {
        b: "El carácter oficial del secreto y el resultado de difusión determinan la categoría muy grave, no la grave.",
        c: "La revelación causada por una custodia negligente de secretos oficiales no puede tratarse como una infracción menor.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "El artículo 178 califica como muy grave utilizar las facultades del puesto para influir en procesos electorales, porque vulnera la imparcialidad.",
      descartes: {
        b: "La influencia electoral mediante potestades públicas está expresamente tipificada como muy grave.",
        c: "La afectación directa a la imparcialidad electoral excluye la categoría leve.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "El artículo 179 incluye como falta grave la desconsideración grave hacia la ciudadanía y la obstaculización de sus derechos o deberes.",
      descartes: {
        a: "La ley reserva aquí la categoría muy grave para otros comportamientos; este supuesto se tipifica de forma específica como grave.",
        c: "La propia intensidad indicada en el enunciado —falta grave de consideración— supera el trato desconsiderado leve del artículo 180.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "No cumplimentar las encuestas sobre puestos y funciones destinadas a racionalizar estructuras es una falta leve conforme al artículo 180.",
      descartes: {
        a: "La conducta no presenta ninguno de los elementos que el artículo 178 exige para una falta muy grave.",
        b: "El artículo 179 no la incluye entre las faltas graves; cuenta con una tipificación propia en el catálogo de leves.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "El artículo 179 considera grave simular una enfermedad o accidente cuando ello comporta ausencia del trabajo.",
      descartes: {
        a: "La simulación con ausencia se recoge en el artículo 179, no en la relación de faltas muy graves.",
        c: "No es una mera ausencia aislada: existe una simulación, circunstancia que eleva la conducta a grave.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Incumplir el deber de respeto al ordenamiento jurídico durante el ejercicio de funciones públicas es una falta muy grave según el artículo 178.",
      descartes: {
        b: "La ley incorpora literalmente este incumplimiento al catálogo de muy graves.",
        c: "La vulneración del ordenamiento en el ejercicio de funciones públicas no recibe tratamiento de falta leve.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "El artículo 178 reúne en la categoría muy grave el acoso discriminatorio, moral, sexual y por razón de sexo.",
      descartes: {
        b: "Estas modalidades de acoso están tipificadas directamente como muy graves, sin una categoría intermedia en el supuesto planteado.",
        c: "La gravedad inherente al acoso impide calificarlo como una infracción leve.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "Adoptar acuerdos manifiestamente ilegales que ocasionen un perjuicio grave a la Administración o a la ciudadanía constituye falta muy grave conforme al artículo 178.",
      descartes: {
        b: "El artículo 179 contempla informes o propuestas ilegales que no alcancen la categoría muy grave; aquí se trata de acuerdos y perjuicio grave.",
        c: "La ilegalidad manifiesta unida a un perjuicio grave rebasa claramente el ámbito de las faltas leves.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "Aceptar regalos o ventajas más allá de la cortesía es falta grave cuando la conducta no llega a ser muy grave, tal como precisa el artículo 179.",
      descartes: {
        a: "El propio enunciado excluye que el supuesto sea constitutivo de falta muy grave.",
        c: "La aceptación de una ventaja vinculada a la condición funcionarial tiene una tipificación grave específica y no se reduce a una falta leve.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "Obstaculizar libertades públicas o derechos sindicales está expresamente calificado como falta muy grave en el artículo 178.",
      descartes: {
        b: "El catálogo legal no rebaja esta obstaculización a falta grave.",
        c: "La afectación de libertades públicas y derechos sindicales excluye una consideración leve.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "El artículo 178 considera muy graves los actos que limitan la libertad de expresión, pensamiento, ideas u opiniones.",
      descartes: {
        b: "La limitación de estas libertades está incluida directamente en el artículo de faltas muy graves.",
        c: "No es un incumplimiento menor, sino una restricción de libertades protegidas.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "El artículo 179 fija como falta grave acumular, sin justificación, al menos diez horas de incumplimiento de jornada dentro de un mes natural.",
      descartes: {
        a: "Ese umbral temporal está tipificado como grave y no como muy grave.",
        c: "Los incumplimientos horarios que no alcanzan la gravedad prevista pueden ser leves; llegar a diez horas mensuales activa la categoría grave.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "El artículo 179 califica como grave desnaturalizar informes mediante ambigüedades o inexactitudes para obtener un beneficio o causar perjuicio.",
      descartes: {
        a: "El supuesto se diferencia de los acuerdos manifiestamente ilegales con perjuicio grave que el artículo 178 trata como muy graves.",
        c: "La finalidad de beneficio o perjuicio confiere a la manipulación del informe una entidad incompatible con la falta leve.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "Una sola falta de asistencia injustificada está tipificada como leve en el artículo 180.",
      descartes: {
        a: "Una ausencia de un día no figura entre las faltas muy graves.",
        b: "La categoría grave requiere, entre otros supuestos, una tercera ausencia en tres meses tras dos sanciones leves previas; ese patrón no aparece aquí.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "La falta injustificada de colaboración con el Tribunal Vasco de Cuentas Públicas es una falta muy grave según el artículo 178.",
      descartes: {
        b: "La ley asigna expresamente esta conducta al catálogo de muy graves.",
        c: "La obligación institucional de colaborar con el órgano fiscalizador impide tratar su incumplimiento injustificado como leve.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "El artículo 179 hace responsables por falta grave a quienes, desde la dirección o responsabilidad de una unidad, toleran las faltas del personal subordinado.",
      descartes: {
        a: "La tolerancia descrita tiene una tipificación grave específica, sin que el enunciado añada elementos de una falta muy grave.",
        c: "La posición de responsabilidad y la tolerancia de infracciones superan un incumplimiento leve.",
      },
    },
    {
      preguntaId: 21,
      justificacion:
        "La falta grave de atención y respeto hacia responsables, subordinados, personal directivo o compañeros se recoge como falta grave en el artículo 179.",
      descartes: {
        a: "El precepto la sitúa en la categoría grave y no aporta en este supuesto un elemento que la eleve a muy grave.",
        c: "La intensidad expresamente calificada como grave la diferencia de la falta leve de consideración del artículo 180.",
      },
    },
    {
      preguntaId: 22,
      justificacion:
        "El incumplimiento de las normas de incompatibilidades es muy grave cuando produce efectivamente una situación de incompatibilidad, conforme al artículo 178.",
      descartes: {
        b: "El artículo 179 reserva la categoría grave para incumplimientos de incompatibilidades que no sean muy graves; aquí sí se genera la incompatibilidad.",
        c: "El resultado de incompatibilidad excluye el tratamiento residual propio de una falta leve.",
      },
    },
    {
      preguntaId: 23,
      justificacion:
        "No comparecer sin justificación ante las comisiones de investigación parlamentarias previstas en el artículo 178 constituye falta muy grave.",
      descartes: {
        b: "La incomparecencia ante estos órganos de investigación está enumerada entre las faltas muy graves.",
        c: "La relevancia institucional de la comparecencia impide reducir el incumplimiento a una falta leve.",
      },
    },
    {
      preguntaId: 24,
      justificacion:
        "Realizar otras actividades personales o profesionales durante la jornada, de forma reiterada o con ánimo de lucro, es falta muy grave según el artículo 178.",
      descartes: {
        b: "La reiteración o el ánimo de lucro son los elementos que llevan expresamente la conducta a la categoría muy grave.",
        c: "No se describe un uso ocasional de escasa entidad, sino una actividad reiterada o lucrativa en tiempo de trabajo.",
      },
    },
    {
      preguntaId: 25,
      justificacion:
        "La desobediencia abierta a órdenes de un superior es muy grave, salvo que la orden infrinja manifiestamente el ordenamiento jurídico, según el artículo 178.",
      descartes: {
        b: "La desobediencia abierta se distingue del simple incumplimiento de instrucciones que puede quedar en la categoría grave.",
        c: "El carácter abierto de la desobediencia impide considerarla un incumplimiento leve.",
      },
    },
    {
      preguntaId: 26,
      justificacion:
        "Incumplir las normas sobre bajas por enfermedad o accidente aparece como falta grave en el artículo 179.",
      descartes: {
        a: "El precepto no exige ni atribuye a este incumplimiento, por sí solo, la categoría muy grave.",
        c: "La ley lo tipifica expresamente como grave, por encima de los incumplimientos residuales leves.",
      },
    },
    {
      preguntaId: 27,
      justificacion:
        "El artículo 179 califica como grave faltar reiteradamente y sin causa a cursos en los que se está inscrito cuando se imparten en horario laboral.",
      descartes: {
        a: "La conducta está incluida en el catálogo de faltas graves, no en el de muy graves.",
        c: "La reiteración y el desarrollo de la formación dentro de la jornada laboral impiden tratarla como una ausencia leve.",
      },
    },
    {
      preguntaId: 28,
      justificacion:
        "Evadir los sistemas de control horario o impedir que detecten incumplimientos constituye falta grave conforme al artículo 179.",
      descartes: {
        a: "La manipulación del control horario tiene una tipificación grave específica y no muy grave.",
        c: "La intención de eludir o encubrir el control diferencia esta conducta del mero incumplimiento horario leve.",
      },
    },
    {
      preguntaId: 29,
      justificacion:
        "El incumplimiento notorio de las funciones esenciales del puesto o de las tareas encomendadas es una falta muy grave según el artículo 178.",
      descartes: {
        b: "La notoriedad y el carácter esencial de las funciones son los elementos que elevan la conducta a muy grave.",
        c: "No se trata de una falta ocasional de cuidado, sino de un incumplimiento manifiesto de funciones esenciales.",
      },
    },
    {
      preguntaId: 30,
      justificacion:
        "Cometer una nueva falta grave tras haber sido sancionado por otras dos faltas graves durante el último año constituye falta muy grave conforme al artículo 178.",
      descartes: {
        b: "La acumulación legalmente descrita transforma la nueva conducta en falta muy grave.",
        c: "Tres episodios graves dentro del período indicado quedan muy lejos de una infracción leve.",
      },
    },
    {
      preguntaId: 31,
      justificacion:
        "Negarse sin motivo a formar parte de la junta electoral en elecciones de representantes del personal es falta grave según el artículo 179.",
      descartes: {
        a: "El artículo 178 no incorpora este supuesto a las faltas muy graves.",
        c: "La negativa injustificada a cumplir esa función electoral tiene una tipificación grave expresa.",
      },
    },
    {
      preguntaId: 32,
      justificacion:
        "Coartar el ejercicio de la huelga o impedir trabajar a quien no quiera secundarla se califica como falta muy grave en el artículo 178.",
      descartes: {
        b: "La interferencia directa en la libertad de adherirse o no a una huelga se encuentra en el catálogo de muy graves.",
        c: "La conducta afecta a un derecho colectivo y no admite una calificación leve.",
      },
    },
    {
      preguntaId: 33,
      justificacion:
        "Infringir o aplicar indebidamente las reglas de contratación pública con, al menos, negligencia grave es una falta muy grave según el artículo 178.",
      descartes: {
        b: "El umbral de negligencia grave en contratación pública determina expresamente la categoría muy grave.",
        c: "La materia afectada y la intensidad mínima de la negligencia excluyen la levedad.",
      },
    },
    {
      preguntaId: 34,
      justificacion:
        "El artículo 178 considera muy grave quebrantar el secreto sobre la información conocida en los órganos y registros de intereses e incompatibilidades que identifica la norma.",
      descartes: {
        b: "La especial sensibilidad de esos datos cuenta con una tipificación directa como falta muy grave.",
        c: "No es un deber genérico de discreción de escasa entidad, sino un secreto legalmente reforzado.",
      },
    },
    {
      preguntaId: 35,
      justificacion:
        "El uso indebido y reiterado de medios administrativos, incluidos los telemáticos, constituye falta grave conforme al artículo 179.",
      descartes: {
        a: "La reiteración lleva el supuesto a grave, pero el artículo no lo clasifica como muy grave.",
        c: "El artículo 180 contempla como leve el uso indebido telemático que no sea grave; la reiteración aquí marca la diferencia.",
      },
    },
    {
      preguntaId: 36,
      justificacion:
        "Valerse de la condición de persona empleada pública para obtener un beneficio indebido propio o ajeno es falta muy grave según el artículo 178.",
      descartes: {
        b: "La obtención de una ventaja mediante la posición pública está expresamente clasificada como muy grave.",
        c: "El uso de la condición pública para un beneficio indebido descarta una valoración leve.",
      },
    },
    {
      preguntaId: 37,
      justificacion:
        "El artículo 179 considera grave quebrantar la discreción y reserva profesional cuando se causa perjuicio a la Administración o se busca provecho propio.",
      descartes: {
        a: "Este supuesto se diferencia de la revelación de secretos oficiales o de información especialmente protegida, que puede ser muy grave.",
        c: "El perjuicio o el provecho propio añaden una entidad que supera el incumplimiento leve.",
      },
    },
    {
      preguntaId: 38,
      justificacion:
        "El acoso laboral figura de manera autónoma entre las faltas muy graves del artículo 178.",
      descartes: {
        b: "La ley no establece una categoría grave intermedia para la conducta descrita.",
        c: "El acoso laboral no se equipara a una simple falta de consideración o respeto.",
      },
    },
    {
      preguntaId: 39,
      justificacion:
        "Causar daños graves en bienes o documentos administrativos por negligencia o mala fe constituye falta grave conforme al artículo 179.",
      descartes: {
        a: "La categoría muy grave se reserva, entre otros casos, para daños muy graves en el patrimonio; aquí el enunciado habla de daños graves.",
        c: "La entidad grave del daño y la negligencia o mala fe superan el supuesto leve de falta de diligencia en la conservación.",
      },
    },
    {
      preguntaId: 40,
      justificacion:
        "Desatender servicios esenciales durante una huelga o participar en ella cuando la ley lo prohíbe es falta muy grave según el artículo 178.",
      descartes: {
        b: "El deber de asegurar los servicios esenciales recibe una protección reforzada mediante la categoría muy grave.",
        c: "La afectación a servicios esenciales o una prohibición legal de huelga excluyen la levedad.",
      },
    },
    {
      preguntaId: 41,
      justificacion:
        "Incumplir la prevención de riesgos laborales es falta muy grave cuando de ello derivan riesgos o daños para el personal funcionario o para terceras personas, conforme al artículo 178.",
      descartes: {
        b: "El artículo 179 trata como grave el incumplimiento preventivo que no alcanza la categoría muy grave; aquí sí aparecen riesgos o daños.",
        c: "La existencia de riesgos o daños personales impide considerar menor la infracción.",
      },
    },
    {
      preguntaId: 42,
      justificacion:
        "La tercera ausencia injustificada en tres meses es falta grave cuando las dos anteriores ya fueron sancionadas como leves, según el artículo 179.",
      descartes: {
        a: "La reiteración descrita eleva la conducta a grave, pero no a muy grave.",
        c: "Una ausencia aislada puede ser leve; las dos sanciones previas y la tercera falta activan la categoría grave.",
      },
    },
    {
      preguntaId: 43,
      justificacion:
        "La ausencia injustificada del puesto durante la jornada laboral está tipificada como falta grave en el artículo 179.",
      descartes: {
        a: "La conducta no figura por sí sola entre las faltas muy graves.",
        c: "El artículo 180 reserva la falta leve para ausencias que no lleguen a ser graves; el supuesto formulado coincide con la tipificación grave.",
      },
    },
    {
      preguntaId: 44,
      justificacion:
        "Publicar o utilizar indebidamente documentación o información conocida por razón del cargo constituye falta muy grave según el artículo 178.",
      descartes: {
        b: "El artículo 179 solo aplica la categoría grave cuando la conducta no llegue a ser muy grave; el enunciado reproduce la formulación del artículo 178 sin esa salvedad.",
        c: "La difusión o utilización indebida de información obtenida por el cargo no se trata como una falta leve.",
      },
    },
    {
      preguntaId: 45,
      justificacion:
        "Aceptar regalos, favores o ventajas por la condición funcionarial es falta muy grave cuando la conducta no queda en la categoría grave, conforme al artículo 178.",
      descartes: {
        b: "La cláusula «cuando no sea constitutivo de falta grave» es precisamente la formulación con la que el artículo 178 incorpora este supuesto a las muy graves.",
        c: "Una ventaja que rebasa los usos sociales y de cortesía no recibe la consideración de falta leve.",
      },
    },
    {
      preguntaId: 46,
      justificacion:
        "Cualquier actuación discriminatoria por las condiciones personales o sociales enumeradas en el artículo 178 constituye falta muy grave.",
      descartes: {
        b: "La prohibición de discriminación se protege mediante su inclusión expresa entre las faltas muy graves.",
        c: "Una actuación discriminatoria no se reduce a una infracción menor de conducta.",
      },
    },
    {
      preguntaId: 47,
      justificacion:
        "Causar daños muy graves al patrimonio de la Administración por negligencia o mala fe es una falta muy grave conforme al artículo 178.",
      descartes: {
        b: "El artículo 179 contempla daños graves; el enunciado eleva expresamente el resultado a daños muy graves.",
        c: "La magnitud del daño y la presencia de negligencia o mala fe descartan la categoría leve.",
      },
    },
    {
      preguntaId: 48,
      justificacion:
        "Usar, autorizar o facilitar a terceros medios oficiales para fines particulares es falta grave, salvo que su escasa entidad permita calificarla como leve, según el artículo 179.",
      descartes: {
        a: "El precepto no sitúa este uso particular, por sí solo, entre las faltas muy graves.",
        c: "La levedad queda reservada a casos de escasa entidad; el enunciado presenta como regla general la categoría grave.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-09-personal-al-servicio-administraciones-publicas-vascas",
  references: {
    1: articleReference(178),
    2: articleReference(178),
    3: articleReference(180),
    4: articleReference(179),
    5: articleReference(178),
    6: articleReference(178),
    7: articleReference(179),
    8: articleReference(180),
    9: articleReference(179),
    10: articleReference(178),
    11: articleReference(178),
    12: articleReference(178),
    13: articleReference(179),
    14: articleReference(178),
    15: articleReference(178),
    16: articleReference(179),
    17: articleReference(179),
    18: articleReference(180),
    19: articleReference(178),
    20: articleReference(179),
    21: articleReference(179),
    22: articleReference(178),
    23: articleReference(178),
    24: articleReference(178),
    25: articleReference(178),
    26: articleReference(179),
    27: articleReference(179),
    28: articleReference(179),
    29: articleReference(178),
    30: articleReference(178),
    31: articleReference(179),
    32: articleReference(178),
    33: articleReference(178),
    34: articleReference(178),
    35: articleReference(179),
    36: articleReference(178),
    37: articleReference(179),
    38: articleReference(178),
    39: articleReference(179),
    40: articleReference(178),
    41: articleReference(178),
    42: articleReference(179),
    43: articleReference(179),
    44: articleReference(178),
    45: articleReference(178),
    46: articleReference(178),
    47: articleReference(178),
    48: articleReference(179),
  },
});
