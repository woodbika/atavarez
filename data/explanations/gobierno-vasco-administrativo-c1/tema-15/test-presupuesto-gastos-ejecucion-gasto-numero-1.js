import {
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-presupuesto-gastos-ejecucion-gasto-numero-1",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La teoría define el gasto público como la aplicación de los recursos financieros de las Administraciones Públicas a sus actividades y fines legalmente asignados. Esa definición es la que recoge la opción A.",
      descartes: {
        b: "Desde la perspectiva jurídica indicada en el tema, el gasto público se refiere a entidades sometidas al Derecho Administrativo; la opción añade indebidamente el Derecho privado.",
        c: "Las dos afirmaciones no pueden aceptarse a la vez porque la segunda amplía el ámbito jurídico más allá de lo explicado en la teoría.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Los estados de gastos recogen los créditos, es decir, las cantidades presupuestadas para atender obligaciones contraídas y devengadas. Por eso el término preciso es «créditos».",
      descartes: {
        a: "«Recursos» es una denominación demasiado genérica; en el estado de gastos la magnitud presupuestaria utilizada son los créditos.",
        c: "Sí existe una formulación válida entre las propuestas: la que identifica expresamente los créditos necesarios.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "Los créditos se destinan tanto a las finalidades autorizadas por las leyes presupuestarias como a las resultantes de modificaciones practicadas conforme al régimen presupuestario. Las opciones A y B se completan.",
      descartes: {
        a: "La referencia exclusiva a la autorización inicial deja fuera las modificaciones presupuestarias posteriores admitidas por la teoría.",
        b: "Las modificaciones no sustituyen a las finalidades aprobadas inicialmente; son la segunda vía que completa la regla.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Los créditos de pago tienen carácter limitativo: no cabe comprometer ni pagar por encima del importe aprobado inicialmente o modificado conforme a Derecho. La opción B expresa ese límite.",
      descartes: {
        a: "Calificarlos de estimativos elimina el límite cuantitativo que la teoría atribuye expresamente a estos créditos.",
        c: "No son correctas ambas afirmaciones, pues los caracteres estimativo y limitativo se contradicen en este supuesto.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "Cuando una operación plurianual cuenta a la vez con crédito de pago y crédito de compromiso, puede comprometerse la suma de ambas dotaciones. La posibilidad aparece formulada directamente en la teoría.",
      descartes: {
        b: "La prohibición propuesta invierte la excepción prevista para las operaciones plurianuales dotadas con ambos tipos de crédito.",
        c: "El tema no condiciona esta suma a lo que decida cada ley de ejecución; establece la regla de manera directa.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Las obligaciones económicas pueden nacer directamente de las leyes aplicables o de hechos, actos y negocios jurídicos conformes al ordenamiento. Como se contemplan ambos orígenes, procede la respuesta conjunta.",
      descartes: {
        a: "Las obligaciones impuestas por ley constituyen solo uno de los orígenes previstos y no agotan la enumeración.",
        b: "Los hechos, actos y negocios jurídicos también generan obligaciones, pero la teoría añade las impuestas directamente por las leyes.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Adquirir compromisos por encima de créditos presupuestarios de carácter limitativo determina la nulidad de pleno derecho del acto o disposición. No se trata de un defecto meramente subsanable.",
      descartes: {
        b: "La anulabilidad supone un grado de invalidez distinto y menos intenso que la nulidad expresamente establecida para este exceso de gasto.",
        c: "Una simple irregularidad no refleja la consecuencia jurídica fijada en el tema: el acto queda afectado por nulidad de pleno derecho.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Las obligaciones de pago pueden derivar de la ejecución presupuestaria, de una sentencia judicial firme o de operaciones de tesorería. Las opciones A y B reúnen entre ambas los tres supuestos.",
      descartes: {
        a: "La ejecución del presupuesto es una causa, pero no excluye las sentencias firmes ni las operaciones de tesorería.",
        b: "La sentencia firme y las operaciones de tesorería tampoco son las únicas causas, porque falta la ejecución de los propios presupuestos.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "Una sentencia firme sin cobertura presupuestaria debe cumplirse después de dotar los fondos necesarios conforme al régimen presupuestario. La firmeza no permite pagar sin crédito disponible.",
      descartes: {
        a: "Prescindir de la dotación de fondos contradice la condición presupuestaria que la teoría exige antes del cumplimiento.",
        c: "La falta inicial de cobertura no hace imposible el pago; obliga a habilitar previamente los fondos necesarios.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Para las demás entidades de la Comunidad Autónoma, la efectividad de sus obligaciones de pago se rige por el ordenamiento jurídico privado. La teoría diferencia así su régimen del aplicable a la Administración y sus organismos autónomos.",
      descartes: {
        a: "El Derecho Administrativo no es el régimen señalado aquí para las obligaciones de pago de esas otras entidades.",
        c: "La teoría sí proporciona una respuesta completa y expresa: remite al ordenamiento jurídico privado.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "En las relaciones con obligaciones recíprocas, la Administración no paga hasta que la otra parte cumpla o garantice su prestación; las obligaciones reconocidas por sentencia firme quedan exceptuadas. Ambas proposiciones reproducen la regla y su excepción.",
      descartes: {
        a: "La exigencia de cumplimiento o garantía es correcta, pero queda incompleta si se omite la excepción de las sentencias firmes.",
        b: "La excepción judicial solo se entiende junto a la regla general que condiciona el pago en las relaciones recíprocas.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La ejecución del gasto se apoya en la suficiencia financiera de los créditos y en la legalidad de las actuaciones que generan obligaciones económicas. Al figurar los dos principios, la respuesta debe integrarlos.",
      descartes: {
        a: "La suficiencia financiera es relevante, aunque por sí sola omite el necesario sometimiento de las actuaciones a la legalidad.",
        b: "La legalidad también es un principio esencial, pero no desplaza la exigencia de contar con créditos suficientes.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La equidad conecta el gasto público con la justicia de su función redistributiva. Economía y eficiencia, en cambio, se vinculan a una buena conducta financiera.",
      descartes: {
        b: "La economía atiende al uso adecuado de los recursos, no específicamente a la justicia en su redistribución.",
        c: "La eficiencia relaciona medios y resultados; no es el principio que la teoría asocia a la función redistributiva justa.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "El control externo de los presupuestos corresponde al Tribunal Vasco de Cuentas Públicas. Su intervención se diferencia del control parlamentario de aprobación y del control contable interno.",
      descartes: {
        a: "El Parlamento Vasco ejerce el control ligado a la aprobación de los Presupuestos Generales, no el control externo preguntado.",
        b: "La Oficina de Control Económico asume el control contable y la intervención, que pertenecen al ámbito interno.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "La Oficina de Control Económico realiza el control contable y la intervención. La teoría le asigna esta función de forma diferenciada respecto de los otros órganos de control.",
      descartes: {
        a: "La función del Parlamento Vasco en este esquema es aprobar los Presupuestos Generales.",
        c: "El Tribunal Vasco de Cuentas Públicas ejerce el control externo, no la intervención y el control contable.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "El Parlamento Vasco controla el presupuesto mediante su aprobación. Las restantes opciones corresponden a controles contable y externo que actúan con otra función.",
      descartes: {
        b: "La Oficina de Control Económico se ocupa del control contable y de la intervención, no de aprobar el presupuesto.",
        c: "El Tribunal Vasco de Cuentas Públicas fiscaliza externamente, mientras que la aprobación corresponde al Parlamento.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-15-presupuesto-gastos",
  referenceForQuestion: () =>
    blockReference(
      "concepto-gasto-publico",
      "Concepto de gasto público y principios de ejecución",
    ),
});
