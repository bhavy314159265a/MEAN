app.controller("tabletctrl",function($scope,myfactory){
     var promise = myfactory.getjson1();
  function pass(data){
        $scope.offers=data.data;
    }
    function fail(er){
        $scope.error=er;
    }
    promise.then(pass,fail);
})