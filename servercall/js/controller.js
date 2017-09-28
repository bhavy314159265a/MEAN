app.controller("mycontroller",function($scope,myfactory){
    $scope.dosearch= function(){
//        myfactory.callserver($scope.searchimg,$scope)
        var promise = myfactory.callserver($scope.searchimg);
        promise.then(function(data){
                     $scope.result =data.data.mobiles;
                     },function(){
            $scope.error = er;
        })
    }
})