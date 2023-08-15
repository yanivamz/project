import { useState,useEffect } from "react";
const apiHost = import.meta.env.VITE_API_HOST;


export default function fetchApi(sorted) {
    const [productListData, setProductListData] = useState([]);
    //console.log(sorted);
    const isSorted = sorted;
            useEffect(() => {
            (async () => {
                if (isSorted) {
                    const response = await fetch(`${import.meta.env.VITE_API_HOST}/products?sort=price_a`);
                    const data = await response.json();
                    setProductListData(data);
                }
                else{
                    const response = await fetch(`${import.meta.env.VITE_API_HOST}/products`);
                    const data = await response.json();
                    setProductListData(data);   
                }
                            
            })();
        }, [isSorted])
    
    return productListData
      
}
