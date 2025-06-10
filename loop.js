// forofloop
const arr= [1,4,5,3,6,7]
let sum=0;
for (const element of arr) {
    sum=sum+element;   
}
console.log(`sum is ${sum}`)

// maps
// maps hold only unique values in a given order
const map =new Map()
map.set('IN','India')
map.set('USA','America')
console.log(map)
// iteration in maps
for (const [key,value] of map) {
    console.log(key);
}
// this method of iteration by forof lop is not applicable in objects
const myobj ={
    rb: "ruby",
    ph: "php",
    gu:"guvava"
}
for (const key in myobj) {
   console.log(key); 
}
for (const key in myobj) {
   console.log(myobj[key]); 
//    it will give values
}
// forin  for arrays it will print keys that are inndxs
const alr=[3,3,7,6,4,3,8,987,87,89,67,90,65,7,8]
for (const key in alr) {
       console.log(key); 
       console.log(alr[key])
}
//foreach loop for arrays

const coding = ["java","c","cpp","javascript","php"]
coding.forEach(function (item){
    console.log(item);
})
 
//  filter in Array
const mynums = [1,2,3,4,5,6,7,8,9]
const newnums = mynums.filter( (num)=> num>4)
//        or
//  const newnums = mynums.filter( (num)=> {
//      return num>4})
console.log(newnums)
     
    //   map callback function for arr

const mynumbers = [1,2,3,4,5,6,7,8,9]
const mynos =mynumbers.map((num)=>num+10)
     console.log(mynos)
    //  this is chaining of methods we can also use filter after map in one go 
const mynors = mynumbers.map((num)=>num*10).map((num)=>num+1)
console.log(mynors)
 
    // reduce method in arrays used in shopping carts
    const mytotal=mynumbers.reduce((acc,curr) => acc+curr,0)
// it will return sum of array because initial value of accumulator is 0
console.log(mytotal)