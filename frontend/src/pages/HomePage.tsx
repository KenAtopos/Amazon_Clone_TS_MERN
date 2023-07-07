import { Col, Row } from "react-bootstrap";
import { Product } from "../types/Product";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHook";

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery(); // due to here is using the ES6 destructing, products are assigned as the new name, to represent the data sent back.
  // isLoading here is showing the status of the loading from the backend.

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox> // variant here is just a prop
  ) : (
    <Row>
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}
