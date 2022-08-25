import React from "react";
import "../TrendingProduct/style.scss";
import "../Catagory/style.scss";
import {product1,product2,product3,product4,avtar} from "../../image.js";
import { Link } from "react-router-dom";


const TrendingProduct = ()=>{
    return(
        <section className="trending_product">
			<div className="container">
				<div  className="wrap_heading padd_0">
		 	  	  <h4>Trending Products</h4>
		 	  	  <a href="#" className="view_all_btn">view all 
		 	  	  	<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 11L4.58578 7.41421C5.36683 6.63317 5.36683 5.36683 4.58579 4.58579L1 1" stroke="#6A6868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				   </a>
		 	    </div>

		 	    <div className="row" >

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product1} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product2} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
							<div className="catagories_slide">
						
								<img src={product3} alt="catagory 1" />
								<div className="wrap_card_heading">
									<h5>Team Component</h5>
									<p>Loreum ipsum</p>
									<span>$15</span>
								</div>
								<div className="bottom_crd">
									<img src={avtar} />
									<p>PsefBOss</p>
									<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
								</div>
							</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product4} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product3} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product2} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						 </div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product4} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

					 <div className="col-md-3 mb-3">
					   <Link to="/product">
						 <div className="catagories_slide">
					   
							<img src={product1} alt="catagory 1" />
							<div className="wrap_card_heading">
								<h5>Team Component</h5>
								<p>Loreum ipsum</p>
								<span>$15</span>
							</div>
							<div className="bottom_crd">
								<img src={avtar} />
								<p>PsefBOss</p>
								<span className="badge"><i class="fa fa-star" aria-hidden="true"></i>3.5</span>
							</div>
						</div>
						</Link>
					 </div>

				
		 	    	
		 	    </div>
			</div>
		</section>
    )
}


export default TrendingProduct;