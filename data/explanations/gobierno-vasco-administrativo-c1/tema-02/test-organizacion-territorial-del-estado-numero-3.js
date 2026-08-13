import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-organizacion-territorial-del-estado-numero-3",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. El elemento que completa la regla es «Ley marco».",
      "descartes": {
        "a": "La diferencia relevante está en «orgánica»: el artículo 150 emplea «marco» y ese matiz cambia el alcance de la regla.",
        "c": "«de armonización» altera el término que delimita la respuesta; la formulación del artículo 150 es «marco»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. En este caso debe aplicarse «El control de las Cortes Generales que se va a efectuar sobre las normas legislativas que dicten las comunidades autónomas».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 150 exige «las Cortes Generales que se va a», no «los Tribunales que se va».",
        "c": "No son válidas las dos afirmaciones: «El control de las Cortes Generales que se va a efectuar sobre las normas legislativas que dicten las comunidades autónomas» se ajusta a la teoría, mientras que «El control de los Tribunales que se va efectuar sobre las normas legislativas que dicten las comunidades autónomas» no."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. La competencia o actuación consultada recae en «Las Cortes Generales».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 150 exige «Las Cortes Generales», no «El Gobierno».",
        "c": "«El Estado» altera el órgano o sujeto competente; la formulación del artículo 150 es «Las Cortes Generales»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. La consecuencia concreta es «Ley orgánica».",
      "descartes": {
        "b": "La alternativa modifica el régimen jurídico aplicable: el artículo 150 exige «orgánica», no «marco».",
        "c": "«de armonización» altera el régimen jurídico aplicable; la formulación del artículo 150 es «orgánica»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 150 recoge tanto «La transferencia de los medios financieros» como «Las formas de control que se reserva el Estado». Las dos afirmaciones completan la respuesta. El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas».",
      "descartes": {
        "a": "«La transferencia de los medios financieros» es cierta, pero no basta por sí sola: «Las formas de control que se reserva el Estado» también está prevista. En este caso, el artículo 150 conduce a «Ambas respuestas son correctas».",
        "b": "Elegir solo «Las formas de control que se reserva el Estado» dejaría incompleta la respuesta, porque también se cumple «La transferencia de los medios financieros». En este caso, el artículo 150 conduce a «Ambas respuestas son correctas»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. En este caso debe aplicarse «Ley de armonización».",
      "descartes": {
        "a": "La alternativa modifica el régimen jurídico aplicable: el artículo 150 exige «de armonización», no «orgánica».",
        "b": "«marco» sustituye el elemento previsto por la norma, que en el artículo 150 es «de armonización»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. La formulación que conserva ese alcance es «El Estado».",
      "descartes": {
        "a": "La diferencia relevante está en «Las Cortes Generales»: el artículo 150 emplea «El Estado» y ese matiz cambia el alcance de la regla.",
        "b": "«Gobierno» altera el órgano o sujeto competente; la formulación del artículo 150 es «Estado»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. La consecuencia concreta es «Es un dato indiferente para la aprobación de este tipo de leyes».",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 150 establece «Es un dato indiferente para la aprobación de este tipo de leyes», no «En materias que no sean de la competencia de las Comunidades Autónomas».",
        "b": "«En materias que sean de la competencia de las Comunidades Autónomas» altera el término que delimita la respuesta; la formulación del artículo 150 es «Es un dato indiferente para la aprobación de este tipo de leyes»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios. El elemento que completa la regla es «La mayoría absoluta de cada Cámara».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 150 exige «cada Cámara», no «ambas Cámaras».",
        "c": "«del Senado» altera el término que delimita la respuesta; la formulación del artículo 150 es «de cada Cámara»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 150 recoge tanto «La transferencia de los medios financieros» como «Las formas de control que se reserva el Estado». Las dos afirmaciones completan la respuesta. El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas». El elemento que completa la regla es «Ambas respuestas son correctas».",
      "descartes": {
        "a": "«La transferencia de los medios financieros» es cierta, pero no basta por sí sola: «Las formas de control que se reserva el Estado» también está prevista. Aquí debe conservarse «Ambas respuestas son correctas», conforme a el artículo 150.",
        "b": "Elegir solo «Las formas de control que se reserva el Estado» dejaría incompleta la respuesta, porque también se cumple «La transferencia de los medios financieros». Aquí debe conservarse «Ambas respuestas son correctas», conforme a el artículo 150."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "Prohíbe la federación de comunidades autónomas, somete los convenios de servicios propios a comunicación y exige autorización de las Cortes para los demás acuerdos de cooperación. En este caso debe aplicarse «La federación de Comunidades Autónomas».",
      "descartes": {
        "a": "«Los convenios entre Comunidades Autónomas para la gestión y prestación de servicios propios de las mismas» regula una posibilidad diferente; en este caso, el artículo 145 establece «La federación de Comunidades Autónomas».",
        "b": "«Los acuerdos de cooperación entre» altera el término que delimita la respuesta; la formulación del artículo 145 es «La federación de»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "Prohíbe la federación de comunidades autónomas, somete los convenios de servicios propios a comunicación y exige autorización de las Cortes para los demás acuerdos de cooperación. La formulación que conserva ese alcance es «Comunicación a las Cortes Generales».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 145 exige «Comunicación a», no «Autorización de».",
        "c": "La alternativa invierte o absolutiza la regla: el artículo 145 establece «Comunicación a las Cortes Generales», no «No se admite en ningún caso dichos convenios»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Prohíbe la federación de comunidades autónomas, somete los convenios de servicios propios a comunicación y exige autorización de las Cortes para los demás acuerdos de cooperación. La consecuencia concreta es «Autorización de las Cortes Generales».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 145 exige «Autorización de», no «Comunicación a».",
        "c": "La alternativa invierte o absolutiza la regla: el artículo 145 establece «Autorización de las Cortes Generales», no «No se admite en ningún caso dichos convenios»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Los Estatutos son la norma institucional básica de cada comunidad, forman parte del ordenamiento estatal, tienen un contenido mínimo y su reforma requiere aprobación mediante ley orgánica. El elemento que completa la regla es «Los Estatutos de Autonomía».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 147 exige «Los Estatutos de Autonomía», no «La Constitución».",
        "c": "No son válidas las dos afirmaciones: «Los Estatutos de Autonomía» se ajusta a la teoría, mientras que «La Constitución» no."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "Los Estatutos son la norma institucional básica de cada comunidad, forman parte del ordenamiento estatal, tienen un contenido mínimo y su reforma requiere aprobación mediante ley orgánica. En este caso debe aplicarse «El Estado».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 147 exige «El Estado», no «Las Comunidades Autónomas».",
        "c": "No son válidas las dos afirmaciones: «El Estado» se ajusta a la teoría, mientras que «Las Comunidades Autónomas» no."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Los Estatutos son la norma institucional básica de cada comunidad, forman parte del ordenamiento estatal, tienen un contenido mínimo y su reforma requiere aprobación mediante ley orgánica. La formulación que conserva ese alcance es «La denominación, organización y sede de las instituciones provinciales, estatales y autonómicas».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 147 exige «organización y sede de las instituciones provinciales, estatales y autonómicas», no «de las Comunidades Autónomas».",
        "c": "«Las competencias asumidas» altera el término que delimita la respuesta; la formulación del artículo 147 es «La denominación, organización y sede de las instituciones provinciales, estatales y autonómicas»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "«Las competencias que pueden asumir las Comunidades Autónomas se recogen en el artículo» figura en el artículo 148.",
      "descartes": {
        "b": "El artículo 148 fija «148»; «149» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 148 fija «148»; «150» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "«Las competencias que son exclusivas del Estado se recogen en el artículo» figura en el artículo 149.",
      "descartes": {
        "a": "El artículo 149 fija «149»; «148» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 149 fija «149»; «150» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento. En este caso debe aplicarse «La Asamblea Legislativa».",
      "descartes": {
        "b": "La diferencia relevante está en «El Consejo de Gobierno»: el artículo 152 emplea «La Asamblea Legislativa» y ese matiz cambia el alcance de la regla. En este caso, el artículo 152 conduce a «La Asamblea Legislativa».",
        "c": "«El Presidente de la Comunidad Autónoma» altera el término que delimita la respuesta; la formulación del artículo 152 es «La Asamblea Legislativa»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento. En este caso debe aplicarse «El Consejo de Gobierno».",
      "descartes": {
        "a": "La diferencia relevante está en «La Asamblea Legislativa»: el artículo 152 emplea «El Consejo de Gobierno» y ese matiz cambia el alcance de la regla.",
        "c": "«Presidente de la Comunidad Autónoma» altera el órgano o sujeto competente; la formulación del artículo 152 es «Consejo de Gobierno»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento. La formulación que conserva ese alcance es «Es que dirige el Consejo de Gobierno y le corresponde la suprema representación de la Comunidad Autónoma y la ordinaria del Estado en aquella».",
      "descartes": {
        "a": "«Es elegido por el Consejo de Gobierno de entre sus miembros» regula una posibilidad diferente; en este caso, el artículo 152 establece «Es que dirige el Consejo de Gobierno y le corresponde la suprema representación de la Comunidad Autónoma y la ordinaria del Estado en aquella».",
        "b": "La alternativa añade o cambia una condición que el artículo 152 no contempla. La formulación aplicable es «Es que dirige el Consejo de Gobierno y le corresponde la suprema representación de la Comunidad Autónoma y la ordinaria del Estado en aquella»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento. La consecuencia concreta es «La Asamblea Legislativa».",
      "descartes": {
        "b": "La diferencia relevante está en «El Consejo de Gobierno»: el artículo 152 emplea «La Asamblea Legislativa» y ese matiz cambia el alcance de la regla. Aquí debe conservarse «La Asamblea Legislativa», conforme a el artículo 152.",
        "c": "«El Tribunal Superior de Justicia» altera el órgano o sujeto competente; la formulación del artículo 152 es «La Asamblea Legislativa»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento. El elemento que completa la regla es «El Tribunal Superior de Justicia».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 152 exige «Superior de Justicia», no «Supremo».",
        "c": "«La Audiencia Nacional» altera el órgano o sujeto competente; la formulación del artículo 152 es «El Tribunal Superior de Justicia»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "Distribuye el control autonómico entre el Tribunal Constitucional, el Gobierno previo dictamen del Consejo de Estado, la jurisdicción contencioso-administrativa y el Tribunal de Cuentas. En este caso debe aplicarse «La jurisdicción contencioso-administrativa».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 153 exige «La jurisdicción contencioso-administrativa», no «El Tribunal Constitucional».",
        "b": "«El Gobierno» altera el órgano o sujeto competente; la formulación del artículo 153 es «La jurisdicción contencioso-administrativa»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Distribuye el control autonómico entre el Tribunal Constitucional, el Gobierno previo dictamen del Consejo de Estado, la jurisdicción contencioso-administrativa y el Tribunal de Cuentas. La formulación que conserva ese alcance es «El Gobierno».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 153 exige «Gobierno», no «Tribunal Constitucional». En este caso, el artículo 153 conduce a «El Gobierno».",
        "c": "«La jurisdicción contencioso-administrativa» altera el órgano o sujeto competente; la formulación del artículo 153 es «El Gobierno». En este caso, el artículo 153 conduce a «El Gobierno»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "Distribuye el control autonómico entre el Tribunal Constitucional, el Gobierno previo dictamen del Consejo de Estado, la jurisdicción contencioso-administrativa y el Tribunal de Cuentas. La consecuencia concreta es «El Tribunal Constitucional».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 153 exige «Tribunal Constitucional», no «Gobierno».",
        "c": "«La jurisdicción contencioso-administrativa» altera el órgano o sujeto competente; la formulación del artículo 153 es «El Tribunal Constitucional»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "Distribuye el control autonómico entre el Tribunal Constitucional, el Gobierno previo dictamen del Consejo de Estado, la jurisdicción contencioso-administrativa y el Tribunal de Cuentas. El elemento que completa la regla es «El Gobierno».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 153 exige «Gobierno», no «Tribunal Constitucional». Aquí debe conservarse «El Gobierno», conforme a el artículo 153.",
        "c": "«La jurisdicción contencioso-administrativa» altera el órgano o sujeto competente; la formulación del artículo 153 es «El Gobierno». Aquí debe conservarse «El Gobierno», conforme a el artículo 153."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "Atribuye al delegado del Gobierno la dirección de la Administración estatal en la comunidad autónoma y su coordinación con la administración autonómica cuando proceda.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 154 exige «Delegado», no «Subdelegado».",
        "c": "«Gobernador Civil» altera el órgano o sujeto competente; la formulación del artículo 154 es «Delegado de Gobierno»."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "Permite al Gobierno adoptar medidas ante incumplimientos autonómicos graves, tras requerimiento y con aprobación del Senado, e impartir instrucciones a las autoridades autonómicas.",
      "descartes": {
        "a": "«Las Cortes Generales previo requerimiento al Presidente de la Comunidad Autónoma y, en el caso de no ser atendido, con la aprobación del Gobierno, podrá adoptar las medidas n…» regula una posibilidad diferente; en este caso, el artículo 155 establece «Para la ejecución de las medidas, el Gobierno podrá dar instrucciones a todas las autoridades de las Comunidades Autónomas».",
        "c": "La respuesta conjunta también daría por válida «Las Cortes Generales previo requerimiento al Presidente de la Comunidad Autónoma y, en el caso de no ser atendido, con la aprobación del Gobierno, podrá adoptar las…», pero el artículo 155 solo respalda «Para la ejecución de las medidas, el Gobierno podrá dar instrucciones a todas las autoridades de las Comunidades Autónomas»."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "El artículo 155 recoge tanto «Las Comunidades Autónomas gozarán de autonomía financiera para el desarrollo y ejecución de sus competencias con arreglo a los principios de coordinación con la Hacienda estatal y de s…» como «Las Comunidades Autónomas podrán actuar como delegados o colaboradores del Estado para la recaudación, la gestión y la liquidación de los recursos tributarios de aquél». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Las Comunidades Autónomas gozarán de autonomía financiera para el desarrollo y ejecución de sus competencias con arreglo a los principios de coordinación con la Hac…» es correcta, pero incompleta: también debe incluirse «Las Comunidades Autónomas podrán actuar como delegados o colaboradores del Estado para la recaudación, la gestión y la liquidación de los recursos tributarios de aq…».",
        "b": "«Las Comunidades Autónomas podrán actuar como delegados o colaboradores del Estado para la recaudación, la gestión y la liquidación de los recursos tributarios de aq…» es correcta, pero incompleta: también debe incluirse «Las Comunidades Autónomas gozarán de autonomía financiera para el desarrollo y ejecución de sus competencias con arreglo a los principios de coordinación con la Hac…»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "Enumera los recursos financieros de las comunidades autónomas y les impide establecer tributos extraterritoriales u obstáculos a la libre circulación de mercancías o servicios. La consecuencia concreta es «Recargos sobre impuestos locales».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 157 exige «Recargos sobre impuestos locales», no «Impuestos cedidos total o parcialmente por el Estado».",
        "c": "«Participaciones en los ingresos del Estado» altera el órgano o sujeto competente; la formulación del artículo 157 es «Recargos sobre impuestos locales»."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "Enumera los recursos financieros de las comunidades autónomas y les impide establecer tributos extraterritoriales u obstáculos a la libre circulación de mercancías o servicios. El elemento que completa la regla es «El producto de operaciones bursátiles».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 157 exige «El producto de operaciones bursátiles», no «Sus propios tributos».",
        "c": "«Rendimientos procedentes de su patrimonio e ingresos de derecho privado» altera el término que delimita la respuesta; la formulación del artículo 157 es «El producto de operaciones bursátiles»."
      }
    },
    {
      "preguntaId": 33,
      "justificacion": "El artículo 157 recoge tanto «Las Transferencias de un Fondo de Compensación interterritorial» como «Las asignaciones con cargo a los Presupuestos Generales del Estado». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Las Transferencias de un Fondo de Compensación interterritorial» es cierta, pero no basta por sí sola: «Las asignaciones con cargo a los Presupuestos Generales del Estado» también está prevista.",
        "b": "Elegir solo «Las asignaciones con cargo a los Presupuestos Generales del Estado» dejaría incompleta la respuesta, porque también se cumple «Las Transferencias de un Fondo de Compensación interterritorial»."
      }
    },
    {
      "preguntaId": 34,
      "justificacion": "Enumera los recursos financieros de las comunidades autónomas y les impide establecer tributos extraterritoriales u obstáculos a la libre circulación de mercancías o servicios. La afirmación que respeta esa regla es «Las Comunidades Autónomas no podrán en ningún caso adoptar medidas tributarias sobre bienes situados fuera de su territorio o que supongan obstáculo para la libre circulación de m…».",
      "descartes": {
        "b": "«Mediante ley ordinaria podrá regularse el ejercicio de las competencias financieras de las comunidades autónomas, las normas para resolver los conflictos que puedan surgir y…» regula una posibilidad diferente; en este caso, el artículo 157 establece «Las Comunidades Autónomas no podrán en ningún caso adoptar medidas tributarias sobre bienes situados fuera de su territorio o que supongan obstáculo para la libre circulación de m…».",
        "c": "La respuesta conjunta también daría por válida «Mediante ley ordinaria podrá regularse el ejercicio de las competencias financieras de las comunidades autónomas, las normas para resolver los conflictos que puedan…», pero el artículo 157 solo respalda «Las Comunidades Autónomas no podrán en ningún caso adoptar medidas tributarias sobre bienes situados fuera de su territorio o que supongan obstáculo para la libre c…»."
      }
    },
    {
      "preguntaId": 35,
      "justificacion": "El artículo 158 recoge tanto «En función del volumen de los servicios y actividades estatales que hayan asumido» como «En función de la garantía de un nivel mínimo en la prestación de los servicios públicos fundamentales en todo el territorio español». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«En función del volumen de los servicios y actividades estatales que hayan asumido» es correcta, pero incompleta: también debe incluirse «En función de la garantía de un nivel mínimo en la prestación de los servicios públicos fundamentales en todo el territorio español».",
        "b": "«En función de la garantía de un nivel mínimo en la prestación de los servicios públicos fundamentales en todo el territorio español» es correcta, pero incompleta: también debe incluirse «En función del volumen de los servicios y actividades estatales que hayan asumido»."
      }
    },
    {
      "preguntaId": 36,
      "justificacion": "Permite asignaciones estatales vinculadas a servicios y crea un Fondo de Compensación para corregir desequilibrios y hacer efectivo el principio de solidaridad.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 158 exige «Es para corregir desequilibrios económicos interterritoriales y hacer efectivo el principio de solidaridad», no «Se constituye con destino a gastos de consumo».",
        "c": "La alternativa añade o cambia una condición que el artículo 158 no contempla. La formulación aplicable es «Es para corregir desequilibrios económicos interterritoriales y hacer efectivo el principio de solidaridad»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-02-organizacion-territorial-del-estado",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 150",
    "articulos": [
      150
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 145",
    "articulos": [
      145
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 145",
    "articulos": [
      145
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 145",
    "articulos": [
      145
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 147",
    "articulos": [
      147
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 147",
    "articulos": [
      147
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 147",
    "articulos": [
      147
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 148",
    "articulos": [
      148
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 149",
    "articulos": [
      149
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 153",
    "articulos": [
      153
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 153",
    "articulos": [
      153
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 153",
    "articulos": [
      153
    ]
  },
  "27": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 153",
    "articulos": [
      153
    ]
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 154",
    "articulos": [
      154
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 155",
    "articulos": [
      155
    ]
  },
  "30": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 155",
    "articulos": [
      155
    ]
  },
  "31": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 157",
    "articulos": [
      157
    ]
  },
  "32": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 157",
    "articulos": [
      157
    ]
  },
  "33": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 157",
    "articulos": [
      157
    ]
  },
  "34": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 157",
    "articulos": [
      157
    ]
  },
  "35": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 158",
    "articulos": [
      158
    ]
  },
  "36": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 158",
    "articulos": [
      158
    ]
  }
},
});
