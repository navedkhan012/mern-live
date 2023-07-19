import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { getProductBySlug } from "../store/actions/product";

/**
 * @author
 * @function ProductList
 **/

const ProductList = (props) => {
  const slug = props.match.params.slug;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, [dispatch, slug]);
  return <Layout>ProductList</Layout>;
};

export default ProductList;
