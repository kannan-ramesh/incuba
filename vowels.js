//L2-Q1

function Vowels(str) {
    let arr="";

    for(var i=0; i<str.length; i++){
        //check vowels letter in str
        if(str[i] =='a'|| str[i] =='e' || str[i] =='i' ||str[i] =='o' || str[i] =='u'){
            arr += str[i];
        }
    }

    let temp="";
    
    //reverse str
    for(var i=arr.length-1;i>=0;i--){
        temp += arr[i];
    }

    //check palindrome
    if(arr== temp){
        console.log("Palindrome yes");
    }else{
        console.log("palindrome no");
    }
}

Vowels("miami");