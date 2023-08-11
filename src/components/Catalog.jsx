const apiHost = import.meta.env.VITE_API_HOST;
import { useState,memo, useEffect } from "react";
import ProductCard from "./ProductCard";
import React from 'react';

const productPerPage = 3;

function getPageProducts(productList, pageIndex) {
    const first = productPerPage * pageIndex;
    const last = first + productPerPage;
    return productList.slice(first, last);
}

function getNumOfPages(productList){
    return Math.ceil(productList.length / productPerPage);
}

function Catalog({ productList }) {
    const [pageIndex, setPageIndex] = useState(0);
    useEffect(() => {
        
    },[]);
    const pagesCount = getNumOfPages(productList);    
    const PageProducts = getPageProducts(productList, pageIndex);

    function setNextPage(){
        if (pageIndex === pagesCount - 1) return;
        setPageIndex(pageIndex + 1);
    }

    function setPreviousPage(){
        if (pageIndex === 0) return;
        setPageIndex(pageIndex - 1);
    }

    return (
        <div className="catalog">
            <div className="catalog-pages">
                {PageProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="pages-nav">
                <button onClick={setPreviousPage}>
                    previous
                </button>
                <button onClick={setNextPage}>
                    next
                </button>
            </div>

        </div>
    );
}

export default memo(Catalog)

