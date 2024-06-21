import { useContext } from "react";
import UserContext from "../utils/UserCOntext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <footer class="relative w-full p-2 bg-white border-t shadow md:flex md:items-center md:justify-between md:p-6">
            <div class="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center">© 2024 Made By Rishi Aryan. All Rights Reserved.
            </span>

            <div className="flex items-center flex-wrap gap-3 justify-between">
                <a href="https://www.linkedin.com/in/rishi-aryan-52969a213/" className=""><img className="w-8" src="https://seeklogo.com/images/L/linkedin-logo-A6EF048412-seeklogo.com.png" /></a>
                <a href="https://www.instagram.com/_rishi_aryan_" className=""><img className="w-8" src="https://i.pinimg.com/736x/7f/7b/87/7f7b872e56430e68d69538b17525c51c.jpg" /></a>
                <a href="https://x.com/rishiarya1201" className=""><img className="w-8" src="https://img.freepik.com/premium-vector/vector-twitters-new-2023-x-logo-white-background_1093524-454.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user"/></a>
                <a href="https://github.com/RishiAryan1201" className=""><img className="w-8" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/github_logo_icon_145252.png" /></a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
