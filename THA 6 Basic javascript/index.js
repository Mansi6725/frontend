function toCheck()
{
    console.log(Array.isArray([1,2,4,0]));
    console.log(Array.isArray("w3schools"));
}
toCheck();
function toClone()
{
    let arr1=[1,2,4,0];
    const arr2=[...arr1];//spread operator 
    console.log(arr2);
   const arr3=arr1;
   arr1[0]=5;
   console.log(arr3);
}
toClone();
console.log(array_Clone([1,2,[4,0]]));
function array_Clone(arr)
{
return arr;
}
function first()
{
    const arr1=[7,9,0,-2];
    const arr2=[[],3];
    console.log(arr1[0]);
    console.log(arr2[0]);
    console.log(arr1.slice(0,3));
    console.log(arr1.slice(0,6));
    console.log(arr1.slice(-1,-3));
}
first();
function concatarr()
{
    const arr=["Red","Green","White","Black"];
    const s=arr.toString();
    const s2=arr.join('+');
    console.log(s);
    console.log(s2);
}
concatarr();
function mostfreq()
{
    const arr=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3,2];
    const obj={};
    let maxel=arr[0],max=1;
    for(i=0;i<arr.length;i++)
    {
        const element=arr[i];
        if(obj[element]==null)
        obj[element]=1;
        else
        obj[element]++;
        if(obj[element]>max)
        {
            maxel=element;
            max=obj[element];
        }
    }
    console.log(maxel+", "+max+" times");
}
mostfreq();