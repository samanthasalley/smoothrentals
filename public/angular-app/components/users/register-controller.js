angular.module('smoothrentals').controller('RegisterController', RegisterController);

function RegisterController(userDataFactory){
    var vm = this;
    vm.register = function(){
        var user = {
            firstName: vm.firstName,
            lastName: vm.lastName,
            email: vm.email,
            username: vm.username,
            password: vm.password
        };

        vm.form = vm.registerForm;
        
        if(vm.form.$invalid){
            vm.error = true;
            return false;
        }else{
            if(vm.password !== vm.passwordRepeat){
                var errMsg = 'Please enter matching passwords';
                vm.error = true;
                vm.form.password.errorMsg = errMsg;
                vm.form.passwordRepeat.errorMsg = errMsg;
                return false;
            }else{
                userDataFactory.registerUser(user).then(function(response){
                    console.log(response.status);
                    if(response.status === 201){
                        vm.message = 'Successful registration, please login.';
                        vm.error = '';
                    }
                }).catch(function(err){
                    console.log(err);
                    vm.error = 'There was an error.';
                });
            }
        }
    };
}