import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-decreto-legislativo-1-2023-igualdad-articulos-23-a-25",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 23.1 impone a los poderes públicos vascos incorporar la perspectiva de género en las subvenciones y prever medidas de igualdad en sus bases.",
      descartes: {
        a: "La obligación no se limita a las administraciones públicas, porque el precepto emplea la categoría más amplia de poderes públicos vascos.",
        c: "Las entidades privadas pueden ser beneficiarias sujetas a obligaciones, pero no son el sujeto que configura las bases subvencionales.",
        d: "El deber de diseñar la subvención corresponde a los poderes públicos, sin extender esa función normativa al sector privado vinculado.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La incorporación de la perspectiva de género se exige con carácter general, aunque puede excluirse mediante un informe motivado en los supuestos legales.",
      descartes: {
        a: "No opera de manera absoluta: cabe justificar que no hay desigualdad en el ámbito o que la subvención carece de impacto de género.",
        c: "La perspectiva de género es la regla general y no una medida reservada a situaciones excepcionales.",
        d: "La ley establece expresamente este deber en las subvenciones, por lo que no puede afirmarse que nunca proceda.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Las medidas de igualdad deben aparecer entre los criterios de valoración y entre las obligaciones asumidas por las personas beneficiarias.",
      descartes: {
        a: "Los criterios de valoración son uno de los lugares previstos, pero las bases deben reflejar también obligaciones de quienes reciben la ayuda.",
        b: "Las obligaciones de las personas beneficiarias son necesarias, junto con criterios que permitan valorar la perspectiva de género al conceder la subvención.",
        d: "El artículo 23.1 contempla ambos instrumentos, de modo que sí existen afirmaciones correctas.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El informe puede justificar que el ámbito no presenta desigualdades o que, aun existiendo, la subvención no influye en la situación de mujeres y hombres.",
      descartes: {
        a: "La inexistencia de desigualdad es una causa válida, pero no es la única excepción que permite motivar el informe.",
        b: "La falta de impacto de la ayuda también justifica la excepción, junto con los ámbitos en los que no existe desigualdad de género.",
        d: "Los dos supuestos están recogidos literalmente por el artículo 23.1 y no pueden descartarse en conjunto.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El informe motivado debe remitirse al órgano u organismo de igualdad de la institución respectiva para recabar su parecer.",
      descartes: {
        a: "El promotor prepara o impulsa la subvención, pero la consulta se dirige al órgano especializado en igualdad.",
        b: "El órgano de gobierno competente para conceder la ayuda no sustituye el parecer técnico de la unidad de igualdad.",
        c: "Emakunde puede ser competente en el ámbito autonómico, pero la regla remite al órgano de igualdad de cada institución, no siempre a Emakunde.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La prohibición abarca actividades discriminatorias y personas sancionadas por discriminación sexual o por incumplir la normativa de igualdad. Las tres situaciones quedan excluidas.",
      descartes: {
        a: "Una actividad discriminatoria no puede recibir ayuda, aunque la prohibición también afecta a determinadas personas sancionadas.",
        b: "Las sanciones por discriminación impiden acceder a la ayuda durante el periodo fijado, junto con otras infracciones de la normativa de igualdad.",
        c: "El incumplimiento sancionado de la normativa produce la exclusión, sin dejar fuera las actividades discriminatorias ni las sanciones por discriminación sexual.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La imposibilidad de recibir ayudas por una sanción dura el periodo que esta haya impuesto, no un plazo uniforme para todos los casos.",
      descartes: {
        a: "La prohibición no es perpetua; su duración queda vinculada al alcance temporal de la sanción correspondiente.",
        c: "La ley no fija un plazo general de un año, porque cada resolución sancionadora determina el periodo aplicable.",
        d: "Tampoco existe una exclusión automática de cinco años para todos los incumplimientos contemplados.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La teoría exige el plan de igualdad conforme a normativa estatal y medidas antiacoso en empresas de más de 50 personas. Ninguna alternativa reproduce esos requisitos.",
      descartes: {
        a: "La obligación de contar con plan se determina por la normativa del Estado, no por una supuesta normativa autonómica como afirma esta opción.",
        b: "El umbral legal es de más de 50 personas trabajadoras y comprende también las violencias sexuales; la alternativa lo eleva indebidamente a 100.",
        c: "Las dos afirmaciones contienen errores sobre la norma aplicable y el tamaño de la empresa, por lo que no pueden ser correctas conjuntamente.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Cuando la igualdad es relevante para el objeto de la ayuda, la trayectoria en esta materia se configura como requisito de las personas concurrentes.",
      descartes: {
        b: "El artículo 23.3.a no presenta la trayectoria solo como mérito valorable, sino como un requisito que puede exigirse en las bases.",
        c: "La norma no deja al promotor elegir libremente entre requisito y valoración en este inciso; lo sitúa entre las condiciones de concurrencia.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Las bases pueden exigir fines estatutarios de promoción de la igualdad o formación específica de quienes ejecutan el proyecto. Ambas condiciones están previstas.",
      descartes: {
        a: "La finalidad estatutaria es una condición posible, pero el precepto ofrece también la capacitación del equipo ejecutor.",
        b: "La formación de las personas responsables puede exigirse, sin excluir el compromiso con la igualdad recogido en los fines de la entidad.",
        d: "Las dos condiciones figuran expresamente en el artículo 23.3.a, así que hay respuestas válidas.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Los aspectos de igualdad deben ponderarse con al menos un 5 % del baremo, salvo justificación objetiva de que resulte desproporcionado para la subvención.",
      descartes: {
        a: "La ley establece un mínimo y permite una ponderación superior; no fija necesariamente un 5 % exacto.",
        c: "El 5 % funciona como suelo del criterio, no como porcentaje máximo que no pueda superarse.",
        d: "La norma concreta un umbral mínimo de ponderación y ofrece, por tanto, una respuesta determinada.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Se mantiene la solución B por su contenido material, pero el artículo 23.3.c ordena establecer las consecuencias del incumplimiento; no lo formula como una mera posibilidad.",
      descartes: {
        a: "El uso no sexista no puede ser la única obligación: las bases deben incorporar compromisos adicionales de igualdad.",
        c: "La primera alternativa contradice expresamente la exigencia de obligaciones más amplias, por lo que no cabe aceptar conjuntamente A y B.",
        d: "La teoría sí exige regular las consecuencias del incumplimiento, aunque emplea un mandato más intenso que el verbo «podrán» de B.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La redacción de la solución rebaja una obligación",
        texto: "El artículo 23.3.c dispone que las bases establecerán obligaciones adicionales y las consecuencias del incumplimiento. La opción B dice que «podrán establecer» esas consecuencias, convirtiendo el mandato en facultad. Se conserva la opción B registrada porque identifica el contenido buscado, dejando documentado este matiz.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Las memorias deben desglosar por sexo a personas usuarias o beneficiarias, titulares y plantilla propia, y plantilla subcontratada para prestar el servicio.",
      descartes: {
        a: "Los datos de las personas usuarias son obligatorios, pero constituyen solo una de las tres dimensiones informativas exigidas.",
        b: "La titularidad y plantilla de la entidad deben desglosarse, junto con las personas destinatarias y la posible plantilla contratada.",
        c: "La información sobre personal subcontratado se aporta cuando exista, sin reemplazar los datos de beneficiarias y de la propia entidad.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Al preparar sus planes estratégicos de subvenciones, las administraciones públicas vascas deben analizar y motivar si existen desigualdades en los ámbitos financiados.",
      descartes: {
        b: "El órgano de igualdad puede emitir su opinión, pero la responsabilidad del análisis recae sobre la administración que elabora el plan.",
        c: "Emakunde no sustituye a cada administración en sus planes estratégicos, aunque pueda intervenir dentro de su ámbito competencial.",
        d: "El Consejo de Gobierno no es el sujeto único de esta obligación, que alcanza a las distintas administraciones públicas vascas.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Los promotores deben fijar indicadores para evaluar las medidas y los poderes públicos pueden aprobar pautas de aplicación. Ambas reglas aparecen en el artículo 24.",
      descartes: {
        a: "Los indicadores son obligatorios, pero el artículo contempla además normas o instrucciones que faciliten el cumplimiento efectivo.",
        b: "Las pautas pueden aprobarse en cada ámbito de actuación, junto con los indicadores que deben establecer los órganos promotores.",
        d: "Las dos afirmaciones tienen respaldo directo en los apartados 1 y 2 del artículo 24.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "Se conserva la solución A, pero el artículo 25.1 atribuye la inclusión de la perspectiva de género en planes sectoriales y estratégicos a los poderes públicos vascos.",
      descartes: {
        b: "Esta alternativa reproduce el sujeto empleado por el artículo 25.1 y es más amplia que la administración pública indicada en la solución almacenada.",
        c: "El sector privado vinculado no comparte la responsabilidad de aprobar los planes sectoriales o estratégicos del poder público.",
        d: "Aunque menciona a los poderes públicos, añade indebidamente al sector privado como sujeto del deber de planificación.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "La teoría utiliza expresamente «los poderes públicos vascos» para imponer la perspectiva de género en estos planes. Esa formulación coincide con la opción B y tiene un alcance mayor que «las administraciones públicas vascas». Se mantiene la opción A registrada y se deja constancia de la diferencia.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "El informe que motive la falta de pertinencia de género debe enviarse al órgano u organismo de igualdad correspondiente para conocer su parecer.",
      descartes: {
        a: "El órgano que elabora el plan impulsa el informe, pero la consulta debe dirigirse a la unidad especializada en igualdad.",
        b: "El órgano de gobierno competente no reemplaza la intervención consultiva que la ley reserva al órgano de igualdad.",
        d: "La remisión tiene un destinatario técnico concreto y no se distribuye entre todos los órganos enumerados.",
      },
    },
  ],
};

const references = {};
for (let id = 1; id <= 14; id += 1) references[id] = articleReference(23);
references[15] = articleReference(24);
references[16] = articleReference(25);
references[17] = articleReference(25);

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-06-igualdad",
  references,
});
