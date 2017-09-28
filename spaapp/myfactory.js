app.factory("myfactory", function ($http, $q) {
    var getJSON= function () {
            // console.log("calling")
            var defered = $q.defer();
            // console.log("Calling GetJSON")
            //http://localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
            $http.get("https://raw.githubusercontent.com/amitsrivastava4all/MeanBatch11to1WEnd/master/Code8/Code/SPA/factory/offers.json").then(function (data) {
                console.log("Inside Success " + data);
                defered.resolve(data);
                //scope.offers=data;
            }, function (er) {
                console.log("Error is ", er);
                //scope.offers = er;
                defered.reject(er);

            });
            return defered.promise;
        }
    var getJSON1=function(){

         console.log("calling")
    var defered = $q.defer();
 console.log("Calling GetJSON")
http://localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
    $http.get("file.json").then(function(data){
        console.log("Inside Success "+data);
        defered.resolve(data);
        //scope.offers=data;
    }, function(er){
        console.log("Error is ",er);
        //scope.offers = er;
        defered.reject(er);

    });
        return defered.promise;
    };
    var getJSON2=function(){

         console.log("calling")
    var defered = $q.defer();
 console.log("Calling GetJSON")
http://localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
    $http.get("file2.json").then(function(data){
        console.log("Inside Success "+data);
        defered.resolve(data);
        //scope.offers=data;
    }, function(er){
        console.log("Error is ",er);
        //scope.offers = er;
        defered.reject(er);

    });
        return defered.promise;
    };

    return {"getjson":getJSON,"getjson1":getJSON1,"getjson2":getJSON2};
   
})

// var getJSON1=function(){
//
//         console.log("calling")
//    var defered = $q.defer();
// console.log("Calling GetJSON")
//http://localhost:63342/AngularJSAprBatch/SPA/factory/offers.json
//    $http.get("https://localhost:56782/MEAN-CODES/Spaapp/file.json").then(function(data){
//        console.log("Inside Success "+data);
//        defered.resolve(data);
//        //scope.offers=data;
//    }, function(er){
//        console.log("Error is ",er);
//        //scope.offers = er;
//        defered.reject(er);
//
//    });
//        return defered.promise;
//    };
//    return {"getjson1":getJSON1};
//});
