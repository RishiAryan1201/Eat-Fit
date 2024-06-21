import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [RestroMenu, setRestroMenu] = useState(null);

    useEffect(()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data.cards[2].card.card.info);
        setRestroMenu(json.data.cards[2].card.card.info);
    }
    return RestroMenu;
};

export default useRestaurant;