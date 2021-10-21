import React from "react";
import "../Partners/style.scss";
import {partner1,partner2,partner3} from "../../image.js";



const Parters =()=>{
    return(
        <>
          <section className="partners">
              <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={partner1} />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={partner2} />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={partner3} />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={partner1} />
                    </div>
                </div>
              </div>
          </section>

        </>
    )
}


export default Parters;