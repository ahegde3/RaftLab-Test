var readline = require('readline');

const Util=require('./Utility/readFile')
const writer=require('./Utility/writeFile')

var author,books,magazine
var list=[]
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 console.log("Enter 1 to read csv files ")
 console.log("Enter 2 to print books and magazine ")
 console.log("Enter 3 to search by isbn number")
 console.log("Enter 4 to search by authors email id")
 console.log("Enter 5 to sort books,magazine by title")
 console.log("Enter 6 to write books magazine to csv file")
 console.log("Enter close to close") 
 
 rl.setPrompt('>> ');
 rl.prompt();
 rl.on('line', function(line) {
     if(line.length>1) 
       {   
           var parameter=line.split(' ')[1]
           line= line.split(' ')[0]
       }
    switch(line) {
        case '1':
            readData()
            break;
        case '3':
            if(books && magazine)
               findByISB(parameter)
            else console.log("Data not read press 1 first")
            break; 
        case '4':
            if(books && magazine)
                 findByEmail(parameter)
            else console.log("Data not read press 1 first")
           
            break;      
        case '5':
            if(books && magazine)
                sortByTitle()
             else console.log("Data not read press 1 first")
            break;    
        case '6':
            if(books && magazine && list.length>0) writer.writeCsv(list)
            else if(list.length==0) {createList() 
                                     writer.writeCsv(list)
                                    }
            else console.log("Data not read press 1 first")                        
            break;    
        case '2':
            displayBookMagazine()
            break;           
        case 'close':
            console.log('Have a great day!');
            process.exit(0);

        default:
            console.log('Say what? I might have heard `' + line.trim() + '`');
        break;
    }
    rl.prompt();
})




function readData()
{
    Util.getData()
    .then((res)=>{
        author=res.author
        books=res.books
        magazine=res.magazine
    })
}


function displayBookMagazine()
{  
    books.map((row)=>{console.log("title: "+row.title)
                      console.log("ISBN: "+row.isbn)
                      console.log("Author: "+row.authors)
                      console.log("===============================")
                    })
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
    //console.log(JSON.stringify(res))
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
   if(list.length===0) createList()

    list.sort((a, b) => a.title.localeCompare(b.title));
    console.log(list)
}

function createList()
{
    books.forEach(element => {
        list.push(element)
    });
    magazine.forEach(element => {
        list.push(element)
    }); 
}