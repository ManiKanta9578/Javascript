class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`User Name is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        // this.userName = userName;
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.userName}`);
    }
}

let teacher1 = new Teacher("Manikanta", 'mani@gmail.com','123');
teacher1.logMe()

let user1 = new User('Mani');
user1.logMe();

console.log(teacher1 instanceof User);