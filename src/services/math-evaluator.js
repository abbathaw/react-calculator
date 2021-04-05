
const getPrecedence = (char) => {
    switch (char) {
        case '+':
        case '-':
          return 1;
        case '*':
        case '/':
          return 2;
      }
      return -1;
}

const evalInfixExpression = (expression) => {
    return evalPostfix(infix2postfix(expression));
}

function isOperator(c) {
    return c == '+' || c == '-' || c == '*' || c == '/';
  }

function infix2postfix(stringExpression) {
    let postfix = "";
    let stack = new Stack();
    let expression = stringExpression.split(" ")
    let char;

    for (let i = 0; i< expression.length; i++) {
        char = expression[i];
        if (isOperator(char)) {
            while (!stack.isempty() && getPrecedence(char) <= getPrecedence(stack.peek())) {
                postfix = postfix + ' ' + stack.pop() + ' '
            }
            stack.push(char)
        } else {
            postfix = postfix + ' '  + char + ' ' 
        }
    }

    while (!stack.isempty()) {
        postfix = postfix + ' ' + stack.pop() + ' ' 
    }
    return postfix.replace(/\s\s+/g, ' ').trim()
}

function evalPostfix(expression) {
    const expressionArray = expression.split(" ");
    const numberStack = new Stack();
    for (let i = 0; i < expressionArray.length; i++) {
      if (expressionArray[i] === ("+")
              || expressionArray[i] === ("-")
              || expressionArray[i] ===("/")
              || expressionArray[i] === ("*")
      ) {
        let right = numberStack.pop();
        let left = numberStack.pop();
        let value = 0;
        if (expressionArray[i] === ("+")) {
          value = Number(left) + Number(right);
        } else if (expressionArray[i] === ("-")) {
          value = Number(left) - Number(right);
        } else if (expressionArray[i] === ("*")) {
          value = Number(left) * Number(right);
        }else if (expressionArray[i] === ("/")) {
          value = Math.floor(Number(left) / Number(right));
        }
        numberStack.push(value);
      } else {
        numberStack.push(expressionArray[i]);
      }
    }
    return numberStack.pop();
  }

// build our own stack
class Stack {
    items = []
    #top = 0
    push = (element) => {
        this.items.push(element)
        this.#top = this.#top +1;
    }
    peek = () => {
        return this.items[this.#top-1]
    }
    pop = () =>  {
        if( this.isempty() === false ) {
            this.#top = this.#top - 1;
            return this.items.pop()
        }
    }
    isempty = () => this.items.length === 0
    empty = () => (this.items.length = 0)
    size = () => this.items.length
  }

//   console.log(
//       "test1", evalInfixExpression("2 + -3 * 4 - 8")
//   )

//   console.log(
//     "test2", evalInfixExpression("3 - 7 + 8 / 2")
// )

// console.log(
//     "test3", evalInfixExpression("2 * 10 + 5 * 3 / 2")
// )

// console.log("evalpostfix", evalPostfix("2 -3 4 * + 8 -"))

module.exports = { evalInfixExpression }