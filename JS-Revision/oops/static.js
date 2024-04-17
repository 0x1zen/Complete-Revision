class UserClass{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static sortByAge(a,b){
        return a.age-b.age;
    }
}
const myCLass1=new UserClass("Raj",21);
const myCLass2=new UserClass("Rohan",22);
const myCLass3=new UserClass("Chetan",23);
const users=[myCLass1,myCLass2,myCLass3];

users.sort(UserClass.sortByAge);

console.log(users);