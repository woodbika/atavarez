import { blockReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-nociones-basicas-primeros-auxilios",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "Al socorrer, la pauta P.A.S. ordena comprobar primero la consciencia, después la respiración y por último el pulso.",
      descartes: {
        a: "Comenzar por la respiración altera el orden de valoración indicado.",
        c: "El pulso se comprueba después de consciencia y respiración, no en primer lugar.",
        d: "La respiración debe verificarse antes que el pulso.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "La teoría señala que un intervalo de 3 a 5 minutos sin aporte de oxígeno causa daños celulares irreversibles.",
      descartes: {
        a: "El material recomienda actuar antes de un minuto ante una parada respiratoria, pero sitúa el daño irreversible entre 3 y 5 minutos.",
        c: "Esperar de 8 a 10 minutos rebasa el intervalo crítico descrito.",
        d: "De 12 a 15 minutos es un periodo muy superior al límite indicado.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "Cuando actúa una sola persona y la víctima no respira ni tiene pulso, la secuencia recogida es de 30 compresiones y 2 insuflaciones.",
      descartes: {
        a: "La pauta 15:2 se reserva en este material al supuesto de dos socorristas entrenados.",
        c: "La teoría no establece ciclos de 5 compresiones y 1 insuflación.",
        d: "Tampoco contempla una relación de 50 compresiones por 5 insuflaciones.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Para dos socorristas entrenados, el texto establece una secuencia de 15 compresiones por 2 insuflaciones.",
      descartes: {
        a: "La relación 30:2 es la indicada por el material cuando interviene una sola persona.",
        c: "Treinta compresiones por cinco insuflaciones no aparece entre las pautas descritas.",
        d: "La secuencia 10:1 tampoco corresponde al supuesto de dos socorristas.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El masaje cardíaco debe hacer descender el tórax entre 4 y 5 centímetros, con un ritmo de 80 a 100 compresiones por minuto.",
      descartes: {
        a: "Dos o tres centímetros y 60 compresiones resultan inferiores a la profundidad y frecuencia señaladas.",
        c: "Una profundidad de 6 a 8 centímetros y 120 por minuto supera la pauta del texto.",
        d: "Uno o dos centímetros no alcanza la compresión indicada, aunque mencione una frecuencia incluida en el límite superior.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Tras un traumatismo, la combinación de palidez, sudor frío, pulso rápido y débil y sed permite sospechar una hemorragia interna.",
      descartes: {
        a: "La teoría describe palidez, no rubor, y no identifica la hipertensión como signo característico.",
        b: "El pulso esperado es rápido y débil, no lento y fuerte, y se acompaña de sudoración fría.",
        d: "Rigidez y visión borrosa no forman el conjunto de signos enumerado para esta sospecha.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Si el torniquete se mantiene durante un periodo prolongado, el texto aconseja aflojarlo ligeramente cada 20 minutos, sin retirarlo y vigilando que no reaparezca el sangrado.",
      descartes: {
        a: "Cinco minutos no es el intervalo aproximado establecido.",
        b: "Diez minutos tampoco coincide con la periodicidad indicada.",
        d: "Una hora prolongaría excesivamente el intervalo frente a los 20 minutos señalados.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Una vez colocado el torniquete, su retirada corresponde al personal sanitario especializado para evitar el riesgo de shock.",
      descartes: {
        a: "El socorrista no debe retirarlo por iniciativa propia ni siquiera al transcurrir un tiempo determinado.",
        c: "Que el sangrado ceda no autoriza a cualquier persona presente a quitarlo.",
        d: "La víctima tampoco debe retirarlo al recuperar el conocimiento.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "La quemadura de segundo grado destruye la epidermis y parte de la dermis, forma flictenas y pierde líquido, por lo que se dice que la lesión «llora».",
      descartes: {
        a: "La de primer grado afecta solo a la epidermis y produce eritema, sin las ampollas descritas.",
        c: "La de tercer grado alcanza todo el espesor de la piel, tiene aspecto seco y forma escara.",
        d: "La clasificación desarrollada en la teoría llega al tercer grado y no atribuye estos signos a un cuarto grado.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "En la regla de Wallace para personas adultas, cada extremidad inferior completa representa el 18 % de la superficie corporal.",
      descartes: {
        a: "El 9 % corresponde, entre otras zonas, a cada extremidad superior.",
        c: "El 1 % se asigna a los genitales.",
        d: "El 36 % equivaldría a las dos extremidades inferiores, no a una sola.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "Ante una quemadura no deben romperse las ampollas ni aplicarse pomadas, ungüentos o pasta dentífrica; se protege así la lesión y se evita favorecer infecciones.",
      descartes: {
        a: "Refrescar la zona con agua abundante es una actuación recomendada, evitando enfriar en exceso a la persona.",
        b: "Cubrir con gasas o paños limpios forma parte de la asistencia indicada.",
        d: "La evacuación al centro hospitalario se recomienda lo antes posible.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La regla esencial consiste en inmovilizar la fractura en la posición encontrada y evitar movimientos innecesarios.",
      descartes: {
        a: "El socorrista nunca debe intentar reducir o recolocar el hueso por su cuenta.",
        c: "Flexionar para comprobar la movilidad puede aumentar el dolor y agravar la lesión.",
        d: "Masajear la zona no inmoviliza la fractura y puede desplazar sus fragmentos.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La salida de líquido cefalorraquídeo amarillento por nariz u oídos y los vómitos violentos son signos de sospecha de fractura cráneo-encefálica.",
      descartes: {
        a: "Una lesión intestinal no explica la salida de líquido cefalorraquídeo por los orificios de la cabeza.",
        c: "La intoxicación por monóxido de carbono se relaciona con inhalación y dificultad respiratoria, no con estos signos traumáticos.",
        d: "El síncope es una pérdida transitoria de consciencia y no produce emisión de líquido cefalorraquídeo.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "Si la obstrucción es incompleta y la persona puede toser, debe animársela a hacerlo con fuerza y no darle palmadas en la espalda.",
      descartes: {
        a: "La maniobra de Heimlich se reserva en el texto para la obstrucción completa.",
        b: "Las palmadas pueden desplazar el objeto a mayor profundidad y empeorar la situación.",
        d: "Introducir los dedos a ciegas puede empujar el cuerpo extraño y causar lesiones.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "Ante una quemadura química cutánea, la teoría indica lavar la piel de forma generosa y continua durante 20 a 30 minutos.",
      descartes: {
        a: "Dos o tres minutos no proporcionan el tiempo de irrigación previsto.",
        b: "Cinco a diez minutos también quedan por debajo del intervalo recomendado.",
        d: "Un paño seco no elimina el agente químico; se requiere agua abundante.",
      },
    },
  ],
};

const references = {
  1: blockReference("1-introduccion", "Introducción y pauta P.A.S."),
  2: blockReference(
    "3-reanimacion-cardio-pulmonar-r-c-p",
    "Reanimación cardiopulmonar",
  ),
  3: blockReference(
    "3-reanimacion-cardio-pulmonar-r-c-p",
    "Reanimación cardiopulmonar",
  ),
  4: blockReference(
    "3-reanimacion-cardio-pulmonar-r-c-p",
    "Reanimación cardiopulmonar",
  ),
  5: blockReference(
    "3-reanimacion-cardio-pulmonar-r-c-p",
    "Reanimación cardiopulmonar",
  ),
  6: blockReference("4-hemorragias", "Hemorragias"),
  7: blockReference("4-hemorragias", "Hemorragias"),
  8: blockReference("4-hemorragias", "Hemorragias"),
  9: blockReference("5-quemaduras", "Quemaduras"),
  10: blockReference("5-quemaduras", "Quemaduras"),
  11: blockReference("5-quemaduras", "Quemaduras"),
  12: blockReference("6-fracturas", "Fracturas"),
  13: blockReference("6-fracturas", "Fracturas"),
  14: blockReference("8-obstruccion-de-las-vias-aereas", "Obstrucción de las vías aéreas"),
  15: blockReference("5-quemaduras", "Quemaduras"),
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-13-gobierno-vasco",
  references,
});
