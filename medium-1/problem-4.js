//stack - a list of values that grow and shrink dynamcally
//a stack can be implemented as an array that uses push and pop methods

//stack and register programming language is a language that uses a stack of values.
//each operation in the language operates on a register, which is the current value. The register is not part of the stack.

// minilang('3 PUSH PUSH 7 DIV MULT PRINT')
// 3 => register now 3, stack is empty
// PUSH register still 3, stack is [3]
// PUSH register still 3, stack is [3,3]
// 7 => register now 7, stack is [3,3]
// DIV => register now 2 (7/3), stack is [3]
// MULT => register now 6 (2 * 3), stack is []

function minilang(string) {
  let register = 0;
  let stack = [];
  let commandArr = string.split(" ");

  let commandObj = {
    PRINT: function() {
      console.log(register);
    },
    PUSH: function() {
      stack.push(register);
    },
    ADD: function() {
      register += stack.pop();
    },
    SUB: function() {
      register -= stack.pop();
    },
    MULT: function() {
      register *= stack.pop();
    },
    DIV: function() {
      register = Math.round(register / stack.pop());
    },
    MOD: function() {
      register %= stack.pop();
    },
    POP: function() {
      register = stack.pop();
    },
    PRINT: function() {
      console.log(register);
    }


  }

  commandArr.forEach(el => {
    if (Number(el)) {
      register = Number(el);
    } else {
      commandObj[el]();
    }
  })
}

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');