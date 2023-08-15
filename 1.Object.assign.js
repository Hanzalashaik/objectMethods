const obj={
    name:"hanzala",
    age:16
}

const newobj={}

let clone=Object.assign(newobj,{alive:true},obj)

console.log(clone);//{ alive: true, name: 'hanzala', age: 16 }
