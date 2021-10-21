import React from "react";
import "../Collections/style.scss";


const Collections = () =>{
   
    return(
        <section className="catagory_collection">
			<div className="container">
				<h3>Why You Choose DigiLogo Place?</h3>
				<div className="row">
					<div className="col-md-3 choose_col">
                       <span><i class="fa fa-gift" aria-hidden="true"></i></span>
					   <h5>Easily Buy & Sell</h5>
					   <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
					</div>
					<div className="col-md-3 choose_col">
                       <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
					   <h5>Quality Products</h5>
					   <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
					</div>
					<div className="col-md-3 choose_col">
                       <span><i class="fa fa-gift" aria-hidden="true"></i></span>
					   <h5>24/7 Customer Care</h5>
					   <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
					</div>
					<div className="col-md-3 choose_col">
                       <span><i class="fa fa-lock" aria-hidden="true"></i></span>
					   <h5>100% Secure Payment</h5>
					   <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
					</div>
			    </div>
				 
			</div>
		</section>
    )

}


export default Collections;