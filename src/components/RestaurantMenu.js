import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const {id} =useParams();
    const RestroMenu = useRestaurant(id);
    if(!RestroMenu){
        return <Shimmer />;
    }
    return (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{RestroMenu.name}</h2>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+RestroMenu.cloudinaryImageId}/>
            <h3>{RestroMenu.areaName}</h3>
            <h3>{RestroMenu.locality}</h3> 
            <h3>{RestroMenu.avgRating} stars</h3> 
            <h3>{RestroMenu.costForTwo} rupees</h3>
        </div>
    );
};


export default RestaurantMenu;

// useEffect(() => {
    //     getRestaurants();
    // }, [searchInput]);
 
    // async function getRestaurants(){
    //   const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
    //   const json = await data.json();
    //   console.log(json);
    //   setAllRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElement?.restaurants);
    // }
