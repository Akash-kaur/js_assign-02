var j=['2','6'];
console.log("array before adding value:");
console.log(j);
var k=j.splice(2,0,6);

function arrA(array, val){
    
    console.log("array after adding vaue:" +array);
    console.log(array);
}
arrA(j,k)