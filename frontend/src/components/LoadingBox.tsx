import { Spinner } from "react-bootstrap";
import React from "react";

export default function LoadingBox() {
  return (
    <Spinner animation="grow" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner> // react-bootstrap content
  );
}
