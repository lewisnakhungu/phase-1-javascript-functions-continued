// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }



//LAB
 function mondayWork(activity = "go to the office") {
   return `This Monday, I will ${activity}.`;
 }
 

//LAB 
function wrapAdjective (flair ="*"){
    return function(adjective ="special"){
        return (`You are ${flair}${adjective}${flair}!`)

    };
   }