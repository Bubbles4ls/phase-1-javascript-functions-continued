// code your solution here
function saturdayFun(activity="roller-skate") {

    return `This Saturday, I want to ${activity}!`;

  }
  
  /*  defines mondayWork function expression as specified */

  let mondayWork = function(activity="go to the office") {

    return `This Monday, I will ${activity}.`;
  }

  let wrapAdjective = function(style="*") {

    return function(adjective="awesome") {

      return `You are ${style}${adjective}${style}!`;

    }
    
  }
