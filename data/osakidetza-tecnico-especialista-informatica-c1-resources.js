import { OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1 } from "./oppositions.js";
import {
  osakidetzaCommonQuestionBank,
  osakidetzaSpecificQuestionBank,
} from "./question-banks/index.js";
import { createOppositionResourceFactory } from "./resource-factory.js";
import {
  osakidetzaCommonTestPresets,
  osakidetzaSpecificTestPresets,
} from "./test-presets/osakidetza-tecnico-especialista-informatica-c1.js";

const { testPresetResource } = createOppositionResourceFactory(
  OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1,
);

export const osakidetzaTecnicoEspecialistaInformaticaC1Resources =
  Object.freeze(
    [
      [osakidetzaCommonTestPresets, osakidetzaCommonQuestionBank],
      [osakidetzaSpecificTestPresets, osakidetzaSpecificQuestionBank],
    ].flatMap(([presets, questionBank]) =>
      presets.map((preset) =>
        Object.freeze(testPresetResource(preset, questionBank)),
      )
    ),
  );
