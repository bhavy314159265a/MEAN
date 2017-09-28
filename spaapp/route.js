app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"home.html"})
    .when("/mobile",{
        templateUrl:"mobile.html",
        controller:"mobilectrl"
    })
    .when("/tablet",{
        templateUrl:"tablet.html",
        controller:"tabletctrl"})
    .when("/shoe",{
        templateUrl:"shoe.html",
        controller:"shoectrl"
    })
    .otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
})