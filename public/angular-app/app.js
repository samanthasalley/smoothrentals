angular.module('smoothrentals', ['ngRoute']).config(config);
    
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/components/home/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}