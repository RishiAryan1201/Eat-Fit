import { useState } from "react";

const Section = ({title, description,isVisible, setisVisible}) => {
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? (
                        <button 
                        classname="cursor-pointer border border-black" onClick={()=> setisVisible(false)}>
                            Hide
                    </button>) : (
                        <button 
                        classname="cursor-pointer border border-black" onClick={()=> setisVisible(true)}>
                            Show
                        </button>
                    )
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const Instamart = () => {
    const[visiblelsection, setvisiblesection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">INSTAMART</h1>
            <Section 
                title={"About Instamart"}
                description={"This is the about section of INSTAMART"}
                isVisible={visiblelsection == "about"}
                setisVisible={()=> setvisiblesection("about")}
            />
            <Section 
                title={"Team Instamart"}
                description={"This is the about section of Team of INSTAMART"}
                isVisible={visiblelsection == "team"}
                setisVisible={()=> setvisiblesection("team")}
            />
            <Section 
                title={"Career"}
                description={"This is the about section of Career"}
                isVisible={visiblelsection == "Career"}
                setisVisible={()=> setvisiblesection("Career")}
            />
        </div>
    );
};

export default Instamart;