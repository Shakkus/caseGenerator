"use client";

import CaseViewer from "@/components/CaseViewer/CaseViewer";
import Loader from "@/components/Loader/Loader";
import { useFetchData } from "@/hooks/useFetchData";
import parseGeminiResponse from "@/utilitie/parseGeminiResponse";
import React, { useEffect, useState } from "react";

const page = () => {
  const { execute, data, isLoading, error } = useFetchData();
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    if (data) {
      const transformedData = parseGeminiResponse(data);
      setFormattedData(transformedData);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Hubo un problema al cargar datos</p>;
  }

  if (formattedData) {
    return (
      <>
        <CaseViewer data={formattedData} />
      </>
    );
  }
};

export default page;
