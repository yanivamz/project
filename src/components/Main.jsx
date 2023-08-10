import React, { useState } from 'react';
import Catalog from './Catalog.jsx';

function Main() {
  const [productListData, setProductListData] = useState([]);

  (async () => {
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/products`);
    const data = await response.json();
    setProductListData(data);
  })();

  return (
    <main>
      <Catalog productList={productListData} />
    </main>
  );
}

export default Main;
