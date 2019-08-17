console.log("Bai 1");
// const daySo = ["5","1","8","92","-1","30"]
// const n = prompt ("Enter a number")
// if (daySo.includes(n) == true) {
//    const index = daySo.indexOf(n)
//        console.log ("Foundn position", index)
// }
// else {
//     console.log ("Not found in our list")
// }

console.log("Bai 2");
// const daySo = [5,1,8,92,-1,30]
// let Sum = 0
// for (i=0; i<daySo.length; i++) {
//     Sum += daySo[i]
// }
// console.log (Sum)

console.log("Bai 3");
// const nhapSo = prompt ("Nhap day so, cac so cach nhau boi dau cach")
// const daySo = nhapSo.split(" ")
// console.log (daySo)
// let sum = 0
// for (i=0; i<daySo.length; i++) {
//     sum += Number(daySo[i])
// }
// console.log ("Sum of all entered numbers:",sum)

console.log("Bai 4");
// const daySo = [5, 1, 8, 92, 7, 30]
// const soChan = []
// for (let i = 0; i < daySo.length; i++) {
//     let res = Math.floor(daySo[i] % 2);
//     if (res == 0) {
//         soChan.push(daySo[i]);
//     }
// }
// console.log(soChan)

console.log ("Bai 5")
// const nhapSo = prompt ("Nhap day so cach nhau boi day ,")
// const daySo = nhapSo.split(",")
// console.log(daySo)
// const soChan = []
// for (let i=0; i<daySo.length; i++) {
//     let res = Math.floor(daySo[i] %2);
//     if (res == 0) {
//         soChan.push(daySo[i]);
//     }
// }
// console.log (soChan)

console.log ("Bai 6+7+8+9+10")
// const tenQuan = ["ST", "BĐ", "BTL", "CG", "ĐĐ", "HBT"]
// const dansoQuan = [150300,247100,333300,266800,420900,318000]
// console.log (tenQuan,dansoQuan)

// let max = dansoQuan[0];
// for (let i=0; i<dansoQuan.length; i++) {
//     if (max<dansoQuan[i]) {
//     max = dansoQuan[i]
//     }
// }
// console.log (max)
// let min = dansoQuan[0]
// for (let i=0; i<dansoQuan.length; i++) {
//     if (min>dansoQuan[i]) {
//         min = dansoQuan[i]
//     }
// }
// console.log (min)

// const indexMax = dansoQuan.indexOf(max)
// console.log ("Quan dong dan nhat la", tenQuan[indexMax])
// const indexMin = dansoQuan.indexOf(min)
// console.log ("Quan it dan nhat la", tenQuan[indexMin])

// const dientichQuan = [117.43, 9.224, 43.35, 12.04, 9.96, 10.09]
// const matdoQuan = []
// for (let i=0; i<dansoQuan.length; i++) {
//     let danso = dansoQuan[i]/dientichQuan[i]
//     matdoQuan.push(danso)
// }
// console.log (matdoQuan)

// let sumMatdo = 0
// let sumQuan = 0
// for (let i=0; i<matdoQuan.length; i++) {
//     sumMatdo += matdoQuan[i]
//     sumQuan += 1
// }
// const matdoTB = sumMatdo/sumQuan
// console.log (sumMatdo,sumQuan,matdoTB);

console.log ("Bai 11+12+13")
// const highScore = [45, 67, 56, 78]
// console.log (highScore)
// const inputScore = prompt("Enter your score")
// highScore.push(Number(inputScore))
// console.log ("High scores", highScore)

console.log ("Bai 14")
const highScore = [45, 67, 56, 78]
// const sortHighScore = []       //Cách 1
// let length = highScore.length
// for (let j=0; length!=0; j++) {
//     let maxScore = highScore[0]
//     for (let i=0; i < length; i++) {
//         if (maxScore<highScore[i]) {
//             maxScore = highScore[i]
//         }
//     console.log("max", maxScore);  
//     }
// sortHighScore.push(maxScore)
// highScore.splice(highScore.indexOf(maxScore), 1)
// length -= 1
// }   
// console.log (sortHighScore)   // hết cách 1

let box1 = 0                     
for (let j=0; j<highScore.length; j++) {
    for (let i=0; i<highScore.length; i++) {
        if (highScore[i]<highScore[i+1]) {
        let box1 = highScore[i]
        highScore[i] = highScore[i+1]
        highScore[i+1] = box1
        }
    }
}
console.log (highScore)        


const inputScore1 = prompt("Enter your score")
highScore.push(Number(inputScore1))
let box2 = 0                    
for (let j=0; j<highScore.length; j++) {
    for (let i=0; i<highScore.length; i++) {
        if (highScore[i]<highScore[i+1]) {
        let box2 = highScore[i]
        highScore[i] = highScore[i+1]
        highScore[i+1] = box2
        }
    }
}
console.log (highScore)         

console.log ("Bai 15")
const inputScore2 = prompt ("Enter your score")
highScore.push(Number(inputScore2))
let box3 = 0
for (let j=0; j<highScore.length; j++) {
    for (let i=0; i<highScore.length; i++) {
        if (highScore[i]<highScore[i+1]) {
            let box3 = highScore[i]
            highScore [i] = highScore [i+1]
            highScore [i+1] = box3
        }
    }
}
console.log (highScore [0], highScore [1], highScore [2], highScore [3], highScore [4])




