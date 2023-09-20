const apiHost = import.meta.env.VITE_API_HOST;
import { useState } from "react";
import ProductCard from "./ProductCard";
import React from 'react';
import fetchApi from "./FetchApi";
import Carousel from './Carousel';
import { imagesUrls } from '../imageUrls';
const productPerPage = 6;

function getPageProducts(productList, pageIndex) {
    const first = productPerPage * pageIndex;
    const last = first + productPerPage;
    return productList.slice(first, last);
}

function getNumOfPages(productList) {
    return Math.ceil(productList.length / productPerPage);
}

function Catalog({cartItems, addToCart}) {
    const [pageIndex, setPageIndex] = useState(0);
    const [isSorted, setIsSorted] = useState(0);
    const [isFilterd, setIsFilterd] = useState('');
    //console.log(isSorted);
    const productList = fetchApi(isSorted,isFilterd);
    const pagesCount = getNumOfPages(productList);
    const PageProducts = getPageProducts(productList, pageIndex);
console.log(productList);
    function setNextPage() {
        if (pageIndex === pagesCount - 1) return;
        setPageIndex(pageIndex + 1);
    }

    function setPreviousPage() {
        if (pageIndex === 0) return;
        setPageIndex(pageIndex - 1);
    }

  /*  function setsetIsSortedF(event) {
        setIsSorted(event.target.checked);
    }*/
    function Searchproducts(event) {
        setIsFilterd(event.target.value);
    }
    function  handleSelectChange(event){
        const selectedOption = event.target.value;
        if (selectedOption === "option1"){
            setIsSorted(0);
            return
        }
        if (selectedOption === "option2"){
            setIsSorted(1);
            return
        }
        if (selectedOption === "option3"){
            setIsSorted(2);
            return
        }
    }

    return (
        <main>
    <div className="sort">
        <select onChange={handleSelectChange} defaultValue="default">
          <option value="default" disabled>מיין</option>
          <option value="option2">מהזול_ליקר</option>
          <option value="option3">מהיקר_לזול</option>
        </select>
      </div>
            
            <div className="search">  
                <span>Search</span>
               <input type="text" onChange={Searchproducts} />
            </div>
            <div className="catalog">
                <div className="catalog-pages">
                    {PageProducts.map(product => (
                        <ProductCard key={product._id} product={product} addToCart={addToCart} cartItems={cartItems}/>
                    ))}
                </div>
                <div>
                <Carousel urls={imagesUrls} />
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
        </main>

    );
}


export default Catalog

