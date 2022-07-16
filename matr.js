//input arr=[[0,0,0],[0,1,0],[0,0,0]]

//4 questions

//let arr=[[0,0,0],[0,1,0],[0,0,0]];

let arr=[[0,0,0],[0,1,0],[0,0,0]];

var matrix = function(arr,i,j) {
    
    function infact(i,j){
        //out of the arr index error handle condition ex i,j => -1
        if (arr[i] === undefined || arr[i][j] === undefined) {
            return;
        }
        //index value 1 any return
        if(arr[i][j] === 1){
            return;
        }
         
        if(arr[i][j] === 0){
            arr[i][j]=1;
        }
        //loop of next time arry start position 
        return matrix(arr,0,0);
    }

    let count=0;
    //loop of the matrix
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr[i].length;j++){
            //find 1 in matrix array index
            if(arr[i][j] === 1){
                //recursin use pass index in check 0 in left,right,top,bottem
                infact(i-1,j);
                infact(i+1,j);
                infact(i,j-1);
                infact(i,j+1);
            }
        
        }
       count++;
         
    }
     
    return count;
};

let ans=matrix(arr,0,0);
console.log(ans);
console.log(arr)
