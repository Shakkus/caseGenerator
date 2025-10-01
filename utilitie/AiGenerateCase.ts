"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const AiGenerateCase = async () => {
  const geminiApiKey = process.env.GEMINI_API_KEY;

  const genAi = new GoogleGenerativeAI(geminiApiKey || "");

  try {
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(`
        Eres un investigador de delitos profesional.
        Necesito que inventes y escribas una informe de un asesinato.

        El mismo debe tener secciones:
        Escena del crimen (Como se encontró a la victima, como estaba el ambiente en el que se la encontró y como se llegó a la informacion de que alguien falleció)

        Informe de autopsia:
        Causa de muerte.
        Hora de la muerte aproximada.
        Hallazgos claves o pistas.

        Sospechosos (Grupo de 3 o 4 personas, pueden ser cercanos o no a la victima. Su coartada sospechosa. Su relacion con la victima y su motivo)

        Culpable y logica del crimen (Nombre del asesino, explicacion de 2 a 3 parrafos que conecta las pistas de la escena y la autopsia con el motivo del asesino)

        El caso debe tener logica y ser un poco desafiante para la gente.

        Cada seccion debe ser lo mas breve y directa posible.
        Todas las pistas, haallazgos y perfiles deben encajar logica en la resolucion.

        Formato de caso entregado, el mismo tambien debe estar en formato JSON:
Titulo del Caso": {
    "titulo": "...",
    "descripcion": "..."
  },
  "Analisis de la Escena del Crimen": {
    "titulo": "...",
    "descripcion": {
      "Victima": "...",
      "Descripcion breve": "...",
      "Pistas Clave": [
        "...",
        "..."
      ]
    }
  },
  "Informe de la Autopsia": {
    "titulo": "...",
    "descripcion": {
      "Causa de la Muerte": "...",
      "Hora de la Muerte": "...",
      "Hallazgos Clave": [
        "...",
        "..."
      ]
    }
  },
  "Sospechosos": {
    "titulo": "...",
    "descripcion": [
      {
        "nombre": "...",
        "perfil": "..."
      }
    ]
  },
  "El Culpable y la Logica del Crimen": {
    "titulo": "...",
    "descripcion": {
      "Culpable": "...",
      "La Logica": "..."
    }
  }
      `);
    const response = result.response;
    const text = response.text();

    console.log("Respuesta de la API:", text);

    return text;
  } catch (error) {
    console.error("Error al generar contenido:", error);
    return "Error: No se pudo generar el contenido.";
  }
};
