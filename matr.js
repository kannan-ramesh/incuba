//input arr=[[0,0,0],[0,1,0],[0,0,0]]

//4 questions

let arr=[['1','0','0'],['0','0','0'],['0','0','0']];

function matrix(arr){
    let count =0;

    function infected(i,j){

            if(arr[i]==undefined || arr[i][j]==undefined){
                return;
            }
            //console.log(i,j);
            if(arr[i][j] == '0' ){
                arr[i][j]='1';
            }else{
                return;
            }
            // console.log(i,j);
            //     infected(i,j-1);
            //     infected(i,j+1);
            //     infected(i-1,j);
            //     infected(i+1,j);
    }

    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr.length-1;j++){
            if(arr[i][j]==='1'){
                //console.log(i,j);
                //infected(i,j);
            
                infected(i,j-1);
                infected(i,j+1);
                infected(i-1,j);
                infected(i+1,j);   
            }
            count++;
            
        }
    }
    console.log(arr);
    console.log(count);
}
matrix(arr);
