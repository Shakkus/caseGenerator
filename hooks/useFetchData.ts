"use client";

import { AiGenerateCase } from "@/utilitie/AiGenerateCase";
import { useState } from "react";

export const useFetchData = <TData>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const execute = async () => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const result = await AiGenerateCase();

      setData(result);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { execute, isLoading, data, error };
};
