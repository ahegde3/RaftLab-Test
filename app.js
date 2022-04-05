const Util=require('./Utility/readFile')

var author,books,magazine
Util.getData()
     .then((res)=>{
         author=res.author
         books=res.books
         magazine=res.magazine
        // var {author,books,magazine}=res
         //console.log(author)
        // displayBookMagazine()
       // findByISB('1215-4545-5895')
      // findByEmail('null-walter@echocat.org')
       sortByTitle()
     })

function displayBookMagazine()
{  console.log()
    books.map((row)=>console.log(row))
}


function findByISB(isbn)
{
    let res=[]
    books.map((row)=>{
        if(row.isbn === isbn) res.push(row)
    })
    magazine.map((row)=>{
        if(row.isbn === isbn) res.push(row)
    })
    
    console.log(res)
}

function findByEmail(email)
{
    let res=[]
    books.map((row)=>{
        if(row.authors === email) res.push(row)
    })
    magazine.map((row)=>{
        if(row.authors === email) res.push(row)
    })
    
    console.log(res)   
}

function sortByTitle()
{
    list=[]
    books.forEach(element => {
        list.push(element)
    });
    magazine.forEach(element => {
        list.push(element)
    }); 
    list.sort((a, b) => a.title.localeCompare(b.title));
    console.log(list)
}
//console.log(data) 