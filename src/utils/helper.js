export function filterData(searchInput, restaurant) {
    const filterData = restaurant.filter((restaurant)=> 
    restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
}