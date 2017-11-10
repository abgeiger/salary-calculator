console.log('script.js sourced')
var monthlyCosts = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery sourced');
    $('button').on('click', submitButtonClick);
}

function submitButtonClick() {
    var $firstName = $('#firstNameInput').val();
    var $lasttName = $('#lastNameInput').val();
    var $idNumber = $('#idNumberInput').val();
    var $jobTitle = $('#jobTitleInput').val();
    var $annualSalary = $('#annualSalaryInput').val();
    monthlyCosts += $annualSalary / 12;
    $('#messageDiv').append('<p>First Name: ' + $firstName + '</p>');
    $('#messageDiv').append('<p>Last Name: ' + $lasttName + '</p>');
    $('#messageDiv').append('<p>ID Number: ' + $idNumber + '</p>');
    $('#messageDiv').append('<p>Job Title: ' + $jobTitle + '</p>');
    $('#messageDiv').append('<p>Annual Salary: ' + $annualSalary + '</p>');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
    $('#messageDiv').append('<p>Current Monthly Costs: ' + monthlyCosts + '</p>');    
}