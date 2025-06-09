// rest operator it combines all enteries in array
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))
function calculateCartPrice_2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice_2(200,400,500,600))
// here num1 will store 500 and 600 only

// passing objects in functions
const user ={
    username: "Akash",
    price: "599"
}
function handleObjects( anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
// you can write anything  on behalf of anyobject
handleObjects(user)
handleObjects({
    username: "sam",
    price: "399"
})

// declaring a function as a datatype const

// console.log(addTwo(5));  in this type of declaration we cant access 
// the function before its declaration
const addTwo = function(num){
    return num +2
}
console.log(addTwo(5));
//     arrow functions:
        //  use of this
   
        const user2 ={
            username: "Akash",
            price: "9999",
            welcomemessage : function() {
                console.log(`${this.username}, welcome to website`);
            }
        }
         user2.welcomemessage()
         user2.username="Alok"
         user2.welcomemessage()
          
        //  arrow function
        const chai = () => {
            let username="Akash"
            console.log("hello javascript");
            // console.log(this); returns empty object
            //   console.log(this.username); returns undefined
        }
chai()
function chai2(){
let username="Akash"
        
            // console.log(this); returns too much values
            //   console.log(this.username); returns undefined
}
chai2()
const increaseOne =(num)=> ++num
// const increaseOne =(num)=> (++num)
console.log(increaseOne(5))