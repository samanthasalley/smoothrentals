angular.module('smoothrentals').controller('AppController', AppController);

function AppController($scope, $location){
    
    $scope.title = 'Smooth Rentals';

    // $scope.isActiveTab = function(url){
    //     var currentPath = $location.path().split('/')[1];
    //     return (url === currentPath ? 'active' : '');
    // };
}