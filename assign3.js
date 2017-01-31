let arr=['2','6','0','2'];
let i=3;
function arrArray(array,index){
    console.log(array);
    for(let i=0; i<=index; i++){
        
        let a=array[i];
        
        a =+a + +2;
        console.log("array after adding 2:" + "for array position:" + i + ":" +a);
        
    }
}
arrArray(arr,i);