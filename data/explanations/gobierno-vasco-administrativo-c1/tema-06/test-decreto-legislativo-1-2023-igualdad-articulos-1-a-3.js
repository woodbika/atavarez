import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-decreto-legislativo-1-2023-igualdad-articulos-1-a-3",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 1 reúne dos objetivos: fijar los principios de actuación pública y regular medidas que garanticen la igualdad. Por eso deben aceptarse ambas formulaciones.",
      descartes: {
        a: "La definición de principios es correcta, pero deja fuera las medidas de promoción y garantía que también integran el objeto legal.",
        b: "La regulación de medidas forma parte del objeto, aunque no sustituye al establecimiento de los principios generales de actuación.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El artículo 1 dirige expresamente el empoderamiento, la autonomía y el fortalecimiento de la posición social, económica y política a las mujeres.",
      descartes: {
        a: "El precepto no atribuye este objetivo específico a los hombres, sino que lo vincula a la desigualdad estructural que afecta a las mujeres.",
        c: "Aunque la igualdad beneficia al conjunto de la sociedad, esta medida concreta tiene como destinatarias expresas a las mujeres.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La finalidad inmediata comprende eliminar la desigualdad estructural y todas las discriminaciones por sexo, incluida la violencia machista. Las dos opciones completan una misma regla.",
      descartes: {
        a: "La eliminación de la desigualdad y de la discriminación es cierta, pero la ley precisa que dentro de ellas se incluye la violencia machista.",
        b: "La violencia machista está incluida expresamente, aunque forma parte de un objetivo más amplio contra la desigualdad estructural y toda discriminación sexual.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El fin último combina una sociedad igualitaria y libre de violencia con la libertad personal sin roles tradicionales de género. Ambas descripciones proceden del artículo 1.",
      descartes: {
        a: "La libertad para desarrollar capacidades y decidir es uno de los fines, pero falta la eliminación de las limitaciones impuestas por roles de género.",
        b: "Superar los roles tradicionales y valorar por igual las necesidades es correcto, aunque también se persigue una sociedad libre de violencia machista.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El artículo 2.1 fija como ámbito general de aplicación todas las administraciones públicas vascas, sin perjuicio de las salvedades previstas en la propia ley.",
      descartes: {
        b: "Los poderes públicos y ciertas entidades privadas quedan sujetos solo a los preceptos y condiciones que el artículo 2 especifica, no a toda la ley con carácter general.",
        c: "El sistema universitario y el sector privado se someten a la ley en los términos concretos que esta establezca, no mediante la regla general del apartado primero.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La solución registrada B se conserva, pero el artículo 2 no extiende los artículos 16 y 18.4 al conjunto descrito en esa opción; su enumeración de preceptos aplicables es distinta.",
      descartes: {
        a: "Todas las administraciones públicas vascas sí quedan dentro del ámbito general, pero el enunciado pregunta por una extensión concreta que no aparece así formulada.",
        c: "El sistema universitario y el sector privado se rigen por las previsiones específicas de la ley, sin que el artículo 2 les asigne conjuntamente esos dos preceptos.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "El artículo 2.3 extiende a los poderes públicos los artículos 17, 18.1, 18.2, 18.3, 18.5 y otros preceptos, mientras que a determinadas entidades privadas les exige los principios del artículo 3 y los artículos 17 y 19.4. No respalda la referencia del enunciado a los artículos 16 y 18.4, aunque se mantiene la opción B almacenada.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El artículo 2.6 dispone que la ley se aplica al Sistema Universitario Vasco y al sector privado en los términos establecidos a lo largo de su articulado.",
      descartes: {
        a: "Las administraciones públicas vascas se encuentran en el ámbito general del artículo 2.1, que utiliza una formulación distinta de la preguntada.",
        b: "Los poderes públicos y entidades privadas vinculadas tienen reglas específicas en los apartados 3 a 5, no son la pareja identificada por el apartado 6.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La prohibición de discriminación directa o indirecta por razón de sexo define en el artículo 3.1 el principio de igualdad de trato.",
      descartes: {
        b: "La igualdad de oportunidades exige garantizar el ejercicio efectivo de derechos y el acceso real a recursos, no se limita a prohibir la discriminación.",
        c: "Integrar la perspectiva de género supone incorporar ese enfoque a todas las políticas y fases de actuación pública.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Hay discriminación directa cuando una persona recibe o puede recibir un trato menos favorable que otra comparable por su sexo o circunstancias ligadas a él.",
      descartes: {
        a: "La ley no utiliza «discriminación negativa» como categoría para este trato desfavorable individual basado en el sexo.",
        c: "La discriminación indirecta parte de una regla aparentemente neutra que perjudica en mayor proporción a un sexo, no de un trato directo menos favorable.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Sin perjuicio de su posible calificación penal, el artículo 3.1 considera el acoso sexual y el acoso por razón de sexo discriminación directa.",
      descartes: {
        a: "El precepto admite que pueda existir delito, pero no afirma que todo supuesto de acoso lo sea automáticamente; sí fija siempre su naturaleza discriminatoria.",
        c: "No pueden darse por ciertas ambas respuestas con carácter general, porque la tipificación penal depende del supuesto concreto.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Una regla aparentemente neutra que perjudica de forma desproporcionada a personas de un mismo sexo, sin justificación objetiva, constituye discriminación indirecta.",
      descartes: {
        a: "La expresión «discriminación negativa» no es la categoría jurídica definida para los efectos desproporcionados de una medida neutra.",
        b: "La discriminación directa requiere un trato menos favorable por razón de sexo; aquí el problema nace del impacto de una regla aparentemente neutral.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El trato diferente puede estar justificado cuando responde a una protección especial de los sexos por motivos biológicos, supuesto recogido expresamente en el artículo 3.1.c.",
      descartes: {
        a: "La acción positiva mencionada por la ley se dirige a las mujeres; la opción amplía indebidamente ese fundamento a mujeres y hombres.",
        c: "El precepto promueve la incorporación de los hombres al trabajo doméstico y de cuidados, no la de las mujeres como afirma esta alternativa.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "La garantía reforzada se refiere a mujeres o grupos de mujeres en quienes concurren otros factores capaces de producir discriminación múltiple.",
      descartes: {
        b: "El inciso concreto del artículo 3.1.c identifica a mujeres afectadas por factores adicionales, no formula esta garantía en favor de grupos de hombres.",
        c: "No se mencionan indistintamente ambos sexos: la previsión se vincula expresamente a las mujeres expuestas a discriminaciones concurrentes.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Adoptar medidas para que mujeres y hombres ejerzan efectivamente sus derechos en igualdad define el principio de igualdad de oportunidades del artículo 3.2.",
      descartes: {
        a: "La igualdad de trato prohíbe la discriminación; no describe por sí sola las medidas necesarias para lograr un ejercicio efectivo de derechos.",
        c: "La perspectiva de género integra sistemáticamente las diferencias en todas las políticas, mientras que la pregunta se centra en el acceso real a derechos.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "La igualdad de oportunidades abarca tanto las condiciones iniciales de acceso como las necesarias para ejercer y controlar de manera efectiva los recursos y beneficios.",
      descartes: {
        a: "Limitar el concepto al punto de partida deja fuera las condiciones posteriores de ejercicio y control efectivo que exige el artículo 3.2.",
        b: "El ejercicio y control son imprescindibles, pero la definición legal también comprende las condiciones de acceso inicial.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "La accesibilidad universal exige eliminar barreras y realizar ajustes razonables en recursos, servicios y procedimientos. Las dos medidas forman parte de la misma garantía.",
      descartes: {
        a: "Evitar que las barreras impidan los derechos es necesario, aunque la ley añade el deber de adoptar ajustes razonables.",
        b: "Los ajustes razonables completan la accesibilidad, pero no desplazan la obligación general de remover los obstáculos previstos por la legislación.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "El artículo 3.3 ordena integrar transversalmente la prevención, atención y erradicación de la violencia machista en las políticas públicas.",
      descartes: {
        b: "La ley califica esta violencia como la manifestación más extrema de la desigualdad, no como su única manifestación.",
        c: "La atención integral, recuperación y reparación se establece como prioridad; el verbo «procurar» rebaja esa obligación.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "El respeto a la diversidad comprende diferencias biológicas y también distintas condiciones de vida, aspiraciones y necesidades. Por ello las dos respuestas se complementan.",
      descartes: {
        a: "La biología es una dimensión contemplada, pero el principio no se agota en ella y atiende igualmente a circunstancias vitales y necesidades.",
        b: "Las condiciones de vida y aspiraciones están incluidas, junto con las diferencias biológicas que esta alternativa omite.",
      },
    },
    {
      preguntaId: 19,
      justificacion: "La diversidad debe respetarse tanto entre mujeres y hombres como dentro de cada uno de esos grupos. El artículo 3.4 contempla expresamente ambos planos.",
      descartes: {
        a: "Las diferencias entre los grupos son relevantes, aunque la ley exige observar también la pluralidad interna de cada colectivo.",
        b: "La diversidad dentro de los propios grupos no excluye las diferencias existentes entre mujeres y hombres consideradas conjuntamente.",
      },
    },
    {
      preguntaId: 20,
      justificacion: "Incorporar el objetivo de eliminar desigualdades y promover la igualdad en todas las políticas y acciones es integrar la perspectiva de género.",
      descartes: {
        a: "La igualdad de trato se articula mediante la prohibición de discriminación, no mediante la incorporación transversal del enfoque de género.",
        b: "La igualdad de oportunidades se ocupa del ejercicio real de derechos y recursos, mientras que aquí se pregunta por un método transversal de actuación.",
      },
    },
    {
      preguntaId: 21,
      justificacion: "La consideración sistemática de situaciones y necesidades distintas, con objetivos específicos en todas las fases de las políticas, define la perspectiva de género.",
      descartes: {
        a: "La igualdad de trato impide la discriminación directa e indirecta, pero no es la técnica de análisis sistemático descrita.",
        b: "La igualdad de oportunidades garantiza condiciones efectivas de acceso y control; la definición preguntada se refiere a integrar el enfoque de género.",
      },
    },
    {
      preguntaId: 22,
      justificacion: "Las medidas específicas y temporales destinadas a reducir desigualdades de hecho por razón de sexo reciben la denominación de acción positiva.",
      descartes: {
        a: "La acción directa es una competencia de ejecución autonómica definida en el artículo 4, no una medida temporal correctora de desigualdades.",
        c: "Acción positiva y acción directa tienen significados jurídicos distintos y no son expresiones intercambiables.",
      },
    },
    {
      preguntaId: 23,
      justificacion: "El artículo 3.7 identifica como estereotipo vigente la atribución a las mujeres de la responsabilidad del ámbito doméstico.",
      descartes: {
        b: "El rol tradicional asigna a los hombres el ámbito público, no la responsabilidad principal sobre el espacio doméstico.",
        c: "La ley parte precisamente de que esta asignación estereotipada persiste y ordena promover su eliminación.",
      },
    },
    {
      preguntaId: 24,
      justificacion: "La eliminación de estereotipos exige reconocer el trabajo doméstico y de cuidados y corregir la valoración desigual que alimenta la segregación laboral. Ambas medidas son legales.",
      descartes: {
        a: "El reconocimiento del cuidado es una medida expresa, pero el artículo incorpora además una actuación frente a la segregación horizontal en el empleo.",
        b: "Revisar la valoración desigual de los trabajos es correcto, aunque no elimina la obligación paralela de reconocer el trabajo doméstico y de cuidados.",
      },
    },
    {
      preguntaId: 25,
      justificacion: "La desigual valoración social y económica recae sobre el ámbito doméstico tradicionalmente asociado a las mujeres.",
      descartes: {
        a: "La ley asocia tradicionalmente el espacio público a los hombres, no a las mujeres como sostiene esta alternativa.",
        b: "El ámbito público vinculado a los hombres disfruta de mayor reconocimiento; el infravalorado es el doméstico y de cuidados.",
      },
    },
    {
      preguntaId: 26,
      justificacion: "La solución C se mantiene, aunque el artículo 3.9 respalda la erradicación de discriminaciones de la opción A y extiende la autonomía corporal a todas las personas, no solo a todas las mujeres como dice B.",
      descartes: {
        a: "Esta medida sí coincide con el deber de erradicar discriminaciones relacionadas con la identidad sexual o de género y la orientación sexual.",
        b: "El precepto asegura la autonomía y autodeterminación de todas las personas, con particular atención a las mujeres; la opción reduce indebidamente el sujeto.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "El artículo 3.9 confirma la opción A, pero formula la segunda obligación respecto de todas las personas, en particular las mujeres. La opción B dice «todas las mujeres» y no reproduce ese alcance, por lo que la teoría no permite considerar correctas ambas; se conserva, no obstante, la opción C registrada.",
      },
    },
    {
      preguntaId: 27,
      justificacion: "La ley exige una presencia equilibrada de mujeres y hombres con preparación adecuada en los ámbitos de toma de decisiones.",
      descartes: {
        a: "La representación equilibrada no impone una paridad exacta del 50 %, sino los umbrales definidos para cada tamaño de órgano.",
        c: "El principio busca equilibrio entre ambos sexos; no establece como regla general una mayoría femenina.",
      },
    },
    {
      preguntaId: 28,
      justificacion: "En los órganos pluripersonales de más de cuatro miembros, cada sexo debe alcanzar al menos el 40 % para que exista representación equilibrada.",
      descartes: {
        a: "El artículo no exige un reparto exacto al 50 %, sino un mínimo del 40 % para cada sexo.",
        b: "El umbral se aplica a las personas de cada sexo y no garantiza solo una cuota mínima de mujeres.",
      },
    },
    {
      preguntaId: 29,
      justificacion: "La representación equilibrada rige tanto para jurados, tribunales y otros órganos administrativos como para cargos y órganos de dirección del sector público vasco.",
      descartes: {
        a: "Los órganos administrativos pluripersonales están incluidos, pero no constituyen el único espacio de aplicación del principio.",
        b: "Los cargos y consejos del sector público también se someten al equilibrio, junto con jurados y tribunales de selección.",
      },
    },
    {
      preguntaId: 30,
      justificacion: "Puede exceptuarse el equilibrio si se demuestra objetivamente que no hay personas de un sexo con capacitación adecuada o que no pueden participar por causas justificadas.",
      descartes: {
        a: "La excepción atiende a la presencia de personas de cualquiera de los dos sexos en el sector y exige proporcionalidad; esta redacción la restringe solo a las mujeres.",
        b: "La sobrerrepresentación superior al 60 % solo se contempla para mujeres cuando corrige su desigualdad histórica, no indistintamente para hombres o mujeres.",
      },
    },
    {
      preguntaId: 31,
      justificacion: "Si la designación depende del cargo o de varias organizaciones, el equilibrio debe mantenerse dentro del grupo nombrado por cada institución, salvo excepción justificada.",
      descartes: {
        b: "La regla no calcula necesariamente el equilibrio sobre el conjunto del órgano, sino sobre las personas designadas por una misma institución.",
        c: "Sí existe una regla expresa para estas designaciones: conservar el criterio en cada grupo institucional.",
      },
    },
    {
      preguntaId: 32,
      justificacion: "La internacionalización comprende incorporar la perspectiva de género a la cooperación para el desarrollo y proyectar las políticas de igualdad fuera de Euskadi.",
      descartes: {
        a: "La cooperación para el desarrollo es una vertiente de la regla, pero falta la internacionalización de las propias políticas de igualdad.",
        b: "La proyección internacional es correcta, aunque se completa con la perspectiva de género en las políticas de cooperación.",
      },
    },
    {
      preguntaId: 33,
      justificacion: "Estas actuaciones persiguen intercambiar conocimiento y recursos y situar al País Vasco en la acción internacional por la igualdad y el empoderamiento. Las dos finalidades concurren.",
      descartes: {
        a: "Captar e intercambiar conocimiento y recursos es una finalidad expresa, pero no agota el posicionamiento internacional perseguido.",
        b: "El cumplimiento de la agenda global es otro objetivo, unido al intercambio de saberes y recursos que esta alternativa no menciona.",
      },
    },
    {
      preguntaId: 34,
      justificacion: "El empoderamiento es el proceso de conciencia y adquisición de capacidad, poder y control para decidir sobre la propia vida y transformar estructuras discriminatorias.",
      descartes: {
        a: "Los poderes públicos deben favorecer el empoderamiento considerando la diversidad de las mujeres, no una supuesta igualdad entre todas ellas.",
        c: "La primera afirmación sustituye la diversidad por igualdad interna y, por ello, impide considerar correctas ambas alternativas.",
      },
    },
    {
      preguntaId: 35,
      justificacion: "La implicación de los hombres exige concienciación, responsabilidad y rechazo de masculinidades no igualitarias, como refuerzo del empoderamiento femenino.",
      descartes: {
        b: "La participación masculina complementa y refuerza el trabajo prioritario de empoderamiento de las mujeres; no lo sustituye.",
        c: "La segunda afirmación invierte la relación de complemento prevista por la ley, de modo que no son correctas ambas.",
      },
    },
    {
      preguntaId: 36,
      justificacion: "La participación pública debe incluir a los grupos feministas y de mujeres, a los agentes sociales y a la ciudadanía en su conjunto.",
      descartes: {
        a: "Los grupos feministas y de mujeres son interlocutores expresos, aunque la participación se abre también a agentes sociales y ciudadanía.",
        b: "Los agentes sociales y la ciudadanía están incluidos, sin excluir por ello la intervención específica de grupos feministas y de mujeres.",
      },
    },
    {
      preguntaId: 37,
      justificacion: "El principio une la innovación y mejora continua de las políticas con la transparencia y rendición de cuentas sobre el uso de recursos públicos.",
      descartes: {
        a: "Fomentar la innovación es obligatorio, pero constituye solo una parte del principio junto con la responsabilidad ante la ciudadanía.",
        b: "La transparencia sobre la contribución de los recursos públicos también debe acompañarse de innovación y mejora continua.",
      },
    },
    {
      preguntaId: 38,
      justificacion: "La ley garantiza los derechos lingüísticos en formación, participación y sensibilización, y fomenta el euskera en actividades para personal y profesionales.",
      descartes: {
        a: "El mandato legal es garantizar los derechos lingüísticos y promover el uso del euskera; esta opción intercambia ambos verbos y sus objetos.",
        b: "Los servicios deben prestarse en la lengua cooficial elegida por la persona interesada, no necesariamente siempre en euskera.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-06-igualdad",
  references: Object.fromEntries(
    Array.from({ length: 38 }, (_, index) => [
      String(index + 1),
      articleReference(index < 4 ? 1 : index < 7 ? 2 : 3),
    ]),
  ),
});
