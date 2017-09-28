app.controller("salarycontroller",function($scope,salaryfactory){
    
    $scope.calculate= function(){
        var sal=$scope.salary;
        salaryfactory.compute(sal)
    $scope.hra=salaryfactory.hra;
    $scope.da=salaryfactory.da;
         $scope.ta=salaryfactory.ta;
         $scope.pf=salaryfactory.pf;
         $scope.ns=salaryfactory.ns;
         $scope.tax=salaryfactory.tax;
        $scope.grade=salaryfactory.grade;
        
   // console.log("salary is ",$scope.salary)
    }
    $scope.clear=function(){
        $scope.del=null
    }
    $scope.add = function () {
        var obj={
            sal:$scope.salary,
            hra:$scope.hra,
            da:salaryfactory.da,
            ta:salaryfactory.ta,
            pf:salaryfactory.pf,
            tax:salaryfactory.tax,
            ns:salaryfactory.ns,
            grade:salaryfactory.grade,
        }
        salaryfactory.count++;
        $scope.count = "No of records added = " + salaryfactory.count;
        salaryfactory.salArr.push(obj);
        $scope.salArr=salaryfactory.salArr;
    }
    
    
    
    
})
  //  var sal=$scope.salary;
//    $scope.hra=salaryfactory["compute"](sal);
//    console.log("salary is ",$scope.salary)
//})