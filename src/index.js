module.exports = function check(str, bracketsConfig) {
  let stack =[];
  let openBrackets = [];
  let closeBrackets = [];
  let pair = [];

 for (let i = 0; i < bracketsConfig.length; i++) {
  openBrackets.push(bracketsConfig[i][0])
};
for (let i = 0; i < bracketsConfig.length; i++) {
  closeBrackets.push(bracketsConfig[i][1])
};
for (let i = 0; i < bracketsConfig.length; i++) {
  pair[bracketsConfig[i][0]] = bracketsConfig[i][1];
};

  for (let i=0; i < str.length; i++) {

    if (!closeBrackets.includes(str[i]) && openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (pair[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      }
      else {
        stack.push(str[i]);
      }
    }
  }
return stack.length === 0;
}
