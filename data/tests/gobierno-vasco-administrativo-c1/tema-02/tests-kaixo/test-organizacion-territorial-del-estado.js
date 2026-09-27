/**
 * Datos extraídos del test web de Kaixo para Administrativo/a, Tema 2, OPE 2022.
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-organizacion-territorial-del-estado-kaixo",
  autor: {
    id: "kaixo",
    nombre: "Kaixo",
  },
  titulo: "La organización territorial del Estado (OPE 2022)",
  convocatoria: {
    nombre: "OPE 2022",
    anio: 2022,
  },
  includeInCombinedTest: false,
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "02",
      titulo: "La organización territorial del Estado. Aspectos generales. Las comunidades autónomas, su organización y competencia. Los Estatutos de Autonomía.",
    },
  },
  fuente: {
    tipo: "web",
    url: "https://www.kaixo.com/ope/index.php?aukera=ejadministrativo&hizk=1&tema=2",
    respuestasUrl: "https://www.kaixo.com/ope/index.php?aukera=ejadministrativo&aukera2=eran&hizk=1",
    preguntas: 20,
  },
  preguntas: [
    {
      id: 1,
      enunciado: "De acuerdo con la Constitución española de 1978:",
      opciones: [
        { id: "a", texto: "El Estado se organiza territorialmente en municipios, en provincias y en Comunidades Autónomas, todas las cuales gozarán de autonomía para la gestión de sus propios intereses." },
        { id: "b", texto: "El Estado se organiza territorialmente en municipios, en provincias y en Comunidades Autónomas, de las cuales solo las últimas gozan de autonomía para la gestión de sus propios intereses." },
        { id: "c", texto: "Tanto la Administración local como la autonómica tienen reconocida una autonomía de carácter político, no así las provincias." },
        { id: "d", texto: "La Administración local y la Administración Autonómica tienen reconocida constitucionalmente una autonomía de carácter político." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 2,
      enunciado: "El Estatuto de Autonomía:",
      opciones: [
        { id: "a", texto: "Constituye la norma institucional básica de la Comunidad Autónoma, pero subordinada y limitada por la Constitución estatal." },
        { id: "b", texto: "Constituye la norma institucional básica de la Comunidad Autónoma, al mismo nivel que la Constitución estatal." },
        { id: "c", texto: "Constituye la norma institucional básica de la Comunidad Autónoma, pero sin estar subordinada y limitada por la Constitución estatal." },
        { id: "d", texto: "No es la norma institucional básica de la Comunidad Autónoma." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 3,
      enunciado: "Los Estatutos de Autonomía se caracterizan por ser:",
      opciones: [
        { id: "a", texto: "Leyes orgánicas aprobadas por el Parlamento autonómico siguiendo un procedimiento especial." },
        { id: "b", texto: "Leyes ordinarias aprobadas por el Parlamento estatal." },
        { id: "c", texto: "Leyes orgánicas, sin presentar ninguna particularidad o especialidad con respecto al resto de leyes orgánicas." },
        { id: "d", texto: "Son leyes orgánicas especiales por cuanto difieren de las restantes en cuanto a su procedimiento de elaboración y reforma." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 4,
      enunciado: "Señala cuál de las siguientes respuestas, con relación al contenido de los Estatutos de Autonomía, es INCORRECTA:",
      opciones: [
        { id: "a", texto: "Los Estatutos de Autonomía deben tener un contenido mínimo que viene fijado en la Constitución." },
        { id: "b", texto: "Los Estatutos de Autonomía deberán contener la delimitación de su territorio." },
        { id: "c", texto: "Los Estatutos de Autonomía deberán contener la lista de los derechos fundamentales correspondientes a las personas del territorio." },
        { id: "d", texto: "Los Estatutos de Autonomía deberán contener las competencias asumidas dentro del marco establecido por la Constitución y las bases para el traspaso de los servicios correspondientes a las mismas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 5,
      enunciado: "En su calidad de Administraciones Públicas de carácter territorial y dentro del ámbito de sus competencias, los Municipios y Provincias disponen, entre otras, de las siguientes potestades:",
      opciones: [
        { id: "a", texto: "La potestad reglamentaria y de autoorganización, pero no la potestad tributaria y financiera." },
        { id: "b", texto: "Las potestades expropiatorias y de investigación, deslinde y recuperación de oficio de sus bienes, pero no la potestad de ejecución forzosa." },
        { id: "c", texto: "La presunción de legitimidad y la ejecutividad de sus actos, pero no las potestades de ejecución forzosa y sancionadora." },
        { id: "d", texto: "La potestad de revisión de oficio de sus actos y acuerdos." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 6,
      enunciado: "De acuerdo con el vigente ordenamiento español, NO tiene carácter de Entidad Local Territorial:",
      opciones: [
        { id: "a", texto: "El Municipio." },
        { id: "b", texto: "La Comunidad Autónoma." },
        { id: "c", texto: "La provincia." },
        { id: "d", texto: "La Isla en los archipiélagos balear y canario." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 7,
      enunciado: "De acuerdo con la regulación española relativa a la provincia, puede decirse que:",
      opciones: [
        { id: "a", texto: "La provincia es una entidad local con personalidad jurídica propia, determinada por la agrupación de municipios." },
        { id: "b", texto: "Cualquier alteración de los límites provinciales habrá de ser aprobada por las Cortes Generales mediante ley ordinaria." },
        { id: "c", texto: "Cualquier alteración de los límites provinciales habrá de ser aprobada por el Consejo de Ministros." },
        { id: "d", texto: "No se pueden crear agrupaciones de municipios diferentes de la provincia, salvo que sean aprobadas por el Gobierno debido a razones de interés público." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 8,
      enunciado: "Señala cuál de las siguientes respuestas relativas a los Estatutos de Autonomía es INCORRECTA:",
      opciones: [
        { id: "a", texto: "Los Estatutos serán la norma institucional básica de cada Comunidad Autónoma." },
        { id: "b", texto: "Los Estatutos deben contener la denominación, organización y sede de las instituciones autónomas propias." },
        { id: "c", texto: "El Estado reconocerá y amparará los Estatutos como parte integrante de su ordenamiento jurídico." },
        { id: "d", texto: "La reforma de los Estatutos se ajustará al procedimiento establecido en la Constitución, requiriendo la aprobación por las Cortes Generales mediante ley orgánica." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 9,
      enunciado: "La provincia es una entidad territorial:",
      opciones: [
        { id: "a", texto: "Cuyo gobierno y administración autónoma corresponde a las Diputaciones u otras Corporaciones de carácter representativo." },
        { id: "b", texto: "Cuyo Gobierno está encomendado siempre a una Diputación provincial." },
        { id: "c", texto: "Que se configura como una entidad local determinada por la agrupación de municipios, que tiene capacidad y competencias propias para el cumplimiento de sus fines, pero carece de personalidad jurídica propia." },
        { id: "d", texto: "Cuya organización y gobierno viene establecida en los Estatutos de Autonomía." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 10,
      enunciado: "Según establece la normativa vigente en materia de Haciendas locales:",
      opciones: [
        { id: "a", texto: "Las Haciendas locales carecen de potestad tributaria y financiera." },
        { id: "b", texto: "Las Haciendas locales deberán disponer de los medios suficientes para el desempeño de las funciones que la ley atribuye a las Corporaciones respectivas." },
        { id: "c", texto: "Las Haciendas locales se nutrirán exclusivamente de tributos propios." },
        { id: "d", texto: "Las Haciendas locales podrán nutrirse de la participación en los tributos del Estado, pero no en los de las Comunidades Autónomas." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 11,
      enunciado: "¿Cuál de las siguientes afirmaciones sobre el principio de autonomía es INCORRECTA?:",
      opciones: [
        { id: "a", texto: "La Constitución garantiza el derecho a la autonomía de las nacionalidades y regiones que integran el Estado." },
        { id: "b", texto: "La Constitución reconoce que los municipios gozan de autonomía para la gestión de sus intereses." },
        { id: "c", texto: "La autonomía de las Comunidades Autónomas y los municipios es una autonomía política, no meramente administrativa." },
        { id: "d", texto: "La autonomía de la que gozan las provincias para la defensa de sus intereses no es una autonomía política." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 12,
      enunciado: "En relación con el modelo de descentralización del poder político, puede decirse que:",
      opciones: [
        { id: "a", texto: "La Constitución impone la organización del territorio en Comunidades Autónomas." },
        { id: "b", texto: "La organización del territorio en Comunidades Autónomas no es opcional, pues está basada en el principio dispositivo." },
        { id: "c", texto: "La organización del territorio en Comunidades Autónomas no está sujeta al principio dispositivo de la autonomía." },
        { id: "d", texto: "La Constitución garantiza la solidaridad entre las nacionalidades y regiones que integran el Estado." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 13,
      enunciado: "En relación con el proceso de configuración y desarrollo de la autonomía territorial, es posible afirmar que:",
      opciones: [
        { id: "a", texto: "La Constitución prevé dos diferentes procesos de acceso a la autonomía: uno ordinario y otro agravado." },
        { id: "b", texto: "La Constitución presupone, pero no prevé, un procedimiento de acceso a la autonomía." },
        { id: "c", texto: "La práctica totalidad de los Estatutos de Autonomía ha sido modificada en las décadas precedentes." },
        { id: "d", texto: "El Estatuto de Autonomía del País Vasco se aprobó de acuerdo con la disposición transitoria segunda de la Constitución, y ha sido ya reformado siguiendo el mismo procedimiento." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 14,
      enunciado: "En relación con la Administración de Justicia en las Comunidades Autónomas, puede decirse que:",
      opciones: [
        { id: "a", texto: "Un Tribunal Superior de Justicia, sin perjuicio de la jurisdicción que corresponde al Tribunal Supremo, culminará la organización judicial en el ámbito territorial de la Comunidad Autónoma." },
        { id: "b", texto: "Los Tribunales Superiores de Justicia son órganos jurisdiccionales de las Comunidades Autónomas." },
        { id: "c", texto: "El poder jurisdiccional está abierto, al igual que el legislativo y el ejecutivo, a la descentralización territorial." },
        { id: "d", texto: "La Constitución no recoge expresamente ninguna disposición sobre la organización judicial en el ámbito territorial de la Comunidad Autónoma." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 15,
      enunciado: "Es posible afirmar con relación a la organización institucional de las Comunidades Autónomas que:",
      opciones: [
        { id: "a", texto: "Los Estatutos de Autonomía no tienen por qué recoger necesariamente la denominación, organización y sede de las instituciones autónomas propias." },
        { id: "b", texto: "Las leyes autonómicas son dictadas por los Parlamentos autonómicos y promulgadas por el Presidente de la Comunidad Autónoma." },
        { id: "c", texto: "La elección del Presidente de la Comunidad Autónoma corresponde a los parlamentos autonómicos, dado que los Estatutos de Autonomía prevén un sistema de Gobierno presidencialista en las Comunidades Autónomas." },
        { id: "d", texto: "La Asamblea legislativa autonómica es elegida por sufragio universal con arreglo a un sistema de representación mayoritaria." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 16,
      enunciado: "Cada Comunidad Autónoma cuenta con un Consejo de Gobierno (indíquese la respuesta INCORRECTA):",
      opciones: [
        { id: "a", texto: "Que tiene atribuidas funciones ejecutivas y administrativas." },
        { id: "b", texto: "Dirigido por un Presidente, dado que los Estatutos de Autonomía prevén un sistema de Gobierno presidencialista en las Comunidades Autónomas." },
        { id: "c", texto: "Cuyos miembros son designados y cesados libremente por su Presidente." },
        { id: "d", texto: "El Presidente y los miembros del Consejo de Gobierno son políticamente responsables ante la Asamblea Legislativa." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 17,
      enunciado: "El Presidente de la Comunidad Autónoma:",
      opciones: [
        { id: "a", texto: "Debe ser elegido necesariamente de entre los miembros de la Asamblea Legislativa por la misma Asamblea." },
        { id: "b", texto: "Responde políticamente ante la Asamblea Legislativa, a diferencia de los miembros del Consejo." },
        { id: "c", texto: "No tiene por qué ser elegido necesariamente entre los miembros de la Asamblea Legislativa." },
        { id: "d", texto: "No responde políticamente ante la Asamblea Legislativa." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 18,
      enunciado: "En cuanto principio rector del sistema de distribución de competencias, el principio dispositivo implica:",
      opciones: [
        { id: "a", texto: "Que la Constitución establece las competencias de las que dispone cada Comunidad Autónoma." },
        { id: "b", texto: "Que la Constitución no impone un bloque de competencias concreto para todas las Comunidades Autónomas, ni para algunas en particular, sino que deja esa decisión en manos de los territorios interesados, debiendo respetarse siempre las reglas constitucionales sobre el reparto de competencias." },
        { id: "c", texto: "Que la Constitución articula un sistema de competencias cuyo reparto queda a disposición del acuerdo entre el Estado y las Comunidades Autónomas." },
        { id: "d", texto: "Que la Constitución señala las competencias que corresponden al Estado y las que son de las Comunidades autónomas, disponiendo un reparto competencial cerrado." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 19,
      enunciado: "En relación con el reparto de competencias que se recoge en la Constitución, es INCORRECTO afirmar que:",
      opciones: [
        { id: "a", texto: "El instrumento utilizado por la Constitución para articular el reparto de competencias es el sistema de listas." },
        { id: "b", texto: "La Constitución establece en el art. 149.1 de la Constitución una lista de competencias estatales que quedan excluidas del ámbito de disponibilidad de las Comunidades Autónomas." },
        { id: "c", texto: "Las Comunidades Autónomas pueden asumir funciones no reservadas al Estado sobre ciertas materias incluidas en el artículo 149.1 ya que en muchas materias de ese listado el Estado se reserva solo algunas funciones, pero no todas." },
        { id: "d", texto: "El artículo 148.1 de la Constitución incluye la lista de las materias que obligatoriamente corresponde asumir a las Comunidades Autónomas." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 20,
      enunciado: "Si atendemos al sistema de distribución territorial de competencias, es INCORRECTO afirmar que:",
      opciones: [
        { id: "a", texto: "Las Comunidades Autónomas solo pueden disponer de las competencias recogidas en los Estatutos de Autonomía." },
        { id: "b", texto: "La Constitución contempla la posibilidad de la atribución de competencias estatales a las Comunidades Autónomas mediante transferencia o delegación de competencias de titularidad estatal." },
        { id: "c", texto: "La Constitución otorga al Estado la competencia sobre las materias no asumidas por los Estatutos de Autonomía." },
        { id: "d", texto: "Las materias no atribuidas expresamente al Estado por la Constitución podrán corresponder a las Comunidades Autónomas, en virtud de sus respectivos Estatutos." },
      ],
      respuestaCorrecta: "a",
    },
  ],
};

export { test };
export default test;
