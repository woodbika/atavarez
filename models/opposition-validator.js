function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateOppositions(oppositions) {
  if (!Array.isArray(oppositions) || oppositions.length === 0) {
    return ["oppositions: debe contener al menos una oposición."];
  }

  const errors = [];
  const knownIds = new Set();
  oppositions.forEach((opposition, index) => {
    const path = `oppositions[${index}]`;
    if (!opposition || typeof opposition !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    ["id", "administration", "title", "group", "scale"].forEach((field) => {
      if (!isNonEmptyString(opposition[field])) {
        errors.push(`${path}.${field}: debe contener texto.`);
      }
    });
    if (!["available", "coming-soon"].includes(opposition.status)) {
      errors.push(`${path}.status: debe ser available o coming-soon.`);
    }
    const legacyIds = Array.isArray(opposition.legacyIds) ? opposition.legacyIds : [];
    const identifiers = [opposition.id, ...legacyIds];
    identifiers.forEach((id) => {
      if (!isNonEmptyString(id)) {
        errors.push(`${path}.legacyIds: solo puede contener identificadores válidos.`);
      } else if (knownIds.has(id)) {
        errors.push(`${path}: el identificador ${id} está duplicado.`);
      } else {
        knownIds.add(id);
      }
    });
    if (opposition.legacyIds !== undefined && !Array.isArray(opposition.legacyIds)) {
      errors.push(`${path}.legacyIds: debe ser una lista.`);
    }
    ["themes", "resources"].forEach((cover) => {
      const filename = opposition.covers?.[cover];
      const isRequired = opposition.status === "available";
      if (
        (isRequired || filename !== undefined) &&
        (!isNonEmptyString(filename) || !/^[a-zA-Z0-9._-]+$/.test(filename))
      ) {
        errors.push(`${path}.covers.${cover}: debe ser un nombre de archivo seguro.`);
      }
    });
    if (opposition.sections !== undefined) {
      if (!Array.isArray(opposition.sections) || opposition.sections.length === 0) {
        errors.push(`${path}.sections: debe contener al menos un apartado.`);
      } else {
        const sectionIds = new Set();
        opposition.sections.forEach((section, sectionIndex) => {
          const sectionPath = `${path}.sections[${sectionIndex}]`;
          if (!isNonEmptyString(section?.id)) {
            errors.push(`${sectionPath}.id: debe contener texto.`);
          } else if (sectionIds.has(section.id)) {
            errors.push(`${sectionPath}.id: está duplicado.`);
          } else {
            sectionIds.add(section.id);
          }
          if (!isNonEmptyString(section?.title)) {
            errors.push(`${sectionPath}.title: debe contener texto.`);
          }
          if (!Number.isInteger(section?.order)) {
            errors.push(`${sectionPath}.order: debe ser un entero.`);
          }
        });
      }
    }
    if (opposition.navigation !== undefined) {
      [
        "collectionSingular",
        "collectionPlural",
        "collectionTitle",
        "searchPlaceholder",
        "cardAction",
        "backLabel",
        "resourceBackLabel",
      ].forEach((field) => {
        if (!isNonEmptyString(opposition.navigation[field])) {
          errors.push(`${path}.navigation.${field}: debe contener texto.`);
        }
      });
      if (typeof opposition.navigation.showUnitNumber !== "boolean") {
        errors.push(`${path}.navigation.showUnitNumber: debe ser booleano.`);
      }
    }
  });
  return errors;
}

export function assertValidOppositions(oppositions) {
  const errors = validateOppositions(oppositions);
  if (!errors.length) return;
  throw new AggregateError(
    errors.map((message) => new Error(message)),
    "Catálogo de oposiciones no válido",
  );
}
