function Handler(){
    var count=0;
    this.incrementCount=function (){
        count++;
        console.log(count);
    }
    this.decrementCount=function (){
        count--;
        console.log(count);
    }
}

var answer=new Handler;
answer.incrementCount();
answer.decrementCount();