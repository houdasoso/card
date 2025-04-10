import React from "react";
import téléchargement from'./téléchargement.jpg'
const Image = () => {
    const Product = {
Image:téléchargement
    };
 return <img 
 src={Product.Image} 
 alt="Product" 
 style={{ width: "100%", height: "auto", borderRadius: "5px" }}/>;
};
export default Image ;
