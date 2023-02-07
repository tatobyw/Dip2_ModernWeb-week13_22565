//Assertion Type
let empCode:any = 111
let employeeCode = empCode as number
console.log(`${typeof(employeeCode)}`)

let empFrame:any = "Mark"
let empFirstName = <string>empFrame
console.log(`${empFirstName} is ${typeof(empFrame)}`)