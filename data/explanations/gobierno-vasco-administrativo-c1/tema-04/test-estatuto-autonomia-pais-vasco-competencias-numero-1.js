import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-estatuto-autonomia-pais-vasco-competencias-numero-1",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. En este caso debe aplicarse «Artículo 12».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Legislación penitenciaria» pertenece, en cambio, al artículo 12.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Legislación penitenciaria» pertenece, en cambio, al artículo 12.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Legislación penitenciaria» pertenece, en cambio, al artículo 12."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución de la legislación básica estatal. El elemento que completa la regla es «Artículo 11.1».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Medio ambiente y ecología» pertenece, en cambio, al artículo 11.1.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Medio ambiente y ecología» pertenece, en cambio, al artículo 11.1.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Medio ambiente y ecología» pertenece, en cambio, al artículo 11.1."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La consecuencia concreta es «Artículo 12».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Propiedad intelectual e industrial» pertenece, en cambio, al artículo 12.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Propiedad intelectual e industrial» pertenece, en cambio, al artículo 12.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Propiedad intelectual e industrial» pertenece, en cambio, al artículo 12."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución dentro de las bases estatales. El elemento que completa la regla es «Artículo 11.2».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Régimen minero y energético. Recursos geotérmicos» pertenece, en cambio, al artículo 11.2.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Régimen minero y energético. Recursos geotérmicos» pertenece, en cambio, al artículo 11.2.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Régimen minero y energético. Recursos geotérmicos» pertenece, en cambio, al artículo 11.2."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. El elemento que completa la regla es «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Asistencia social» pertenece, en cambio, al artículo 10.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Asistencia social» pertenece, en cambio, al artículo 10.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Asistencia social» pertenece, en cambio, al artículo 10."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución dentro de las bases estatales. En este caso debe aplicarse «Artículo 11.2».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Ordenación del crédito, banca y seguros» pertenece, en cambio, al artículo 11.2.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Ordenación del crédito, banca y seguros» pertenece, en cambio, al artículo 11.2.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Ordenación del crédito, banca y seguros» pertenece, en cambio, al artículo 11.2."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución de la legislación básica estatal. La formulación que conserva ese alcance es «Artículo 11.1».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 11. En este caso, el artículo 11 conduce a «Artículo 11.1».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 11.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 11. En este caso, el artículo 11 conduce a «Artículo 11.1»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La consecuencia concreta es «Artículo 12».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Pesas y medidas; contraste de metales» pertenece, en cambio, al artículo 12.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Pesas y medidas; contraste de metales» pertenece, en cambio, al artículo 12.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Pesas y medidas; contraste de metales» pertenece, en cambio, al artículo 12."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Defensa del consumidor y del usuario» pertenece, en cambio, al artículo 10.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Defensa del consumidor y del usuario» pertenece, en cambio, al artículo 10.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Defensa del consumidor y del usuario» pertenece, en cambio, al artículo 10."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La formulación que conserva ese alcance es «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La cifra, el plazo o la condición exigida es «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La competencia o actuación consultada recae en «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución de la legislación básica estatal. La formulación que conserva ese alcance es «Artículo 11.1».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; «Ordenación del sector pesquero del País Vasco» se encuadra en el artículo 11.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; «Ordenación del sector pesquero del País Vasco» se encuadra en el artículo 11.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; «Ordenación del sector pesquero del País Vasco» se encuadra en el artículo 11."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La materia preguntada figura en el artículo 11, dentro del desarrollo legislativo y la ejecución dentro de las bases estatales. La consecuencia concreta es «Artículo 11.2».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 11. Aquí debe conservarse «Artículo 11.2», conforme a el artículo 11.",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 11.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 11. Aquí debe conservarse «Artículo 11.2», conforme a el artículo 11."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. En este caso debe aplicarse «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 33,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. En este caso debe aplicarse «Artículo 12».",
      "descartes": {
        "a": "El artículo 10 regula las competencias exclusivas de la Comunidad Autónoma. «Ferias internacionales celebradas en el País Vasco» pertenece, en cambio, al artículo 12.",
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Ferias internacionales celebradas en el País Vasco» pertenece, en cambio, al artículo 12.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Ferias internacionales celebradas en el País Vasco» pertenece, en cambio, al artículo 12."
      }
    },
    {
      "preguntaId": 34,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La formulación que conserva ese alcance es «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. En este caso, el artículo 12 conduce a «Artículo 12»."
      }
    },
    {
      "preguntaId": 35,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 36,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 37,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 38,
      "justificacion": "La materia preguntada figura en el artículo 12, dentro de la ejecución de la legislación del Estado. La formulación que conserva ese alcance es «Artículo 12».",
      "descartes": {
        "a": "«Artículo 10» corresponde a las competencias exclusivas de la Comunidad Autónoma; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 12. Aquí debe conservarse «Artículo 12», conforme a el artículo 12."
      }
    },
    {
      "preguntaId": 39,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 40,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 41,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La cifra, el plazo o la condición exigida es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 42,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 43,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 44,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Espectáculos» pertenece, en cambio, al artículo 10.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Espectáculos» pertenece, en cambio, al artículo 10.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Espectáculos» pertenece, en cambio, al artículo 10."
      }
    },
    {
      "preguntaId": 45,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 46,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 47,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 48,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "El artículo 11.1 regula el desarrollo legislativo y la ejecución de la legislación básica estatal. «Turismo y deporte. Ocio y esparcimiento» pertenece, en cambio, al artículo 10.",
        "c": "El artículo 11.2 regula el desarrollo legislativo y la ejecución de las bases estatales. «Turismo y deporte. Ocio y esparcimiento» pertenece, en cambio, al artículo 10.",
        "d": "El artículo 12 regula la ejecución de la legislación del Estado. «Turismo y deporte. Ocio y esparcimiento» pertenece, en cambio, al artículo 10."
      }
    },
    {
      "preguntaId": 49,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 50,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. El elemento que completa la regla es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 51,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 52,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La formulación que conserva ese alcance es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 53,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La consecuencia concreta es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    },
    {
      "preguntaId": 54,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. La cifra, el plazo o la condición exigida es «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10.",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. Aquí debe conservarse «Artículo 10», conforme a el artículo 10."
      }
    },
    {
      "preguntaId": 55,
      "justificacion": "La materia preguntada figura en el artículo 10, dentro de las competencias exclusivas de la Comunidad Autónoma. En este caso debe aplicarse «Artículo 10».",
      "descartes": {
        "b": "«Artículo 11.1» corresponde al desarrollo legislativo y la ejecución de la legislación básica estatal; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "c": "«Artículo 11.2» corresponde al desarrollo legislativo y la ejecución dentro de las bases estatales; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10».",
        "d": "«Artículo 12» corresponde a la ejecución de la legislación del Estado; la materia preguntada se encuadra en el artículo 10. En este caso, el artículo 10 conduce a «Artículo 10»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-04-organizacion-politica-administrativa-capv",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "27": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "30": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "31": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "32": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "33": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "34": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "35": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "36": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "37": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "38": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "39": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "40": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "41": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "42": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "43": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "44": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "45": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "46": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "47": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "48": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "49": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "50": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "51": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "52": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "53": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "54": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "55": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  }
},
});
