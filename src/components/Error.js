import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error_box">
            <img src="https://i.imgflip.com/4aiftp.jpg"/>
            <h1>Oops.. Something went Wrong!!</h1> 
            <h3>{err.status + " " + err.statusText}</h3>
        </div>
    );
};

export default Error;