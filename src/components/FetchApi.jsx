import { useState, useEffect } from "react";
const apiHost = import.meta.env.VITE_API_HOST;


export default function fetchApi(isSorted, isFilterd) {
    const [productListData, setProductListData] = useState([]);
    
    //console.log(sorted);
    /*  useEffect(() => {
          (async () => {
              if (!isFilterd) {
                  const response = (isSorted) ?
                      await fetch(`${apiHost}/products?sort=price_a`) :
                      await fetch(`${apiHost}/products`);
                  const data = await response.json();
                  setProductListData(data);
              }
              else {
                  const response = (isSorted) ?
                      await fetch(`${apiHost}/products?sort=price_a&search=${isFilterd}`) :
                      await fetch(`${apiHost}/products?search=${isFilterd}`);
                  const data = await response.json();
                  setProductListData(data);
              }
  
  
          })();
      }, [isSorted, isFilterd])
  */

    useEffect(() => {
        (async () => {
            if (!isFilterd) {
                if (isSorted === 1) {
                    const response = await fetch(`${apiHost}/products?sort=price_a`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }
                if (isSorted === 2) {
                    const response = await fetch(`${apiHost}/products?sort=price_d`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }
                else {
                    const response = await fetch(`${apiHost}/products`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }

            }
            else {
                if (isSorted === 1) {
                    const response = await fetch(`${apiHost}/products?sort=price_a&search=${isFilterd}`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }
                if (isSorted === 2) {
                    const response = await fetch(`${apiHost}/products?sort=price_d&search=${isFilterd}`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }
                else {
                    const response = await fetch(`${apiHost}/products?search=${isFilterd}`);
                    const data = await response.json();
                    setProductListData(data);
                    return
                }
            }
        })();
    }, [isSorted, isFilterd])


    return productListData

}
