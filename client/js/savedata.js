/**
 * Created by nogalavi on 07/05/2016.
 */

var savedDay;
var savedMonth;
var savedYear;
var savedDate;

function submitDateListener() {
    savedDay = document.getElementById("day").value;
    savedMonth = document.getElementById("month").value;
    savedYear =  document.getElementById("year").value;
    savedDate = savedDay + '.' + savedMonth + '.' + savedYear;
    localStorage.setItem("savedDate", savedDate);

}