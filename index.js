// Your code here
function saturdayFun(target="roller-skate") {
    return `This Saturday, I want to ${target}!`;
}

function mondayWork(target="go to the office") {
    return `This Monday, I will ${target}.`;
}

function wrapAdjective(greeting="*") {
    return function(msg="special") {
      return `You are ${greeting}${msg}${greeting}!`
    }
}
  
