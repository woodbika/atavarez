const classification = {
  administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
  oposicion: "Cuerpo Administrativo",
  grupo: "C1",
  escala: "Escala Administrativa",
  tema: {
    numero: "01",
    titulo: "La Constitución Española de 1978",
  },
  partes: [
    "Preámbulo",
    "Título Preliminar",
    "Título I",
  ],
};

const esquemaConstitucion = {
  schemaVersion: 1,
  id: "esquema-estructura-constitucion-espanola",
  type: "esquema",
  title: "Estructura de la Constitución Española",
  classification,
  source: {
    type: "image",
    file: "data/resources/tema-01/esquemas/esquema-tema-01.png",
  },
  data: {
    rootTitle: "Constitución Española de 1978",
    introduction:
      "Recorrido visual por el Preámbulo, el Título Preliminar y el Título I de la Constitución Española.",
    sections: [
      {
        title: "Preámbulo",
        items: [
          "Valores: justicia, libertad y seguridad",
          "Garantía de convivencia democrática",
          "Estado de Derecho",
          "Protección de derechos humanos y culturas",
          "Progreso económico y social",
        ],
      },
      {
        title: "Título Preliminar",
        meta: "Artículos 1–9",
        items: [
          "Art. 1: Estado social y democrático",
          "Art. 2: Unidad y autonomía",
          "Art. 3: Castellano y lenguas oficiales",
          "Art. 4: Bandera de España",
          "Art. 5: Capitalidad: Madrid",
          "Art. 6: Partidos políticos",
          "Art. 7: Sindicatos y patronales",
          "Art. 8: Fuerzas Armadas",
          "Art. 9: Sujeción a la Constitución",
        ],
      },
      {
        title: "Título I: Derechos y deberes fundamentales",
        meta: "Artículos 10–55",
        items: ["Art. 10: Dignidad de la persona"],
        sections: [
          {
            title: "Capítulo I: Españoles y extranjeros",
            meta: "Artículos 11–13",
            items: [
              "Art. 11: Nacionalidad española",
              "Art. 12: Mayoría de edad (18 años)",
              "Art. 13: Derechos de extranjeros y asilo",
            ],
          },
          {
            title: "Capítulo II: Derechos y libertades",
            meta: "Artículos 14–38",
            items: ["Art. 14: Igualdad ante la ley"],
            sections: [
              {
                title: "Sección 1.ª: Derechos fundamentales",
                meta: "Artículos 15–29",
              },
              {
                title: "Sección 2.ª: Derechos y deberes de los ciudadanos",
                meta: "Artículos 30–38",
              },
            ],
          },
          {
            title: "Capítulo III: Principios rectores",
            meta: "Artículos 39–52",
            items: [
              "Art. 39: Familia e hijos",
              "Art. 40: Empleo y formación",
              "Art. 41: Seguridad Social",
              "Art. 42: Trabajadores en el extranjero",
              "Art. 43: Salud y deporte",
              "Art. 44: Cultura y ciencia",
              "Art. 45: Medio ambiente",
              "Art. 46: Patrimonio histórico",
              "Art. 47: Vivienda digna",
              "Art. 48: Juventud",
              "Art. 49: Personas con discapacidad",
              "Art. 50: Tercera edad",
              "Art. 51: Consumidores y usuarios",
              "Art. 52: Organizaciones profesionales",
            ],
          },
          {
            title: "Capítulo IV: Garantías",
            meta: "Artículos 53–54",
            items: [
              "Art. 53: Tutela de derechos",
              "Art. 54: Defensor del Pueblo",
            ],
          },
          {
            title: "Capítulo V: Suspensión de derechos",
            meta: "Artículo 55",
            items: ["Art. 55: Estados de excepción y sitio"],
          },
        ],
      },
    ],
  },
};

export default esquemaConstitucion;
