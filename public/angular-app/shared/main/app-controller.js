angular.module('smoothrentals').controller('AppController', AppController);

function AppController($scope, $window, $location, $route, jwtHelper, userDataFactory){
    
    $scope.title = 'Smooth Rentals';

    $scope.isActiveTab = function(url){
        var currentPath = $location.path().split('/')[1];
        return (url === currentPath ? 'active' : '');
    };

    $scope.isLoggedIn = function(){
        if(AuthFactory.isLoggedIn){
            var token = jwtHelper.decodeToken($window.sessionStorage.token);
            $scope.loggedinUser = token.username;
            return true;
        }else{
            return false;
        }
    };

    $scope.login = function(un,pw){
        if(un && pw){
            var user = {
                username: un,
                password: pw
            };
            
            userDataFactory.getUser(user).then(function(response){
                if(response && response.data && response.data.success){
                    $window.sessionStorage.token = response.data.token;
                    AuthFactory.isLoggedIn = true;
                    var token = $window.sessionStorage.token;
                    var decodedToken = jwtHelper.decodeToken(token);
                    $scope.loggedinUser = response.data.user;
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    };
    
    $scope.logout = function(){
        AuthFactory.isLoggedIn = false;
        $scope.loggedinUser = null;
        delete $window.sessionStorage.token;
        $route.reload();
    };

    $scope.isLoggedIn();
}