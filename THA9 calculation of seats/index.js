var booked=0;
var Remaining=36;
document.getElementById("view").innerHTML="BOOKED SEATS: "+booked+"    "+"REMAINING SEATS: "+Remaining;
let container=document.getElementById("container");
for(let i=0;i<36;i++)
{
    let box=document.createElement("div");
    box.className="box";
    container.appendChild(box);
}
let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.classList.contains("selected"))
        {
            box.classList.remove("selected");
            booked--;
            Remaining++;
            document.getElementById("view").innerHTML="BOOKED SEATS: "+booked+"     "+"REMAINING SEATS: "+Remaining;
        }
        else{
            box.classList.add("selected");
            booked++;
            Remaining--;
            document.getElementById("view").innerHTML="BOOKED SEATS: "+booked+"    "+"REMAINING SEATS: "+Remaining;
        }
    })
})
