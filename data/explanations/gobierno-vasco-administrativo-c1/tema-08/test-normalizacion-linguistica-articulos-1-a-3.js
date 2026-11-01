import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-1-a-3",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 1 identifica el euskera como lengua propia del País Vasco y señala que, junto con el castellano, es lengua oficial del sector público vasco.",
      descartes: {
        b: "El castellano es lengua oficial, pero el precepto no lo califica como lengua propia del pueblo vasco.",
        c: "La condición de lengua propia se atribuye al euskera, por lo que no alcanza conjuntamente a ambas lenguas.",
        d: "El decreto sí reconoce expresamente una lengua propia: el euskera.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El objeto del decreto es regular la normalización del uso del euskera en las entidades que integran el sector público vasco.",
      descartes: {
        b: "La norma garantiza también el castellano, pero su objeto específico no es normalizar su uso.",
        c: "Solo la normalización del euskera define el objeto del decreto.",
        d: "La opción A reproduce directamente el artículo 1.1.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La finalidad reúne la garantía de las dos lenguas oficiales, la ausencia de discriminación institucional y la consolidación del euskera como lengua de servicio y trabajo sin limitar el castellano.",
      descartes: {
        a: "La garantía del uso de ambas lenguas es cierta, pero constituye solo una de las finalidades enumeradas.",
        b: "La no discriminación institucional forma parte de la finalidad, aunque no la agota.",
        c: "Situar el euskera como lengua normal de servicio y trabajo también es correcto, junto con las otras finalidades.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El artículo 2.1 aplica el decreto al personal funcionario y, en lo que proceda, al personal laboral del sector público vasco.",
      descartes: {
        a: "Limitar el ámbito al personal funcionario excluye indebidamente al personal laboral.",
        b: "El personal laboral queda incluido solo en lo que proceda; la opción omite ese matiz.",
        d: "La opción C reproduce el alcance subjetivo establecido por la norma.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El sector público vasco comprende la Administración general, las administraciones forales y las locales, junto con sus administraciones institucionales y entes instrumentales dependientes.",
      descartes: {
        a: "La Administración general está incluida, pero no es el único nivel administrativo contemplado.",
        b: "Las administraciones forales forman parte del ámbito, al igual que otros niveles.",
        c: "Las administraciones locales también están incluidas, sin excluir las anteriores.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El artículo 2 incluye los órganos consultivos, participativos, de asesoramiento o control enumerados en la opción B. La UPV solo se integra respecto de su personal de administración y servicios, no de su personal docente.",
      descartes: {
        a: "La referencia a la UPV es incorrecta porque el decreto atiende exclusivamente a su personal de administración y servicios.",
        c: "No pueden ser correctas ambas alternativas: la A sustituye el colectivo universitario incluido por el personal docente.",
        d: "La enumeración de la opción B coincide con el artículo 2.1.e.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Juntas generales, Ertzaintza, Parlamento Vasco y Ararteko figuran entre los colectivos a los que se aplica el decreto cuando así lo establezca su normativa específica.",
      descartes: {
        a: "El personal de las juntas generales está incluido, pero no es el único colectivo de la lista.",
        b: "La Ertzaintza aparece expresamente junto con otros colectivos sujetos a su normativa específica.",
        c: "Parlamento Vasco y Ararteko forman parte de la enumeración, que comprende también las opciones A y B.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El personal docente no universitario y el personal estatutario de Osakidetza se rigen por el decreto, con aplicación preferente de su normativa específica en las materias enumeradas.",
      descartes: {
        a: "El personal docente no universitario está comprendido, pero comparte esta regla con el personal estatutario de Osakidetza.",
        b: "El personal estatutario de Osakidetza también está incluido, sin excluir al colectivo docente.",
        d: "Las dos primeras opciones corresponden al artículo 2.3.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El personal del Tribunal Vasco de Cuentas Públicas y los cuerpos de Justicia gestionados por la Comunidad Autónoma aparecen en el artículo 2.4.",
      descartes: {
        a: "El Tribunal Vasco de Cuentas Públicas está incluido, junto con otros colectivos.",
        b: "Los cuerpos al servicio de Justicia también se incluyen cuando su gestión corresponde a la Comunidad Autónoma.",
        d: "Ambas categorías están expresamente enumeradas en la teoría.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El decreto se aplica al personal de entidades en las que las administraciones públicas vascas aporten, directa o indirectamente, más del 50 % del capital.",
      descartes: {
        a: "No se exige que la participación pública alcance el 100 %.",
        c: "El umbral legal es superior al 50 %, no igual o superior.",
        d: "Una participación cualquiera no basta: debe superar la mitad del capital.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Los Criterios de Uso de las Lenguas Oficiales alcanzan tanto a las adjudicatarias de contratos públicos como a las beneficiarias de subvenciones.",
      descartes: {
        a: "Las adjudicatarias están incluidas, pero el ámbito también comprende a quienes reciben subvenciones.",
        b: "Las beneficiarias de la actividad subvencional están sujetas a los criterios, junto con las adjudicatarias.",
        d: "Las opciones A y B están recogidas expresamente en el artículo 2.6.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El decreto se aplica a las entidades del sector público vasco tengan o no sus sedes y dependencias dentro de la Comunidad Autónoma de Euskadi.",
      descartes: {
        a: "La formulación general es correcta y se concreta en las dos situaciones territoriales siguientes.",
        b: "Las entidades con sede en Euskadi están incluidas, pero no son las únicas.",
        c: "También se incluyen las entidades con sedes fuera de Euskadi, respetando las lenguas oficiales del territorio donde se ubiquen.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 3, reference: articleReference(1) },
    { from: 4, to: 11, reference: articleReference(2) },
    { from: 12, reference: articleReference(3) },
  ]),
});
