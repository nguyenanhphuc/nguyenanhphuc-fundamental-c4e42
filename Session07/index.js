//FUNCTION
// Khai báo hàm
function calculate() {
    const a = Number(prompt("Nhap a"))
    const b = Number(prompt("Nhap b"))
    const tinh = prompt("Nhap phep tinh? +/-/x/:")
    if(tinh=="+") {
        c = a+b
        console.log(`${[a]}+${[b]}=${[c]}`)
    }
    else if(tinh=="-") {
        c = a-b
        console.log(`${[a]}-${[b]}=${[c]}`)
    }
    else if(tinh=="x") {
        c = a*b
        console.log(`${[a]}x${[b]}=${[c]}`)
    }
    else if(tinh==":") {
        c = a/b
        console.log(`${[a]}:${[b]}=${[c]}`)
    }
    else {
        console.log("Ban da nhap sai phep tinh")
    }
}
// Gọi hàm
calculate()
