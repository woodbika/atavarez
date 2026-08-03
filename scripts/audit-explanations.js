import { resources } from "../data/resources.js";
import { auditExplanations } from "../models/explanation-auditor.js";

const { errors, warnings, stats } = auditExplanations(resources);

warnings.forEach((warning) => console.warn(`Aviso: ${warning}`));

if (errors.length > 0) {
  console.error(`La auditoría de explicaciones ha detectado ${errors.length} error(es):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(
    `${stats.tests} tests y ${stats.questions} explicaciones auditadas: ` +
      `${stats.directReferences} referencias directas, ` +
      `${stats.contextualReferences} contextuales y ` +
      `${stats.theoryDiscrepancies} discrepancias documentadas.`,
  );
}
