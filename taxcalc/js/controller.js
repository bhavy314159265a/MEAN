app.controller("myctrl",function($scope,myfac){
    $scope.nsCal=function(){
        $scope.ns = myfac.cal($scope.salary,$scope.da,$scope.ta,$scope.pf);
        console.log($scope.ns );
    }
})