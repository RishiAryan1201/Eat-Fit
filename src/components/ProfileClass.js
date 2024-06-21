import React from "react";

class Profile extends React.Component {
constructor(props){
    super(props);
    //state variables are defined here
    this.state = {
        UserInfo:{
            name : "Dummmy Name",
            location: "Dummy Location",
        },
    };
    console.log("child - constructor");
}
async componentDidMount(){
    //best place to make an api call
    const data = await fetch("https://api.github.com/users/rishiaryan1201");
    const json = await data.json();
    this.setState({
        UserInfo: json,
    });
    console.log(json);
}
    render(){
        console.log("child - render");
        return(
            <div>
                <h1> Profile Class Component</h1>
                <img src={this.state.UserInfo.avatar_url} />
                <h2> Name : {this.state.UserInfo.name}</h2>
                <h3>Location : {this.state.UserInfo.location}</h3>
            </div>
        );
    }
};
export default Profile;