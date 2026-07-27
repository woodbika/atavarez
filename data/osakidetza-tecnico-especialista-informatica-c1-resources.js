import { OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1 } from "./oppositions.js";
import { osakidetzaSpecificQuestionBank } from "./question-banks/index.js";
import { createOppositionResourceFactory } from "./resource-factory.js";
import { osakidetzaSpecificTestPresets } from "./test-presets/osakidetza-tecnico-especialista-informatica-c1.js";

const { testPresetResource } = createOppositionResourceFactory(
  OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1,
);

export const osakidetzaTecnicoEspecialistaInformaticaC1Resources =
  Object.freeze(
    osakidetzaSpecificTestPresets.map((preset) =>
      Object.freeze(testPresetResource(preset, osakidetzaSpecificQuestionBank)),
    ),
  );
