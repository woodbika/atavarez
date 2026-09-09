import {
  buildPracticalCase,
  practicalQuestion as pregunta,
} from "../../../practical-case-builder.js";

const casos = [
  {
    id: "caso-01",
    numero: 1,
    articulo: 5,
    titulo: "Órganos administrativos",
    supuesto: "La Consejería de Educación ya dispone de una Dirección General de Becas que gestiona y resuelve las ayudas universitarias en toda la comunidad autónoma. Se propone crear una Oficina de Ayudas Universitarias con las mismas funciones, sobre el mismo territorio y población. La norma de creación fija su dependencia y funciones, pero no prevé créditos para su puesta en marcha y mantiene intactas las competencias de la Dirección General existente.",
    preguntas: [
      pregunta("caso-01-pregunta-01", "¿Cuándo tiene una unidad administrativa la consideración de órgano administrativo?", ["Siempre que tenga personal propio.", "Cuando se le atribuyen funciones con efectos jurídicos frente a terceros o su actuación tiene carácter preceptivo.", "Solo si tiene personalidad jurídica propia.", "Solo si depende directamente de un órgano superior."], "b", "El artículo 5.1 vincula la condición de órgano a que sus funciones produzcan efectos jurídicos frente a terceros o a que su actuación sea preceptiva."),
      pregunta("caso-01-pregunta-02", "Para crear un órgano administrativo, ¿qué exige como mínimo la Ley?", ["Únicamente fijar su nombre y dependencia.", "Solo delimitar sus funciones.", "Determinar integración y dependencia, funciones y competencias, y dotar los créditos necesarios.", "Aprobar previamente una ley formal en todos los casos."], "c", "El artículo 5.3 exige determinar la integración y dependencia, las funciones y competencias y los créditos necesarios para su puesta en marcha y funcionamiento."),
      pregunta("caso-01-pregunta-03", "¿Puede crearse la nueva Oficina en las condiciones descritas?", ["Sí, porque la potestad de autoorganización permite duplicidades.", "Sí, si ambas unidades pertenecen a la misma Consejería.", "No, mientras no se suprima o restrinja debidamente la competencia del órgano existente y se evite la duplicidad.", "Sí, porque la falta de créditos puede corregirse después sin más."], "c", "El artículo 5.4 impide crear órganos duplicados sin suprimir o restringir la competencia del existente; además, el artículo 5.3 exige dotación de créditos."),
    ],
  },
  {
    id: "caso-02",
    numero: 2,
    articulo: 6,
    titulo: "Instrucciones y órdenes de servicio",
    supuesto: "La Directora General dicta una instrucción dirigida a los servicios jerárquicamente dependientes para unificar la tramitación de expedientes. Una disposición específica establece que ese tipo de instrucciones debe publicarse. Un jefe de servicio incumple la instrucción, aunque el acto administrativo que dicta cumple todos los requisitos legales aplicables.",
    preguntas: [
      pregunta("caso-02-pregunta-01", "¿Puede la Directora General dirigir la actividad de sus órganos dependientes mediante instrucciones y órdenes de servicio?", ["No, solo puede hacerlo mediante reglamentos.", "Sí.", "Solo con autorización judicial.", "Solo si el órgano dependiente lo acepta."], "b", "El artículo 6.1 permite que los órganos administrativos dirijan la actividad de sus órganos jerárquicamente dependientes mediante instrucciones y órdenes de servicio."),
      pregunta("caso-02-pregunta-02", "En el supuesto descrito, ¿debe publicarse la instrucción?", ["No, las instrucciones nunca se publican.", "Solo si lo pide un interesado.", "Sí, porque una disposición específica así lo establece.", "Solo si contiene sanciones."], "c", "El artículo 6.1 prevé la publicación cuando una disposición específica lo establezca o cuando se estime conveniente por razón de sus destinatarios o efectos."),
      pregunta("caso-02-pregunta-03", "El incumplimiento de la instrucción por el jefe de servicio:", ["Anula automáticamente el acto dictado.", "Convierte el acto en nulo de pleno derecho.", "Impide siempre que el acto produzca efectos.", "No afecta por sí solo a la validez del acto, sin perjuicio de la responsabilidad disciplinaria que proceda."], "d", "Según el artículo 6.2, el incumplimiento no afecta por sí solo a la validez del acto, aunque puede dar lugar a responsabilidad disciplinaria."),
    ],
  },
  {
    id: "caso-03",
    numero: 3,
    articulo: 7,
    titulo: "Órganos consultivos",
    supuesto: "Un servicio jurídico de una Consejería actúa como órgano consultivo respecto de una disposición preparada por una Dirección General de esa misma Consejería. El Director General pretende indicar a los juristas qué conclusión deben alcanzar y exige que el informe sea favorable.",
    preguntas: [
      pregunta("caso-03-pregunta-01", "La Administración consultiva puede articularse:", ["Solo mediante el Consejo de Estado.", "Solo mediante servicios jurídicos internos.", "Mediante órganos específicos con autonomía orgánica y funcional o mediante servicios de la Administración activa que presten asistencia jurídica.", "Únicamente mediante empresas privadas contratadas."], "c", "El artículo 7 admite órganos consultivos específicos con autonomía orgánica y funcional o servicios de la Administración activa que presten asistencia jurídica."),
      pregunta("caso-03-pregunta-02", "Si la función consultiva se presta mediante servicios de la Administración activa, dichos servicios:", ["Pueden recibir instrucciones del órgano que elaboró la disposición.", "No pueden estar sujetos a dependencia jerárquica o funcional ni recibir indicaciones del órgano autor del acto o disposición objeto de consulta.", "Deben depender funcionalmente del órgano consultado.", "Solo necesitan independencia cuando el informe sea vinculante."], "b", "El artículo 7 exige independencia respecto del órgano que elaboró la disposición o produjo el acto objeto de consulta."),
      pregunta("caso-03-pregunta-03", "¿Es correcta la orden del Director General de emitir informe favorable?", ["Sí, por jerarquía administrativa.", "Sí, si se da por escrito.", "No.", "Sí, salvo oposición del Consejero."], "c", "El artículo 7 impide que el órgano autor de la disposición imparta instrucciones, directrices o indicaciones al servicio consultivo que debe informarla."),
    ],
  },
  {
    id: "caso-04",
    numero: 4,
    articulo: 8,
    titulo: "Competencia",
    supuesto: "Una norma atribuye a la Dirección General de Comercio la competencia para resolver determinadas autorizaciones. Se plantea que el órgano renuncie a esa competencia por exceso de carga. También se estudia desconcentrarla en órganos territoriales jerárquicamente dependientes, conforme a lo que permita la norma de atribución.",
    preguntas: [
      pregunta("caso-04-pregunta-01", "La competencia administrativa es, con carácter general:", ["Renunciable.", "Irrenunciable.", "Transferible por simple acuerdo verbal.", "Disponible para el titular como un derecho privado."], "b", "El artículo 8.1 establece que la competencia es irrenunciable y debe ejercerla el órgano que la tiene atribuida, salvo los supuestos previstos legalmente."),
      pregunta("caso-04-pregunta-02", "¿Cuál de estas técnicas no altera la titularidad de la competencia?", ["Delegación de competencias.", "Encomienda de gestión.", "Delegación de firma y suplencia.", "Todas las anteriores."], "d", "El artículo 8.1 indica que la delegación, la encomienda de gestión, la delegación de firma y la suplencia no alteran la titularidad, aunque pueden afectar a elementos de su ejercicio."),
      pregunta("caso-04-pregunta-03", "La desconcentración de titularidad y ejercicio hacia órganos jerárquicamente dependientes:", ["Está siempre prohibida.", "Puede realizarse en los términos y con los requisitos previstos en las normas de atribución de competencias.", "Solo puede hacerse por delegación de firma.", "Exige siempre consentimiento de los interesados."], "b", "El artículo 8.2 permite desconcentrar la titularidad y el ejercicio en órganos jerárquicamente dependientes conforme a la norma de atribución."),
    ],
  },
  {
    id: "caso-05",
    numero: 5,
    articulo: 9,
    titulo: "Delegación de competencias",
    supuesto: "Un órgano administrativo pretende delegar una competencia propia en otro órgano de la misma Administración que no depende jerárquicamente de él. La competencia no está incluida entre las materias legalmente indelegables. El acuerdo de delegación se adopta, pero inicialmente no se publica. Más tarde, el órgano delegado quiere volver a delegar la competencia sin que exista autorización legal expresa. En otro expediente, se plantea delegar la resolución después de que ya se haya emitido un informe preceptivo sobre ese procedimiento.",
    preguntas: [
      pregunta("caso-05-pregunta-01", "¿Puede delegarse el ejercicio de una competencia en otro órgano de la misma Administración aunque no dependa jerárquicamente del delegante?", ["No, nunca.", "Sí, con sujeción a los requisitos aplicables.", "Solo entre órganos colegiados.", "Solo mediante encomienda de gestión."], "b", "El artículo 9.1 permite delegar en otros órganos de la misma Administración aunque no sean jerárquicamente dependientes."),
      pregunta("caso-05-pregunta-02", "¿Cuál de las siguientes competencias no puede ser objeto de delegación?", ["La adopción de disposiciones de carácter general.", "La gestión ordinaria de expedientes.", "La firma material de documentos.", "La emisión de comunicaciones internas."], "a", "El artículo 9.2.b declara indelegable la adopción de disposiciones de carácter general."),
      pregunta("caso-05-pregunta-03", "Las delegaciones de competencias y su revocación:", ["No se publican.", "Se publican en el boletín oficial que corresponda.", "Solo se publican si afectan a más de cien personas.", "Se notifican individualmente a todos los ciudadanos de la Administración."], "b", "El artículo 9.3 exige publicar la delegación y su revocación en el diario oficial correspondiente."),
      pregunta("caso-05-pregunta-04", "Las resoluciones dictadas por delegación:", ["Se consideran dictadas por el órgano delegado y no deben indicar la delegación.", "Se consideran dictadas por el órgano delegante y deben indicar expresamente que se adoptan por delegación.", "Carecen de efectos frente a terceros.", "Solo son válidas si las firma también el delegante."], "b", "El artículo 9.4 dispone que las resoluciones deben indicar la delegación y se consideran dictadas por el órgano delegante."),
      pregunta("caso-05-pregunta-05", "Respecto de los dos últimos hechos del caso, ¿qué afirmación es correcta?", ["La competencia delegada puede volver a delegarse libremente y también puede delegarse la resolución tras emitirse el informe preceptivo.", "La nueva delegación exige autorización expresa de una ley y no puede delegarse la resolución una vez emitido el dictamen o informe preceptivo sobre ese procedimiento.", "Nunca puede existir una segunda delegación, ni siquiera si una ley la autoriza.", "El informe preceptivo impide delegar desde el inicio del procedimiento, aunque todavía no se haya emitido."], "b", "El artículo 9.5 exige autorización legal expresa para volver a delegar una competencia ejercida por delegación y prohíbe delegar la resolución una vez emitido el dictamen o informe preceptivo del procedimiento."),
    ],
  },
  {
    id: "caso-06",
    numero: 6,
    articulo: 10,
    titulo: "Avocación",
    supuesto: "Un Consejero había delegado en una Dirección General la resolución de determinadas ayudas. En un expediente concreto de especial trascendencia económica y territorial decide asumir personalmente su conocimiento. Dicta un acuerdo motivado y lo notifica al interesado antes de resolver. El interesado pretende recurrir de forma autónoma el acuerdo de avocación.",
    preguntas: [
      pregunta("caso-06-pregunta-01", "La decisión del Consejero de asumir el conocimiento de ese expediente concreto es:", ["Una suplencia.", "Una encomienda de gestión.", "Una avocación.", "Una delegación de firma."], "c", "El artículo 10.1 permite que el órgano superior avoque para sí uno o varios asuntos por circunstancias técnicas, económicas, sociales, jurídicas o territoriales."),
      pregunta("caso-06-pregunta-02", "La avocación debe realizarse:", ["Mediante acuerdo motivado y con notificación a los interesados antes o simultáneamente a la resolución final.", "Siempre mediante reglamento.", "Sin necesidad de motivación.", "Solo después de dictar la resolución final."], "a", "El artículo 10.2 exige un acuerdo motivado y su notificación antes o simultáneamente a la resolución final."),
      pregunta("caso-06-pregunta-03", "Contra el acuerdo de avocación:", ["Cabe siempre recurso de alzada independiente.", "No cabe recurso autónomo, aunque puede impugnarse al recurrir la resolución final.", "Cabe siempre reposición.", "No puede cuestionarse nunca."], "b", "El artículo 10.2 no permite un recurso autónomo contra el acuerdo, sin perjuicio de impugnarlo al recurrir la resolución del procedimiento."),
    ],
  },
  {
    id: "caso-07",
    numero: 7,
    articulo: 11,
    titulo: "Encomiendas de gestión",
    supuesto: "Una Dirección General carece de medios técnicos para realizar comprobaciones informáticas. Encomienda esas actuaciones materiales a una Agencia Pública que tiene entre sus competencias ese tipo de comprobaciones. La Dirección General conserva la decisión jurídica de los expedientes. El instrumento de formalización de la encomienda, realizada dentro de la misma Administración, no llega a publicarse.",
    preguntas: [
      pregunta("caso-07-pregunta-01", "La encomienda de gestión puede recaer sobre:", ["Actividades de carácter material o técnico, por razones de eficacia o falta de medios técnicos idóneos, si el encomendado tiene esas actividades entre sus competencias.", "La titularidad completa de cualquier competencia.", "La aprobación de reglamentos.", "Cualquier prestación contractual, aunque sea propia de un contrato del sector público."], "a", "El artículo 11.1 reserva la encomienda para actividades materiales o técnicas y excluye las prestaciones propias de los contratos del sector público."),
      pregunta("caso-07-pregunta-02", "La encomienda de gestión:", ["Transfiere la titularidad de la competencia al órgano encomendado.", "No cede la titularidad ni los elementos sustantivos de su ejercicio; los actos jurídicos corresponden al encomendante.", "Convierte al encomendado en superior jerárquico.", "Equivale siempre a una delegación de competencias."], "b", "El artículo 11.2 mantiene en el encomendante la titularidad y los elementos sustantivos del ejercicio, incluido el dictado de los actos y resoluciones jurídicas."),
      pregunta("caso-07-pregunta-03", "En una encomienda entre órganos o entidades de la misma Administración, la falta de publicación del instrumento de formalización:", ["Es irrelevante.", "Impide que la publicación sea necesaria si existe acuerdo verbal.", "Afecta a su eficacia, pues el instrumento y su resolución deben publicarse en el boletín oficial correspondiente.", "La convierte automáticamente en contrato."], "c", "El artículo 11.3.a exige publicar el instrumento de formalización y su resolución para que la encomienda sea eficaz."),
    ],
  },
  {
    id: "caso-08",
    numero: 8,
    articulo: 12,
    titulo: "Delegación de firma",
    supuesto: "La Directora General conserva la competencia para resolver determinados expedientes, pero delega la firma de las resoluciones en un Subdirector que depende de ella. La competencia de la Directora General había sido recibida previamente por delegación. La delegación de firma no se publica y en cada resolución se hace constar que se firma por delegación y la autoridad de procedencia.",
    preguntas: [
      pregunta("caso-08-pregunta-01", "¿Puede delegarse la firma de una competencia que el titular ejerce por delegación?", ["No, nunca.", "Sí, dentro de los límites del artículo 9.", "Solo con autorización judicial.", "Solo si se transfiere también la titularidad."], "b", "El artículo 12.1 permite delegar la firma tanto en competencias propias como en competencias ejercidas por delegación, dentro de los límites del artículo 9."),
      pregunta("caso-08-pregunta-02", "La delegación de firma:", ["Altera la competencia y exige publicación.", "No altera la competencia y no necesita publicación para su validez.", "Transfiere la titularidad al firmante.", "Solo puede recaer en órganos no dependientes."], "b", "El artículo 12.2 establece que la delegación de firma no altera la competencia y no requiere publicación para su validez."),
      pregunta("caso-08-pregunta-03", "En los actos firmados por delegación:", ["No debe indicarse nada.", "Debe constar la delegación y la autoridad de procedencia.", "Solo debe aparecer el nombre del firmante material.", "Debe figurar necesariamente la firma manuscrita del delegante."], "b", "El artículo 12.3 exige hacer constar la delegación de firma y la autoridad de procedencia."),
    ],
  },
  {
    id: "caso-09",
    numero: 9,
    articulo: 13,
    titulo: "Suplencia",
    supuesto: "El titular de una Dirección General está de baja por enfermedad y no existe suplente previamente designado. El órgano administrativo inmediato superior designa temporalmente a una persona para ejercer la competencia. La suplencia no se publica. En las resoluciones se hace constar quién es el titular sustituido y quién ejerce efectivamente la suplencia.",
    preguntas: [
      pregunta("caso-09-pregunta-01", "¿En qué casos puede producirse suplencia?", ["Solo por enfermedad.", "Por vacante, ausencia o enfermedad y también cuando se haya declarado abstención o recusación.", "Solo por vacaciones.", "Únicamente si el titular renuncia a la competencia."], "b", "El artículo 13.1 contempla la vacante, ausencia o enfermedad y también la declaración de abstención o recusación."),
      pregunta("caso-09-pregunta-02", "Si no se ha designado suplente:", ["La competencia queda suspendida.", "La ejerce quien designe el órgano administrativo inmediato superior del que dependa el órgano afectado.", "La asume automáticamente cualquier funcionario del mismo nivel.", "Debe avocarla necesariamente el Consejo de Ministros."], "b", "El artículo 13.1 atribuye al órgano administrativo inmediato superior la designación de quien ejercerá la competencia cuando no exista suplente."),
      pregunta("caso-09-pregunta-03", "La suplencia:", ["Altera la competencia y exige publicación.", "No altera la competencia y no necesita publicación para su validez; en los actos debe constar la suplencia, el titular y quien la ejerce.", "Equivale a una delegación definitiva.", "Solo produce efectos tras su publicación en el BOE."], "b", "Los apartados 2 y 4 del artículo 13 establecen que la suplencia no altera la competencia ni requiere publicación y que los actos deben identificarla, junto al titular y a quien la ejerce."),
    ],
  },
  {
    id: "caso-10",
    numero: 10,
    articulo: 14,
    titulo: "Decisiones sobre competencia",
    supuesto: "Una Dirección General recibe un expediente y considera que la competente es otra Dirección General de la misma Administración. Ambas no están relacionadas jerárquicamente y el procedimiento aún no ha terminado. El interesado también considera competente al segundo órgano y quiere promover el cambio de órgano.",
    preguntas: [
      pregunta("caso-10-pregunta-01", "El órgano que se estime incompetente debe:", ["Archivar el expediente.", "Remitir directamente las actuaciones al órgano que considere competente y notificarlo a los interesados.", "Resolver provisionalmente antes de remitirlo.", "Devolver siempre el expediente al interesado."], "b", "El artículo 14.1 obliga al órgano que se considere incompetente a remitir directamente las actuaciones al que estime competente y a notificarlo a los interesados."),
      pregunta("caso-10-pregunta-02", "El interesado que es parte en el procedimiento:", ["No puede plantear ninguna cuestión sobre competencia.", "Puede pedir al órgano que conoce del asunto que decline su competencia o dirigirse al que considere competente para que requiera de inhibición al primero.", "Solo puede acudir directamente a un tribunal.", "Puede decidir por sí mismo qué órgano resolverá."], "b", "El artículo 14.2 permite al interesado pedir al órgano actuante que decline su competencia o solicitar al que considere competente que requiera de inhibición al primero."),
      pregunta("caso-10-pregunta-03", "Los conflictos de atribuciones solo pueden suscitarse:", ["Entre órganos de distintas Administraciones y una vez finalizado el procedimiento.", "Entre órganos de la misma Administración no relacionados jerárquicamente y respecto de asuntos cuyo procedimiento no haya finalizado.", "Entre órganos jerárquicamente dependientes.", "Después de dictada resolución firme."], "b", "El artículo 14.3 exige que sean órganos de la misma Administración, sin relación jerárquica, y que el procedimiento todavía no haya finalizado."),
    ],
  },
  {
    id: "caso-11",
    numero: 11,
    articulo: 15,
    titulo: "Régimen de los órganos colegiados",
    supuesto: "Se crea un Consejo de Participación en el que están representadas varias Administraciones Públicas y organizaciones representativas de intereses sociales. El Consejo adopta resoluciones con efectos jurídicos frente a terceros. Sus normas permiten completar su funcionamiento interno, pero el acuerdo de creación y dichas normas no se publican.",
    preguntas: [
      pregunta("caso-11-pregunta-01", "Los órganos colegiados en los que participan organizaciones representativas de intereses sociales o representantes de distintas Administraciones:", ["No pueden establecer reglas propias.", "Pueden establecer o completar sus propias normas de funcionamiento.", "Quedan siempre integrados en la estructura jerárquica de la Administración.", "Carecen de régimen jurídico."], "b", "El artículo 15.2 permite que estos órganos establezcan o completen sus propias normas de funcionamiento."),
      pregunta("caso-11-pregunta-02", "Con carácter general, los órganos del artículo 15.2:", ["Se integran en la Administración correspondiente, pero no participan en su estructura jerárquica salvo las excepciones previstas.", "Son siempre independientes de cualquier Administración.", "Forman parte necesariamente de la cadena jerárquica.", "Solo pueden ser órganos estatales."], "a", "El artículo 15.2 los integra en la Administración correspondiente sin hacerlos partícipes de su estructura jerárquica, salvo que así resulte de sus normas, funciones o naturaleza."),
      pregunta("caso-11-pregunta-03", "Si el órgano colegiado dicta resoluciones con efectos jurídicos frente a terceros:", ["No existe obligación de publicidad.", "Deben publicarse su acuerdo de creación y sus normas de funcionamiento en el boletín o diario oficial de la Administración en que se integra.", "Solo debe publicarse la lista de miembros.", "Solo se publica si lo solicita un ciudadano."], "b", "El artículo 15.3 exige publicar el acuerdo de creación y las normas de funcionamiento cuando las resoluciones tengan efectos jurídicos frente a terceros."),
    ],
  },
  {
    id: "caso-12",
    numero: 12,
    articulo: 16,
    titulo: "Secretario de los órganos colegiados",
    supuesto: "Un órgano colegiado tiene como Secretario a una persona al servicio de la Administración que no es miembro del órgano. En una sesión debe ser suplido por uno de los miembros del propio órgano. Se cuestiona si el sustituto pierde sus derechos como miembro durante esa sesión.",
    preguntas: [
      pregunta("caso-12-pregunta-01", "El Secretario de un órgano colegiado:", ["Debe ser siempre miembro del órgano.", "Puede ser miembro del órgano o una persona al servicio de la Administración Pública correspondiente.", "Debe ser siempre una persona externa.", "Solo puede ser el Presidente."], "b", "El artículo 16.1 permite que el Secretario sea miembro del órgano o una persona al servicio de la Administración Pública correspondiente."),
      pregunta("caso-12-pregunta-02", "Entre las funciones del Secretario se encuentra:", ["Modificar unilateralmente los acuerdos.", "Velar por la legalidad formal y material, certificar las actuaciones y garantizar el respeto de las reglas de constitución y adopción de acuerdos.", "Sustituir siempre al Presidente.", "Resolver por sí solo los asuntos del orden del día."], "b", "El artículo 16.2 atribuye expresamente al Secretario la garantía de la legalidad formal y material, la certificación de actuaciones y el respeto de las reglas de constitución y adopción de acuerdos."),
      pregunta("caso-12-pregunta-03", "Si un Secretario que no era miembro es suplido por un miembro del órgano:", ["El miembro suplente pierde su derecho de voto.", "El miembro suplente conserva todos sus derechos como miembro.", "La sesión debe suspenderse.", "El órgano deja de estar válidamente constituido en todo caso."], "b", "El artículo 16.3 dispone que el miembro que suple a un Secretario no miembro conserva todos sus derechos como integrante del órgano colegiado."),
    ],
  },
  {
    id: "caso-13",
    numero: 13,
    articulo: 17,
    titulo: "Convocatorias y sesiones",
    supuesto: "Un Consejo colegiado celebra una sesión por videoconferencia. Su reglamento interno no prohíbe las sesiones a distancia. Están presentes el Presidente y el Secretario, así como al menos la mitad de los miembros. Durante la sesión se propone tratar un asunto que no figura en el orden del día, pero no están presentes todos los miembros. Además, uno de los miembros vota expresamente en contra del acuerdo finalmente adoptado.",
    preguntas: [
      pregunta("caso-13-pregunta-01", "Las sesiones a distancia de los órganos colegiados:", ["Están prohibidas.", "Son posibles, salvo que el reglamento interno recoja expresa y excepcionalmente lo contrario, y deben garantizar los requisitos de identificación, comunicación e interacción previstos legalmente.", "Solo pueden celebrarse por correo postal.", "Exigen siempre presencia física del Presidente."], "b", "El artículo 17.1 permite sesiones a distancia, salvo prohibición interna expresa y excepcional, siempre que se respeten las garantías electrónicas previstas."),
      pregunta("caso-13-pregunta-02", "Para la válida constitución ordinaria del órgano se requiere:", ["Solo la presencia del Presidente.", "Presidente y Secretario o sus suplentes, y al menos la mitad de los miembros.", "La presencia de todos los miembros.", "Un mínimo fijo de tres personas en todos los casos."], "b", "El artículo 17.2 exige la presencia del Presidente y del Secretario —o sus suplentes— y, al menos, la mitad de los miembros."),
      pregunta("caso-13-pregunta-03", "¿Puede tratarse el asunto no incluido en el orden del día en las circunstancias descritas?", ["Sí, si lo autoriza el Presidente.", "Sí, con mayoría simple de los asistentes.", "No mediante la excepción del artículo 17.4, porque para ello deben asistir todos los miembros y la mayoría declarar la urgencia.", "Sí, siempre que sea una sesión a distancia."], "c", "El artículo 17.4 exige, para tratar un asunto no incluido, la presencia de todos los miembros y que la mayoría declare la urgencia."),
      pregunta("caso-13-pregunta-04", "Los acuerdos del órgano colegiado se adoptan, como regla general:", ["Por unanimidad.", "Por mayoría de votos.", "Por decisión exclusiva del Presidente.", "Por mayoría de dos tercios en todos los casos."], "b", "El artículo 17.5 establece como regla general la adopción de acuerdos por mayoría de votos."),
      pregunta("caso-13-pregunta-05", "El miembro que votó en contra del acuerdo:", ["Responde siempre igual que quienes votaron a favor.", "Queda exento de la responsabilidad que, en su caso, pueda derivarse del acuerdo.", "Pierde su condición de miembro.", "Debe abandonar la sesión inmediatamente."], "b", "El artículo 17.6 exime de la responsabilidad derivada del acuerdo a quienes voten en contra o se abstengan."),
    ],
  },
  {
    id: "caso-14",
    numero: 14,
    articulo: 18,
    titulo: "Actas",
    supuesto: "En una sesión de un órgano colegiado, el Secretario levanta acta. La reunión se graba íntegramente y el fichero se acompaña de una certificación del Secretario sobre su autenticidad e integridad. Tras la reunión, el Secretario prepara el acta con el visto bueno del Presidente y la remite electrónicamente a los miembros, que manifiestan su conformidad por el mismo medio.",
    preguntas: [
      pregunta("caso-14-pregunta-01", "¿Quién levanta acta de cada sesión y qué debe contener necesariamente?", ["El Presidente; únicamente los acuerdos.", "El Secretario; asistentes, orden del día, lugar y tiempo, puntos principales de las deliberaciones y contenido de los acuerdos.", "Cualquier miembro; solo los votos.", "El órgano superior; todas las intervenciones literales."], "b", "El artículo 18.1 atribuye al Secretario el levantamiento del acta y enumera ese contenido mínimo."),
      pregunta("caso-14-pregunta-02", "Si la sesión se graba y el fichero se acompaña de certificación de autenticidad e integridad:", ["La grabación nunca puede acompañar al acta.", "Puede acompañar al acta, junto con los documentos electrónicos usados, y no será necesario hacer constar en el acta los puntos principales de las deliberaciones.", "Sustituye siempre por completo al acta.", "Solo sirve si todos los asistentes firman el fichero."], "b", "El artículo 18.1 permite acompañar la grabación certificada y los documentos electrónicos al acta; en ese caso pueden omitirse los puntos principales de las deliberaciones."),
      pregunta("caso-14-pregunta-03", "El acta de una sesión:", ["Solo puede aprobarse en la reunión siguiente.", "Puede aprobarse en la misma reunión o en la inmediata siguiente.", "Debe aprobarla exclusivamente el Secretario.", "No necesita aprobación."], "b", "El artículo 18.2 permite aprobar el acta en la misma sesión o en la inmediata siguiente."),
      pregunta("caso-14-pregunta-04", "Si tras la reunión el Secretario remite electrónicamente el acta con el visto bueno del Presidente y los miembros manifiestan su conformidad:", ["Puede considerarse aprobada en la misma reunión.", "Debe esperarse obligatoriamente a la siguiente sesión.", "La conformidad electrónica no tiene efectos.", "Solo es válida si se imprime y firma manuscritamente."], "a", "El artículo 18.2 permite considerar aprobada el acta en la misma reunión cuando los miembros expresan su conformidad por medios electrónicos."),
      pregunta("caso-14-pregunta-05", "Las grabaciones y documentos electrónicos empleados en la sesión deben conservarse:", ["Sin ninguna garantía especial.", "De forma que se garantice su integridad, autenticidad y el acceso de los miembros del órgano colegiado.", "Solo durante 24 horas.", "Únicamente en papel."], "b", "El artículo 18.2 exige conservarlos garantizando su integridad, autenticidad y acceso por los miembros del órgano colegiado."),
    ],
  },
];

const casoPractico = buildPracticalCase({
  schemaVersion: 1,
  id: "caso-practico-ley-40-2015-articulos-5-a-18-numero-1",
  numero: 1,
  titulo: "Caso práctico 1. Ley 40/2015: artículos 5 a 18",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "29",
      titulo: "La organización administrativa: los órganos administrativos. Órganos colegiados. Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público.",
    },
  },
  fuente: {
    tipo: "pdf",
    archivo: "caso-practico-ley-40-2015-articulos-5-a-18.pdf",
    url: "./data/practical-cases/gobierno-vasco-administrativo-c1/tema-29/caso-practico-01/caso-practico-ley-40-2015-articulos-5-a-18.pdf",
    paginas: 19,
  },
  casos,
});

export default casoPractico;
