let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore=userScore+1;
        console.log("you win");
        msg.style.backgroundColor="green";
        msg.innerText=`You win! your choice ${userChoice} beats comp choice ${compChoice} `;
        user.innerText=userScore;
    }
    else{
        compScore=compScore+1;
        msg.style.backgroundColor="red";
        msg.innerText=`Comp win! Comp choice ${compChoice} beats your choice ${userChoice}`;
        console.log("comp win");
        comp.innerText=compScore;
    }
    
}
const drawGame=(userChoice,compChoice)=>{
    console.log("draw Game");
    msg.style.backgroundColor="#4A1942";
    msg.innerText=`Draw! your choice ${userChoice} and comp choice ${compChoice} are same`;
}
const generateCmpchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock paper scissor->generate randomly
}
const playGame=(userChoice)=>{
    console.log("choice clicked",userChoice);
    //generate computer choice->modular
    const compChoice=generateCmpchoice();
    console.log("choice clicked",compChoice);
    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userwin= compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userwin= compChoice==="scissors" ? false:true;
        }
        else{//scissors
            userwin= compChoice==="rock" ? false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
};