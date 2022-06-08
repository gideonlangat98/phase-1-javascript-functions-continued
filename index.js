// code your solution here
function saturdayFun(toDo = "roller-skate"){
        return `This Saturday, I want to ${toDo}!`;
    }

let mondayWork = function(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`;
}

let wrapAdjective = function(emphatic = "*") {
    return function(adjective = "special"){
    return `You are ${emphatic}${adjective}${emphatic}!`;
    }
}
