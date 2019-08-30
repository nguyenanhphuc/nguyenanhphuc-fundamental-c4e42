function checkEmail (text) {
  return text.includes("@")
}

const input = prompt("Enter your email")
const result = checkEmail(input)
console.log(result)
