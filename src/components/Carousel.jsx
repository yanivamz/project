import { useState } from "react"; 

function Carousel({ urls }) {
    const [imgIndex, setImgIndex] = useState(2)
   
    function handleLeftClick() {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1);   
        }
        else setImgIndex(urls.length-1);
    }

    function handleRightClick() {
        if (imgIndex < urls.length - 1) {
            setImgIndex(imgIndex + 1);   
        }
        else setImgIndex(0);
    }

    return <div className="carousel">
        <button className="arrow" onClick={handleLeftClick}>
            <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="container">
            <img src={urls[imgIndex]} alt="chad" />
        </div>
        <button className="arrow" onClick={handleRightClick}>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    </div>;
}

export default Carousel;