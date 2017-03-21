angular.module('smoothrentals', ['ngRoute']).config(config);
    
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/components/home/home.html'
        })
        .when('/listings', {
            templateUrl: 'angular-app/components/listings/listings-display.html'
        })
        .when('/listings/new', {
            templateUrl: 'angular-app/components/listings/item-new.html'
        })
        .when('/listings/:listId', {
            templateUrl: 'angular-app/components/listings/item-display.html'
        })
        .when('/listings/:listId/edit', {
            templateUrl: 'angular-app/components/listings/item-edit.html'
        })
        .when('/listings/:listId/apply', {
            templateUrl: 'angular-app/components/applications/apply.html'
        })
        .when('/listings/:listId/apply/:appId', {
            templateUrl: 'angular-app/components/applications/application-display.html'
        })
        .when('/listings/:listId/comment/:commentId', {
            templateUrl: 'angular-app/components/comments/comment-display.html'
        })
        .when('/login', {
            templateUrl: 'angular-app/components/users/login.html'
        })
        .when('/register', {
            templateUrl: 'angular-app/components/users/register.html',
            controller: RegisterController,
            controllerAs: 'vm'
        })
        .when('/profile', {
            templateUrl: 'angular-app/components/users/profile-display.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}