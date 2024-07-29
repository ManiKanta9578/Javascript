function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(User, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            return this._email = value;
        }
    })

    Object.defineProperty(User,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const user1 = new User('mk@gmail.com','Abc@123');

console.log(user1._email);