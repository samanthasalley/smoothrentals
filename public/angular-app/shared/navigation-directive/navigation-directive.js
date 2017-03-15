angular.module('smoothrentals').directive('simpleNavigation', simpleNavigation);

function simpleNavigation(){
    return{
        restrict: 'E',
        templateUrl: 'angular-app/shared/navigation-directive/navigation-directive.html'
    };
}