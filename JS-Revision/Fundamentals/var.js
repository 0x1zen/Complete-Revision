function varIsFunctionScoped(){
    if(true){
        var x=10;
        console.log(x);
    }
    console.log(x);
}

varIsFunctionScoped(); // prints 10 twisce since var is function scoped