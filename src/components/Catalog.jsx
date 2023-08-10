const apiHost = import.meta.env.VITE_API_HOST;
import { useState } from "react";
import ProductCard from "./productCurd";
import React from 'react';

const productPerPage = 3;

export default function Catalog({ productList }) {
    const [] = useState(0);
    return (
        <div className="catalog">
            <div className="catalog-pages">
                {productList.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="pages-nav">
                <button>next page</button>
            </div>

        </div>
    );
}



