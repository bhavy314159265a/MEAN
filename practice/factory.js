app.factory("myfac", function ($http, $q){
    var object = function(){
        var defered = $q.defer();
        $http.get("https://raw.githubusercontent.com/amitsrivastava4all/MeanBatch11to1WEnd/master/Code8/Code/SPA/factory/offers.json").then(function(data){
            defered.resolve(data);
            console.log(data)
        },function(er){
            defered.reject(er);
            console.log(er)
        })
        return defered.promise;
    }
    return object;
}