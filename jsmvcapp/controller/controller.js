window.addEventListener("load", bindevents)

function bindevents() {
    showNoOfRecords();
    document.getElementById("add").addEventListener("click", addNewRecord);
    document.getElementById("empid").innerHTML = empOperations.getEmployeeId();
}

function addNewRecord() {
    var empId = document.getElementById("empid").value;
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    empOperations.addNewEmp(empId, name, salary);
    printRecord(empOperations.empArr[empOperations.empArr.length - 1]);
    showNoOfRecords();
    console.log("Emp Id is ",empOperations.getEmployeeId());
    document.getElementById("empid").innerHTML = empOperations.getEmployeeId();
    clear();
}

function clear() {
    var e = document.getElementsByClassName("clearall")
    Array.prototype.forEach.call(e, (w) => w.value = "")
}

function showNoOfRecords() {
    document.getElementById("noofrecords").innerHTML = empOperations.empArr.length;
}

function prepareDelete(id) {

    var img = document.createElement("img");
    img.src = "delete.png";
    img.setAttribute("empid", id);
    img.addEventListener("click", readyForDelete);
    return img;
}

function readyForDelete(amit) {
    alert("delete is calling.." + amit.srcElement.getAttribute("empid"));
}

function printRecord(empObject) {
    var tbody = document.getElementById("empdata");
    var tr = tbody.insertRow();
    var index = 0;
    for (key in empObject) {
        tr.insertCell(index).innerHTML = empObject[key];
        index++;
    }
    var img = prepareDelete(empObject.id);
    tr.insertCell(index).appendChild(img);
}
