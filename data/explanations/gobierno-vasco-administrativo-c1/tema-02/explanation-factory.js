const theoryRules = Object.freeze({
  "titulo-viii": {
    label: "el Título VIII de la Constitución",
    rule:
      "regula la organización territorial del Estado y se divide en tres capítulos; el segundo está dedicado a la Administración Local",
  },
  "articulo-137": {
    label: "el artículo 137",
    rule:
      "el Estado se organiza en municipios, provincias y las comunidades autónomas que se constituyan, todas ellas con autonomía para gestionar sus intereses",
  },
  "articulo-138": {
    label: "el artículo 138",
    rule:
      "el Estado garantiza la solidaridad, vela por un equilibrio económico adecuado y justo y atiende especialmente al hecho insular, sin admitir privilegios entre Estatutos",
  },
  "articulo-139": {
    label: "el artículo 139",
    rule:
      "todos los españoles tienen los mismos derechos y obligaciones en el territorio y ninguna autoridad puede obstaculizar la circulación o el establecimiento de personas ni la circulación de bienes",
  },
  "articulo-140": {
    label: "el artículo 140",
    rule:
      "garantiza la autonomía y la personalidad jurídica plena de los municipios, atribuye su gobierno a los Ayuntamientos y remite a la ley el régimen de concejo abierto",
  },
  "articulo-141": {
    label: "el artículo 141",
    rule:
      "la provincia es una entidad local con personalidad jurídica propia, formada por municipios y administrada por Diputaciones u otras corporaciones representativas; las islas cuentan con Cabildos o Consejos",
  },
  "articulo-142": {
    label: "el artículo 142",
    rule:
      "las Haciendas locales deben disponer de medios suficientes y se nutren principalmente de tributos propios y de la participación en los del Estado y las comunidades autónomas",
  },
  "articulo-143": {
    label: "el artículo 143",
    rule:
      "determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años",
  },
  "articulo-144": {
    label: "el artículo 144",
    rule:
      "permite a las Cortes Generales actuar mediante ley orgánica, por interés nacional, respecto de territorios provinciales sin las condiciones ordinarias, territorios no integrados en provincias o la sustitución de la iniciativa local",
  },
  "articulo-145": {
    label: "el artículo 145",
    rule:
      "prohíbe la federación de comunidades autónomas, somete los convenios de servicios propios a comunicación y exige autorización de las Cortes para los demás acuerdos de cooperación",
  },
  "articulo-146": {
    label: "el artículo 146",
    rule:
      "el proyecto de Estatuto se elabora en una asamblea formada por representantes provinciales y parlamentarios y se eleva a las Cortes Generales para tramitarlo como ley",
  },
  "articulo-147": {
    label: "el artículo 147",
    rule:
      "los Estatutos son la norma institucional básica de cada comunidad, forman parte del ordenamiento estatal, tienen un contenido mínimo y su reforma requiere aprobación mediante ley orgánica",
  },
  "articulo-148": {
    label: "el artículo 148",
    rule:
      "incluye esta materia entre las competencias que las comunidades autónomas pueden asumir en sus Estatutos",
  },
  "articulo-149": {
    label: "el artículo 149",
    rule:
      "reserva esta materia a la competencia exclusiva del Estado",
  },
  "articulo-149-2": {
    label: "el artículo 149.2",
    rule:
      "considera el servicio de la cultura un deber y una atribución esencial del Estado, sin perjuicio de las competencias autonómicas, y le encarga facilitar la comunicación cultural",
  },
  "articulo-149-3": {
    label: "el artículo 149.3",
    rule:
      "atribuye al Estado las materias no asumidas por los Estatutos, establece la prevalencia de las normas estatales fuera de la competencia autonómica exclusiva y declara su carácter supletorio",
  },
  "articulo-150": {
    label: "el artículo 150",
    rule:
      "distingue las leyes marco, las leyes orgánicas de transferencia o delegación y las leyes de armonización, cada una con su finalidad, control y requisitos propios",
  },
  "articulo-151": {
    label: "el artículo 151",
    rule:
      "regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey",
  },
  "articulo-152": {
    label: "el artículo 152",
    rule:
      "configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento",
  },
  "articulo-153": {
    label: "el artículo 153",
    rule:
      "distribuye el control autonómico entre el Tribunal Constitucional, el Gobierno previo dictamen del Consejo de Estado, la jurisdicción contencioso-administrativa y el Tribunal de Cuentas",
  },
  "articulo-154": {
    label: "el artículo 154",
    rule:
      "atribuye al delegado del Gobierno la dirección de la Administración estatal en la comunidad autónoma y su coordinación con la administración autonómica cuando proceda",
  },
  "articulo-155": {
    label: "el artículo 155",
    rule:
      "permite al Gobierno adoptar medidas ante incumplimientos autonómicos graves, tras requerimiento y con aprobación del Senado, e impartir instrucciones a las autoridades autonómicas",
  },
  "articulo-157": {
    label: "el artículo 157",
    rule:
      "enumera los recursos financieros de las comunidades autónomas y les impide establecer tributos extraterritoriales u obstáculos a la libre circulación de mercancías o servicios",
  },
  "articulo-158": {
    label: "el artículo 158",
    rule:
      "permite asignaciones estatales vinculadas a servicios y crea un Fondo de Compensación para corregir desequilibrios y hacer efectivo el principio de solidaridad",
  },
  "disposicion-transitoria-segunda": {
    label: "la disposición transitoria segunda",
    rule:
      "permite iniciar inmediatamente el procedimiento reforzado a los territorios que cumplan sus antecedentes de autonomía y exige el acuerdo por mayoría absoluta de sus órganos preautonómicos colegiados",
  },
});

export function referencesFromRanges(ranges) {
  const references = {};
  ranges.forEach(({ from, to = from, reference }) => {
    for (let questionId = from; questionId <= to; questionId += 1) {
      references[questionId] = reference;
    }
  });
  return references;
}

function naturalJustification(correctOption, source, index) {
  const introductions = [
    `La clave está en ${source.label}:`,
    `Aquí conviene recordar lo que dispone ${source.label}:`,
    `En este caso, ${source.label} da la pauta:`,
  ];
  return `${introductions[index % introductions.length]} ${source.rule}. En esta pregunta, la opción que recoge esa regla es «${cleanOptionText(correctOption.texto)}».`;
}

function cleanOptionText(text) {
  return text.trim().replace(/[.;:]$/, "");
}

function naturalDiscard(question, option, correctOption, source) {
  const prompt = question.enunciado.toLocaleLowerCase("es");
  const discarded = cleanOptionText(option.texto);
  const correct = cleanOptionText(correctOption.texto);
  const asksForIncorrect = /incorrect|no es correcta|no corresponde|excepto/.test(prompt);
  const correctCombinesOptions = /^(ambas|todas)/i.test(correct);
  const discardedCombinesOptions = /^(ambas|todas)/i.test(discarded);
  const asksForAmount =
    /años|meses|plazo|mayoría|porcentaje|partes|número|cuánt/.test(prompt) ||
    (/\d/.test(discarded) && /\d/.test(correct));
  const asksForAttribution =
    /quién|quienes|por quien|corresponde|compete|garantiz|atribu|ejerce|dirige|administra|elabora|aprueba|autoriza|control/.test(
      prompt,
    );

  if (asksForIncorrect) {
    return `Esta afirmación sí es compatible con ${source.label}; por eso no es la opción que debe señalarse como incorrecta.`;
  }
  if (correctCombinesOptions) {
    return `«${discarded}» recoge solo una parte de la respuesta. Como las afirmaciones planteadas son compatibles, debe elegirse «${correct}».`;
  }
  if (discardedCombinesOptions) {
    return `No pueden aceptarse todas las afirmaciones: la que se ajusta a ${source.label} es «${correct}».`;
  }
  if (asksForAmount) {
    return `El dato «${discarded}» no coincide con el establecido en ${source.label}; el valor correcto es «${correct}».`;
  }
  if (asksForAttribution) {
    return `Esta opción atribuye la respuesta a «${discarded}», pero ${source.label} señala «${correct}».`;
  }
  return `«${discarded}» altera la formulación aplicable. La opción que se ajusta a ${source.label} es «${correct}».`;
}

export function createTheme02Explanations(test, references) {
  return {
    schemaVersion: 1,
    testId: test.id,
    preguntas: test.preguntas.map((question, questionIndex) => {
      const reference = references[question.id];
      const source = theoryRules[reference];
      if (!source) {
        throw new Error(`La pregunta ${question.id} de ${test.id} no tiene referencia teórica.`);
      }
      const correctOption = question.opciones.find(
        (option) => option.id === question.respuestaCorrecta,
      );
      const discardedOptions = question.opciones.filter(
        (option) => option.id !== question.respuestaCorrecta,
      );
      return {
        preguntaId: question.id,
        justificacion: naturalJustification(
          correctOption,
          source,
          questionIndex,
        ),
        descartes: Object.fromEntries(
          discardedOptions.map((option) => [
            option.id,
            naturalDiscard(
              question,
              option,
              correctOption,
              source,
            ),
          ]),
        ),
      };
    }),
  };
}
