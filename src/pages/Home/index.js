import React from "react";
import Banner from "../../components/Banner";
import Catagory from "../../components/Catagory";
import Collections from "../../components/Collections";
import TrendingProduct from "../../components/TrendingProduct";
import Parters from "../../components/Partners";



const Home=()=>{
   
    return(
        <>
           
            <Banner />
            <Catagory />
            <TrendingProduct />
            <Collections />
            <Parters />
          
            
            
        </>
    )

    
}

export default Home;