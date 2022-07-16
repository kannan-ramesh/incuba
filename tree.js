
 class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
 }
 
let root;

function tree(root){
    let sum=0;
    console.log("ff");
    let leftval=0;
    let rightval=0;
    leftval=root.left.val;
    rightval=root.right.val;
    //console.log(root);
    console.log(leftval);
   
    
    sum=root.left.left.left.val+root.left.left.right.val;
    console.log(sum);
   // sum(leftval,rightval)
    


}


root=new Node(5);
root.left=new Node(45);
root.right=new Node(10);
root.left.left=new Node(15);
root.left.right=new Node(30);
root.right.right=new Node(5);
root.left.left.left=new Node(10);
root.left.left.right=new Node(5);
root.right.right.left=new Node(2);
root.right.right.right=new Node(2);

tree(root);