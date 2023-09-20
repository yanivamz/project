import Navbar from "./Navbar";

function Header({cartItems}) {
    return <header>
      <Navbar cartItems={cartItems}/>
    </header>;
}

export default Header;