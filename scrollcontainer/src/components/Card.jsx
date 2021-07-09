import "./Card.css";
const Card=({name,calorie})=>{
    return(
        <div className="Card">
            <h1>{name}</h1>
            <h2>You have consumed {calorie} cals today.</h2>
        </div>
    );
}
export default Card;