import React, {useState} from 'react';
import { evalInfixExpression } from '../services/math-evaluator';
import Display from './Display';
import NumPad from './NumPad';


const listOfOperators = ["*", "-", "+", "/"]

const Calculator = () => {

    const [display, setDisplay] = useState([])
    const [isLastInputANegative, setIsLastInputANegative] = useState(false)
    const [isLastInputAnEval, setIsLastInputAnEval] = useState(false);

    const resetState = () => {
        setIsLastInputANegative(false)
        setIsLastInputAnEval(false);
    }

    const clearDisplay = () => {
        console.log("clear")
        setDisplay(() => [])
        resetState();
    }

    const handleNumberPressed = (value) => {
        console.log("what is value", value, isLastInputAnEval, display)
        if (isLastInputAnEval) {
            console.log("aru here")
            setDisplay(()=>[value])
            setIsLastInputANegative(()=>false)
            setIsLastInputAnEval(()=>false)
            return;
        }
        const lastInput = display[display.length-1]
        let newDisplay = [...display]
        if (lastInput === "0" || lastInput === "-0") {
            newDisplay[newDisplay.length-1] = lastInput === "-0" ? `-${value}` : value           
        } else {
            if (isLastInputANegative) {
                console.log("isLastInputANegative", newDisplay)
                console.log("isLastInputANegative2", isLastInputANegative)
                newDisplay.pop();
                newDisplay.push(`-${value}`)
                setIsLastInputANegative(false)
            } else {
                if (listOfOperators.includes(lastInput)) {
                    newDisplay.push(value)
                } else {
                    console.log("hitt3", newDisplay)
                    const lastNum = newDisplay.pop();
                    newDisplay.push(`${lastNum ? lastNum : ''}${value}`)
                }
            }
        }

        setDisplay(()=> newDisplay)
    }

    const handleOperatorPressed = (value) => {
        let newDisplay = [...display]
        const lastInput = display[display.length-1]
        if (lastInput === undefined) {
            if (value === "-") {
                console.log("hitt2", newDisplay)
                setIsLastInputANegative(true)
                newDisplay.push(value)
                setDisplay(()=> newDisplay)
            }
            return;
        }

        if (lastInput !== undefined && isLastInputAnEval) {
            setIsLastInputAnEval(false)
        }

        if (listOfOperators.includes(lastInput)) {
            if (value === "-" && (lastInput === "/" || lastInput === "*")) {
                setIsLastInputANegative(true)
                newDisplay.push(value)
                setDisplay(()=> newDisplay)
            } else {
                //need to handle replacing operators
                if (isLastInputANegative) {
                    // just remove the last minus operator
                    // console.log("do I come here")
                    // newDisplay.pop()
                    // setDisplay(()=> newDisplay) 
                } else {
                    if ( (lastInput === "+" || lastInput === "-") ||
                        (value === "+" && (lastInput === "/" || lastInput === "*"))
                        ) {
                        newDisplay.pop()
                        newDisplay.push(value)
                        setDisplay(()=> newDisplay)
                    }
                }
            }
        } else {
            newDisplay.push(value)
            setDisplay(()=> newDisplay)
        }
    }

    const handleEvaluation = () => {
        const lastInput = display[display.length-1]
        if (listOfOperators.includes(lastInput)) {
            // last input is an operator
            console.log("ast input is an operator", display)
            return;
        }
        if (display.length < 3) {
            //incomplete expression
            console.log("Incomplete", display)
            return;
        }
        console.log("Evaluating", display.join(" "))
        const toEvaluate = display.join(" ")
        const result = evalInfixExpression(toEvaluate).toString();
        if (result.includes("Infinity")) {
            setDisplay(() => [])
            resetState()
        } else {
            setIsLastInputAnEval(true)
            setDisplay(()=> [result])
        }
    }

    return (
        <div className="calculator">
            <Display displayOutput={display}/>
            <NumPad handleEvaluation={handleEvaluation} handleNumberPressed={handleNumberPressed} handleOperatorPressed={handleOperatorPressed} handleClear={clearDisplay}/>
        </div>
    );
};

export default Calculator;