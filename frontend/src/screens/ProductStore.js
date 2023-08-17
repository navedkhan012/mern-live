import React, { useEffect } from "react";
import { getSearchParmasInObject } from "../utils/params";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../store/actions/product";
/**
 * @author
 * @function ProductStore
 **/

const ProductStore = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  useEffect(() => {
    dispatch(getProductPage(props.params));
  }, [dispatch, props.params]);
  return (
    <div>
      store
      {JSON.stringify(page)}
    </div>
  );
};

export default ProductStore;
