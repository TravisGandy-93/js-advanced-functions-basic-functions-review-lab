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
  
var Calculator = { 
  add: function(a,b){ return a + b },
  subtract: function(a,b){ return a - b },
  multiply: function(a,b){ return a * b },
  divide: function(a,b){ return a / b }
  }

  function actionApplyer(start, functions) {
    let i = start;
    for (let acc = 0; acc < functions.length; acc++) {
      i = functions[acc](i);
    }
    return i;
  }