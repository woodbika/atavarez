function section(id, title, order) {
  return Object.freeze({ id, title, order });
}

export const GOBIERNO_VASCO_THEME_CATEGORIES = Object.freeze([
  "Generales",
  "Presupuesto y contabilidad",
  "Personal",
  "Organización y gestión administrativa",
  "Atención a la ciudadanía",
  "Biblioteca",
  "Procedimiento administrativo",
]);

export function gobiernoVascoThemeCategory(themeId) {
  const number = Number(themeId);
  if (number >= 1 && number <= 14) return GOBIERNO_VASCO_THEME_CATEGORIES[0];
  if (number >= 15 && number <= 16) return GOBIERNO_VASCO_THEME_CATEGORIES[1];
  if (number >= 17 && number <= 18) return GOBIERNO_VASCO_THEME_CATEGORIES[2];
  if (number >= 19 && number <= 22) return GOBIERNO_VASCO_THEME_CATEGORIES[3];
  if (number >= 23 && number <= 26) return GOBIERNO_VASCO_THEME_CATEGORIES[4];
  if (number === 27) return GOBIERNO_VASCO_THEME_CATEGORIES[5];
  if (number >= 28 && number <= 34) return GOBIERNO_VASCO_THEME_CATEGORIES[6];
  return undefined;
}

function gobiernoVascoSection(id, title, order) {
  return Object.freeze({
    id,
    title,
    order,
    category: gobiernoVascoThemeCategory(id),
  });
}

export const GOBIERNO_VASCO_ADMINISTRATIVO_C1_SECTIONS = Object.freeze([
  gobiernoVascoSection("01", "La Constitución Española de 1978", 1),
  gobiernoVascoSection(
    "02",
    "La organización territorial del Estado. Aspectos generales. Las comunidades autónomas, su organización y competencia. Los Estatutos de Autonomía.",
    2,
  ),
  gobiernoVascoSection(
    "03",
    "El espacio europeo: historia de la construcción europea. Instituciones europeas y sus competencias.",
    3,
  ),
  gobiernoVascoSection(
    "04",
    "Organización política y administrativa de la Comunidad Autónoma del País Vasco: principios generales. Aspectos generales de la distribución de competencias entre el Estado y la Comunidad Autónoma del País Vasco. El Parlamento Vasco. El Gobierno Vasco y el Lehendakari.",
    4,
  ),
  gobiernoVascoSection(
    "09",
    "Ley 11/2022, de 1 de diciembre, de Empleo Público Vasco. Personal al servicio de las administraciones públicas vascas: clases de personal empleado público, derechos de este personal, principios que inspiran el código ético y de conducta del mismo, y régimen disciplinario.",
    5,
  ),
  gobiernoVascoSection(
    "17",
    "Estructura y organización del empleo en las administraciones públicas vascas. Relación de puestos de trabajo. Clasificación en Cuerpos y Escalas. Ley 11/2022, de 1 de diciembre, de Empleo Público Vasco.",
    6,
  ),
  gobiernoVascoSection(
    "18",
    "Acceso al empleo público y la provisión de puestos de trabajo en las administraciones públicas vascas. Clasificación en Cuerpos y Escalas. Ley 11/2022, de 1 de diciembre, de Empleo Público Vasco.",
    7,
  ),
  gobiernoVascoSection(
    "28",
    "Fuentes del derecho administrativo. La ley: concepto y clases. El reglamento: titularidad de la potestad reglamentaria y sus límites. La jerarquía normativa. El principio de legalidad en la administración pública.",
    8,
  ),
  gobiernoVascoSection(
    "29",
    "La organización administrativa: los órganos administrativos. Órganos colegiados. Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público.",
    9,
  ),
  gobiernoVascoSection(
    "30",
    "El acto administrativo: concepto, producción, contenido, motivación y forma. La eficacia del acto administrativo. Silencio administrativo. Nulidad y anulabilidad. Ley 39/2015, de 1 de octubre, de Procedimiento Administrativo Común de las Administraciones Públicas.",
    10,
  ),
  gobiernoVascoSection(
    "31",
    "Procedimiento administrativo: principios generales. Personas interesadas. Abstención y recusación. Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público.",
    11,
  ),
  gobiernoVascoSection(
    "32",
    "Fases del procedimiento administrativo (Artículos del 53 al 96).",
    12,
  ),
  gobiernoVascoSection(
    "33",
    "Ley 39/2015, de 1 de octubre, de Procedimiento Administrativo Común de las Administraciones Públicas. Revisión de los actos: recursos administrativos, revisión de oficio y revocación. Rectificación de errores materiales.",
    13,
  ),
  gobiernoVascoSection(
    "34",
    "Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público. La responsabilidad de las Administraciones Públicas, de sus autoridades y su personal (Artículos del 32 al 37).",
    14,
  ),
]);

export const OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1_SECTIONS =
  Object.freeze([
    section("comun", "Temario común", 1),
    section("especifico", "Temario específico", 2),
  ]);
