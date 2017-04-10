angular.module('smoothrentals').factory('userDataFactory', userDataFactory);

function userDataFactory($http){
    return {
        registerUser: registerUser,
        getUser: getUser,
        updatePassword: updatePassword
    };
    
    function registerUser(user){
        return $http.post('/api/register', user).then(complete).catch(failed);
    }
    
    function getUser(user){
        return $http.post('/api/users', user).then(complete).catch(failed);
    }
    
    function updatePassword(user){
        return $http.post('/api/users/update', user).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(err){
        console.log(err.statusText);
    }
}