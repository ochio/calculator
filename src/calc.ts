export function calculate(expression: (number | string)[]): number {
  let result = 0;
  let operator = '+';

  for (const item of expression) {
    if (typeof item === 'number') {
      switch (operator) {
        case '+':
          result += item;
          break;
        case '-':
          result -= item;
          break;
        case '*':
          result *= item;
          break;
        case '/':
          result /= item;
          break;
      }
    } else if (typeof item === 'string' && ['+', '-', '*', '/'].includes(item)) {
      operator = item;
    }
  }

  return result;
}

