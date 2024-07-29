class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}mani`
    }

    set password(value){
        this._password = value;
    }
}

const mani = new User('mani.ai','abc');
console.log(mani.email);