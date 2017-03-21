angular.module('smoothrentals').controller('LoginController', LoginController);

function LoginController($route, userDataFactory){
    var vm = this;

    vm.isLoggedIn = function(){
        if(AuthFactory.isLoggedIn){
            var token = jwtHelper.decodeToken($window.sessionStorage.token);
            vm.loggedinUser = token.username;
            return true;
        }else{
            return false;
        }
    };
    
    vm.login = function(){
        if(vm.username && vm.password){
            var user = {
                username: vm.username,
                password: vm.password
            };
            
            userDataFactory.loginUser(user).then(function(response){
                if(response.data.success){
                    $window.sessionStorage.token = response.data.token;
                    AuthFactory.isLoggedIn = true;
                    var token = $window.sessionStorage.token;
                    var decodedToken = jwtHelper.decodeToken(token);
                    vm.loggedinUser = decodedToken.username;
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    };
    
    vm.logout = function(){
        AuthFactory.isLoggedIn = false;
        delete $window.sessionStorage.token;
        $location.path('/');
    };
}