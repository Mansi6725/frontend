import "./Card.css";
const Card=({name,calorie,index,details,setDetails})=>{
    return(
        <div className="Card">
            <h1>{name}</h1>
            <button onClick={()=>{
               const newDetails=details.filter((el,i)=>i!==index);
               setDetails(newDetails);
             }}>
                DELETE
            </button>
            <h2>You have consumed {calorie} cals today.</h2>
        </div>
    );
}
export default Card;