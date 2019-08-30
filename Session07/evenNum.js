// function evenNum (numList) {
//     let evenNum =[]
//     for (let i=0; i<numList.length; i++) {
//         if (numList[i]%2==0) {
//             evenNum.push(numList[i])
//         }
//     }
//     return evenNum
// }
// const input = prompt ("Enter your number")
// const n = evenNum (input)
// console.log(n)

//Cách khai bao hàm khác:
//const evenNum = (numList) => {} //arrow function

const hocBai = (callback) => {
    console.log("dang hoc bai")
    console.log("...")
    console.log("hoc xong")
    callback()
}

const diNgu = () => {
    console.log("di ngu")
}

const diChoi = () => {
    console.log("di choi")
}

const meGoi = () => {
    hocBai(diNgu)
}

setTimeout(meGoi, 4000)

const array = [1,2,3,4,56,7,89,100]
array.forEach((el, index) => {
    console.log(index,el);
})

// array.map
// array.filter
// array.reduce