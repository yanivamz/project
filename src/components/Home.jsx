import Carousel from './Carousel';
import { imagesUrls } from '../imageUrls';

export default function Home() {
    return <header>
        <Carousel urls={imagesUrls} />
        <h1>hellow</h1>
        <Carousel urls={imagesUrls} />
    </header>;
}
