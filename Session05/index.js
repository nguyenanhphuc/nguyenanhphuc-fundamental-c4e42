// //Objects
// const person = ["Nam", 99, 170, 60, "Ha Noi", 0, 1];
// //CRUD
// //Creat
// const personObjects = {
//     name: "Nam",
//     yob: 99,
//     city: "Ha Noi",
//     girlFriend: 0,
// }
// console.log (personObjects);

// const phimObjects = {
//     ten: "The Dark Knight",
//     daoDien: "Christopher Nolan",
//     dienVien: ["Heath Ledger", "Christian Bale","Gary Oldman"]
// }
// console.log (phimObjects);

// //Read
// // console.log(phimObjects["ten"])
// // console.log(phimObjects["dienVien"])
// // console.log(phimObjects.ten)
// for (let key in phimObjects) {
//     console.log(key, phimObjects[key])
// }

// //Update
// phimObjects["ten"] = "Ve nha di con"  // key đã tồn tại
// console.log(phimObjects)
// phimObjects.namSanXuat = "2019"  // chưa có key
// console.log(phimObjects)
// const dienVienArray = phimObjects.dienVien
// console.log(dienVienArray[0])

// //Delete
// delete phimObjects.ten
// console.log(phimObjects)

//Bai tap
console.log ("Bai 1")
// const tuDien = {
//     ccmn: "Chuẩn cơm mẹ nấu",
//     smc: "Sáng mắt chưa",
//     yolo: "You only live once",
//     dm: "Định mệnh",
//     cc: "chim cút",
//     c4e: "Code for everyone",
//     vcl: "vo co lo"
// }
// // console.log (tuDien)
// const input = prompt ("Nhập từ bạn cần tra")
// if (input in tuDien) {
//     console.log (tuDien[input])
// }
// else {
//     const k0co = prompt ("Chúng tôi chưa có từ bạn tìm, bạn có muốn thêm từ mới? C = Có, K = Không")
//     if (k0co == "C" || k0co == "c") {
//         const meaning = prompt ("hãy cho chúng tôi biết nghĩa của từ bạn tìm");
//         tuDien[input] = meaning;
//         console.log (tuDien);
//     }
//     else {
//         console.log ("Thank you")
//     }
// }

console.log ("Bai 2")
// const salary = [
//     {
//         name: "Nam",
//         role: "Bồi bàn",
//         hours: 10,
//         salInHour: 5,
//     },
//     {
//         name: "Đức",
//         role: "Trông xe",
//         hours: 15,
//         salInHour: 3,
//     }
// ]
// console.log (salary)
// const newName = prompt ("Nhập tên nhân viên mới");
// const newRole = prompt ("Nhập công việc của nhân viên mới");
// const newHours = prompt ("Nhập số giờ làm việc của nhân viên mới")
// const newSalInHour = prompt ("Nhập hệ số lương của nhân viên mới")
// salary.push(
//     {
//         name : newName,
//         role : newRole,
//         hours : newHours,
//         salInHour : newSalInHour,
//     }
// )
// console.log (salary)
// let sal = 0
// let sumSal = 0
// for (let i=0; i<salary.length; i++) {
//     sal = salary[i].salInHour * salary[i].hours * 30
//     salary[i].monthSal = sal
//     console.log (`${i+1}. Tên: ${salary[i].name} - Công việc: ${salary[i].role} - Lương: ${salary[i].monthSal}`);
//     sumSal += sal
//     console.log("Tổng tiền lương hàng tháng là:",sumSal);
// }

console.log ("Bai 3")
const ques = [
    {
        question: "Nhện có mấy chân?",
        choice: ["1. 2 chân","2. 3 chân","3. 4 chân","4. 6 chân"],
        correct: 3,
    }
]
console.log(`Câu hỏi: ${ques[0].question}
    Chọn 1 trong 4 đáp án sau:
    ${ques[0].choice}`)
const q = prompt ("Đáp án của bạn là")