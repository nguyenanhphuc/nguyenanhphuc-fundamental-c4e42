//FUNCTION
// Khai báo hàm
function calculate(a, b, tinh) {
    let c = 0
    if(tinh=="+") {
        c = a+b
    }
    if(tinh=="-") {
        c = a-b
    }
    if(tinh=="*") {
        c = a*b
    }
    if(tinh=="/") {
        c = a/b
    }
    return c;
}
// Gọi hàm
// fruitful function
// const c = calculate(4,6,"+")
// console.log(c)
