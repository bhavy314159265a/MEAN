app.controller("mobilectrl",function($scope,myfactory){
     var promise = myfactory.getjson();
  function pass(data){
        $scope.offers=data.data;
    }
    function fail(er){
        $scope.error=er;
    }
    promise.then(pass,fail);

})   
