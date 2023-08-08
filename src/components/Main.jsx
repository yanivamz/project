const text = import.meta.env.VITE_NISIM;
import { imagesUrls } from '../imageUrls.js';
import Carousel from './Carousel.jsx';

function Main() {
    return <main>
        <Carousel urls={imagesUrls} />
    </main>;
}

export default Main;