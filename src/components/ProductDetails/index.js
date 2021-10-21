import React from "react";
import {peoductDetail} from "../../image";
import "../ProductDetails/style.scss";


const ProductDetails=()=>{
    return(
        <>
           <section className="product_details">
               <div className="container">
               <div className="row">
                   <div className="col-md-6">
                       <div className="product_detail">
                         <img src={peoductDetail} />
                       </div>
                       <div className="review_row">
                          <div className="review_col">
                              <p><i class="fa fa-shopping-cart" aria-hidden="true"></i> Total Sales</p>
                              <span>425</span>
                          </div>
                          <div className="review_col">
                              <p><i class="fa fa-star-o" aria-hidden="true"></i> Reviews</p>
                              <span>25</span>
                          </div>
                          <div className="review_col">
                              <p><i class="fa fa-heart-o" aria-hidden="true"></i> Favorities</p>
                              <span>425</span>
                          </div>
                       </div>
                   </div>
                   <div className="col-md-6 prduct_content">
                       <h3>Team Component</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam aliquam vehicula ultricies. Nulla tempus vestibulum eros, 
                            condimentum ornare est gravida sed</p>
                        <h5>Specification:</h5>
                        <ol className="specification_list">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>consectetur adipiscing elit</li>
                            <li>Aliquam aliquam vehicula ultricies</li>
                            <li>Nulla tempus vestibulum eros</li>
                            <li>condimentum ornare est gravida sed</li>
                        </ol>    
                        <p className="price">Price: <span>$15</span></p>
                        <button className="black_btn">Add To Cart</button>
                   </div>
               </div>
               </div>
           </section>
        </>
    )
}

export default ProductDetails;