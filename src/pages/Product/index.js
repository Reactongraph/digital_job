import React from "react";
import InnerBanner from "../../components/InnerPageBanner";
import ProductDetails from "../../components/ProductDetails";
import {productBanner} from "../../image";


const Product=()=>{
   
    return(
      <>
        <InnerBanner bannerHeading="Product Details"  bannerImg={productBanner} />
        <ProductDetails />

      </>  
    )

    
}

export default Product;