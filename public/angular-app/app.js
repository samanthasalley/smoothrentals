angular.module('smoothrentals', ['ngRoute', 'angular-jwt', 'ui.bootstrap']).config(config).run(run);
    
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/components/home/home.html',
            access: {
                restricted: false
            }
        })
        .when('/listings', {
            templateUrl: 'angular-app/components/listings/listings-display.html',
            access: {
                restricted: false
            }
        })
        .when('/listings/new', {
            templateUrl: 'angular-app/components/listings/item-new.html',
            access: {
                restricted: true
            }
        })
        .when('/listings/:listId', {
            templateUrl: 'angular-app/components/listings/item-display.html',
            access: {
                restricted: false
            }
        })
        .when('/listings/:listId/edit', {
            templateUrl: 'angular-app/components/listings/item-edit.html',
            access: {
                restricted: true
            }
        })
        .when('/listings/:listId/apply', {
            templateUrl: 'angular-app/components/applications/apply.html',
            access: {
                restricted: true
            }
        })
        .when('/listings/:listId/apply/:appId', {
            templateUrl: 'angular-app/components/applications/application-display.html',
            access: {
                restricted: true
            }
        })
        .when('/listings/:listId/comment/:commentId', {
            templateUrl: 'angular-app/components/comments/comment-display.html',
            access: {
                restricted: true
            }
        })
        .when('/login', {
            templateUrl: 'angular-app/components/users/login.html',
            access: {
                restricted: false
            }
        })
        .when('/register', {
            templateUrl: 'angular-app/components/users/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/profile', {
            templateUrl: 'angular-app/components/users/profile-display.html',
            controller: ProfileController,
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}

function run($rootScope, $location, $window, AuthFactory){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
        if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn){
            console.log('prevent path');
            event.preventDefault();
            $location.path('/login');
        }
    });
}