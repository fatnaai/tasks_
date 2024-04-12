 
 const getuserChoise=(userinput)=>{
    userinput = userinput.toLowerCase();
    if(userinput=='rock' || userinput=='paper'|| userinput=='scissors'){
         return userinput;
    }
    else
        console.log("error");
    };
const getComputerChoise=()=>{
   let randomNumber=Math.floor(Math.random*3);
   switch(randomNumber){
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissors';
}
}
 const determineWinner=(userChoise,computerChoise)=>{
  if(userChoise=='bomb'){
    return 'Suprise!You won!';
  }
    if(userChoise==computerChoise){
        return ' the game is a tie';
    }
    if(userChoise=='rock'){
         if(computerChoise=='paper'){
            return 'the computer won'
         }
         else {
            return'the user won';
         }
    }
  if (userChoise=='paper'){
    if(computerChoise=='scissors'){
        return 'computer won';
    }
    if(computerChoise=='rock'){
       return 'user won';
    }
  }
  if (userChoise=='scissors'){
    if(computerChoise=='paper'){
        return 'computer won';
    }
    else{
        return'user won';
    }
    }
  }
  const playGame=()=>{
    let userChoise=getuserChoise('rock');
    let computerChoise=getComputerChoise();
    console.log('your choise is '+userChoise);
    console.log('the computer choise is '+computerChoise);
    console.log(determineWinner(userChoise,computerChoise));

  }
  playGame();
