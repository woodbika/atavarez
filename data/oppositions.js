export const GOBIERNO_VASCO_ADMINISTRATIVO_C1 = Object.freeze({
  id: "gobierno-vasco-administrativo-c1",
  legacyIds: Object.freeze([
    "eusko-jaurlaritza-gobierno-vasco-cuerpo-administrativo-c1-escala-administrativa",
  ]),
  administration: "EUSKO JAURLARITZA / GOBIERNO VASCO",
  title: "Cuerpo Administrativo",
  group: "C1",
  scale: "Escala Administrativa",
  status: "available",
  covers: Object.freeze({
    themes: "portada-temas-gobierno-vasco.jpg",
    resources: "portada-recursos.jpg",
  }),
});

export const OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1 = Object.freeze({
  id: "osakidetza-tecnico-especialista-informatica-c1",
  legacyIds: Object.freeze([]),
  administration: "Osakidetza",
  title: "Técnico/a Especialista Informática",
  group: "C1",
  scale: "Técnico/a Especialista profesional",
  status: "coming-soon",
  covers: Object.freeze({}),
});

export const oppositions = Object.freeze([
  GOBIERNO_VASCO_ADMINISTRATIVO_C1,
  OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1,
]);
