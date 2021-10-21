
import React from "react";
import "../InnerPageBanner/style.scss";



const InnerBanner =(props)=>{
   
    return(
        <div className="inner_banner">
            
            <img src={props.bannerImg} />
            <div className="contnt">
                <h2>{props.bannerHeading}</h2>
                
            </div>
            

        </div>

    )
    
}

export default InnerBanner;