console.log(this);

let person = {
    firstName:"Ali",
    lastName:"Heydarzadeh",
    age: "28",
    fullName:function(){
        console.log("here we get the fullName");
        console.log(this.firstName+" "+this.lastName);

    }
};

console.log(person.firstName);
console.log(person.fullName());