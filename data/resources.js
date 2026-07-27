import { gobiernoVascoAdministrativoC1Resources } from "./gobierno-vasco-administrativo-c1-resources.js";
import { osakidetzaTecnicoEspecialistaInformaticaC1Resources } from "./osakidetza-tecnico-especialista-informatica-c1-resources.js";

// Agregador del catálogo. Cada oposición mantiene su registro en un módulo independiente.
export const resources = Object.freeze([
  ...gobiernoVascoAdministrativoC1Resources,
  ...osakidetzaTecnicoEspecialistaInformaticaC1Resources,
]);
