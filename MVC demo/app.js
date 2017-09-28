// this is called module
const app = angular.module("greetapp",[]);
// how to define module
// angular.module("modulename",[dependent module name])
//model-contains logic or server communication coe to build a model in angularjs
// we need to use factoruy or service
/* ng-app="greetapp"from here we bootstrap the angular by using ng app and along we are loading our module in this case it is greet app*/
//factory always return an object
/*module name.factory("factoryname",function(){
var object ={};
return object
})
factory contains logic and lof=gic we write inside the fuucntion and we wrap all the function into a single object and we retrun the objec to the controller, so controller can call the factory methods by usng the returned object*/