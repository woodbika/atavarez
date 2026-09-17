const PARAGRAPH_FIELDS = new Set([
  "introduccion",
  "introduccionEjemplos",
  "parrafos",
  "parrafosDerechoPrivado",
  "parrafosPosteriores",
  "resumen",
  "texto",
]);

const FIELD_TITLES = Object.freeze({
  clasificacionEconomica: "Clasificación económica",
  efectividadIngresos: "Efectividad de los ingresos",
  recaudacionPeriodoVoluntario: "Recaudación en período voluntario",
  recaudacionPeriodoEjecutivo: "Recaudación en período ejecutivo",
});

const STRUCTURAL_FIELDS = new Set(["id", "numero", "tipo", "titulo"]);

function addText(nodes, type, text, metadata = {}) {
  const normalizedText = String(text ?? "").trim();
  if (!normalizedText) return;
  nodes.push({ tipo: type, ...metadata, texto: normalizedText });
}

function addListEntry(nodes, entry, field) {
  if (typeof entry === "string") {
    addText(nodes, "elemento-lista", entry);
    return;
  }
  if (!entry || typeof entry !== "object") return;

  if (entry.codigo) {
    addText(nodes, "dato", `${entry.codigo} — ${entry.texto}`);
    return;
  }
  if (entry.letra !== undefined && entry.texto) {
    addText(nodes, "elemento-letra", entry.texto, { letra: String(entry.letra) });
    appendObjectContent(nodes, entry, new Set(["texto"]));
    return;
  }
  if (entry.numero !== undefined && entry.texto && !entry.titulo) {
    addText(nodes, "elemento-numerado", entry.texto, {
      numero: String(entry.numero),
    });
    appendObjectContent(nodes, entry, new Set(["texto"]));
    return;
  }
  if (entry.texto && !entry.titulo && !entry.tipo) {
    addText(nodes, "elemento-lista", entry.texto);
    appendObjectContent(nodes, entry, new Set(["texto"]));
    return;
  }

  const entryTitle = entry.titulo ?? (
    typeof entry.tipo === "string" && !entry.tipo.includes("seccion")
      ? entry.tipo
      : ""
  );
  if (entryTitle) {
    const prefix = field === "capitulos" && entry.numero !== undefined
      ? `Capítulo ${entry.numero}. `
      : entry.numero !== undefined
        ? `${entry.numero}. `
        : "";
    addText(nodes, "subtitulo", `${prefix}${entryTitle}`);
  }
  appendObjectContent(nodes, entry);
}

function appendArray(nodes, values, field) {
  const paragraphField = PARAGRAPH_FIELDS.has(field);
  values.forEach((entry) => {
    if (paragraphField && typeof entry === "string") {
      addText(nodes, "parrafo", entry);
    } else {
      addListEntry(nodes, entry, field);
    }
  });
}

function appendObjectContent(nodes, object, excludedFields = new Set()) {
  Object.entries(object).forEach(([field, value]) => {
    if (STRUCTURAL_FIELDS.has(field) || excludedFields.has(field) || value == null) return;
    if (field === "texto") {
      addText(nodes, "parrafo", value);
      return;
    }
    if (Array.isArray(value)) {
      appendArray(nodes, value, field);
      return;
    }
    if (typeof value === "object") {
      const title = value.titulo ?? FIELD_TITLES[field];
      if (title) addText(nodes, "subtitulo", title);
      appendObjectContent(nodes, value);
      return;
    }
    if (PARAGRAPH_FIELDS.has(field)) addText(nodes, "parrafo", value);
  });
}

export function normalizeThematicBlocks(blocks) {
  return blocks.map((block) => {
    const contenido = [];
    appendObjectContent(contenido, block);
    return {
      id: block.id,
      tipo: "contenido-tematico",
      titulo: block.titulo,
      contenido,
    };
  });
}
