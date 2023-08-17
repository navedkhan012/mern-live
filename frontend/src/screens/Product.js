import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../store/actions/product";
import { Col, Card, Button, Row } from "react-bootstrap";
import { getSearchParmasInObject } from "../utils/params";
import ProductStore from "./ProductStore";
import ProductList from "./ProductList";

/**
 * @author
 * @function ProductList
 **/

const Product = (props) => {
  const slug = props.match.params.slug;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, [dispatch, slug]);

  const getParams = getSearchParmasInObject(props.location.search);
  console.log("slug", slug);
  return (
    <Layout>
      {getParams.type === "store" ? (
        <ProductStore params={getParams} />
      ) : (
        <ProductList slug={slug} />
      )}
    </Layout>
  );
};

export default Product;
