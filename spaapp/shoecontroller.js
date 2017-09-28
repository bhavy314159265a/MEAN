app.controller("shoectrl",function($scope,myfactory){
     var promise = myfactory.getjson2();
  function pass(data){
        $scope.offers=data.data;
    }
    function fail(er){
        $scope.error=er;
    }
    promise.then(pass,fail);

})   
