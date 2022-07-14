//L2-q4

function power(base, exp) {
    if (exp === 0) return 1;
    console.log(base,exp);
    return base * power(base, exp-1);
    
}


function fact(num){
    let i,v=0,add=0,mul=1;
    for(i=num;i>=1;i--){
        let f=1;
        v+=1;
        
        //4^v
        for(let j=1;j<=v;j++){
            f*=j;
        }
        //pass another function
        add+=power(i,f);
        mul*=power(i,f);
    }
    console.log(add);
    console.log(mul);
}
fact(4)