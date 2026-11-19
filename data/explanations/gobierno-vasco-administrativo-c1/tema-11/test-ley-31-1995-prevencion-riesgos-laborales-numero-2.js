import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-31-1995-prevencion-riesgos-laborales-numero-2",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El derecho a una protección eficaz genera un deber correlativo del empresario y, respecto de su personal, de la Administración pública.",
      descartes: { a: "El empresario está obligado, pero no es el único sujeto citado.", b: "La Administración también asume el deber respecto de su personal, junto con el empresario.", d: "El artículo 14 atribuye el deber correlativo a los dos sujetos contemplados en A y B." },
    },
    {
      preguntaId: 2,
      justificacion: "La protección eficaz incluye información, consulta, participación, formación preventiva y paralización ante riesgo grave e inminente.",
      descartes: { a: "Información, consulta y participación forman parte del derecho, junto con lo indicado en B.", b: "Formación y paralización también están incluidas, sin excluir los derechos de A." },
    },
    {
      preguntaId: 3,
      justificacion: "La vigilancia del estado de salud se integra entre los derechos de las personas trabajadoras a una protección eficaz.",
      descartes: { b: "La ley la configura como derecho y garantía empresarial, no como deber general del trabajador.", c: "La opción A está respaldada expresamente por el artículo 14.1." },
    },
    {
      preguntaId: 4,
      justificacion: "La prevención empresarial combina la integración de la actividad preventiva y la adopción de las medidas necesarias de seguridad y salud.",
      descartes: { a: "La integración es obligatoria, pero debe acompañarse de las medidas de B.", b: "Las medidas protectoras son necesarias y se aplican dentro del sistema integrado de A." },
    },
    {
      preguntaId: 5,
      justificacion: "Corresponde al empresario desarrollar una acción permanente de seguimiento de la actividad preventiva.",
      descartes: { b: "El trabajador coopera en prevención, pero no es el sujeto al que se atribuye este seguimiento permanente.", c: "El artículo 14.2 asigna expresamente la acción al empresario." },
    },
    {
      preguntaId: 6,
      justificacion: "El seguimiento busca perfeccionar continuamente la identificación, evaluación y control de riesgos no evitados y los niveles de protección.",
      descartes: { b: "La integración preventiva es una obligación general, pero no la finalidad concreta de esta acción de seguimiento.", c: "La opción A reproduce la finalidad definida en el artículo 14.2." },
    },
    {
      preguntaId: 7,
      justificacion: "La atribución de funciones preventivas a trabajadores o servicios y el concierto con entidades especializadas complementan la acción empresarial.",
      descartes: { a: "Las funciones de los servicios de empresa son una forma de complemento, junto con el concierto externo.", b: "El recurso a entidades especializadas también complementa las acciones internas." },
    },
    {
      preguntaId: 8,
      justificacion: "Ni los servicios preventivos ni el concierto con especialistas liberan al empresario de su deber de protección.",
      descartes: { a: "La colaboración preventiva complementa al empresario, pero no lo exime.", c: "La ley sí resuelve esta cuestión en el artículo 14.4." },
    },
    {
      preguntaId: 9,
      justificacion: "El coste de las medidas de seguridad y salud no puede recaer de ningún modo sobre las personas trabajadoras.",
      descartes: { b: "Trasladar el coste al trabajador vulneraría el artículo 14.5.", c: "La ley no establece un reparto entre trabajador y empresario." },
    },
    {
      preguntaId: 10,
      justificacion: "Evitar los riesgos, evaluar los inevitables y combatirlos en origen son principios que debe aplicar el empresario.",
      descartes: { a: "Estas decisiones forman parte del deber empresarial de prevención, no de una obligación decisoria del trabajador.", c: "La responsabilidad de aplicar esos principios recae sobre el empresario." },
    },
    {
      preguntaId: 11,
      justificacion: "Atender a la evolución técnica y sustituir lo peligroso por alternativas menos peligrosas son principios de actuación empresarial.",
      descartes: { a: "La ley no traslada al trabajador la elección técnica de las medidas preventivas.", c: "El artículo 15.1 dirige ambos principios al empresario." },
    },
    {
      preguntaId: 12,
      justificacion: "El empresario debe dar instrucciones adecuadas y anteponer la protección colectiva a la individual.",
      descartes: { a: "La prioridad legal opera en sentido contrario: primero la protección colectiva.", c: "La falsedad de A impide aceptar conjuntamente ambas alternativas." },
    },
    {
      preguntaId: 13,
      justificacion: "La adaptación debe orientar el trabajo a la persona, y la elección de equipos y métodos ha de reducir monotonía y efectos nocivos.",
      descartes: { a: "El principio no busca personas que se adapten al trabajo, sino adaptar el trabajo a ellas.", c: "La inversión conceptual de A impide considerar correctas las dos respuestas." },
    },
    {
      preguntaId: 14,
      justificacion: "Planificar la prevención exige integrar de forma coherente técnica, organización, condiciones, relaciones sociales y factores ambientales.",
      descartes: { a: "La planificación es correcta y se concreta mediante el conjunto descrito en B.", b: "La integración de esos factores define cómo debe desarrollarse la planificación de A." },
    },
    {
      preguntaId: 15,
      justificacion: "Al asignar tareas, el empresario debe considerar las capacidades profesionales del trabajador en seguridad y salud.",
      descartes: { b: "La formulación legal se refiere específicamente a capacidades profesionales, no a una valoración genérica de capacidades personales.", c: "Solo A reproduce el criterio del artículo 15.2." },
    },
    {
      preguntaId: 16,
      justificacion: "El acceso a zonas de riesgo grave y específico queda limitado a quienes hayan recibido información suficiente y adecuada.",
      descartes: { a: "Permitir el acceso a toda la plantilla eliminaría la restricción preventiva.", c: "La ley permite el acceso al personal debidamente informado; no impone una prohibición absoluta." },
    },
    {
      preguntaId: 17,
      justificacion: "La medida preventiva debe prever distracciones o imprudencias no temerarias y valorar los riesgos adicionales que ella misma pueda generar.",
      descartes: { a: "La previsión de errores no temerarios es obligatoria, junto con el análisis de B.", b: "Los riesgos adicionales también deben ponderarse y complementan la previsión de A." },
    },
    {
      preguntaId: 18,
      justificacion: "Una medida con riesgos añadidos solo se admite si estos son sustancialmente menores que los controlados y no existe alternativa más segura.",
      descartes: { b: "Aceptar riesgos superiores frustraría la finalidad protectora del principio.", c: "La opción A recoge las dos condiciones acumulativas del artículo 15.4." },
    },
    {
      preguntaId: 19,
      justificacion: "Las cooperativas pueden asegurar la previsión de riesgos respecto de sus socios cuya actividad consiste en prestar trabajo personal.",
      descartes: { a: "La empresa puede asegurar a sus trabajadores, no a los empresarios como afirma la opción.", b: "Los autónomos conciertan cobertura respecto de sí mismos, no respecto de trabajadores ajenos." },
    },
    {
      preguntaId: 20,
      justificacion: "El plan integra la prevención en el sistema general de gestión, tanto en todas las actividades como en cada nivel jerárquico.",
      descartes: { a: "La integración en la gestión es correcta y se despliega en los ámbitos indicados en B.", b: "Actividades y niveles jerárquicos concretan el alcance de la integración general." },
    },
    {
      preguntaId: 21,
      justificacion: "El plan reúne estructura, responsabilidades y funciones, además de prácticas, procedimientos, procesos y recursos preventivos.",
      descartes: { a: "Los elementos organizativos son necesarios, junto con los instrumentos y recursos de B.", b: "Prácticas y recursos también se incluyen, sin sustituir la estructura organizativa." },
    },
    {
      preguntaId: 22,
      justificacion: "La evaluación es inicial y debe atender, entre otros factores, a equipos, sustancias y acondicionamiento de los lugares de trabajo.",
      descartes: { a: "La ley exige una evaluación inicial, no una evaluación únicamente final.", c: "Se actualiza cuando cambian las condiciones y se revisa ante daños; estos no son el único motivo." },
    },
    {
      preguntaId: 23,
      justificacion: "Los controles periódicos se realizan cuando el resultado de la evaluación muestra que son necesarios para detectar situaciones peligrosas.",
      descartes: { a: "No se imponen de manera incondicionada en todos los casos.", c: "Los controles se apoyan en una evaluación previa, no en su ausencia." },
    },
    {
      preguntaId: 24,
      justificacion: "Si la evaluación revela riesgos, el empresario debe actuar para eliminarlos, reducirlos o controlarlos y planificar cada actuación con plazo, responsables y recursos.",
      descartes: { a: "Las actividades preventivas son obligatorias y además deben planificarse como señala B.", b: "La planificación es exigible y acompaña a la ejecución material indicada en A." },
    },
    {
      preguntaId: 25,
      justificacion: "Las actividades deben modificarse cuando los controles periódicos revelen que no cumplen los fines de protección.",
      descartes: { a: "El seguimiento continuo alcanza precisamente a las actividades incluidas en la planificación; no puede excluirla.", c: "La incorrección de A impide considerar correctas ambas opciones." },
    },
    {
      preguntaId: 26,
      justificacion: "La gestión puede simplificarse según plantilla, naturaleza y peligrosidad, siempre que no reduzca el nivel de protección.",
      descartes: { a: "La norma sí admite una modalidad simplificada bajo condiciones.", b: "No es una opción automática para toda empresa; depende de sus características y de conservar la protección." },
    },
    {
      preguntaId: 27,
      justificacion: "Ante un daño o indicios de insuficiencia preventiva, el empresario debe investigar las causas.",
      descartes: { b: "El personal preventivo puede colaborar, pero la obligación legal se atribuye al empresario.", c: "Los representantes no sustituyen al empresario como responsable de ordenar esta investigación." },
    },
    {
      preguntaId: 28,
      justificacion: "El empresario debe proporcionar equipos individuales adecuados y asegurar su utilización efectiva cuando sean necesarios.",
      descartes: { a: "La entrega del equipo es obligatoria y se completa con la vigilancia de su uso.", b: "Velar por el uso también es un deber, junto con proporcionar el equipo." },
    },
    {
      preguntaId: 29,
      justificacion: "El equipo individual procede cuando el riesgo no puede evitarse ni limitarse suficientemente mediante protección colectiva u organización del trabajo.",
      descartes: { a: "La imposibilidad de evitar el riesgo es un supuesto, acompañado de la insuficiencia descrita en B.", b: "La limitación insuficiente también justifica el equipo individual y complementa A." },
    },
    {
      preguntaId: 30,
      justificacion: "La información debe abarcar las medidas y actividades de protección y prevención aplicables a los riesgos.",
      descartes: { a: "Los riesgos se informan tanto a escala de empresa como por puesto o función; la opción los limita solo al segundo ámbito.", c: "La restricción incorrecta de A impide aceptar ambas." },
    },
    {
      preguntaId: 31,
      justificacion: "Con representantes, la información general se canaliza a través de ellos; cada trabajador recibe directamente la relativa a sus riesgos específicos y medidas aplicables.",
      descartes: { b: "La comunicación individual no repite toda la información general, sino la específica del puesto o función.", c: "La amplitud de B hace que no puedan ser correctas las dos afirmaciones." },
    },
    {
      preguntaId: 32,
      justificacion: "El empresario debe consultar a la plantilla y permitir su participación en todas las cuestiones que afecten a seguridad y salud.",
      descartes: { a: "La consulta es obligatoria y se acompaña del derecho participativo de B.", b: "La participación también debe facilitarse, junto con la consulta previa." },
    },
    {
      preguntaId: 33,
      justificacion: "Tanto los trabajadores como los órganos de participación y representación pueden proponer mejoras de los niveles de protección.",
      descartes: { a: "La plantilla puede formular propuestas, sin excluir a los órganos representativos.", b: "Los órganos también están legitimados y comparten la iniciativa con los trabajadores." },
    },
    {
      preguntaId: 34,
      justificacion: "Se conserva la solución B registrada, aunque el artículo 19 exige que la formación sea teórica y práctica, además de suficiente y adecuada.",
      descartes: { a: "La formación no puede excluir la vertiente práctica.", c: "La opción A niega una exigencia legal, por lo que ambas no pueden aceptarse conjuntamente." },
      notaRevision: { tipo: "discrepancia-teorica", titulo: "La solución registrada es incompleta", texto: "La opción B menciona formación teórica suficiente y adecuada, pero omite que también debe ser práctica. Se mantiene la opción B registrada, aunque ninguna alternativa reproduce íntegramente el artículo 19.1." },
    },
    {
      preguntaId: 35,
      justificacion: "La formación se garantiza al contratar y también cuando cambian funciones, tecnologías o equipos.",
      descartes: { a: "El momento de contratación es obligatorio, junto con las actualizaciones posteriores.", b: "Los cambios requieren formación adicional y no desplazan la formación inicial." },
    },
    {
      preguntaId: 36,
      justificacion: "La formación preventiva debe centrarse específicamente en el puesto o función de cada trabajador.",
      descartes: { b: "Una formación genérica para toda la empresa no sustituye la adaptación al puesto.", c: "El enfoque general de B no cumple la especificidad exigida." },
    },
    {
      preguntaId: 37,
      justificacion: "Debe impartirse preferentemente dentro de la jornada; si se da fuera, se descuenta de la jornada el tiempo invertido.",
      descartes: { a: "La ley expresa una preferencia, no una obligación absoluta de impartirla siempre dentro.", b: "Tampoco ordena que se realice necesariamente fuera del horario laboral." },
    },
    {
      preguntaId: 38,
      justificacion: "La empresa puede impartir la formación con medios propios o concertarla con servicios ajenos.",
      descartes: { a: "Los medios internos son válidos, pero no constituyen la única modalidad.", b: "El concierto externo también se admite y convive con la formación propia." },
    },
    {
      preguntaId: 39,
      justificacion: "El coste de la formación preventiva no puede recaer en ningún caso sobre los trabajadores.",
      descartes: { b: "La gratuidad para el trabajador se mantiene también en formaciones posteriores a la contratación.", c: "La opción A reproduce una prohibición expresa del artículo 19.2." },
    },
    {
      preguntaId: 40,
      justificacion: "Ante un riesgo grave e inminente, el empresario debe informar cuanto antes a las personas afectadas sobre el riesgo y las medidas adoptadas o previstas.",
      descartes: { b: "La interrupción y abandono no se ordenan automáticamente en todo caso; dependen de la gravedad y de las medidas necesarias.", c: "El carácter absoluto de B impide aceptar ambas respuestas." },
    },
    {
      preguntaId: 41,
      justificacion: "Si no puede contactar con su superior ante un peligro grave e inminente, el trabajador debe poder adoptar medidas para evitar sus consecuencias.",
      descartes: { b: "La facultad se activa precisamente en una situación de peligro grave e inminente, no cuando esta falta.", c: "La condición de B contradice el supuesto protegido." },
    },
    {
      preguntaId: 42,
      justificacion: "Puede interrumpir el trabajador que aprecia riesgo grave e inminente y también la representación por mayoría si el empresario no adopta las medidas necesarias.",
      descartes: { a: "La decisión individual está prevista, junto con la colectiva de B.", b: "La representación puede acordar la paralización en el supuesto indicado, sin excluir la facultad individual." },
    },
    {
      preguntaId: 43,
      justificacion: "La paralización acordada se comunica inmediatamente a la empresa y a la autoridad laboral.",
      descartes: { b: "La autoridad laboral dispone de veinticuatro horas, no de cuarenta y ocho, para anular o ratificar.", c: "El plazo erróneo de B impide que ambas sean correctas." },
    },
    {
      preguntaId: 44,
      justificacion: "Los Delegados de Prevención pueden adoptar el acuerdo por mayoría cuando la urgencia impide reunir al órgano de representación.",
      descartes: { a: "Esta sustitución no opera siempre, sino solo ante la imposibilidad urgente señalada.", c: "La ley sí reconoce esta facultad excepcional a los delegados." },
    },
    {
      preguntaId: 45,
      justificacion: "Solo cabe perjuicio por estas medidas cuando se haya actuado de mala fe o cometido negligencia grave.",
      descartes: { a: "La protección no es absoluta porque la ley exceptúa mala fe y negligencia grave.", b: "La mera apreciación posterior de que la medida no era necesaria no basta para generar perjuicio." },
    },
    {
      preguntaId: 46,
      justificacion: "El empresario garantiza vigilancia periódica de la salud en función de los riesgos inherentes al trabajo.",
      descartes: { b: "Como regla, la vigilancia requiere consentimiento; solo determinados supuestos permiten exceptuarlo.", c: "Los reconocimientos imprescindibles constituyen una excepción a la voluntariedad, no un caso voluntario." },
    },
    {
      preguntaId: 47,
      justificacion: "La información médica personal queda reservada al personal médico y a las autoridades sanitarias que realizan la vigilancia.",
      descartes: { b: "La representación laboral no accede a los datos médicos personales por esta vía.", c: "La confidencialidad excluye que ambos grupos tengan el mismo acceso." },
    },
    {
      preguntaId: 48,
      justificacion: "Las conclusiones sobre aptitud o medidas preventivas pueden comunicarse al empresario y a quienes tienen responsabilidades preventivas.",
      descartes: { a: "El empresario puede conocer las conclusiones funcionales, junto con los órganos señalados en B.", b: "Los responsables preventivos también las reciben para ejercer sus funciones." },
    },
    {
      preguntaId: 49,
      justificacion: "Cuando la naturaleza del riesgo lo exige, la vigilancia periódica debe prolongarse tras finalizar la relación laboral.",
      descartes: { a: "La ley contempla expresamente una prolongación posterior en determinados riesgos.", c: "No establece una duración uniforme mínima de un año para todos los casos." },
    },
    {
      preguntaId: 50,
      justificacion: "El empresario conserva a disposición de la autoridad laboral el plan de prevención.",
      descartes: { b: "La evaluación documentada debe incluir el resultado de los controles periódicos, que la opción excluye.", c: "La incorrección de B impide considerar válidas ambas." },
    },
    {
      preguntaId: 51,
      justificacion: "Debe conservarse tanto la planificación preventiva y sus medios como la práctica de controles de salud y las conclusiones legalmente comunicables.",
      descartes: { a: "La planificación es documentación obligatoria, junto con los controles indicados en B.", b: "Los controles de salud y conclusiones también se documentan, sin excluir la planificación." },
    },
    {
      preguntaId: 52,
      justificacion: "Se conserva la solución B registrada: la relación documental alcanza a accidentes y enfermedades que causen incapacidad laboral superior a un día de trabajo.",
      descartes: { a: "No se incluyen indiscriminadamente todas las incapacidades; existe un umbral temporal.", c: "La teoría sí establece una respuesta, aunque la opción B omite el término de comparación completo." },
      notaRevision: { tipo: "discrepancia-teorica", titulo: "La opción registrada tiene una redacción incompleta", texto: "El artículo 23.1.e exige que la incapacidad laboral sea superior a un día de trabajo. La opción B termina en «superior» sin expresar ese umbral. Se conserva B como solución registrada." },
    },
    {
      preguntaId: 53,
      justificacion: "La documentación preventiva debe remitirse a la autoridad laboral cuando la empresa cesa su actividad.",
      descartes: { a: "El artículo 23.2 sitúa la remisión en el cese, no en el inicio.", c: "Solo el momento descrito en B activa esta obligación de remisión." },
    },
    {
      preguntaId: 54,
      justificacion: "La documentación se conserva para la autoridad laboral y también se pone a disposición de las autoridades sanitarias.",
      descartes: { a: "La autoridad laboral es destinataria, junto con la sanitaria.", b: "La autoridad sanitaria también accede para ejercer sus competencias, sin excluir a la laboral." },
    },
    {
      preguntaId: 55,
      justificacion: "Cuando coinciden trabajadores de varias empresas en un centro, las empresas deben cooperar en la aplicación de la normativa preventiva.",
      descartes: { b: "Es el titular del centro quien debe facilitar a los demás empresarios información e instrucciones adecuadas; la opción invierte la obligación.", c: "La inversión de sujetos en B impide aceptar ambas afirmaciones." },
    },
    {
      preguntaId: 56,
      justificacion: "La empresa principal vigila a contratistas de su propia actividad en sus centros, y los deberes de cooperación e información se extienden a autónomos presentes en ellos.",
      descartes: { a: "El deber de vigilancia sobre contratas es correcto y se suma a la extensión de B.", b: "Los autónomos quedan incluidos en cooperación e información, junto con la vigilancia empresarial." },
    },
    {
      preguntaId: 57,
      justificacion: "Las personas especialmente sensibles reciben protección específica y no deben ocupar puestos que generen peligro o sean incompatibles con sus exigencias psicofísicas.",
      descartes: { a: "La protección reforzada es obligatoria y se concreta también en la limitación de puestos de B.", b: "La exclusión de puestos peligrosos o incompatibles acompaña a las medidas específicas de protección." },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-11-gobierno-vasco",
  references: referencesFromQuestionRanges([
    { from: 1, to: 9, reference: articleReference(14) },
    { from: 10, to: 19, reference: articleReference(15) },
    { from: 20, to: 27, reference: articleReference(16) },
    { from: 28, to: 29, reference: articleReference(17) },
    { from: 30, to: 33, reference: articleReference(18) },
    { from: 34, to: 39, reference: articleReference(19) },
    { from: 40, to: 45, reference: articleReference(21) },
    { from: 46, to: 49, reference: articleReference(22) },
    { from: 50, to: 54, reference: articleReference(23) },
    { from: 55, to: 56, reference: articleReference(24) },
    { from: 57, reference: articleReference(25) },
  ]),
});
