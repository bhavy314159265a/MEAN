app.factory("myfactory", function ($http, $q, wsurl) {
    var object = {
        callserver: function (searchimg) {
            var pr = $q.defer();
            $http.get(wsurl).then(success, fail);

            function success(data) {
                pr.resolve(data);
            }
            //scope.result = data.data;            }
            function fail(er) {
                pr.reject(er);
                //                scope.error = er;
            }
            return pr.promise;
        }
    }
    return object;
});