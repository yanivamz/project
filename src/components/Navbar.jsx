import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav>
        <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/Products'}>catalog</Link></li>
            <li><Link to={'/Cart'}>cart</Link></li>
            <li><Link to={'/AboutUs'}>aboutus</Link></li>
        </ul>
    </nav>;
}
