
var snakeArray=[{x:11,y:11},
{x:11,y:12},
{x:11,y:13}];
let direction={x:0,y:0};
var previousdir={x:0,y:0};
var s;
var r;
var turn=0;
var val=700;

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

function selectspeed(){
     val=document.getElementById('speed').value
     console.log(val)
    
}


board=document.getElementById('board');

while(true){ 
drawsnake(board)
drawfood(board)
// window.addEventListener('keydown',e=>{

//     switch(e.key)
//     { 
   
//         case 'ArrowUp':
//             direction={x:0,y:-1}
//             movesnake(board,e)
         
//             break
            
//         case 'ArrowDown':
//            direction={x:0,y:1}
//            movesnake(board,e)
//             break
//         case 'ArrowLeft':
//              direction={x:-1,y:0}
//              movesnake(board,e)
//              break
           
//         case 'ArrowRight':
//            direction={x:1,y:0}
//            movesnake(board,e)
//            break    
           
//     }

// })
function func(p,q){
    direction={x:p,y:q}
    movesnake(board,direction)
}


break
}





async function drawsnake(board){
    board.innerHTML=""
for( var i=0;i<snakeArray.length-1;i++)    
{
const snakediv=document.createElement('div')
snakediv.classList.add('snakebox');
snakediv.style.gridRowStart=snakeArray[i].y;
snakediv.style.gridColumnStart=snakeArray[i].x;
board.appendChild(snakediv)
}
const snakediv=document.createElement('div')
snakediv.classList.add('snakebox');
snakediv.style.gridRowStart=snakeArray[i].y;
snakediv.style.gridColumnStart=snakeArray[i].x;
board.appendChild(snakediv)
snakediv.style.backgroundColor='white'
}



function drawfood(board){
   board.innerHTML=""
    s=Math.floor(Math.random()*21)+1;
    r=Math.floor(Math.random()*21)+1;
    drawfood1(s,r)    

}

 function movesnake(board,direction){  

 let k=setInterval(async function fun(){
      
for(var i=0;i<=snakeArray.length-2;i++)
{
    
    snakeArray[i].y=snakeArray[i+1].y;
    snakeArray[i].x=snakeArray[i+1].x;  
    
}
snakeArray[i].x=(snakeArray[i].x+direction.x);
snakeArray[i].y=(snakeArray[i].y+direction.y);





if(s==snakeArray[snakeArray.length-1].y && r==snakeArray[snakeArray.length-1].x){
    console.log("atefood") 
snakeArray.push({x:snakeArray[snakeArray.length-1].x+direction.x ,y: snakeArray[snakeArray.length-1].y+direction.y})

drawfood(board)
 turn+=1
document.getElementById('score').innerText="score:"+turn


}

  else{ 
drawsnake(board)
drawfood1(s,r)
if(snakeArray[snakeArray.length-1].x <1 ||snakeArray[snakeArray.length-1].x >21 ||snakeArray[snakeArray.length-1].y <1 ||snakeArray[snakeArray.length-1].y>21){
   document.getElementById('buttons').remove()
   document.getElementById('ree').remove()
   board.id='gameover'
 board.innerHTML='Gameover'
   
    
    

}
 }

 

 if(direction!=previousdir)
clearInterval(k)
 
},val);
previousdir=direction
 }

 

function drawfood1(s,r){
  
    board.innerHTML=""
    drawsnake(board)
     var fooddiv=document.createElement('div')
     fooddiv.classList.add('foodbox')
    //  let s=Math.floor(Math.random()*21)+1;
    //  let r=Math.floor(Math.random()*21)+1;
    //  console.log(k,l)
     fooddiv.style.gridRowStart=s
     fooddiv.style.gridColumnStart=r
     board.appendChild(fooddiv)
 
}