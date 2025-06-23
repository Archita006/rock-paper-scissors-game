var bttn= document.querySelectorAll("button");
var clickedBttn;
var compMove;
 var score=JSON.parse(localStorage.getItem("gameScore"))||0;
for(let i=0;i<bttn.length;i++)
{
  bttn[i].addEventListener('click', function()
   { 
      clickedBttn = this.id;
      console.log(clickedBttn);
      
      computerMove();
      move();
      

      if(clickedBttn==='reset')
      {
        reset()
      }
     
   })
}


function computerMove()
{
  var randomMove = Math.floor(Math.random()*3)
  if(randomMove===1)
  {
     compMove = 'rock';
  }

  else if(randomMove===2)
  {
    compMove = 'paper';
  }

  else
  {
    compMove = 'scissor';
  }
  console.log(randomMove)
  move(compMove);
  
}
function move(compMove)
{
  var playerMove = clickedBttn;
 
  if(compMove==='rock'&& playerMove==='paper' || compMove==='paper'&& playerMove==='scissor'||compMove==='scissor'&& playerMove==='rock'  )
  {
    document.querySelector('.resultDisplay').innerHTML='You Win';
    scoreDisplay('win')
  }

  else if(compMove==='scissor'&& playerMove==='paper' ||compMove==='rock'&& playerMove==='scissor'||compMove==='paper'&& playerMove==='rock'   )
  {
    document.querySelector('.resultDisplay').innerHTML='You Lose ';
    
   
  }
  if(compMove===playerMove)
  {
     document.querySelector('.resultDisplay').innerHTML='Draw';
    
  }


}
 document.querySelector('.scoreDisplay').innerHTML=`Score: ${score}`;

function scoreDisplay(result)
{
 

  if(result==='win')
  {
    score=score+1;
    localStorage.setItem("gameScore",JSON.stringify(score));
  }
  else
  {
    score=0;
  }
    document.querySelector('.scoreDisplay').innerHTML=`Score: ${score}`;
 
 
}

function reset()
{
 scoreDisplay('stop');
}
