const RestrauntCard = ({name, cuisines, cloudinaryImageId, locality, avgRating}) => {
    // console.log(props);
    return(
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-pink-300 shadow-xl gap-5 border-2 rounded-2xl border-white">
            <img className="block w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            {/* <img src={image}/> */}
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>reach you from {locality}</h4>
            <h3>{cuisines.join("   , ")}</h3>
            <h4>{avgRating}</h4>
        </div> 
    );
}
export default RestrauntCard;