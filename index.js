function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*"){
    return function (whatYouAre = "special"){
        return 'You are '.concat(symbol,whatYouAre,symbol,'!')
    }
}