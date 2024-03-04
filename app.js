let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let para = document.querySelector('p');
let newGame=document.querySelector('#new-game');
let main = document.querySelector('main');
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let turnO=true;
const resetGame=()=>{
    turnO=true;
    enableBtn();
    para.classList.add('hide');
    newGame.classList.add('hide');
    reset.classList.remove('hide');
    main.classList.remove('hide');
    
}

const disableBtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
}


boxes.forEach(box=>(
    box.addEventListener('click',(e)=>{
        if(turnO){
            e.target.innerHTML='0';
            e.target.style.color='#7E191B';
            turnO=false
        }else{
            e.target.innerHTML='&times;';
            e.target.style.color='#667eea';
            turnO=true;
        }
        box.disabled=true;
        
        let isWinner= checkwinner()
       

        
    })  
));



function checkwinner(){
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1 !=""&&pos2 !=""&&pos3 !=""){
            if(pos1===pos2&&pos2===pos3){
            para.innerHTML=`congratulations! ${pos1} won the game press new game button to play Again!`;
            para.classList.remove('hide');
            newGame.classList.remove('hide');
            reset.classList.add('hide');
            main.classList.add('hide');

            disableBtn();
        }
    }
}
};

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);