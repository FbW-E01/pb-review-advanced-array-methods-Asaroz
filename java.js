
// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.
const obj_array=[
    {name:"Bartell, Dickinson and Kassulke",url:"https://brett.name",number:"331.962.2652"},
    {name:"Kiehn and Sons",url:"http://kaycee.info",number:"399.922.5220 x36089"},
    {name:"Adams LLC",url:"://alyce.name",number:"(856) 826-9025 x9587"},
    {name:"Kautzer, Hermann and Lehner",url:"https://krystal.name",number:"(778) 600-4563 x45278"},
    {name:"Jast, Grant and King",url:"https://jacques.info",number:"(260) 391-5939"},
    {name:"Casper Group",url:"https://angelo.net",number:"(994) 557-0508"},
    {name:"Okuneva, Smith and Gorczany",url:"http://duane.biz",number:"409.487.5080 x6337"},
    {name:"Kunze Group",url:"http://willis.biz",number:"(381) 384-8105 x83291"},
    {name:"Wunsch, Borer and Stoltenberg",url:"http://rickie.name",number:"1-634-810-1298 x0392"},
    {name:"Thompson, Schmeler and Jerde",url:"https://dovie.org",number:"523.489.6244 x4999"},
]

console.log("________________________________")
// 2. Then based on the array, create a new array that contains just the names.

const name_array = obj_array.map(obj => obj.name)
console.log(name_array)

console.log("________________________________")
// 3. Go through the array and check each individual URL property - 
// if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.

console.log(obj_array.map(obj =>{return obj.url.startsWith("http")? obj.url :"Invalid URL for "+obj.url}))
console.log("________________________________")
// 4. Sort the array based on the "number" property to a random order.
console.log(obj_array.sort(()=> Math.random()-0.5))
console.log("________________________________")
// 5. Sort the array based on the "number" property, with the lowest number first.

console.log(obj_array.sort((a,b)=>{
return a.number.match(/\d+/g).join([])-b.number.match(/\d+/g).join([])
}))
console.log("________________________________")
// 6. Sort the array based on the "number" property, with the highest number first.
console.log(obj_array.sort((a,b)=>{
    return b.number.match(/\d+/g).join([])-a.number.match(/\d+/g).join([])
    }))
    console.log("________________________________")

// 7. Based on the array, create a string with all of the names of the people in the 
// array separated by a comma and then replace the last comma with the string `" and "`.

const name_string = obj_array.reduce((accu,current)=>{
    
    console.log(accu.name)
    return accu+"   ,   "+current.name})
console.log(name_string.replace(/,(?=[^,]*$)/, ' and'))
