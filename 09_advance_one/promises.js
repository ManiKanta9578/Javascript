const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(() => console.log("Promise 1 resolve"));
    }, 1000);
})

promiseOne.then(() => console.log("Async 1 successfull "))

const promiseTwo = new Promise((resolve, reject) => {
    resolve({ userName: 'Mani', password: '123' });
})

promiseTwo.then((data) => console.log(data));

const promiseThree = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ userName: 'Manikanta9578', password: '1234' });
    } else {
        reject("Something went wrong");
    }
})

promiseThree
    .then((data) => {return data.userName})
    .then((name) => console.log("Name: ", name))
    .catch((err) => console.error(err))
    .finally(() => console.log('The promise is either resolved or rejected'))


const promiseFour = async() => {
    try {
        let response = await fetch('https://api.github.com/users/manikanta9578');
        let data = await response.json();
        console.log("data:", data);
    } catch (error) {
        console.error("Error");
    }
}

promiseFour();

fetch('https://api.github.com/users/manikanta9578')
    .then((response) => {return response.json()})
    .then((data) => console.log("data.name",data.name))
    .catch((err) => console.error(err))
    .finally(() => console.log("Finally fetched all data"))