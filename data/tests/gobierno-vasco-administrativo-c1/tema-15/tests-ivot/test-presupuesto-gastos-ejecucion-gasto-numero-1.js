/**
 * Datos extraídos de "TEST DE PRESUPUESTOS. EJECUCIÓN DEL GASTO Nº 1.pdf".
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-presupuesto-gastos-ejecucion-gasto-numero-1",
  autor: { id: "ivot", nombre: "IVOT" },
  titulo: "TEST DE EL PRESUPUESTO DE GASTOS: EJECUCIÓN DEL GASTO Nº 1",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "15",
      titulo: "Presupuesto de gastos. Conceptos relevantes: aplicación presupuestaria, vinculación, referencia de intervención, créditos de compromiso y pagos a justificar. Ejecución del presupuesto de gastos: autorización del gasto, disposición del gasto, contracción de la obligación, disposición del pago. Residuos de gastos. Fondos anticipados.",
    },
  },
  fuente: {
    archivo: "TEST DE PRESUPUESTOS. EJECUCIÓN DEL GASTO Nº 1.pdf",
    paginas: 3,
  },
  preguntas: [
    {
      id: 1,
      enunciado: "Es correcto señalar:",
      opciones: [
        { id: "a", texto: "El gasto público es la aplicación por parte de las AAPP de sus recursos financieros, destinándolos a financiar sus actividades y cumplir sus fines legamente asignados." },
        { id: "b", texto: "Desde una perspectiva jurídica, el gasto público se refiere a los gastos de las entidades públicas reguladas por el derecho administrativo o por el derecho privado." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 2,
      enunciado: "Los estados de gastos de los presupuestos generales recogerán:",
      opciones: [
        { id: "a", texto: "Los recursos necesarios para atender los gastos que sean ordenados o pagados con cargo al presupuesto en cumplimiento de las obligaciones contraídas y devengadas." },
        { id: "b", texto: "Los créditos necesarios para atender los gastos que sean ordenados o pagados con cargo al presupuesto en cumplimiento de las obligaciones contraídas y devengadas." },
        { id: "c", texto: "Ninguna respuesta es correcta." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 3,
      enunciado: "Los créditos de pago incluidos en los estados de gastos de los Presupuestos de la Administración de la CAE y de sus OOAA administrativos:",
      opciones: [
        { id: "a", texto: "Se aplicarán al cumplimiento de las finalidades para las que fueron autorizados por las Leyes de Presupuestos Generales." },
        { id: "b", texto: "Se aplicarán al cumplimiento de las finalidades para las que fueron autorizados por las modificaciones practicadas." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 4,
      enunciado: "Los créditos de pago incluidos en los estados de gastos de los Presupuestos de la Administración de la CAE y de sus OOAA administrativos:",
      opciones: [
        { id: "a", texto: "Tienen carácter estimativo." },
        { id: "b", texto: "No pueden comprometerse ni pagarse ningún gasto más allá de su importe, bien aprobado originariamente o modificado con las normas legales aplicables." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 5,
      enunciado: "En el caso de operaciones plurianuales, cuando los créditos de pago se refieran a obligaciones respecto de las que también esté dotado un crédito de compromiso:",
      opciones: [
        { id: "a", texto: "Podrá comprometerse el importe equivalente a la suma de las dotaciones de ambos créditos." },
        { id: "b", texto: "No podrá comprometerse el importe equivalente a la suma de las dotaciones de ambos créditos." },
        { id: "c", texto: "La respuesta a) y b) depende de lo que señalen las leyes de ejecución de los presupuestos." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 6,
      enunciado: "La CAE asumirá las obligaciones económicas que:",
      opciones: [
        { id: "a", texto: "Le impongan directamente las leyes emanadas de la CAE y otras que le sean aplicables." },
        { id: "b", texto: "Las que se deriven de hechos, actos y negocios jurídicos de conformidad con el ordenamiento jurídico." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 7,
      enunciado: "Los actos administrativos y disposiciones reglamentarias emanadas de la CAE, en virtud de los cuáles se pretenda adquirir compromisos de gastos por cuantía superior al importe de los créditos presupuestarios autorizados en el estado de gastos adolecerán de:",
      opciones: [
        { id: "a", texto: "Nulidad de pleno derecho." },
        { id: "b", texto: "Anulabilidad." },
        { id: "c", texto: "Irregularidad." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 8,
      enunciado: "Las obligaciones de pago de cantidades a cargo de la Administración de la CAE y de sus OOAA:",
      opciones: [
        { id: "a", texto: "Sólo serán efectivas cuando se deriven de la ejecución de sus presupuestos." },
        { id: "b", texto: "Sólo serán efectivas cuando deriven de la ejecución de ST firme y de operaciones de tesorería." },
        { id: "c", texto: "Ambas respuestas se complementan." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 9,
      enunciado: "El cumplimiento de las obligaciones derivadas de ST firme, que carezcan de cobertura presupuestaria deberá llevarse a cabo:",
      opciones: [
        { id: "a", texto: "Aún sin dotación de los fondos necesarios de acuerdo con la normativa del régimen presupuestario de la CAE." },
        { id: "b", texto: "Una vez se doten los fondos necesarios de acuerdo con la normativa del régimen presupuestario de la CAE." },
        { id: "c", texto: "Lo señalado en el enunciado no es posible." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 10,
      enunciado: "Las obligaciones de pago a cargo de las demás entidades de la CAE, serán efectivas de conformidad con lo dispuesto en:",
      opciones: [
        { id: "a", texto: "El derecho administrativo." },
        { id: "b", texto: "El ordenamiento jurídico privado." },
        { id: "c", texto: "Ninguna respuesta es totalmente correcta." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 11,
      enunciado: "Es correcto señalar:",
      opciones: [
        { id: "a", texto: "En el supuesto de que las obligaciones de pago a cargo de la AP de la CAE o de sus OOAA, deriven de relaciones jurídicas que generen también obligaciones para la otra parte, aquéllas no podrán hacerse efectivas si éstas no se han cumplido o garantizado su cumplimiento debidamente." },
        { id: "b", texto: "Se exceptúan las obligaciones reconocidas por ST firme." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 12,
      enunciado: "La ejecución del gasto público está informada por los siguientes principios:",
      opciones: [
        { id: "a", texto: "Suficiencia financiera." },
        { id: "b", texto: "Legalidad de todas las actividades que desemboquen en la asunción de obligaciones económicas." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 13,
      enunciado: "Otro principio que informa la ejecución del gasto público se refiere a la justicia en la función redistributiva del gasto público:",
      opciones: [
        { id: "a", texto: "Equidad." },
        { id: "b", texto: "Economía." },
        { id: "c", texto: "Eficiencia." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 14,
      enunciado: "Corresponde el control externo una vez aprobados los presupuestos corresponde:",
      opciones: [
        { id: "a", texto: "Al Parlamento Vasco." },
        { id: "b", texto: "A la Oficina de Control Económico." },
        { id: "c", texto: "Al Tribunal Vasco de Cuentas Públicas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 15,
      enunciado: "Corresponde el control contable e Intervención:",
      opciones: [
        { id: "a", texto: "Al Parlamento Vasco." },
        { id: "b", texto: "A la Oficina de Control Económico." },
        { id: "c", texto: "Al Tribunal Vasco de Cuentas Públicas." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 16,
      enunciado: "Corresponde el control con su aprobación:",
      opciones: [
        { id: "a", texto: "Al Parlamento Vasco." },
        { id: "b", texto: "A la Oficina de Control Económico." },
        { id: "c", texto: "Al Tribunal Vasco de Cuentas Públicas." },
      ],
      respuestaCorrecta: "a",
    },
  ],
};

export { test };
export default test;
