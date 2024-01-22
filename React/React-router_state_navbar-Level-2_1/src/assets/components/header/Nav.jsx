import { Link } from "react-router-dom";

const Nav = () => {
    return (<>
        <nav>
            <Link to="/"><button className="butn">Home</button></Link> 
            <Link to="/menu"><button>Menu</button></Link>
            <Link to="/program"><button>Program</button></Link>
            <Link to="/photos"><button>Photos</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
        </nav>
    </>);
}

export default Nav;