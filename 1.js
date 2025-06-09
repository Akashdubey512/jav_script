console.log("hi")
const course = {
    coursename : "javascript",
    student : "Akash"
}
console.log (course.coursename)
// destructuring of objects
// const {coursename} = course
// console.log (coursename)

const {coursename: cname } = course
console.log (cname)
// JSON api
// {
//     "student": "Akash",
//     "course": "javqscript"

// }
//      or in the form of array of objects
// [
//     {},
//     {},
//     {}
// ]     


