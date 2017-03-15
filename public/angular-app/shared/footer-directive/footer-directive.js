angular.module('smoothrentals').directive('simpleFooter', simpleFooter);

function simpleFooter(){
    return{
        restrict: 'E',
        templateUrl: 'angular-app/shared/footer-directive/footer-directive.html'
    };
}