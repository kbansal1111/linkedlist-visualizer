class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }

    AddAtStart(value){
        const newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }

    AddAtEnd(value){
        const newNode=new Node(value);
        if(this.head===null){
            this.head=newNode;
        }
        else{
            let current=this.head;
            while(current.next!==null){
                current=current.next;
            }
            current.next=newNode;
        }
        this.size++;
    }

    AddAtPosition(value,index){
        if(index<0 ||index>this.size){
            throw new Error("Index out of bounds");
        }
        if(index===0){
            this.AddAtStart(value);
            return;
        }
        const newNode=new Node(value);
        let current =this.head;
        let previous=null;
        let count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        previous.next=newNode;
        newNode.next=current;
        this.size++;
    }
    RemoveAtStart(){
        if(this.head===null){
            return null;
        }
        this.head=this.head.next;
        this.size--;
    }

    RemoveAtEnd(){
        if(this.head===null){
            return null;
        }
        if(this.head.next===null){
            this.head=null;
            this.size--;
            return;
        }
        let current=this.head;
        while(current.next.next!==null){
            current=current.next;
        }
        current.next=null;
        this.size--;
    }

    RemoveAtPosition(index){
        if(this.head===null){
            return null;
        }
        if(index<0 ||index>this.size){
            throw new Error("Index out of bounds");
        }
        if(index===0){
            this.RemoveAtStart();
            return;
        }
        let current=this.head;
        let previous= null;
        let count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        previous.next=current.next;
        this.size--;
    }
    reverse(){
        let previous=null;
        let current=this.head;
        let next=null;
        while(current!==null){
            next=current.next;
            current.next=previous;
            previous=current;
            current=next;
        }
        this.head=previous;
    }
}

export default LinkedList;