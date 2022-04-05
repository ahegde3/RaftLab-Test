const csv=require('csvtojson')
const Authors=require('../Classes/Authors_Class')
const Books = require('../Classes/Books_Class')
const Magazine=require('../Classes/Magazine_Class')



// const converter=csv()
// .fromFile('./Data/Authors.csv')
// .then((json)=>{
//     json.forEach((row)=>{
  
//         a=new Authors(row)
//        Object.assign(a,row)
//       //console.log(a.lastname)
//     })
    
// })
// .catch((e)=>console.log(e))


// csv()
// .fromFile('./Data/Books.csv')
// .then((json)=>{
//     json.forEach((row)=>{
  
//         b=new Books(row)
//        Object.assign(b,row)
//         console.log(b)
//     })
    
// })
// .catch((e)=>console.log(e))

csv()
.fromFile('./Data/Magazine.csv')
.then((json)=>{
    json.forEach((row)=>{
  
        m=new Magazine(row)
       Object.assign(m,row)
        console.log(m)
    })
    
})
.catch((e)=>console.log(e))