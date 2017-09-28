app.controller("mycontroller", function ($scope, myfactory) {

    console.log("inside the controller");
    $scope.dooperation = function (operator) {
        if (operator == '+') {
            $scope.result = myfactory.add($scope.firstno, $scope.secondno);
            $scope.myclick = 1;
            $scope.myclass = "red";
        } else
        if (operator == '-') {
            $scope.result = myfactory.subtract($scope.firstno, $scope.secondno);
            $scope.myclick = 2;
            $scope.myclass = "blue";
        } else
        if (operator == '*') {
            $scope.result = myfactory.multiply($scope.firstno, $scope.secondno);
            $scope.myclick = 3;
            $scope.myclass = "green";
        } else
        if (operator == '/') {
            $scope.result = myfactory.divide($scope.firstno, $scope.secondno);
            $scope.myclick = 4;
            $scope.myclass = "yellow";
        }
    }
})
