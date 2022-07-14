//input n=7, 17463102
//3 questions

function subset(n,num){
    let result="";
    let list=[1,2,3,4,5,6,7,8,9,10];

    //1-10 order change in num
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if( num[i] >= num[j]){

                let temp=num[i];
                num[i]=num[j];
                num[j]=temp;
            }
        }  
    }
   
    let j=0;
    var arr=[];

    for(let i=0;i<=list.length;i++){
        if(num[j] == list[i]){
            result += num[j];
            j++;
        }else{ 
            arr.push(result);
            result="";
        }
        
    }
    
    let max=0;

    for(i=0;i<arr.length;i++){
       if(arr[i].length>max){
            max=arr[i];
       }
    }
    return max;
}

let ans=subset(7,[1,7,4,6,3,10,2]);
console.log(ans);