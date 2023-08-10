const text = import.meta.env.VITE_NISIM;
import Catalog from './Catalog.jsx';
const apiHost = import.meta.env.VITE_API_HOST;

function getProductList() {
    return fetch(`${apiHost}/products`)
        .then(res => res.text())
        .then(data => JSON.parse(data));
}

const productListData = await getProductList();

function Main() {
    return <main>
        <Catalog productList={productListData}/>
    </main>;
}

export default Main;