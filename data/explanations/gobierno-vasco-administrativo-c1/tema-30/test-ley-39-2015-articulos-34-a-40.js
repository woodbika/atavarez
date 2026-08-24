import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-34-a-40",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 34 comprende «De oficio» y «A instancia de parte». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «De oficio», pero resulta incompleta porque también debe incluirse «A instancia de parte».",
        "b": "La alternativa B recoge «A instancia de parte», pero resulta incompleta porque también debe incluirse «De oficio»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 34 es los actos administrativos que dicten las Administraciones Públicas, bien de oficio o a instancia del interesado, se producirán por el órgano competente ajustándose a los requisitos y al procedimiento establecido. En este supuesto se ajusta a «El órgano competente».",
      "descartes": {
        "b": "La alternativa B vincula «Se tienen que dictar por» con «El superior jerárquico del órgano competente»; el artículo 34 lo relaciona con «El órgano competente».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El superior jerárquico del órgano competente» no expresa la regla que el artículo 34 aplica a «Se tienen que dictar por»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 34 dispone que el contenido de los actos se ajustará a lo dispuesto por el ordenamiento jurídico y será determinado y adecuado a los fines de aquéllos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «El contenido de los actos administrativos», la alternativa A introduce «señalen únicamente las leyes» donde la norma dispone «señale el ordenamiento jurídico».",
        "c": "En «El contenido de los actos administrativos», la alternativa C introduce «La respuesta a y b es lo mismo» donde la norma dispone «Se ajustará a lo que señale el ordenamiento jurídico»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 35 establece que los actos que limiten derechos subjetivos o intereses legítimos. Esa previsión conduce a «Limiten derechos subjetivos o intereses legítimos».",
      "descartes": {
        "b": "En «Serán motivados los actos que», la alternativa B introduce «Amplíen o reconozcan» donde la norma dispone «Limiten».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Amplíen o reconozcan derechos subjetivos o intereses legítimos» no expresa la regla que el artículo 35 aplica a «Serán motivados los actos que»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 35, los actos que resuelvan procedimientos de revisión de oficio de disposiciones o actos administrativos, recursos administrativos y procedimientos de arbitraje y los que declaren su inadmisión. Por eso encaja «Que resuelvan un procedimiento de revisión de oficio».",
      "descartes": {
        "a": "En «Serán motivados los actos», la alternativa A introduce «constituyan la desestimación de un recurso administrativo pero no cuando estimen» donde la norma dispone «resuelvan un procedimiento de revisión de oficio».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Que constituyan la desestimación de un recurso administrativo pero no cuando estimen» no expresa la regla que el artículo 35 aplica a «Serán motivados los actos»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 35 recoge las dos previsiones: «Los actos que resuelvan un recurso administrativo» y «Los actos que resuelvan un procedimiento de arbitraje». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Los actos que resuelvan un recurso administrativo», pero resulta incompleta porque también debe incluirse «Los actos que resuelvan un procedimiento de arbitraje».",
        "b": "La alternativa B recoge «Los actos que resuelvan un procedimiento de arbitraje», pero resulta incompleta porque también debe incluirse «Los actos que resuelvan un recurso administrativo»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 35 dispone que los actos que se separen del criterio seguido en actuaciones precedentes o del dictamen de órganos consultivos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Serán motivados», la alternativa B introduce «dictamen vinculante de órganos consultivos» donde la norma dispone «criterio seguido en actuaciones precedentes».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los actos que se alejen del dictamen vinculante de órganos consultivos» no expresa la regla que el artículo 35 aplica a «Serán motivados»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 35 recoge tanto «Los actos de acuerdos de suspensión de actos» como «Los actos a través de los cuales se adoptan medidas provisionales». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los actos de acuerdos de suspensión de actos», pero resulta incompleta porque también debe incluirse «Los actos a través de los cuales se adoptan medidas provisionales».",
        "b": "La alternativa B recoge «Los actos a través de los cuales se adoptan medidas provisionales», pero resulta incompleta porque también debe incluirse «Los actos de acuerdos de suspensión de actos»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 35, los acuerdos de aplicación de la tramitación de urgencia, de ampliación de plazos y de realización de actuaciones complementarias. Por eso encaja «Los actos por los que se acuerde la tramitación de urgencia o la ampliación de plazo».",
      "descartes": {
        "b": "En «Serán motivados», la alternativa B introduce «que se produzcan en el ejercicio de potestades regladas» donde la norma dispone «por los que se acuerde la tramitación de urgencia o la ampliación de plazo».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los actos que se produzcan en el ejercicio de potestades regladas» no expresa la regla que el artículo 35 aplica a «Serán motivados»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 35 es se hará siempre de acuerdo a lo que señalan las normas que regulan dichos procedimientos. En este supuesto se ajusta a «Se hará siempre de acuerdo a lo que señalan las normas que regulan dichos procedimientos».",
      "descartes": {
        "a": "En «La motivación de los procesos selectivos y de los procedimientos de libre concurrencia», la alternativa A introduce «señala la le y 30/2015, del 1 de octubre» donde la norma dispone «señalan las normas que regulan dichos procedimientos».",
        "b": "En «La motivación de los procesos selectivos y de los procedimientos de libre concurrencia», la alternativa B introduce «que así lo exijan» donde la norma dispone «de acuerdo a lo que señalan»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 36 dispone que los actos administrativos se producirán por escrito a través de medios electrónicos, a menos que su naturaleza exija otra forma más adecuada de expresión y constancia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Los actos administrativos se producirán», la alternativa A introduce «el órgano competente decida otra cosa» donde la norma dispone «por su naturaleza exija o permita otra forma más adecuada de expresión».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Siempre por escrito, salvo que por su naturaleza exija o permita otra forma más adecuada de expresión» sí está respaldada por el artículo 36."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 36 establece que en los casos en que los órganos administrativos ejerzan su competencia de forma verbal; la constancia escrita del acto; se efectuará y firmará por el titular del órgano inferior o funcionario que la reciba oralmente. Esa previsión conduce a «La hará el titular del órgano inferior o funcionario que la reciba oralmente».",
      "descartes": {
        "a": "En «En los casos en que los órganos administrativos ejerzan su competencia de forma verbal», la alternativa A introduce «Se hará siempre» donde la norma dispone «La hará el titular del órgano inferior o funcionario que la reciba oralmente».",
        "c": "En «En los casos en que los órganos administrativos ejerzan su competencia de forma verbal», la alternativa C introduce «No habrá que especificar la autoridad de procedencia» donde la norma dispone «La hará el titular del órgano inferior o funcionario que la reciba oralmente»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 37, las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o superior jerarquía al que dictó la disposición general. Por eso encaja «No podrán vulnerar en ningún caso disposiciones administrativas de carácter general».",
      "descartes": {
        "b": "En «Las resoluciones administrativas de caráct er particular», la alternativa B introduce «Solamente podrán vulnerar las disposiciones administrativas de carácter general cuando procedan de un órgano superior a las…» donde la norma dispone «No podrán vulnerar en ningún caso disposiciones administrativas de carácter general».",
        "c": "En «Las resoluciones administrativas de caráct er particular», la alternativa C introduce «Pueden vulnerar las disposiciones administrativas de carácter general en cualquier caso» donde la norma dispone «No podrán vulnerar en ningún caso disposiciones administrativas de carácter general»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 39 es los actos de las Administraciones Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa. En este supuesto se ajusta a «Se presumirán válidos».",
      "descartes": {
        "a": "En «Los actos de las Administraciones Públicas sujetos al Derecho Administrativo», la alternativa A introduce «Serán» donde la norma dispone «Se presumirán».",
        "c": "En «Los actos de las Administraciones Públicas sujetos al Derecho Administrativo», la alternativa C introduce «defectuosos, para poder plantear recursos» donde la norma dispone «válidos»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 39 dispone que la eficacia quedará demorada cuando así lo exija el contenido del acto o esté supeditada a su notificación, publicación o aprobación superior. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Cuando la eficacia queda supeditada a notificación o publicación», la alternativa B introduce «es retroactiva» donde la norma dispone «queda demorada».",
        "c": "En «Cuando la eficacia queda supeditada a notificación o publicación», la alternativa C introduce «No influye nada para el momento en que se produce la eficacia» donde la norma dispone «La eficacia queda demorada»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 39 establece que la eficacia quedará demorada cuando así lo exija el contenido del acto o esté supeditada a su notificación, publicación o aprobación superior. Esa previsión conduce a «La eficacia queda demorada».",
      "descartes": {
        "b": "En «Cuando se requiere aprobación de superior», la alternativa B introduce «es retroactiva» donde la norma dispone «queda demorada».",
        "c": "En «Cuando se requiere aprobación de superior», la alternativa C introduce «No influye nada para el momento en que se produce la eficacia» donde la norma dispone «La eficacia queda demorada»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 39, la eficacia es retroactiva. Por eso encaja «La eficacia es retroactiva».",
      "descartes": {
        "a": "En «Cuando un acto se dicte en sustitución de otro acto anulado», la alternativa A introduce «queda demorada» donde la norma dispone «es retroactiva».",
        "c": "En «Cuando un acto se dicte en sustitución de otro acto anulado», la alternativa C introduce «No influye nada para el momento en que se produce la eficacia» donde la norma dispone «La eficacia es retroactiva»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 39 es podrá otorgarse eficacia retroactiva a los actos cuando se dicten en sustitución de actos anulados. En este supuesto se ajusta a «La eficacia es retroactiva».",
      "descartes": {
        "a": "En «Cuando produzcan efectos favorables para el interesado», la alternativa A introduce «queda demorada» donde la norma dispone «es retroactiva».",
        "c": "En «Cuando produzcan efectos favorables para el interesado», la alternativa C introduce «No influye nada para el momento en que se produce la eficacia» donde la norma dispone «La eficacia es retroactiva»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La regulación del artículo 39 comprende «Que los supuestos de hecho necesarios existieran ya en la fecha en que se retrotraiga» y «Que no se lesiones derechos e intereses legítimos de otras personas». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Que los supuestos de hecho necesarios existieran ya en la fecha en que se retrotraiga», pero resulta incompleta porque también debe incluirse «Que no se lesiones derechos e intereses legítimos de otras personas».",
        "b": "La alternativa B recoge «Que no se lesiones derechos e intereses legítimos de otras personas», pero resulta incompleta porque también debe incluirse «Que los supuestos de hecho necesarios existieran ya en la fecha en que se retrotraiga»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 40 establece que toda notificación deberá ser cursada dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado; y deberá contener el texto íntegro de la resolución; el órgano ante el que hubieran de presentarse y el plazo para interponerlos. Esa previsión conduce a «10 días desde que se dicta el acto».",
      "descartes": {
        "b": "Para «Toda notificación deberá ser cursada en el plazo de», la alternativa B utiliza «15», pero la previsión aplicable fija «10».",
        "c": "Para «Toda notificación deberá ser cursada en el plazo de», la alternativa C utiliza «20», pero la previsión aplicable fija «10»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 40, el órgano ante el que debe interponerse el recurso. Por eso encaja «El órgano ante el que debe interponerse el recurso».",
      "descartes": {
        "a": "En «Debe contener la notificación», la alternativa A introduce «que debe resolver» donde la norma dispone «ante el que debe interponerse».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano que debe resolver el recurso» no expresa la regla que el artículo 40 aplica a «Debe contener la notificación»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 40 es las notificaciones que; conteniendo el texto íntegro del acto; surtirán efecto a partir de la fecha en que el interesado realice actuaciones que supongan el conocimiento del contenido y alcance de la resolución o acto objeto de la notificación. En este supuesto se ajusta a «Producirá efectos a partir de la fecha en que el interesado realice actuaciones que supongan conocimiento del contenido y alcance de la resolución o se interponga…».",
      "descartes": {
        "a": "La alternativa A vincula «Las notificaciones que contienen el texto íntegro pero le falta algún requisito» con «Producirá efectos de igual manera que si tuviese todo el contenido»; el artículo 40 lo relaciona con «Producirá efectos a partir de la fecha en que el interesado realice actuaciones que supongan conocimiento del contenido y alcance de la…».",
        "c": "La alternativa C vincula «Las notificaciones que contienen el texto íntegro pero le falta algún requisito» con «No producirá efectos nunca»; el artículo 40 lo relaciona con «Producirá efectos a partir de la fecha en que el interesado realice actuaciones que supongan conocimiento del contenido y alcance de la…»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 40 dispone que y a los solos efectos de entender cumplida la obligación de notificar dentro del plazo máximo de duración de los procedimientos; será suficiente la notificación que contenga; el texto íntegro de la resolución. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Para dar por cumplida la obligación de resolver y notificar en plazo máximo será suficiente con», la alternativa A introduce «hecho» donde la norma dispone «intentado».",
        "b": "En «Para dar por cumplida la obligación de resolver y notificar en plazo máximo será suficiente con», la alternativa B introduce «y los recursos que se pueden plantear» donde la norma dispone «además de haber intentado la notificación»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 40 establece que las Administraciones Públicas podrán adoptar las medidas que consideren necesarias para la protección de los datos personales que consten en las resoluciones y actos administrativos, cuando éstos tengan por destinatarios a más de un interesado. Esa previsión conduce a «Tengan por destinatarios a más de un interesado».",
      "descartes": {
        "a": "La alternativa A vincula «En las notificaciones se podrán adoptar las medidas que consideren necesarios para la protección de los datos…» con «Tengan por destinatarios a un interesado»; el artículo 40 lo relaciona con «Tengan por destinatarios a más de un interesado».",
        "c": "En «En las notificaciones se podrán adoptar las medidas que consideren necesarios para la protección de los datos…», la alternativa C introduce «a un destinatario o más» donde la norma dispone «por destinatarios a más de un interesado»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 41, las notificaciones se practicarán preferentemente por medios electrónicos y, en todo caso, cuando el interesado resulte obligado a recibirlas por esta vía. Por eso encaja «Preferentemente por medios electrónicos, y en algún caso, con carácter obligatorio».",
      "descartes": {
        "a": "En «Las notificaciones se practicarán», la alternativa A introduce «ningún» donde la norma dispone «algún».",
        "b": "En «Las notificaciones se practicarán», la alternativa B introduce «todo» donde la norma dispone «algún»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-30-acto-administrativo",
  references: {
    "1": articleReference(34),
    "2": articleReference(34),
    "3": articleReference(34),
    "4": articleReference(35),
    "5": articleReference(35),
    "6": articleReference(35),
    "7": articleReference(35),
    "8": articleReference(35),
    "9": articleReference(35),
    "10": articleReference(35),
    "11": articleReference(36),
    "12": articleReference(36),
    "13": articleReference(37),
    "14": articleReference(39),
    "15": articleReference(39),
    "16": articleReference(39),
    "17": articleReference(39),
    "18": articleReference(39),
    "19": articleReference(39),
    "20": articleReference(40),
    "21": articleReference(40),
    "22": articleReference(40),
    "23": articleReference(40),
    "24": articleReference(40),
    "25": articleReference(41),
  },
});
