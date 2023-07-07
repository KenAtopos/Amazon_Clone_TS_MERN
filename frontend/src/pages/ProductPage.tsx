import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { slug } = useParams();
  return (
    <div>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      {slug}
    </div>
  );
}
