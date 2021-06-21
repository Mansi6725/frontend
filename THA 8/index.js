const robo=[129,130,148,149,150,151,167,168,169,170,171,172,186,187,189,190,
    192,193,206,207,208,209,210,211,212,213,228,231,247,249,250,
    252,266,268,271,273];
let container=document.getElementById("container");
for(let i=0;i<400;i++)
{
    let box=document.createElement("div");
    box.className="box";
    if(robo.includes(i))
    {
        box.classList.add("change");
    }
    container.appendChild(box);
}
let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       if(box.classList.contains("change"))
       {
        box.classList.remove("change");
       }
       else{
        box.classList.add("change");
       }
    })
})