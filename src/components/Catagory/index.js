import React from "react";
import "../Catagory/style.scss";
import {product1,product2,product3,product4,avtar} from "../../image.js";
import Slider from "react-slick";




const Catagory = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return(
        <section className="catagories">
			<div className="container">
				 <div className="lg_card" >
				 	  <div className="wrap_heading">
				 	  	  <h4>Featured Products</h4>
				 	  	  <a href="#" className="view_all_btn">view all 
				 	  	  	<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 11L4.58578 7.41421C5.36683 6.63317 5.36683 5.36683 4.58579 4.58579L1 1" stroke="#6A6868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						   </a>
				 	  </div>
				 	  <Slider {...settings} className="catagories_slider">

						  
                           
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
                            
				 	  </Slider>
				 </div>
			</div>
		</section>

    )
}


export default Catagory;