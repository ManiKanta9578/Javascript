class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        console.log(`${this.password}abc`);
    }

    changeUserName(){
        console.log(this.userName.toUpperCase());
    }
}

const user1 = new User('Manikanta','mani@gmail.com','123');

user1.encryptPassword();
user1.changeUserName();


//Bihind the scene

function Users(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Users.prototype.encryptPassword = function(){
    console.log(`Encrypted password is ${this.password}abcd`);
}

Users.prototype.changeUserName = function(){
    console.log(this.userName);
}

const user2 = new Users('Mani', 'mk@gmail.com', '321');

user2.encryptPassword();
user2.changeUserName();