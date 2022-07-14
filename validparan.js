//2 questions

//input exp="[()]{[()()]()}"
//let exp="[(])";
let exp="[()]{[()()]()}"

function validparanthese(str){

    let stack=[],ch;

    for(let i=0;i<=str.length-1;i++){
        
        ch=str.charAt(i);
        
        if(ch == '[' || ch == '(' || ch == '{'){
            stack.push(ch);
        }
        else
        {
            switch(ch){
                case ']':
                    if(stack.pop() !='[')
                    {
                        return false;
                    }
                break;

                case '}':
                    if(stack.pop() !='{')
                    {
                        return false;
                    }
                break;

                case ')':
                    if(stack.pop() !='(')
                    {
                        return false;
                    }
                break;
            }
        }
    }
     
    return stack.length>0 ? false:true;
    
}
let ans=validparanthese(exp);
if(ans==true){
    console.log("Balanced");
}else{
    console.log("Not Balanced");
}