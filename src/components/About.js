import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from "./Profile";
import React from "react";
const About = () => {
    return (
        <div>
            <h1>About this Page</h1>
            <p>
                {" "}
                this is the swiggy clone i am working on.
            </p>
            {/* <Outlet /> */}
            <ProfileFunctionComponent  name = {"Rishi Aryan"} />
            <Profile name = {"Rishi Aryan"} />
        </div>
    );
};

class About2 extends React.Component{
    constructor(props){
        super(props);
        console.log("parent - constructor");
    }
    componentDidMount(){
        //best place to make an api call
        console.log("parent - componenddidmount");
    }

    render(){
        console.log("parent - render");
        return(
            <div>
                <h1>About this Page</h1>
                <p>
                    {" "}
                    this is the swiggy clone i am working on.
                </p>
                {/* <Outlet /> */}
                <ProfileFunctionComponent  name = {"Rishi Aryan"} />
                <Profile name = {"Rishi Aryan"} />
            </div>
        );
    }
}

export default About2;