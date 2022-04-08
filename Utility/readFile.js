const csv=require('csvtojson')
const Authors=require('../Classes/Authors_Class')
const Books = require('../Classes/Books_Class')
const Magazine=require('../Classes/Magazine_Class')


function getData()
{ let author=[]
  let books=[]  
  let magazine=[]


let p1=csv({delimiter:';'})
    .fromFile('./Data/Authors.csv')
    .then((json)=>{
        json.forEach((row)=>{
    
            a=new Authors(row)
        Object.assign(a,row)
            author.push(a)
        
        })
        
    })
    .catch((e)=>console.log(e))


let p2=csv({delimiter:';'})
    .fromFile('./Data/Books.csv')
    .then((json)=>{
        json.forEach((row)=>{
    
            b=new Books(row)
        Object.assign(b,row)
            books.push(b)
            //console.log(b)
        })
        
    })
    .catch((e)=>console.log(e))

let p3=csv({delimiter:';'})
    .fromFile('./Data/Magazine.csv')
    .then((json)=>{
        json.forEach((row)=>{
    
            m=new Magazine(row)
        Object.assign(m,row)
        magazine.push(m)
        
        })
        
    })
    .catch((e)=>console.log(e))
    
    return Promise.all([p1,p2,p3]).then(()=>{return {author,books,magazine}})
    

    }

module.exports={getData}