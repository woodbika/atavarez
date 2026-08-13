import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-11-2022-empleo-publico-vasco-articulos-26-a-30",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El artículo 26 llama personal empleado público a quien ejerce funciones profesionales retribuidas en puestos de las administraciones públicas vascas. «Empleados públicos» es, por tanto, la categoría general que pide la pregunta.",
      "descartes": {
        "a": "Enumera varias clases de personal, pero no todas: deja fuera al personal eventual. Además, la pregunta pide la denominación del conjunto, no una relación parcial de sus integrantes.",
        "b": "El personal funcionario de carrera es solo una de las clases incluidas dentro del personal empleado público.",
        "d": "La enumeración es incompleta: además del personal funcionario de carrera y del laboral, el artículo 26 incluye al personal funcionario interino y al eventual."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Personal laboral, ya sea fijo, por tiempo indefinido o temporal.",
      "descartes": {
        "a": "«Fijo o temporal» regula una posibilidad diferente; en este caso, el artículo 26 establece «Fijo, indefinido o temporal».",
        "b": "La alternativa añade o cambia una condición que el artículo 26 no contempla. La formulación aplicable es «Fijo, indefinido o temporal».",
        "d": "El artículo 26 sí aporta una respuesta válida: «Fijo, indefinido o temporal»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "Es personal funcionario de carrera el que, en virtud de nombramiento legal, desempeña servicios profesionales retribuidos de carácter permanente, y se encuentra vinculado a las administraciones públicas vascas por una relación estatutaria regulada por el derecho público. La categoría que completa la definición es «Nombramiento desempeñan servicios profesionales retribuidos de carácter permanente».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 27 exige «Nombramiento», no «Contrato por escrito».",
        "c": "«públicos» altera el término que delimita la respuesta; la formulación del artículo 27 es «profesionales».",
        "d": "«Nombramiento desempeñan servicios profesionales retribuidos o voluntarios, pero de carácter permanente» pertenece a una previsión distinta de la que el artículo 27 aplica aquí: «Nombramiento desempeñan servicios profesionales retribuidos de carácter permanente»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Es personal funcionario de carrera el que, en virtud de nombramiento legal, desempeña servicios profesionales retribuidos de carácter permanente, y se encuentra vinculado a las administraciones públicas vascas por una relación estatutaria regulada por el derecho público. La categoría que completa la definición es «Una relación estatutaria regulada por el Derecho Administrativo».",
      "descartes": {
        "b": "La alternativa modifica el régimen jurídico aplicable: el artículo 27 exige «Administrativo», no «Laboral».",
        "c": "No son válidas las dos afirmaciones: «Una relación estatutaria regulada por el Derecho Administrativo» se ajusta a la teoría, mientras que «Una relación estatutaria regulada por el Derecho Laboral» no.",
        "d": "El artículo 27 sí aporta una respuesta válida: «Una relación estatutaria regulada por el Derecho Administrativo»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 27 de la ficha define al personal funcionario de carrera, pero no enumera las funciones reservadas a esta clase de personal. Por ello no permite comprobar si la participación directa e indirecta en potestades públicas está comprendida; se conserva «Ambas respuestas son correctas», que es la solución registrada.",
      "descartes": {
        "a": "La ficha no permite afirmar que únicamente la participación directa complete la respuesta, porque no desarrolla esta reserva funcional.",
        "b": "Tampoco ofrece información suficiente para limitar la reserva a la participación indirecta.",
        "d": "La ausencia de esta materia en la ficha no equivale a que no existan funciones reservadas; esa conclusión no puede obtenerse del artículo reproducido."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 27 sirve para encuadrar la cuestión, pero no confirma por separado las afirmaciones combinadas. Se conserva la respuesta conjunta registrada en el test.",
      "descartes": {
        "a": "«De los intereses generales del Estado» integra la respuesta conjunta registrada, pero la ficha no contiene detalle suficiente para validarla por separado.",
        "b": "La clave conjunta incluye «De los intereses generales de las Administraciones Públicas»; el marco teórico disponible no permite comprobar esta afirmación de forma aislada.",
        "d": "«Ninguna respuesta es correcta, porque no hay puestos reservados a funcionarios de carrera» niega el conjunto de afirmaciones que conserva el test; la ficha tampoco aporta una regla con la que revisar esa negación."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 26 clasifica al personal empleado público en personal funcionario de carrera, funcionario interino, laboral y eventual.",
      "descartes": {
        "a": "La diferencia relevante está en «y personal funcionariado»: el artículo 26 emplea «funcionariado de carrera, funcionariado interino y personal eventual» y ese matiz cambia el alcance de la regla.",
        "c": "«personal eventual y personal directivo» sustituye el elemento previsto por la norma, que en el artículo 26 es «y personal eventual».",
        "d": "El artículo 26 sí regula la cuestión y ofrece una respuesta concreta: «Personal laboral, funcionariado de carrera, funcionariado interino y personal eventual»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 28 define al personal interino como el nombrado por necesidad y urgencia para desempeñar funciones reservadas al personal funcionario de carrera.",
      "descartes": {
        "b": "La diferencia relevante está en «Personal laboral fijo o indefinido»: el artículo 28 emplea «Funcionarios de carrera» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Personal laboral fijo o indefinido», pero el artículo 28 solo respalda «Funcionarios de carrera».",
        "d": "La alternativa invierte o absolutiza la regla: el artículo 28 establece «Funcionarios de carrera», no «La ley no regula esta cuestión»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El exceso o acumulación de tareas por plazo máximo de seis meses, dentro de un período de doce meses, contados a partir del momento en que se produzcan dichas causas.",
      "descartes": {
        "a": "El artículo 28 fija «El exceso o acumulación de tareas»; «La existencia de vacantes cuando no sea posible su cobertura por funcionarios de carrera» altera ese dato.",
        "b": "«La ejecución de programas de carácter temporal» altera el alcance o la naturaleza jurídica; la formulación del artículo 28 es «El exceso o acumulación de tareas».",
        "d": "El artículo 28 sí aporta una respuesta válida: «El exceso o acumulación de tareas»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 28 recoge tanto «Como titular de plaza» como «Como funcionario interino». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Como titular de plaza» es cierta, pero no basta por sí sola: «Como funcionario interino» también está prevista.",
        "b": "Elegir solo «Como funcionario interino» dejaría incompleta la respuesta, porque también se cumple «Como titular de plaza».",
        "d": "El artículo 28 sí respalda «Ambas respuestas son correctas»; por eso no procede negar que exista una respuesta válida."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 28 recoge tanto «Por las mismas causas que los funcionarios de carrera» como «Cuando finalice la causa que dio lugar a su nombramiento». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Por las mismas causas que los funcionarios de carrera» es cierta, pero no basta por sí sola: «Cuando finalice la causa que dio lugar a su nombramiento» también está prevista.",
        "b": "Elegir solo «Cuando finalice la causa que dio lugar a su nombramiento» dejaría incompleta la respuesta, porque también se cumple «Por las mismas causas que los funcionarios de carrera».",
        "d": "La teoría admite las afirmaciones enumeradas; «Por las mismas causas que los funcionarios de carrera y personal eventual» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "En el supuesto de la letra a) del apartado 1 de este artículo, las plazas vacantes desempeñadas por personal funcionario interino deberán incluirse en la oferta de empleo correspondiente al ejercicio en que se produce el nombramiento o, si no fuera posible, en la siguiente, salvo que se decida su amortización. La competencia o actuación consultada recae en «La oferta pública de empleo del ejercicio en el que se produce su nombramiento».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 28 exige «en el», no «siguiente al».",
        "c": "El artículo 28 atribuye esta actuación a «La oferta pública de empleo del ejercicio en el que se produce su nombramiento»; «Si no es posible incluirla en la del ejercicio en el que se produce su nombramiento se tiene que amortizar» carece de esa atribución en el contenido estudiado.",
        "d": "El artículo 28 sí regula la cuestión y ofrece una respuesta concreta: «La oferta pública de empleo del ejercicio en el que se produce su nombramiento»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "En el supuesto de la letra a) del apartado 1 de este artículo, las plazas vacantes desempeñadas por personal funcionario interino deberán incluirse en la oferta de empleo correspondiente al ejercicio en que se produce el nombramiento o, si no fuera posible, en la siguiente, salvo que se decida su amortización. La consecuencia concreta es «Su amortización».",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 28 establece «Su amortización», no «Que la administración decida por razones de interés público no incluirla».",
        "b": "La alternativa invierte o absolutiza la regla: el artículo 28 establece «Su amortización», no «Que el funcionario interino no quiera que dicha vacante se incorpore».",
        "d": "El artículo 28 sí regula la cuestión y ofrece una respuesta concreta: «Su amortización»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Al personal funcionario interino le será aplicable, en cuanto sea adecuado a la naturaleza de su condición y en los términos previstos en esta ley, el régimen general del personal funcionario de carrera.",
      "descartes": {
        "b": "La alternativa modifica el régimen jurídico aplicable: el artículo 28 exige «Los funcionarios de carrera», no «El personal laboral».",
        "c": "«El personal eventual» altera el término que delimita la respuesta; la formulación del artículo 28 es «Los funcionarios de carrera».",
        "d": "El artículo 28 sí aporta una respuesta válida: «Los funcionarios de carrera»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "Es personal laboral al servicio de las administraciones públicas vascas el que en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, desempeña puestos de trabajo o plazas dotadas presupuestariamente. La categoría que completa la definición es «Contrato de trabajo formalizado por escrito presta servicios retribuidos por las Administraciones Públicas Vascas».",
      "descartes": {
        "b": "«Contrato de trabajo formalizado por escrito o de forma verbal presta servicios retribuidos por las Administraciones Públicas Vascas» regula una posibilidad diferente; en este caso, el artículo 29 establece «Contrato de trabajo formalizado por escrito presta servicios retribuidos por las Administraciones Públicas Vascas».",
        "c": "«Nombramiento» altera el término que delimita la respuesta; la formulación del artículo 29 es «Contrato de trabajo formalizado por escrito».",
        "d": "El artículo 29 sí regula la cuestión y ofrece una respuesta concreta: «Contrato de trabajo formalizado por escrito presta servicios retribuidos por las Administraciones Públicas Vascas»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Es personal laboral al servicio de las administraciones públicas vascas el que en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, desempeña puestos de trabajo o plazas dotadas presupuestariamente. La formulación que conserva ese alcance es «Cualquiera de las modalidades de contratación de personal previstas en la legislación laboral».",
      "descartes": {
        "b": "«Las modalidades de contratación de personal de fijo o indefinido, pero no las restantes previstas en la legislación laboral» regula una posibilidad diferente; en este caso, el artículo 29 establece «Cualquiera de las modalidades de contratación de personal previstas en la legislación laboral».",
        "c": "«reguladas en el derecho administrativo» altera el régimen jurídico aplicable; la formulación del artículo 29 es «de personal previstas en la legislación laboral».",
        "d": "El artículo 29 sí aporta una respuesta válida: «Cualquiera de las modalidades de contratación de personal previstas en la legislación laboral»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El artículo 28 incluye los supuestos enumerados: «En supuesto de reducción de jornada»; «En supuesto de acciones formativas del personal funcionario»; «En supuestos de ausencia parcial». Deben considerarse conjuntamente.",
      "descartes": {
        "a": "«En supuesto de reducción de jornada» es un supuesto válido, pero no agota la lista: también deben incluirse «En supuesto de acciones formativas del personal funcionario» y «En supuestos de ausencia parcial».",
        "b": "La norma contempla «En supuesto de acciones formativas del personal funcionario», aunque marcarla sola dejaría fuera «En supuesto de reducción de jornada» y «En supuestos de ausencia parcial».",
        "c": "Este caso forma parte de la enumeración, pero la respuesta completa debe sumarlo a «En supuesto de reducción de jornada» y «En supuesto de acciones formativas del personal funcionario»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "Es personal eventual el que, en virtud de nombramiento y con carácter no permanente, realiza exclusivamente funciones calificadas de modo expreso como de confianza o asesoramiento especial, siendo retribuido con cargo a los créditos presupuestarios consignados para este fin.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 30 exige «nombramiento», no «contrato».",
        "b": "La alternativa invierte o absolutiza la regla: el artículo 30 establece «nombramiento y con carácter no», no «contrato y con carácter».",
        "d": "El artículo 30 sí aporta una respuesta válida: «En virtud de nombramiento y con carácter no permanente desempeña funciones expresamente calificadas como de confianza o asesoramiento especial»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 30 recoge tanto «Su propia normativa» como «El principio de economía del gasto público». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Su propia normativa» es cierta, pero no basta por sí sola: «El principio de economía del gasto público» también está prevista.",
        "b": "Elegir solo «El principio de economía del gasto público» dejaría incompleta la respuesta, porque también se cumple «Su propia normativa».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna de las respuestas es correcta» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 30 recoge tanto «Los puestos de trabajo del personal eventual» como «Sus retribuciones». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Los puestos de trabajo del personal eventual» es cierta, pero no basta por sí sola: «Sus retribuciones» también está prevista.",
        "b": "Elegir solo «Sus retribuciones» dejaría incompleta la respuesta, porque también se cumple «Los puestos de trabajo del personal eventual».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna respuesta es correcta porque la relación de puestos de trabajo no recoge al personal eventual» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 30 recoge tanto «Los puestos de personal eventual» como «Las condiciones retributivas». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Los puestos de personal eventual» es cierta, pero no basta por sí sola: «Las condiciones retributivas» también está prevista.",
        "b": "Elegir solo «Las condiciones retributivas» dejaría incompleta la respuesta, porque también se cumple «Los puestos de personal eventual».",
        "d": "El artículo 30 sí respalda «Ambas respuestas son correctas»; por eso no procede negar que exista una respuesta válida."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El nombramiento y el cese del personal eventual serán libres. El cese tendrá lugar, en todo caso, cuando se produzca el de la autoridad a la que preste su función de confianza o de asesoramiento.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 30 exige «Libre», no «Por concurso».",
        "c": "«De libre designación» altera el término que delimita la respuesta; la formulación del artículo 30 es «Libre».",
        "d": "El artículo 30 sí aporta una respuesta válida: «Libre»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 30 recoge «La autoridad a la que preste la función de confianza o asesoramiento» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "El cese no se vincula necesariamente con quien efectuó el nombramiento, sino con la autoridad para la que se realizan las funciones de confianza o asesoramiento.",
        "c": "El artículo 30 sí regula la cuestión y ofrece una respuesta concreta: «La autoridad a la que preste la función de confianza o asesoramiento».",
        "d": "No queda a elección de cada administración: el propio artículo 30 determina cuándo debe producirse el cese."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 30 contempla «El acceso a la Función Pública» y «La promoción interna»; la respuesta solo queda completa al reunir ambas afirmaciones.",
      "descartes": {
        "a": "«El acceso a la Función Pública» es correcta, pero incompleta: también debe incluirse «La promoción interna».",
        "b": "«La promoción interna» es correcta, pero incompleta: también debe incluirse «El acceso a la Función Pública».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna respuesta es correcta, porque puede constituir mérito para ambas cosas» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Al personal eventual, en lo que sea adecuado a la naturaleza de su condición, le será aplicable el régimen general del personal funcionario de carrera.",
      "descartes": {
        "b": "La diferencia relevante está en «El personal laboral»: el artículo 30 emplea «Los funcionarios de carrera» y ese matiz cambia el alcance de la regla.",
        "c": "«Ninguna es correcta» no procede, porque el artículo 30 respalda «Los funcionarios de carrera».",
        "d": "La alternativa modifica el término que delimita la respuesta: el artículo 30 exige «Los funcionarios de carrera», no «Las respuestas a y b son correctas»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "Los órganos de gobierno de las administraciones públicas vascas podrán aprobar la ejecución de programas de carácter temporal, siempre que las tareas vinculadas a dichos programas no puedan ser atendidas por el personal existente y se trate de actividades no habituales o del lanzamiento de nuevas actividades no estructurales de la Administración.",
      "descartes": {
        "b": "«Las tareas vinculadas a dichos programas pueden ser atendidas por el personal existente» regula una posibilidad diferente; en este caso, el artículo 28 establece «Los órganos de gobierno de las administraciones públicas vascas podrán aprobar la ejecución de programas de carácter temporal».",
        "c": "La alternativa añade o cambia una condición que el artículo 28 no contempla. La formulación aplicable es «Los órganos de gobierno de las administraciones públicas vascas podrán aprobar la ejecución de programas de carácter temporal»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 28 fija para los programas temporales una duración general máxima de tres años, prorrogable por necesidad justificada hasta otro año.",
      "descartes": {
        "a": "El artículo 28 fija «Tres años,»; «Un año,» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 28 fija «Tres»; «Dos» altera el plazo, la cifra o la mayoría exigida.",
        "d": "El artículo 28 fija «Tres»; «Cuatro» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "La prórroga exige informe favorable de los órganos competentes en hacienda y empleo público, además de audiencia a la representación del personal. Las tres menciones son necesarias.",
      "descartes": {
        "a": "El informe de hacienda es necesario, pero debe concurrir también el de empleo público y la audiencia a la representación del personal.",
        "b": "El informe de empleo público forma parte del trámite, aunque no sustituye al de hacienda ni a la audiencia de la representación del personal.",
        "c": "La audiencia a la representación del personal también se exige, junto con los dos informes favorables."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "El artículo 29 recoge tanto «Principios constitucionales de igualdad, mérito y capacidad» como «Principios de publicidad y libre concurrencia». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Principios constitucionales de igualdad, mérito y capacidad» es cierta, pero no basta por sí sola: «Principios de publicidad y libre concurrencia» también está prevista.",
        "b": "Elegir solo «Principios de publicidad y libre concurrencia» dejaría incompleta la respuesta, porque también se cumple «Principios constitucionales de igualdad, mérito y capacidad».",
        "d": "La teoría admite las afirmaciones enumeradas; «Ninguna es correcta porque el personal laboral no es seleccionado por procesos selectivos» las descartaría sin fundamento."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "El artículo 30 incluye los supuestos enumerados: «El Lehendakari, consejero o consejera, presidente del Tribunal Vasco de Cuentas Públicas o rector o rectora de la UPV»; «El diputado o diputada general y diputados o diputadas forales»; «El alcalde o alcaldesa». Deben considerarse conjuntamente.",
      "descartes": {
        "a": "«El Lehendakari, consejero o consejera, presidente del Tribunal Vasco de Cuentas Públicas o rector o rectora de la UPV» es un supuesto válido, pero no agota la lista: también deben incluirse «El diputado o diputada general y diputados o diputadas forales» y «El alcalde o alcaldesa».",
        "b": "La norma contempla «El diputado o diputada general y diputados o diputadas forales», aunque marcarla sola dejaría fuera «El Lehendakari, consejero o consejera, presidente del Tribunal Vasco de Cuentas Públicas o rector o rectora de la…» y «El alcalde o alcaldesa».",
        "c": "Este caso forma parte de la enumeración, pero la respuesta completa debe sumarlo a «El Lehendakari, consejero o consejera, presidente del Tribunal Vasco de Cuentas Públicas o rector o rectora de la…» y «El diputado o diputada general y diputados o diputadas forales»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "El artículo 28.2.b contempla el reingreso o la reasignación del personal funcionario de carrera sin derecho a reserva del puesto. Se conserva la opción A registrada por el test, aunque utiliza la condición contraria a la teoría.",
      "descartes": {
        "b": "Esta opción sí coincide con el artículo 28.2.b, que habla expresamente de personal sin derecho a reserva; por eso evidencia la discrepancia de la clave almacenada.",
        "c": "La creación del puesto no figura entre las causas de cese enumeradas en el artículo 28.",
        "d": "No pueden ser correctas todas las opciones: la creación del puesto no es una causa de cese y las opciones A y B se contradicen entre sí."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "La solución del test no coincide con la teoría",
        "texto": "La solución registrada habla de reingreso con derecho de reserva, pero el artículo 28.2.b establece el reingreso o la reasignación sin derecho a reserva del puesto de trabajo. Se mantiene la clave original sin modificarla."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "El artículo 28 incluye los supuestos enumerados: «Por la provisión reglamentaria del puesto de trabajo mediante OPE»; «Por la provisión reglamentaria por medio de alguno de los procedimientos de movilidad del personal funcionario legalmente establecidos»; «Por la adscripción provisional de funcionario de carrera e incumplimiento de los requisitos del puesto». Deben considerarse conjuntamente.",
      "descartes": {
        "a": "«Por la provisión reglamentaria del puesto de trabajo mediante OPE» es un supuesto válido, pero no agota la lista: también deben incluirse «Por la provisión reglamentaria por medio de alguno de los procedimientos de movilidad del personal funcionario leg…» y «Por la adscripción provisional de funcionario de carrera e incumplimiento de los requisitos del puesto».",
        "b": "La norma contempla «Por la provisión reglamentaria por medio de alguno de los procedimientos de movilidad del personal funcionario legalmente establecidos», aunque marcarla sola dejaría fuera «Por la provisión reglamentaria del puesto de trabajo mediante OPE» y «Por la adscripción provisional de funcionario de carrera e incumplimiento de los requisitos del puesto».",
        "c": "Este caso forma parte de la enumeración, pero la respuesta completa debe sumarlo a «Por la provisión reglamentaria del puesto de trabajo mediante OPE» y «Por la provisión reglamentaria por medio de alguno de los procedimientos de movilidad del personal funcionario leg…»."
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
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 29",
    "articulos": [
      29
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 29",
    "articulos": [
      29
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "27": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 29",
    "articulos": [
      29
    ]
  },
  "30": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "31": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "32": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  }
},
});
