import React from "react";
import "../Footer/style.scss";
import {listing,helplisting} from "../../data/data.json";


const Footer=()=>{
    return(
        <footer>
			<div className="container">
				<div className="row">
				    <div class="col-md-3">
						<span className="logo">Digi<span className="sublogo">Logo</span> </span>
						<p className="white_color mt-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam vehicula ultricies</p>
						<ul className="contact_list">
							<li><i class="fa fa-phone" aria-hidden="true"></i> +61 32 878 6284</li>
							<li><i class="fa fa-fax" aria-hidden="true"></i>+61 388 87 6284 </li>
							<li><i class="fa fa-envelope-o" aria-hidden="true"></i> info@foxtar.com</li>
						</ul>
						
					</div>

				
					<div className="col-md-3">
						<h5 className="mb-4 white_color footer_title">Join Our Community</h5>
						
						<ul className="listing">
							{
								helplisting.map((item)=>{
									return(
										<li><a href="">{item.list}</a></li>
									)
								})
							}
						</ul>
					</div>

					<div className="col-md-3">
						<h5 className="mb-3 white_color footer_title">Help Support</h5>
						
						<ul className="listing">
							{
								listing.map((item)=>{
									return(
										<li><a href="">{item.list}</a></li>
									)
								})
							}
						</ul>
					</div>

					<div className="col-md-3">
						<h5 className="mb-3 white_color footer_title">Follow Us On</h5>
						
						<ul class="social_list">
							<li><a className="fb" href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a className="insta" href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a className="youtube" href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
							<li><a  className="env" href=""><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
						</ul>
						
					</div>

					
					
				</div>
			</div>
		</footer>
    )
}


export default Footer;