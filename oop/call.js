function SetUsername(username){
    //complex db calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
SetUsername.call(this,username)
this.email = email
this.password = password
}

const user = new createUser("Akash","akash@vcgh.com","123")
console.log(user)