const user = {
    userName: 'Mani',
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        // console.log('Got user details from the database');
        // console.log(this.userName);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
console.log(this);


function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        console.log(`Welcome ${this.userName}`);
    }

    return this;
}

const userOne = new User('Manikanta', 7, false);
const userTwo = new User('Mani', 5, true);
console.log(userOne);