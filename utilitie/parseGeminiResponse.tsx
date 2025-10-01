"use client"

const parseGeminiResponse = (rawString: string) => {
  try {
    const startIndex = rawString.indexOf("{");
    const endIndex = rawString.lastIndexOf("}");

    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      const jsonString = rawString.substring(startIndex, endIndex + 1);      
      return JSON.parse(jsonString);
    }
  } catch (error) {
    return null;
  }
};

export default parseGeminiResponse;
