app.controller("greetctrl",function($scope,greetfactory){
    $scope.sayHello = function(){
        var firstname = $scope.fname;
        var lastname = $scope.lname;
        var result = greetfactory.initCap(firstname)+" "+greetfactory.initCap(lastname);
        $scope.fullname = result;
    }
})
/*controller -> it is a glue btw view and model
controller role;
1.take data from view
2 give it to factory(model)
3 get the processed result from mode and give it to view
$scope is a pedefined service
it is glue btw controller and view
$scopr is for js term is object.*/