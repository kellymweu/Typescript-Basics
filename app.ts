let variable = "hello"

variable = "hi"

let age = 18

// age="eighteen"

let ageWithType: number;
ageWithType = 18
// ageWithType = "eighteen"

let testString: string

testString = "hello"

let testBoolean: boolean

testBoolean = false

let testStringOrNumber: string | number
//union types 
testStringOrNumber = 10
testStringOrNumber = "10"

//ARRAY
let names = ["john", "jane", "tom"]

//names.push(3)
names.push("mike")

let numbers = [11,22,35]

//numbers.push(true)
numbers.push(92)

let testStringArray : string[]

//testStringArray = [1,2,3]
testStringArray = ["one", "two", "three"]

let testNumberArray : number[]

//testNumberArray = [true, "hi", 23]
testNumberArray = [2, 5.6, 23]

let testStringOrNumberArray : (string | number)[]
testStringOrNumberArray = [1, "two", 4]

//OBJECTS
let user = {
    username: "john",
    age: 22,
    isAdmin: false
}

user.username = "jane"
user.age = 29
user.isAdmin = true

//user.phone = "+24553221"

let userObj : {
    username: string
    age: number
    isAdmin: boolean
}

userObj = {
    username: "john",
    age: 23,
    isAdmin: true,
    //phone: "+2533355"
}

let userObj2 : {
    username: string
    age: number
    isAdmin: boolean
    phone?: string
}
//? is conditional

userObj2 = {
    username: "john",
    age: 23,
    isAdmin: true,
    phone: "+2533355"
}


//ANY 

let testAny: any;

testAny = 12
testAny = "hello"
testAny = true
testAny = ["there"]
testAny = {}

let testAnyArray : any []

testAnyArray = [1, "two", false, []]

// FUNCTIONS

let sayHi = () => {
    console.log("hi, welcome")
}

// sayHi = "hi"

let funcReturnString = ():string=>{
    console.log("hi")
    return "Kelly Dev"
}

let multiple = (num : number): number=> {
    return num * 2
};

let multiple1 = (num : number)=> {
    return num * 2
};

//the 2 functions ae the same

let multiple2 = (num : number): void=> {
    //return num * 2
    //Do sth but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2
};

sum (2,3)

let func = (user:{username:string, age:number, phone?:string}) => {
    console.log(user.username),
};

// TYPE ALIASES

type UserType = {
    username: string;
    age: number;
    phone?: string
}

let betterFunc = (user:UserType)=>{
    console.log(user.username)
}

type myFunc = (a: number, b:string) => void

let write : myFunc = (num, str) => {
    console.log(num + "times" + str)
}


type UserType2 = {
    username: string;
    age:number;
    phone?:string;
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    username: "john",
    age: 43,
    // theme: "pink"
    theme: "dark"
}


//INTERFACES

interface IUser {
    username:string,
    email:string,
    age:number,
}

interface IEmployee extends IUser {
    employeeId:number
}

const employee : IEmployee = {
    username:"tom",
    email:"tom@gmail.com",
    age:43,
    employeeId: 123,
}

const client : IUser = {
    username:"tom",
    email:"tom@gmail.com",
    age:43,
}

//GENERICS

interface IAuthor {
    id: number,
    username: string
}

interface ICategory {
    id: number;
    title: string;

}

interface IPost {
    id:number;
    title:string;
    desc:string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id:number;
    title:string;
    desc:string;
    extra: T[];
}

const testMe : IPostBetter<string> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["str", "str2"]
}

interface IPostEvenBetter <T extends object> {
    id:number;
    title:string;
    desc:string;
    extra: T[];
}

const testMe2 : IPostEvenBetter<{id: number, username: string}> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{id: 1, username:"john"}],
}

const testMe3 : IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{id: 1, username:"john"}],
}

const testMe4 : IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{id: 1, title:"cat"}],
}



