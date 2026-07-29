const resumenSituacionesAdministrativas = {
  schemaVersion: 1,
  id: "resumen-tema-18-situaciones-administrativas",
  titulo: "Situaciones administrativas del personal funcionario",
  descripcion:
    "Comparativa de las situaciones administrativas reguladas en los artículos 136 a 160 de la Ley 11/2022.",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "18",
      titulo:
        "Acceso al empleo público y la provisión de puestos de trabajo en las administraciones públicas vascas. Clasificación en Cuerpos y Escalas. Ley 11/2022, de 1 de diciembre, de Empleo Público Vasco.",
    },
  },
  fuente: {
    resourceId: "tema-18-acceso-empleo-publico-provision-puestos",
    articulos: {
      desde: 136,
      hasta: 160,
    },
  },
  columnas: [
    { id: "situacion", titulo: "Situación" },
    { id: "supuesto", titulo: "Supuesto y duración" },
    { id: "reserva", titulo: "Reserva" },
    { id: "retribuciones", titulo: "Retribuciones" },
    { id: "computo", titulo: "Cómputo del tiempo" },
    { id: "salida", titulo: "Reingreso o paso posterior" },
  ],
  filas: [
    {
      situacion: "Servicio activo",
      articulos: "Art. 137",
      supuesto:
        "Prestación ordinaria de servicios y los demás supuestos expresamente incluidos en el artículo.",
      reserva: "No se configura una reserva separada: se permanece en servicio activo.",
      retribuciones:
        "El artículo no detalla conceptos retributivos; se mantienen los derechos inherentes a la condición funcionarial.",
      computo: "Servicio activo a todos los efectos.",
      salida: "No requiere reingreso mientras se mantenga esta situación.",
    },
    {
      situacion: "Servicios especiales",
      articulos: "Art. 138",
      supuesto:
        "Cargos, mandatos, misiones y funciones expresamente enumerados. Se mantiene mientras subsista la causa.",
      reserva: "Sí, del puesto obtenido por concurso.",
      retribuciones:
        "Las del puesto o cargo desempeñado, más los trienios reconocidos.",
      computo:
        "Carrera profesional, trienios, promoción interna y Seguridad Social, con la excepción prevista para determinadas transferencias a instituciones europeas.",
      salida:
        "Solicitud en 30 días naturales desde el cese. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Servicio en otras administraciones públicas",
      articulos: "Art. 139",
      supuesto:
        "Obtención de un puesto en otra Administración, transferencia, reasignación o movilidad interadministrativa.",
      reserva: "No hay reserva de puesto ni destino en la Administración de origen.",
      retribuciones: "Se aplica el régimen de la Administración de destino.",
      computo:
        "Trienios y carrera profesional como servicios prestados en la Administración de origen.",
      salida:
        "En los supuestos con retorno a la Administración de origen, la solicitud debe presentarse en 30 días naturales desde el cese. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Servicio como personal directivo público profesional",
      articulos: "Art. 140",
      supuesto:
        "Desempeño de puestos directivos profesionales del sector público que no den lugar a servicios especiales.",
      reserva:
        "Sí, del puesto obtenido por concurso o del destino asignado al acceder a la condición funcionarial.",
      retribuciones: "El artículo no concreta un régimen retributivo propio.",
      computo:
        "Antigüedad y carrera profesional como servicios prestados en la Administración de origen.",
      salida:
        "Solicitud en 30 días naturales desde el cese. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Excedencia voluntaria por interés particular",
      articulos: "Art. 141",
      supuesto:
        "Requiere 2 años continuados de servicios efectivos. Permanencia mínima de 2 años; tras reingresar deben transcurrir 3 años de servicios efectivos para solicitarla de nuevo.",
      reserva: "No.",
      retribuciones: "No se devengan.",
      computo: "No computa para carrera, trienios ni Seguridad Social.",
      salida:
        "Reingreso a solicitud de la persona interesada. Si no existe vacante, se continúa en la misma situación.",
    },
    {
      situacion: "Excedencia voluntaria con reserva de puesto y destino",
      articulos: "Art. 142",
      supuesto:
        "Requiere 3 años continuados de servicios efectivos. Duración de 6 meses a 1 año; una nueva solicitud exige acumular otros 3 años de servicios efectivos. Durante su disfrute no puede desempeñarse otro puesto en el sector público.",
      reserva: "Sí, del puesto y destino.",
      retribuciones: "No se devengan.",
      computo: "No computa para carrera, trienios ni Seguridad Social.",
      salida:
        "Solicitud en 30 días naturales al finalizar. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Excedencia voluntaria por agrupación familiar",
      articulos: "Art. 143",
      supuesto:
        "Por residencia del cónyuge o pareja de hecho en otra localidad al desempeñar allí un puesto definitivo de los previstos en el artículo. No exige servicios previos y dura un mínimo de 2 años.",
      reserva: "No.",
      retribuciones: "No se devengan.",
      computo: "No computa para carrera, trienios ni Seguridad Social.",
      salida:
        "Solicitud en 30 días naturales al finalizar. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Excedencia voluntaria por cuidado de familiares",
      articulos: "Art. 144",
      supuesto:
        "Cuidado de cada hija o hijo, o de familiar a cargo hasta 2.º grado que no pueda valerse por sí mismo y no tenga actividad retribuida. Máximo de 3 años por sujeto causante.",
      reserva: "Sí, del puesto y destino durante los 3 años.",
      retribuciones: "El artículo no reconoce retribuciones durante la excedencia.",
      computo: "Trienios, carrera profesional y Seguridad Social.",
      salida:
        "Reincorporación inmediata previa solicitud. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Excedencia voluntaria por violencia de género",
      articulos: "Art. 145",
      supuesto:
        "Para hacer efectiva la protección o la asistencia social integral. No exige servicios previos ni plazo mínimo de permanencia.",
      reserva:
        "6 meses; prorrogable por períodos de 3 meses hasta un máximo de 18 meses cuando lo exijan las actuaciones judiciales.",
      retribuciones:
        "Íntegras durante los 6 primeros meses; básicas más trienios durante los 6 meses siguientes.",
      computo:
        "Antigüedad, carrera profesional y Seguridad Social durante el período de reserva.",
      salida: "Reingreso previa solicitud de la persona interesada.",
    },
    {
      situacion: "Excedencia voluntaria por violencia terrorista",
      articulos: "Art. 146",
      supuesto:
        "Para la protección o asistencia de las personas incluidas en el supuesto legal. No exige servicios previos ni plazo mínimo de permanencia.",
      reserva:
        "Sí, del puesto y destino durante 6 meses; prorrogable por períodos de 3 meses hasta un máximo de 18 meses.",
      retribuciones:
        "Íntegras durante los 6 primeros meses; básicas más trienios durante los 6 meses siguientes.",
      computo:
        "Antigüedad, carrera profesional y Seguridad Social durante el período de reserva.",
      salida: "Reingreso previa solicitud de la persona interesada.",
    },
    {
      situacion: "Excedencia voluntaria incentivada",
      articulos: "Art. 147",
      supuesto:
        "Vinculada a planes de ordenación del empleo público, reasignación de efectivos, expectativa de destino o excedencia forzosa. Puede solicitarse por 5 años y durante ese período impide desempeñar otro puesto en el sector público.",
      reserva: "No.",
      retribuciones:
        "Indemnización de 1 mensualidad por año de servicio efectivo, con los conceptos y el límite máximo de 24 mensualidades fijados en el artículo.",
      computo: "No computa para carrera, trienios ni Seguridad Social.",
      salida:
        "Solicitud en 30 días naturales al finalizar. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años. Si no hay vacante, se continúa en esta situación.",
    },
    {
      situacion: "Excedencia voluntaria para prestar servicios en el sector público",
      articulos: "Art. 148",
      supuesto:
        "Prestación de servicios en otro cuerpo, escala, agrupación, vínculo estatutario o laboral, o en entidades del sector público, cuando no corresponda otra situación. Dura mientras se mantenga la relación que la originó.",
      reserva: "No hay reserva de puesto ni destino en la Administración de origen.",
      retribuciones: "Se aplica el régimen de la Administración de destino.",
      computo:
        "Solo en el supuesto específico del artículo 148.6 computa para trienios y carrera profesional.",
      salida:
        "Solicitud en 30 días naturales desde el cese. Si no se solicita: excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      situacion: "Expectativa de destino",
      articulos: "Art. 149",
      supuesto:
        "Para personal afectado por una reasignación de efectivos. Duración máxima de 1 año.",
      reserva:
        "El artículo no establece una reserva específica; a los demás efectos se equipara al servicio activo.",
      retribuciones:
        "Básicas, complemento de carrera o grado consolidado y el 50 % del complemento del puesto anterior.",
      computo: "A los restantes efectos se equipara al servicio activo.",
      salida:
        "Al cumplirse 1 año se pasa a excedencia forzosa temporal. Exige aceptar determinados destinos, participar en concursos y formación, y atender desempeños temporales.",
    },
    {
      situacion: "Excedencia forzosa temporal",
      articulos: "Art. 150",
      supuesto:
        "Por agotamiento del plazo máximo de expectativa de destino o por incumplir sus obligaciones. Duración máxima de 3 años.",
      reserva: "El artículo no establece reserva de puesto o destino.",
      retribuciones:
        "Básicas y complemento de carrera o, en su defecto, grado personal consolidado.",
      computo:
        "Trienios, derechos pasivos y, en su caso, consolidación del grado o nivel de carrera.",
      salida: "Al cumplirse 3 años se pasa a excedencia forzosa.",
    },
    {
      situacion: "Excedencia forzosa",
      articulos: "Arts. 151 y 152",
      supuesto:
        "Cuando no sea posible una adscripción provisional, tras determinados supuestos de suspensión firme o al finalizar la excedencia forzosa temporal.",
      reserva: "No se identifica una reserva de puesto o destino.",
      retribuciones:
        "Básicas y el 50 % del complemento de carrera o, en su defecto, del grado personal consolidado.",
      computo: "Carrera profesional, trienios y Seguridad Social.",
      salida:
        "Reingreso obligatorio cuando exista vacante. El incumplimiento de concursos, formación o reincorporación determina excedencia por interés particular durante un mínimo de 2 años. No permite desempeñar otro puesto en el sector público.",
    },
    {
      situacion: "Suspensión de funciones",
      articulos: "Arts. 153 a 155",
      supuesto:
        "Puede ser provisional durante un procedimiento judicial o disciplinario, o firme por sentencia penal o sanción disciplinaria firme. La provisional disciplinaria dura como máximo 6 meses, salvo demora imputable; la judicial puede mantenerse durante la causa. La firme disciplinaria no puede exceder de 6 años. Durante la suspensión no pueden prestarse servicios en el sector público.",
      reserva:
        "La provisional puede implicar pérdida del puesto en el supuesto del artículo 154.4. La firme determina la pérdida del puesto y destino si excede de 6 meses.",
      retribuciones:
        "En suspensión provisional: básicas y, en su caso, prestaciones familiares, salvo incomparecencia o dilación imputable. La suspensión firme priva de los derechos inherentes durante su cumplimiento.",
      computo:
        "Si la provisional no se convierte en firme, el período computa como servicio activo y se abonan las retribuciones dejadas de percibir. El tiempo provisional computa para cumplir la suspensión firme.",
      salida:
        "Si la suspensión firme no supera 6 meses, reincorporación automática. Si los supera, solicitud en 30 días naturales; si no hay vacante en 6 meses, excedencia forzosa.",
    },
  ],
  reglasComunes: [
    {
      titulo: "Efectos",
      articulos: "Art. 136.2",
      texto:
        "Las situaciones distintas del servicio activo producen efectos desde la fecha fijada en la resolución que las concede.",
    },
    {
      titulo: "Resolución y registro",
      articulos: "Art. 136.5",
      texto:
        "Los cambios se acuerdan por el órgano competente, se anotan en el registro de personal y pueden efectuarse sin reingresar previamente al servicio activo si se cumplen los requisitos.",
    },
    {
      titulo: "Participación con reserva",
      articulos: "Art. 136.6",
      texto:
        "Quien permanezca en una situación con reserva de puesto puede participar en convocatorias de provisión y promoción profesional.",
    },
    {
      titulo: "Regla general de reingreso",
      articulos: "Art. 156",
      texto:
        "Debe solicitarse en la Administración de origen dentro del plazo de cada situación. La resolución fija la fecha y los efectos económicos; no tomar posesión sin causa justificada determina excedencia por interés particular durante un mínimo de 2 años.",
    },
    {
      titulo: "Reingreso con reserva",
      articulos: "Art. 157",
      texto:
        "Se realiza dentro del plazo propio de cada situación y, una vez notificada la resolución, en un máximo de 3 días.",
    },
    {
      titulo: "Reingreso sin reserva",
      articulos: "Art. 158",
      texto:
        "Se produce preferentemente mediante concurso o libre designación, o mediante adscripción provisional si existe una vacante adecuada.",
    },
  ],
  prioridadReingreso: {
    titulo: "Prioridad para el reingreso sin reserva de puesto",
    articulos: "Art. 158.3",
    introduccion:
      "Cuando el reingreso depende de una vacante dotada, la ley establece este orden:",
    situaciones: [
      "Excedencia forzosa temporal.",
      "Expectativa de destino.",
      "Excedencia forzosa.",
      "Excedencia voluntaria por violencia de género.",
      "Excedencia voluntaria por violencia terrorista.",
      "Excedencia para prestar servicios en el sector público en el supuesto del artículo 148.6.",
      "Resto de excedencias para prestar servicios en el sector público.",
      "Excedencia voluntaria por agrupación familiar.",
      "Excedencia voluntaria por interés particular.",
      "Servicio en otras administraciones públicas.",
      "Excedencia voluntaria incentivada.",
      "Suspensión de funciones.",
    ],
  },
  alcance: [
    {
      titulo: "Personal funcionario interino",
      articulos: "Art. 159",
      texto:
        "Se le aplican el servicio activo y la suspensión de funciones. También puede acogerse, con las condiciones del artículo, a excedencia por cuidado de familiares y por violencia de género o terrorista, manteniendo una reserva condicionada del puesto.",
    },
    {
      titulo: "Personal laboral",
      articulos: "Art. 160",
      texto:
        "Se rige por el Estatuto de los Trabajadores y los convenios colectivos aplicables. Estos pueden extender al personal laboral fijo las reglas compatibles de este título.",
    },
  ],
};

export default resumenSituacionesAdministrativas;
