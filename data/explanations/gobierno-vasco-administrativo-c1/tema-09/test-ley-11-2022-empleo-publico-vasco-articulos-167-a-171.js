import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-11-2022-empleo-publico-vasco-articulos-167-a-171",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El artículo 167 recoge tanto «Sin perjuicio de la responsabilidad que corresponde a sus superiores jerárquicos» como «En todo momento deberán dar cuenta de las anomalías que hubieran observado en el servicio». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Sin perjuicio de la responsabilidad que corresponde a sus superiores jerárquicos» es correcta, pero incompleta: también debe incluirse «En todo momento deberán dar cuenta de las anomalías que hubieran observado en el servicio».",
        "b": "«En todo momento deberán dar cuenta de las anomalías que hubieran observado en el servicio» es correcta, pero incompleta: también debe incluirse «Sin perjuicio de la responsabilidad que corresponde a sus superiores jerárquicos».",
        "d": "El artículo 167 sí respalda «Ambas respuestas son correctas»; por eso no procede negar que exista una respuesta válida."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Cuando la Administración haya indemnizado a una persona lesionada, el artículo 168 ordena incoar de oficio un expediente contra la autoridad o el personal causante de daños por dolo, culpa o negligencia grave.",
      "descartes": {
        "a": "«Primero se dirigen contra sus autoridades y su personal empleado público causante de daños por dolo, culpa o negligencias graves, por el incorrecto funcionamiento de los serv…» regula una posibilidad diferente; en este caso, el artículo 168 establece «Las administraciones públicas deberán instruir un expediente contra sus autoridades y personal empleado público causante de daños por dolo, culpa o negligencias graves, por el inc…».",
        "c": "La alternativa añade o cambia una condición que el artículo 168 no contempla. La formulación aplicable es «Las administraciones públicas deberán instruir un expediente contra sus autoridades y personal empleado público causante de daños por dolo, culpa o negligencias graves, por el inc…».",
        "d": "La respuesta conjunta también daría por válida «Primero se dirigen contra sus autoridades y su personal empleado público causante de daños por dolo, culpa o negligencias graves, por el incorrecto funcionamiento d…», pero el artículo 168 solo respalda «Las administraciones públicas deberán instruir un expediente contra sus autoridades y personal empleado público causante de daños por dolo, culpa o negligencias gra…»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 169 recoge tanto «La responsabilidad penal» como «La responsabilidad civil». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«La responsabilidad penal» es cierta, pero no basta por sí sola: «La responsabilidad civil» también está prevista.",
        "b": "Elegir solo «La responsabilidad civil» dejaría incompleta la respuesta, porque también se cumple «La responsabilidad penal».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna de las respuestas anteriores es correcta» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 171 recoge tanto «El personal empleado público vendrá obligado a observar estrictamente el régimen de incompatibilidades establecidos en la legislación vigente» como «Las administraciones públicas vascas tienen la exigencia de su cumplimiento». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«El personal empleado público vendrá obligado a observar estrictamente el régimen de incompatibilidades establecidos en la legislación vigente» es correcta, pero incompleta: también debe incluirse «Las administraciones públicas vascas tienen la exigencia de su cumplimiento».",
        "b": "«Las administraciones públicas vascas tienen la exigencia de su cumplimiento» es correcta, pero incompleta: también debe incluirse «El personal empleado público vendrá obligado a observar estrictamente el régimen de incompatibilidades establecidos en la legislación vigente».",
        "d": "El artículo 171 sí respalda «Ambas respuestas son correctas»; por eso no procede negar que exista una respuesta válida."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 171 recoge tanto «Cualquier actividad en el sector público» como «Cualquier actividad en el sector privado». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Cualquier actividad en el sector público» es cierta, pero no basta por sí sola: «Cualquier actividad en el sector privado» también está prevista.",
        "b": "Elegir solo «Cualquier actividad en el sector privado» dejaría incompleta la respuesta, porque también se cumple «Cualquier actividad en el sector público».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna de las respuestas es correcta» las descartaría sin fundamento."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-09-personal-al-servicio-administraciones-publicas-vascas",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 167",
    "articulos": [
      167
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 168",
    "articulos": [
      168
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 169",
    "articulos": [
      169
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 171",
    "articulos": [
      171
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 171",
    "articulos": [
      171
    ]
  }
},
});
