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
    $('input').val('');
    $('table').append(
        '<tr><td>' + $firstName + '</td><td>' + $lasttName + '</td><td>' + $idNumber + '</td><td>' + $jobTitle + 
        '</td><td>' + $annualSalary + '</td><td>' + monthlyCosts.toFixed(2) + 
        '</td><td><button id="deleteButton">Delete</button</td></tr>');
}

function deleteRow() {
    $(this).parent().parent().remove();
}