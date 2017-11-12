console.log('script.js sourced')
var monthlyCosts = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery sourced');
    $('#submitButton').on('click', submitButtonClick);
    $('tbody').on('click', '#deleteButton', deleteRow)
}

function submitButtonClick() {
    var $firstName = $('#firstNameInput').val();
    var $lasttName = $('#lastNameInput').val();
    var $idNumber = $('#idNumberInput').val();
    var $jobTitle = $('#jobTitleInput').val();
    var $annualSalary = $('#annualSalaryInput').val();
    monthlyCosts += $annualSalary / 12;
    // $('#messageDiv').append('<p>First Name: ' + $firstName + '</p>');
    // $('#messageDiv').append('<p>Last Name: ' + $lasttName + '</p>');
    // $('#messageDiv').append('<p>ID Number: ' + $idNumber + '</p>');
    // $('#messageDiv').append('<p>Job Title: ' + $jobTitle + '</p>');
    // $('#messageDiv').append('<p>Annual Salary: $' + $annualSalary + '</p>');
    // $('#firstNameInput').val('');
    // $('#lastNameInput').val('');
    // $('#idNumberInput').val('');
    // $('#jobTitleInput').val('');
    // $('#annualSalaryInput').val('');
    $('input').val('');
    // $('#messageDiv').append('<p class="monthlyCostsP">Current Monthly Costs: $' + monthlyCosts.toFixed(2) + '</p><br>');
    // var array = [];
    // array.push($firstName);
    // array.push($lasttName);
    // array.push($idNumber);
    // array.push($jobTitle);
    // array.push($annualSalary);
    // array.push(monthlyCosts.toFixed(2));
    // for (var i = 0; i < array.length; i++) {
        
    // }
    $('table').append(
        '<tr><td>' + $firstName + '</td><td>' + $lasttName + '</td><td>' + $idNumber + '</td><td>' + $jobTitle + 
        '</td><td>' + $annualSalary + '</td><td>' + monthlyCosts.toFixed(2) + 
        '</td><td><button id="deleteButton">Delete</button</td></tr>');
    
}

function deleteRow() {
    $(this).parent().parent().remove();
}