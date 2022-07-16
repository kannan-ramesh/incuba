//L2-Q3
//two pointer way j,i

let arr=["abc","john","cat","opera","noon"];
//let arr=["abc","adbc","cat","opera"];
let temp=[];

function conc(){

    //sort array length vise
    arr.sort( (a,b ) =>{
        return b.length - a.length;
    });



    
    //first arrstr in stor result in j=0
    let j=0;
    let result="";

    result += arr[j];

        //loop in arrstr in start 1-n index
    for(let i=1;i<=arr.length-1;i++){
        //find length
        let seen = arr[j].length-1;
       
        //last letter compare another letter first letter
        if(arr[j][seen] == arr[i][0]){
            
            result += arr[i];
            //j move i location
            j=i;
        }
         //console.log(result);
    }
    return result;
}

let ans=conc();
console.log(ans);
