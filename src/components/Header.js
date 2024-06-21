import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserCOntext";
//SPA  - single page application
// two types of routing - client side and srver side
export const Title = () => (
    <a href="/">
    <img alt="logo" className="h-28 p-2"
    src="data:image/jpeg;base64,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" 
    />
    </a>
);
// const LoggedInUser = () => {
//     return false;
// };
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
        {Title()}
        <div className="nav-items">
            <ul className="flex py-10">
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                <li className="px-2">Cart</li>
            </ul>
        </div>
        {isLoggedIn ? (
            <button className="btn btn-small p-3 px-8 rounded-lg text-sm tracking-wider uppercase font-medium mt-3 inline-block shadow-md bg-blue-300 text-white" onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
            <button className="btn btn-small p-3 px-8 rounded-lg text-sm tracking-wider uppercase font-medium mt-3 inline-block shadow-md bg-green-300 text-black" onClick={()=> setIsLoggedIn(true)}>Login</button>
            )}
    </div>
    );
};
export default Header;