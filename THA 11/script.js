const clear=document.querySelector('.fa-recycle');
const dateElement=document.getElementById("date");
const list=document.getElementById("list");
const input=document.getElementById("input");

const CHECK="fa-thumbs-up";
const UNCHECK="fa-location-arrow";
const LINE_THROUGH="lineThrough";

let LIST=[];
let id=0;;
let data=localStorage.getItem("TODO");
if(data){
    LIST=JSON.parse(data);
    id=LIST.length;
    loadList(LIST);
}else{
    LIST=[];
    id=0;
}
function loadList(array){
array.forEach(function(item){
    addtodo(item.name,item.id,item.done,item.trash);
});
}


const options={weekday:"long",month:"short",day:"numeric"};
dateElement.innerHTML=new Date().toLocaleDateString("en-US",options);

function addtodo(toDo,id,done,trash)
{
    if(trash)
    return;
    const DONE=done?CHECK:UNCHECK;
    const LINE=done?LINE_THROUGH:"";
  const item=` <li class="item">
  <i class="${DONE} co" job="complete" id=${id}></i>
  <p class="text ${LINE}">${toDo}</p>
  <i class="fa fa-trash de" aria-hidden="true" job="delete" id=${id}></i>
</li>`;
const position="beforeend";
list.insertAdjacentHTML(position,item);
}
document.addEventListener("keyup",(event)=>{
    if(event.keyCode==13)
    {
        const toDo=input.value;
        if(toDo)
        {
          addtodo(toDo,id,false,false);
          LIST.push({
              name: toDo,
              id:id,
              done:false,
              trash:false
          });
          localStorage.setItem("TODO",JSON.stringify(LIST));
          console.log(window.localStorage);
          id++;
        }
        input.value="";
    }
});
function completeToDo(element){
 element.classList.toggle(CHECK);
 element.classList.toggle(UNCHECK);
 element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
 LIST[element.id].done=LIST[element.id].done?false:true;
}
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}
list.addEventListener('click',function(event){
    const element=event.target;
    const elementJob=element.attributes.job.value;
    if(elementJob=="complete")
    {
        completeToDo(element);
    }else if(elementJob=="delete"){
        removeToDo(element);
    }
    localStorage.setItem("TODO",JSON.stringify(LIST));
    console.log(window.localStorage);

});
// const clear=douument.querySelector(".fa-recycle");
clear.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
})