angular.module('smoothrentals').controller('ProfileController', ProfileController);

function ProfileController($scope, $route, $window, $location, $uibModal, jwtHelper, userDataFactory){
    var vm = this;

    vm.openModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'angular-app/components/users/credential-verification.html',
            windowClass: 'cred-verification-modal'
        });
        
        modalInstance.result.then(
            function handleResolve(response){
                console.log('modal closed', response);
                var user = {};
                    user.username = response.currentUsername;
                    user.password = response.currentPassword;
                console.log('user', user);
            },
            function handleReject(err){
                console.log('error: ', err);
            }
        );
    };
}