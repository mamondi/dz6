import React from "react";
import Flower from "./Flower"; 

function FlowerList() {
    const flowers = [
        {
            name: "Rose",
            imageurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/A_rose_flower.jpg/1200px-A_rose_flower.jpg",
            price: 10,
        },
        {
            name: "Tulip",
            imageurl: "https://www.johnscheepers.com/media/catalog/product/cache/1e40e0e5a22c97e4633afe93ea5a8112/t/_/t_pink_impression_a-w_1.jpg",
            price: 7,
        },
        {
            name: "Sunflower",
            imageurl: "https://www.applewoodseed.com/wp-content/uploads/2016/11/HANN-702.jpg",
            price: 5,
        },
    ];

    return (
        <div className="flower-list"> 
            {flowers.map((flower, index) => (
                <Flower key={index} name={flower.name} imageurl={flower.imageurl} price={flower.price} />    
            ))}
        </div>  
    );
}

export default FlowerList;
