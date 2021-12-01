var firstNumbersList = []
var secondNumbersList = []
var method = ""
var sum = ""

function addNumber(number) {
    if(!method.length) {
        firstNumbersList.push(number)
    } else {
        secondNumbersList.push(number)
    }

    updateDisplay()

}

function addMethod(inputMethod) {
    method = inputMethod
    updateDisplay()
}

function calculate() {
    if(!firstNumbersList.length || !method || !secondNumbersList.length) {
        return
    }

    var numberOne = ""
    var numberTwo = ""

    for(var i = 0; i < firstNumbersList.length; i++) {
        numberOne += firstNumbersList[i]
    }

    for(var i = 0; i < secondNumbersList.length; i++) {
        numberTwo += secondNumbersList[i]
    }

    var result = 0

    if(method == "+") {
        result = Number(numberOne) + Number(numberTwo)
    } else if(method == "-") {
        result = Number(numberOne) - Number(numberTwo)
    } else if(method == "*") {
        result = Number(numberOne) * Number(numberTwo)
    } else {
        result = Number(numberOne) / Number(numberTwo)
    } 

    sum = result.toString()
    
    updateDisplay()

}

function clearCalc() {
    firstNumbersList = []
    secondNumbersList = []
    method = ""
    sum = ""
    updateDisplay()
}

function updateDisplay() {
    var resultElement = document.getElementsByTagName("h1")[0]
    
    var result = ""

    for(var i = 0; i < firstNumbersList.length; i++) {
        result += firstNumbersList[i]
    }

    result += " " + method + " "
    
    for(var i = 0; i < secondNumbersList.length; i++) {
        result += secondNumbersList[i]
    }

    if(sum.length) {
        result += " = " + sum
    }

    resultElement.innerText = result
}



