import { blockReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-prevencion-riesgos-laborales-pantallas-visualizacion-datos-numero-2",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La fatiga visual se describe como una afección funcional y reversible producida por el trabajo excesivo de los mecanismos oculares de acomodación.",
      descartes: {
        b: "No se presenta como una lesión orgánica irreversible ni como una pérdida permanente de visión.",
        c: "Su origen es funcional, no infeccioso, por lo que la teoría no la asocia a tratamiento antibiótico.",
        d: "Se relaciona con las exigencias visuales del puesto y no se define como una alteración congénita.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Las cefaleas de baja intensidad y las molestias occipitales o cervicales figuran entre los trastornos extraoculares asociados a la fatiga visual.",
      descartes: {
        a: "La borrosidad de caracteres se clasifica como trastorno visual, no extraocular.",
        b: "La quemazón y el picor pertenecen al grupo de molestias oculares.",
        d: "La fotofobia también se incluye entre los trastornos visuales.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "Para las tareas habituales, la pantalla debe mantenerse a una distancia no inferior a 450 milímetros.",
      descartes: {
        a: "Doscientos milímetros quedan por debajo de la distancia mínima indicada.",
        c: "La teoría no obliga a superar 1.200 milímetros.",
        d: "Trabajar por debajo de 300 milímetros contradice el mínimo de 450 milímetros.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "La pantalla debe situarse alejada de las ventanas y con la línea de visión paralela a su frente para limitar reflejos y deslumbramientos.",
      descartes: {
        a: "Colocarla de frente a la ventana favorece diferencias de luminancia y deslumbramientos.",
        c: "Las luminarias se disponen en hileras paralelas a la ventana, pero no directamente sobre las pantallas.",
        d: "Las cortinas o persianas sí se recomiendan para amortiguar la luz.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "En verano, el intervalo de confort señalado es de 23 a 26 °C y la temperatura no debe exceder de 26 °C.",
      descartes: {
        a: "El rango de 18 a 21 °C queda por debajo del previsto para verano.",
        b: "De 20 a 24 °C no reproduce el intervalo estival indicado en la teoría.",
        d: "El intervalo propuesto comienza en el máximo admisible y llega a temperaturas que lo superan.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "La humedad relativa del puesto con PVD debe mantenerse entre el 45 % y el 65 %, con independencia del intervalo térmico estacional.",
      descartes: {
        a: "Entre el 20 % y el 35 % supone un ambiente más seco que el margen recomendado.",
        c: "Una humedad superior al 80 % rebasa ampliamente el límite previsto.",
        d: "El 10 %-20 % también queda muy por debajo del intervalo de confort.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "El asiento debe tener cinco apoyos con ruedas y un respaldo ligeramente convexo, regulable hacia atrás, para facilitar una postura estable y confortable.",
      descartes: {
        b: "Una silla rígida de cuatro patas y sin regulación no reúne las características ergonómicas descritas.",
        c: "El reposapiés es opcional y se usa cuando la altura impide apoyar correctamente los pies.",
        d: "La teoría sitúa la silla entre 45 y 55 cm y exige adaptación; no fija 65 cm.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Las superficies deben ser mates para evitar reflejos y no deben conducir bien el calor.",
      descartes: {
        b: "Los acabados brillantes favorecen las reflexiones que se pretende evitar.",
        c: "El pulido metálico intensifica los reflejos y puede conducir el calor.",
        d: "El cristal transparente sin tratamiento no responde al acabado mate exigido.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "La postura de referencia mantiene los brazos verticales y los antebrazos horizontales, dentro de una posición relajada y modificable.",
      descartes: {
        a: "La teoría no coloca los brazos en horizontal ni los antebrazos a 45 grados.",
        c: "Elevar los brazos por encima de los hombros genera una postura forzada.",
        d: "Extender ambos segmentos hacia los lados no corresponde a la posición de trabajo frente a la pantalla.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Las irritaciones cutáneas descritas se asocian al ambiente seco, la electricidad estática y el polvo en suspensión.",
      descartes: {
        a: "La teoría no atribuye estas alteraciones a radiaciones ionizantes de los monitores.",
        c: "La iluminación influye en el confort visual, pero no se identifica aquí como causa principal de la irritación cutánea.",
        d: "El parpadeo se relaciona con la fatiga visual, no con lesiones de piel en cara, cuello o manos.",
      },
    },
  ],
};

const references = {
  1: blockReference("6-efectos-sobre-la-salud", "Efectos sobre la salud"),
  2: blockReference("6-efectos-sobre-la-salud", "Efectos sobre la salud"),
  3: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  4: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  5: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  6: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  7: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  8: blockReference(
    "8-ergonomia-del-puesto-de-trabajo-pvd-y-su-entorno",
    "Ergonomía del puesto con PVD y su entorno",
  ),
  9: blockReference("9-postura-de-trabajo", "Postura de trabajo"),
  10: blockReference("6-efectos-sobre-la-salud", "Efectos sobre la salud"),
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-12-gobierno-vasco",
  references,
});
