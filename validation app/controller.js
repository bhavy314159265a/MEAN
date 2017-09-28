app.controller("myctrl", function ($scope, myfactory) {
    $scope.call = function () {
       // console.log("caal me")
        var pass = $scope.Pass;
        if (pass.length <= 12) {
            $scope.msg = "password is weak";
        } else {
            $scope.msg = " password is strong"
        }
    }
    $scope.country = function () {
        //console.log("call country")
        var promise=myfactory.call();
        promise.then(function (data) {
            console.log("data is ", data.data)
            $scope.display = data.data;
        }, function (er) {
            $scope.error = er;
        })
    }
   
    $scope.city=function(){
        console.log("calling")
        var cntry=$scope.thi;
        if(cntry=="India"){
            console.log("calling",cntry)
            var prom=myfactory.call2();
            prom.then(function(data){
                $scope.display2=data.data;
            },function (er){
                $scope.error=er;
            })
        }
        else if(cntry=="USA"){
            console.log("calling",cntry)
            var prom=myfactory.call3();
            prom.then(function(data){
                $scope.display2=data.data;
            },function (er){
                $scope.error=er;
            })
    }
        else if(cntry=="UK"){
            console.log("calling",cntry)
            var prom=myfactory.call4();
            prom.then(function(data){
                $scope.display2=data.data;
            },function (er){
                $scope.error=er;
            })
    }
    else if(cntry=="Australia"){
            console.log("calling",cntry)
            var prom=myfactory.call5();
            prom.then(function(data){
                $scope.display2=data.data;
            },function (er){
                $scope.error=er;
            })
    }
        else if(cntry=="China"){
            console.log("calling",cntry)
            var prom=myfactory.call6();
            prom.then(function(data){
                $scope.display2=data.data;
                console.log(data.data)
            },function (er){
                $scope.error=er;
            })
    }
    }
    function hobbies (){
        var hob = myfactory.call7();
        hob.then(function(data){
            $scope.display3 = data.data.hobbies;
            console.log(data.data.hobbies);
        },function(er){
            $scope.error=er;
        })
    }
    hobbies();
    $scope.submitForm=function(form){
        console.log("call validate")
        if($scope.form.$valid){
            alert("form submit")
        }
        else alert("invalid form")
    }
})