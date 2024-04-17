class Animal{
    speak(){
        console.log("Animal Makes Sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log(
            "Dog Barks"
        )
    }
}
class Cat extends Animal{
    speak(){
        console.log(
            "Cat Meows"
        )
    }
}

const catClass=new Cat();
catClass.speak();
