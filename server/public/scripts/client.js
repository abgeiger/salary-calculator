console.log('script.js sourced');
var indexCount = -1;

$(document).ready(readyNow);

function readyNow() {
    var indexCount = 0;
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
    var monthlyCost = $annualSalary / 12;
    indexCount++;
    $('input').val('');
    $('table').append(
        '<tr><td>' + $firstName + '</td><td>' + $lasttName + '</td><td>' + $idNumber + '</td><td>' + $jobTitle + 
        '</td><td>' + $annualSalary + '</td><td data-index="' + indexCount + '">' + monthlyCost.toFixed(2) + 
        '</td><td><button id="deleteButton">Delete</button</td></tr>');
    updateMonthlyCost();

}

function deleteRow() {
    $(this).parent().parent().remove();
}

function updateMonthlyCost() {
    $('#monthlyCost').html('Total Monthly Cost: ' + totalMonthlyCost)
}