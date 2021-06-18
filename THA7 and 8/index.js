var obj={name:"Mansi",roll_no:58,sclass:"VI"};
console.log(Object.keys(obj));//method1
for(item in obj)
{
    console.log(item);//method2
}
//que2
console.log(obj);
delete obj.roll_no;
console.log(obj);
//que3
var v=Object.keys(obj).length;//Object.keys(obj) returns array of keys and length returns length of array
console.log(v);
//que4
function Object()
{
    this.vol=function(r,h){
      return(2*3.14*r*h);
    }
}
const volume=Object.vol(2,3);
console.log(volume);

