const promiseOne = new Promise(function(resolve,reject){
    //Do an async calls
    //DBcalls,cryptography,network
setTimeout(function(){
    console.log('Async task  is complete');
    resolve()
},1000)
})
promiseOne.then(function(){
    console.log('Promise consumed')
})




new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("Async task  2 is complete")
    resolve()
 },1000)
}).then(function(){
    console.log("Async task 2 resolved")
})





const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){ 
        resolve({username: "Akash", email: "akash@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})





const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        // let error = true
        let error =false
        if(!error){
            resolve({username: "akash", password: "123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log("username")
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log("The promise is resolved or rejected")
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // let error =true;
        let error = false;
        if(!error){
            resolve({username: "javascript",password: "1234556"})
        }
        else{
            reject('ERROR: JS WENT WRONG')
        }
    },1000)
})

async function consumePromiseFive() {
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()


async function getData() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))