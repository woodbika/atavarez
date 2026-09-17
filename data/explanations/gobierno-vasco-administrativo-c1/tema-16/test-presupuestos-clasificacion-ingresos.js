import {
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-presupuestos-clasificacion-ingresos",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El capítulo 9 registra el aumento de pasivos financieros, principalmente los ingresos obtenidos mediante endeudamiento público. Por eso corresponde la opción C.",
      descartes: {
        a: "El capítulo 7 se reserva a transferencias y subvenciones destinadas a operaciones de capital.",
        b: "El capítulo 8 refleja la disminución de activos financieros, como la devolución de préstamos concedidos.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Los impuestos directos ocupan el capítulo 1 de la clasificación económica de ingresos. La teoría añade que actualmente la Administración de la CAE no presupuesta ni recauda ingresos en él.",
      descartes: {
        b: "Escoger el capítulo 2 confundiría los impuestos directos preguntados con la categoría inmediatamente posterior de impuestos indirectos.",
        c: "El capítulo 3 agrupa tasas, precios públicos y otros ingresos de derecho público.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "La enajenación de bienes y derechos no financieros se imputa al capítulo 6, denominado «Enajenación de inversiones reales». De ahí que encaje la opción C.",
      descartes: {
        a: "El capítulo 4 recoge transferencias y subvenciones para gastos corrientes, no ventas patrimoniales.",
        b: "El capítulo 5 reúne ingresos patrimoniales, como intereses bancarios o arrendamientos.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "La clasificación económica sitúa los impuestos indirectos en el capítulo 2. La opción B identifica ese capítulo.",
      descartes: {
        a: "El capítulo 1 está destinado a los impuestos directos.",
        c: "Las tasas, los precios públicos y otros ingresos de derecho público forman el capítulo 3.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El capítulo 8 se denomina «Disminución de activos financieros» e incluye, entre otros conceptos, devoluciones de préstamos concedidos por la Administración. La respuesta registrada es la B.",
      descartes: {
        a: "El capítulo 7 pertenece a las transferencias y subvenciones de capital.",
        c: "El capítulo 9 representa el movimiento opuesto: el aumento de pasivos financieros.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Las transferencias y subvenciones recibidas para financiar operaciones de capital se contabilizan en el capítulo 7. Por tanto, corresponde la opción A.",
      descartes: {
        b: "El capítulo 8 se refiere a la disminución de activos financieros.",
        c: "El endeudamiento y el aumento de pasivos financieros se registran en el capítulo 9.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Los ingresos patrimoniales integran el capítulo 5. Incluyen rendimientos como los intereses de cuentas y los arrendamientos de inmuebles no afectos al servicio público.",
      descartes: {
        a: "El capítulo 4 contiene transferencias y subvenciones para gastos corrientes.",
        c: "El capítulo 6 registra la enajenación de inversiones reales.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "El capítulo 4 recoge las transferencias y subvenciones recibidas para gastos corrientes, incluidas las aportaciones forales y determinados fondos europeos. Esa definición conduce a la opción A.",
      descartes: {
        b: "El capítulo 5 está dedicado a ingresos patrimoniales.",
        c: "El capítulo 6 se utiliza para la venta de bienes y derechos no financieros.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "Las tasas, los precios públicos y los restantes ingresos de derecho público se reúnen en el capítulo 3. La opción C reproduce su ubicación económica.",
      descartes: {
        a: "El capítulo 1 clasifica los impuestos directos.",
        b: "Las tasas y los precios públicos no se clasifican como impuestos indirectos del capítulo 2.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Los capítulos 8 y 9 forman el grupo de operaciones financieras: el primero afecta a activos y el segundo a pasivos. Por eso la categoría correcta es la propuesta en C.",
      descartes: {
        a: "Las operaciones corrientes abarcan los capítulos 1 a 5.",
        b: "Las operaciones de capital se limitan a los capítulos 6 y 7.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "Los capítulos 6 y 7 constituyen las operaciones de capital: enajenación de inversiones y transferencias o subvenciones de capital. La opción B los clasifica correctamente.",
      descartes: {
        a: "El tramo de operaciones corrientes termina en el capítulo 5.",
        c: "Las operaciones financieras comienzan en el capítulo 8.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La teoría agrupa los capítulos 1 a 5 como operaciones corrientes. Esa clasificación incluye impuestos, tasas, transferencias corrientes e ingresos patrimoniales.",
      descartes: {
        b: "Las operaciones de capital corresponden únicamente a los capítulos 6 y 7.",
        c: "Los capítulos financieros son el 8 y el 9, no el tramo 1 a 5.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La devolución de préstamos concedidos por la Administración supone recuperar un activo financiero y se registra en el capítulo 8. La opción B expresa ese capítulo.",
      descartes: {
        a: "El capítulo 7 recoge transferencias de capital, que no implican recuperar préstamos.",
        c: "El capítulo 9 contabiliza ingresos derivados del endeudamiento propio.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "El capítulo 5 agrupa ingresos patrimoniales de derecho privado, incluidos los intereses de las cuentas bancarias de la Tesorería. Ese contenido respalda la opción B.",
      descartes: {
        a: "El capítulo 4 se ocupa de transferencias corrientes recibidas de otras entidades.",
        c: "El capítulo 6 exige una enajenación de bienes o derechos no financieros.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "Aunque el capítulo 1 está reservado a impuestos directos, la teoría señala que actualmente la Administración de la CAE no presupuesta ni recauda ingresos en él. Por eso corresponde la opción A.",
      descartes: {
        b: "El capítulo 2 sí registra el impuesto sobre el bingo y el recargo de la tasa sobre el juego.",
        c: "El capítulo 3 reúne varios ingresos efectivos, como tasas, precios públicos, multas y sanciones.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "La ficha teórica atribuye las transferencias y subvenciones para operaciones de capital al capítulo 7, no al capítulo 8. Se conserva la opción B registrada en el test, aunque no queda respaldada por la teoría.",
      descartes: {
        a: "La opción A coincide con la clasificación de la ficha: el capítulo 7 recoge estas transferencias y subvenciones de capital.",
        c: "El capítulo 9 se destina al aumento de pasivos financieros y al endeudamiento público.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto:
          "La teoría sitúa las transferencias y subvenciones para operaciones de capital en el capítulo 7, que corresponde a la opción A. Se mantiene la opción B registrada originalmente en el test.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "La venta de bienes y derechos no financieros de la Administración se clasifica como enajenación de inversiones reales, dentro del capítulo 6. Así se obtiene la opción C.",
      descartes: {
        a: "El capítulo 4 no registra ventas: contiene transferencias y subvenciones corrientes.",
        b: "El capítulo 5 recoge rendimientos patrimoniales, pero no la enajenación del propio bien.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "Las aportaciones de las Diputaciones Forales financian gastos corrientes de la CAE y constituyen el componente principal del capítulo 4. La opción A es la que refleja esa clasificación.",
      descartes: {
        b: "El capítulo 5 se reserva a rendimientos patrimoniales de naturaleza privada.",
        c: "El capítulo 6 se refiere a la venta de inversiones reales.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "El impuesto sobre el bingo es un impuesto indirecto y, por ello, figura en el capítulo 2. La respuesta B identifica ese capítulo.",
      descartes: {
        a: "El capítulo 1 corresponde a impuestos directos, que no se registran actualmente en este presupuesto.",
        c: "El capítulo 3 agrupa tasas, precios públicos y otros ingresos públicos distintos de los impuestos indirectos.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "Los recargos sobre impuestos se integran entre los diversos ingresos de derecho público del capítulo 3. Por tanto, la opción C es la aplicable.",
      descartes: {
        a: "El capítulo 1 solo identifica la categoría de impuestos directos.",
        b: "El capítulo 2 incluye impuestos indirectos, pero la teoría clasifica sus recargos en el capítulo 3.",
      },
    },
    {
      preguntaId: 21,
      justificacion:
        "Las multas y demás sanciones económicas se contabilizan como otros ingresos de derecho público en el capítulo 3. Esa ubicación corresponde a C.",
      descartes: {
        a: "El capítulo 1 se limita a la categoría de impuestos directos.",
        b: "Las sanciones no son impuestos indirectos del capítulo 2.",
      },
    },
    {
      preguntaId: 22,
      justificacion:
        "El endeudamiento público aumenta los pasivos financieros y se registra en el capítulo 9. La opción C recoge esa relación.",
      descartes: {
        a: "El capítulo 7 contiene financiación recibida mediante transferencias de capital, no deuda.",
        b: "El capítulo 8 refleja disminuciones de activos financieros, como reembolsos de préstamos concedidos.",
      },
    },
    {
      preguntaId: 23,
      justificacion:
        "Los intereses de las cuentas bancarias de la Tesorería son ingresos patrimoniales y se imputan al capítulo 5. Esto hace válida la opción B.",
      descartes: {
        a: "El capítulo 4 se nutre de transferencias y subvenciones corrientes.",
        c: "El capítulo 6 requiere la transmisión de un bien o derecho no financiero.",
      },
    },
    {
      preguntaId: 24,
      justificacion:
        "El arrendamiento de inmuebles no afectos al servicio público produce un ingreso patrimonial del capítulo 5. No se vende el inmueble, sino que se obtiene rendimiento de él.",
      descartes: {
        a: "El capítulo 4 no recoge la explotación del patrimonio, sino transferencias corrientes.",
        c: "El capítulo 6 sería aplicable si el inmueble se enajenase, no cuando se arrienda.",
      },
    },
    {
      preguntaId: 25,
      justificacion:
        "Los intereses asociados a ingresos de derecho público forman parte de los conceptos diversos del capítulo 3. La respuesta C señala esa ubicación.",
      descartes: {
        a: "El capítulo 1 clasifica impuestos directos, no intereses por deudas públicas.",
        b: "El capítulo 2 está reservado a impuestos indirectos.",
      },
    },
    {
      preguntaId: 26,
      justificacion:
        "Las cantidades reintegradas por incumplir una subvención concedida se incluyen entre los otros ingresos de derecho público del capítulo 3. Por eso encaja la opción C.",
      descartes: {
        a: "El reintegro de una subvención no constituye un impuesto directo del capítulo 1.",
        b: "Tampoco es un impuesto indirecto de los clasificados en el capítulo 2.",
      },
    },
    {
      preguntaId: 27,
      justificacion:
        "La denominación completa del capítulo 3 es «Tasas, precios públicos y otros ingresos de derecho público». En consecuencia, el número solicitado es el indicado en C.",
      descartes: {
        a: "El capítulo 1 lleva la rúbrica de impuestos directos.",
        b: "El capítulo 2 contiene los impuestos indirectos y no las tasas o precios públicos.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-16-presupuesto-ingresos",
  referenceForQuestion: () =>
    blockReference(
      "ejecucion-presupuesto-ingresos",
      "Tipos de ingresos y clasificación económica",
    ),
});
