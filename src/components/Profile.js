import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=> {
            console.log("RISHI IS OP");
        }, 1000);
        console.log("useeffect");

        return()=> {
            clearInterval(timer);
            console.log("useeffect return");
        }
    });
    return( 
        <div>
            <h1>My Profile</h1>
            <h3>Name : {props.name}</h3>
            <h3>Count : {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Count</button>
        </div>
    );
};
export default Profile;