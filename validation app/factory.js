app.factory("myfactory", function ($http, $q) {

    var CALL = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("countries1.json").then(success, fail)

        function success(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function fail(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var CALL2 = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("city.json").then(good, bad)

        function good(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function bad(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var CALL3 = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("city2.json").then(good, bad)

        function good(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function bad(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var CALL4 = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("city3.json").then(good, bad)

        function good(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function bad(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var CALL5 = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("city4.json").then(good, bad)

        function good(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function bad(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var CALL6 = function () {
        console.log("calling promise")
        var def = $q.defer();
        $http.get("city5.json").then(good, bad)

        function good(data) {
            console.log("inside success")
            def.resolve(data);
            console.log("data is resolved", data)
        }

        function bad(er) {
            console.log("Error")
            def.reject(er);
        }
        //console.log("Exit server call");
        return def.promise;
    }
    var callhobbies = function () {
        console.log("calling callhobbies")
        var def = $q.defer();
        $http.get("hobbies.json").then(function (data) {
            console.log('calling sucess')
            def.resolve(data);
        }, function (er) {
            console.log('calling fail')
            def.reject(er);
        })
        return def.promise;
    }


    return {
        "call": CALL,
        "call2": CALL2,
        "call3": CALL3,
        "call4": CALL4,
        "call5": CALL5,
        "call6": CALL6,
        "call7":callhobbies
    };
})
