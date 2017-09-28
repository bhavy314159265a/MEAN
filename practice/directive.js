var app = angular.module("myapp",[]);
app.directive("tcsHeader",function(){
	return {
		template :"<h1>This is the Header Directive</h1>",
		restrict :"E"
	}
});
app.controller