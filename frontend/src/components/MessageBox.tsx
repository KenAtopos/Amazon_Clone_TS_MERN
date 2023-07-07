import { Alert } from "react-bootstrap";
import React from "react";

export default function MessageBox({
  variant = "info", // default value is "info"
  children,
}: {
  variant?: string;
  children: React.ReactNode; // type
}) {
  return <Alert variant={variant || "info"}>{children}</Alert>; // content inside this messagebox is children
}
