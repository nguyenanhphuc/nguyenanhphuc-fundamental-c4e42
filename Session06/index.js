console.log ("Part1")
// const lap = {
//     HP: 20,
//     DELL: 50,
//     MACBOOK: 12,
//     ASUS: 30
// }
// console.log("Số lượng Macbook trong kho là",lap.MACBOOK)
// // const key = prompt ("Nhập tên hãng máy tính bạn muốn tra , viết in hoa")
// // if (key in lap) {
// //     console.log("Số lượng máy",key,"trong kho là:",lap[key])
// // }
// // else {
// //     console.log ("Trong kho không có hãng máy tính bạn nhập")
// // }

console.log("Part2")
// lap.TOSHIBA = 10
// const lapN = prompt ("Nhập dòng máy bạn muốn thêm")
// const n = Number(prompt ("Nhập số lượng máy của dòng máy mới này"))
// lap[lapN] = n
// console.log(lap)
// lap.DELL += 10
// lap.MACBOOK = 2

console.log("Part3")
// lap.FUJITSU = 15
// lap.ALIENWARE = 5
// let sum = 0
// for (let i in lap) {
//     console.log(`Hãng: ${[i]} - Số lượng: ${lap[i]}`)
//     sum += lap[i]
// }
// console.log(lap)
// console.log(sum)

console.log("Part4")
// const price = {
//     HP: 600,
//     DELL: 650,
//     MACBOOK: 12000,
//     ASUS: 400,
//     ACER: 350,
//     TOSHIBA: 600,
//     FUJITSU: 900,
//     ALIENWARE: 1000
// }
// console.log ("Giá máy ASUS là",price.ASUS)
// // const keyP = prompt("Nhập hãng máy bạn muốn tìm giá, viết in hoa")
// // if (keyP in price) {
// //     console.log ("Giá máy",keyP,"là:",price[keyP])
// // }
// // else {
// //     console.log ("Máy bạn tìm không có trong kho")
// // }

console.log("Part5")
// sumASUS = price.ASUS*5
// const lapX = prompt("Nhập hãng máy bạn mua")
// const numX = Number(prompt("Nhập số lượng máy bạn mua"))
// if (lapX in price) {
//     const priceX = price[lapX]*numX
//     console.log("Tổng số tiền bạn phải trả là",priceX)
// }
// else {
//     console.log("Hãng máy bạn muốn mua không có trong kho")
// }

// if (lapX in lap) {
//     lap[lapX] -= numX
// }
// for (let j in lap) {
//     console.log(`Hãng: ${[j]} - Số lượng: ${lap[j]}`)
// }

console.log("Part6")
// let priceOne = 0
// let sumAll = 0
// for (let k in lap || price) {
//     priceOne = lap[k]*price[k]
//     console.log (`Tổng giá trị máy ${[k]} là ${[priceOne]}`)
//     sumAll +=priceOne
// }
// console.log("Tổng giá trị máy trong kho là", sumAll)

console.log("Part7")
// const character = {
//     Name: "Light",
//     Age: 17,
//     Strength: 8,
//     Defense: 10,
//     HP: 100,
//     Backpack: ["Shield","Bread Loaf"],
//     Gold: 100,
//     Level: 2
// }
// character.Gold += 50
// console.log (character.Gold)
// character.Backpack.push("FlintStone")
// console.log(character.Backpack)
// character.Pocket = ["MonsterDex","Flashlight"]
// console.log(character)

console.log("Part8")
// const skill = {
//     1: {
//         Name: "Tackle",
//         MinLevel: 1,
//         Damage: 5,
//         HitRate: 0.3, },
//     2: {
//         Name: "Quick attack",
//         MinLevel: 2,
//         Damage: 3,
//         HitRate: 0.5 },
//     3: { 
//         Name: "Strong Kick",
//         MinLevel: 4,
//         Damage: 9,
//         HitRate: 0.2 }
// }
// console.log("Các skill bạn có thể dùng:")
// for (let i in skill) {
//     console.log(`${[i]}. ${skill[i].Name}`)
// }
console.log("Part9")
// const s = prompt("Skill bạn chọn là:")
// if (s in skill) {
//     if (character.Level>=skill[s].MinLevel) {
//         let n = Math.random();
//         if (n<skill[s].HitRate) {
//             console.log ("Damage:", skill[s].Damage)
//         }
//         else {
//             console.log("Không trúng mục tiêu")
//         }
//     }
//     else {
//         console.log("Bạn chưa đạt level để thực hiện skill này")
//     }
// }
// else {
//     console.log("Vui lòng chọn lại skill")
// }

console.log("Bai thêm")
let l = true
let p = 0
for (let i=0; l;i++) {
    const a = Math.floor(Math.random()*10)
    const b = Math.floor(Math.random()*10)
    const n = Math.floor(Math.random()*2)
    const c = a + b + n
    console.log (`${[a]}+${[b]}=${[c]}`)
    const ans = prompt("True or False? T/F")
    if ((n==0 && ans=="T") || (n!=0 && ans=="F")) {
        p +=1
        console.log ("True - Point:",p)
    }
    else {
        console.log("False")
        l = false
    }
}
