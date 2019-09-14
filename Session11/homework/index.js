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
        let image = employeeInfo.employee_profile_image;
        body += `<tr>
            <td>
                <a href="./employee.html?id=${id}" target='#'>${id}
            </td>
            <td>${name}</td>
            <td>${salary}</td>
            <td>${age}</td>
            <td>${image}</td>
        </tr>`;
    });
    tableBody.innerHTML = body;
}
