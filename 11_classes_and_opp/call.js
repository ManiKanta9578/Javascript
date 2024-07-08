function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function CreateUser(userName, email, password){
    SetUsername.call(this,userName);
    this.email = email;
    this.password = password;
}

const user1 = new CreateUser("mani", "mani@fb.com", "123")
console.log(user1);