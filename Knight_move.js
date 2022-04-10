
const { mainModule } = require("process");
const readline=require('readline')

var visit=[] 
function main()
{
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
     
    rl.question("enter current position of knight: ",(line)=>{

        let x=parseInt(line.split(" ")[0])
        let y=parseInt(line.split(" ")[1])
       
        if(x>8 || x<1 || y<1 || y>8) {
                         console.log("Invalid position")
                         return;
                       }
        
        for(let i=0;i<9;i++)
        { let arr=[]
            for(let j=0;j<9;j++)
                arr.push(false)
            visit.push(arr)
        }

        find(x,y)

        for(let i=8;i>0;i--)
        {   output=""
            for(let j=1;j<9;j++)
            if(visit[i][j]===true) output+=("("+i+","+j+")")
            else output+="_"
            console.log(output)
        }
        rl.close();
    })

}
function find(x,y)
{ 
  visit[x][y]=true
  if(isSafe(x+1,y+1)) {find(x+1,y+1)}
  if(isSafe(x-1,y+1)) {find(x-1,y+1)}
  if(isSafe(x-1,y-1)) {find(x-1,y-1)}
  if(isSafe(x+1,y-1)) {find(x+1,y-1)}
  return;
}

function isSafe(x,y)
{
    if(x<9 && y<9 && x>0 && y>0 && visit[x][y]===false) return true
    return false
}


main()