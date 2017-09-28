//ECMA5
/*function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}*/

//ECMA6
class employee{
	constructor(id , name, salary){
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
}
var empOperations = {
	empArr:[],
	employeeId : 1000,
	getEmployeeId:()=>empOperations.employeeId,
	addNewEmp:function(id, name,salary){
		
		var empObject = new employee(this.employeeId,name,salary);
		this.empArr.push(empObject);
		this.employeeId++;
	},
	deleteEmp:function(){
		
	},
	searchEmp:function(){
		
	}
}
//we can change this on runtime by the use of apply
/*for adding a new record 
1.create  butt.
2.regiter event on button.

3.collect inpt from bttn nd tore in variabke so need a function
4 need model to create an objt A)function constructor b) class
to creatw objct we delegate in into model
model is resposnsible for creating object and dtoring in array.*/
//how to search and sort in arraay, hpw to map(cube,square etc )  (filter and sort array)
