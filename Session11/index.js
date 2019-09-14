// Bất đồng bộ trong JS
// Callback: hàm đợi.
// Callback hell: callback bị lồng nhiều tầng làm code trở nên khó khăn

// let square = document.getElementById('square');
// function raw (w,h,c,callback) {
//     let height = h;
//     let width = w;
//     let color = c;
//     callback (height,width,color);
// }

// function draw (height,width,color) {
//     square.style.height = height;
//     square.style.width = width;
//     square.style.backgroundColor = color;
// }

// raw ("30px","30px","red",draw);

// function setupEnviroment (width, height, color, callback) {
//     let shape = {
//         width: width,
//         height: height,
//         color: color,
//     }
//     window.drawSquareSetting = shape
//     callback ()
// }
// setupEnviroment (100, 100, 'red', () => {
//     let square = document.getElementById('square');
//     square.style.height = drawSquareSetting + "px"
//     square.style.width = drawSquareSetting + "px"
//     square.style.backgroundColor = drawSquareSetting.color;
// })

fetch ('http://dummy.restapiexample.com/api/v1/employees')
.then(res => {
    return res.json();
  })
  .then(data => {
    console.log (data);
    return data;
  })
.then(insertDataTable);

function insertDataTable (data) {
    let tableBody = document.getElementById('table-body-employee');
    // console.log (tableBody);
    let body = '';
    data.forEach(employeeInfo => {
        let id = employeeInfo.id;
        let name = employeeInfo.employee_name;
        let salary = employeeInfo.employee_salary;
        let age = employeeInfo.employee_age;
        body += `<tr>
            <td>
                <a href="./employee.html?id=${id}">${id}
            </td>
            <td>${name}</td>
            <td>${salary}</td>
            <td>${age}</td>
        </tr>`;
    });
    tableBody.innerHTML = body;
}
