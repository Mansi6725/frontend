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
function display(){
const library=[
  {
    author:'Bill Gates',
    title:'The Road Ahead',
    readingStatus:true
  },
 {
  author:'Steve Jobs',
  title:'Walter Isaacson',
  readingStatus:true
 },
 {
  author:'Suzanne Collins',
  title:'Mockingjay',
  readingStatus:false
 }
];
 for(let i=0;i<library.length;i++)
 {
   console.log(library[i].author);
   console.log(library[i].title);
   console.log(library[i].readingStatus);
 }
}
display();
 //que 5
const cylinder={radius:5,height:6};
const vol=2*3.14*cylinder.radius*cylinder.height;
console.log(vol);
//que 6
var library=[
  {
    author:'Bill Gates',
    title:'The Road Ahead',
    libraryID:1254
  },
 {
  author:'Steve Jobs',
  title:'Walter Isaacson',
  libraryID:4264
 },
 {
  author:'Suzanne Collins',
  title:'Mockingjay',
  libraryID:3245
 }
];
library.sort((a, b) => {
 return b.libraryID-a.libraryID;
});
library.forEach((item)=>{
  console.log(item);
});

